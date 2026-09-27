"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FiMinus, FiPlus } from "react-icons/fi";
import { BloodProfile } from "@/types/profile";
import {
    EMPTY,
    BLOOD_TYPES,
    GENDERS,
    ALLERGIES,
    ILLNESSES,
    MEDICATIONS,
} from "@/constants/profile";
import { Stepper } from "../ui/stepper";
import { CheckboxGroup } from "../ui/checkbox-group";

export function BloodProfileForm({
    initial,
    onSave,
}: {
    initial?: Partial<BloodProfile>;
    onSave?: (data: BloodProfile) => void | Promise<void>;
}) {
    const [editing, setEditing] = useState(!initial);
    const [data, setData] = useState<BloodProfile>({ ...EMPTY, ...initial });
    const [saving, setSaving] = useState(false);

    const update = (key: keyof BloodProfile, value: string) =>
        setData((d) => ({ ...d, [key]: value }));

    const handleSave = async () => {
        setSaving(true);
        try {
            await onSave?.(data);
            setEditing(false);
        } finally {
            setSaving(false);
        }
    };

    const handleCancel = () => {
        setData({ ...EMPTY, ...initial });
        setEditing(false);
    };

    return (
        <section className="pt-24 sm:px-10 lg:pt-20">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
                        Blood &amp; Body Profile
                    </h1>
                    <p className="text-sm text-neutral-500">
                        Used to match you with the right donation slots.
                    </p>
                </div>

                {!editing ? (
                    <Button onClick={() => setEditing(true)}>Edit</Button>
                ) : (
                    <div className="flex gap-2">
                        {initial && (
                            <Button onClick={handleCancel} disabled={saving}>
                                Cancel
                            </Button>
                        )}
                        <Button onClick={handleSave} disabled={saving}>
                            {saving ? "Saving…" : "Save"}
                        </Button>
                    </div>
                )}
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                <Field
                    label="Blood type"
                    editing={editing}
                    value={data.bloodType}
                >
                    <Select
                        value={data.bloodType}
                        onChange={(v) => update("bloodType", v)}
                        options={BLOOD_TYPES}
                        placeholder="Select blood type"
                    />
                </Field>

                <Field
                    label="Date of birth"
                    editing={editing}
                    value={data.dateOfBirth}
                >
                    <Input
                        type="date"
                        value={data.dateOfBirth}
                        onChange={(v) => update("dateOfBirth", v)}
                    />
                </Field>

                <Field label="Gender" editing={editing} value={data.gender}>
                    <Select
                        value={data.gender}
                        onChange={(v) => update("gender", v)}
                        options={GENDERS}
                        placeholder="Select gender"
                    />
                </Field>

                <Field
                    label="Last donation"
                    editing={editing}
                    value={data.lastDonation}
                >
                    <Input
                        type="date"
                        value={data.lastDonation}
                        onChange={(v) => update("lastDonation", v)}
                    />
                </Field>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field
                    label="Height"
                    editing={editing}
                    value={data.heightCm ? `${data.heightCm} cm` : ""}
                >
                    <Stepper
                        value={data.heightCm}
                        onChange={(v) => update("heightCm", v)}
                        min={100}
                        max={250}
                        step={1}
                        unit="cm"
                    />
                </Field>

                <Field
                    label="Weight"
                    editing={editing}
                    value={data.weightKg ? `${data.weightKg} kg` : ""}
                >
                    <Stepper
                        value={data.weightKg}
                        onChange={(v) => update("weightKg", v)}
                        min={30}
                        max={200}
                        step={1}
                        unit="kg"
                    />
                </Field>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6">
                <Field
                    label="Chronic conditions"
                    editing={editing}
                    value={
                        data.chronicConditions.length > 0
                            ? data.chronicConditions.join(", ")
                            : "—"
                    }
                >
                    <CheckboxGroup
                        options={ILLNESSES}
                        selected={data.chronicConditions}
                        onChange={(v) =>
                            setData((d) => ({ ...d, chronicConditions: v }))
                        }
                        columns={4}
                    />
                </Field>

                <Field
                    label="Current medications"
                    editing={editing}
                    value={
                        data.medications.length > 0
                            ? data.medications.join(", ")
                            : "—"
                    }
                >
                    <CheckboxGroup
                        options={MEDICATIONS}
                        selected={data.medications}
                        onChange={(v) =>
                            setData((d) => ({ ...d, medications: v }))
                        }
                        columns={4}
                    />
                </Field>

                <Field
                    label="Allergies"
                    editing={editing}
                    value={
                        data.allergies.length > 0
                            ? data.allergies.join(", ")
                            : "—"
                    }
                >
                    <CheckboxGroup
                        options={ALLERGIES}
                        selected={data.allergies}
                        onChange={(v) =>
                            setData((d) => ({ ...d, allergies: v }))
                        }
                        columns={4}
                    />
                </Field>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field
                    label="Emergency contact name"
                    editing={editing}
                    value={data.emergencyContactName}
                >
                    <Input
                        value={data.emergencyContactName}
                        onChange={(v) => update("emergencyContactName", v)}
                        placeholder="Full name"
                    />
                </Field>

                <Field
                    label="Emergency contact phone"
                    editing={editing}
                    value={data.emergencyContactPhone}
                >
                    <Input
                        type="tel"
                        value={data.emergencyContactPhone}
                        onChange={(v) => update("emergencyContactPhone", v)}
                        placeholder="+91 …"
                    />
                </Field>
            </div>
        </section>
    );
}

function Field({
    label,
    editing,
    value,
    children,
}: {
    label: string;
    editing: boolean;
    value?: string | null;
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-2 rounded-lg border border-neutral-200 dark:border-neutral-800 px-4 py-3">
            <span className="text-xs uppercase tracking-wide text-neutral-500">
                {label}
            </span>
            {editing ? (
                children
            ) : (
                <span className="whitespace-pre-wrap text-sm font-medium">
                    {value || "—"}
                </span>
            )}
        </div>
    );
}

function Input({
    value,
    onChange,
    type = "text",
    placeholder,
}: {
    value: string;
    onChange: (v: string) => void;
    type?: string;
    placeholder?: string;
}) {
    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-neutral-400"
        />
    );
}

function Select({
    value,
    onChange,
    options,
    placeholder,
}: {
    value: string;
    onChange: (v: string) => void;
    options: string[];
    placeholder?: string;
}) {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-transparent text-sm font-medium outline-none"
        >
            <option value="">{placeholder ?? "Select…"}</option>
            {options.map((o) => (
                <option key={o} value={o}>
                    {o}
                </option>
            ))}
        </select>
    );
}
