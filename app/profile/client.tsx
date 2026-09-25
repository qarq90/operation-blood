"use client";

import { LuLogOut } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { SignOutButton, useUser } from "@clerk/nextjs";

export default function Client() {
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <p className="text-neutral-500">Loading…</p>
            </main>
        );
    }

    if (!isSignedIn || !user) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <p className="text-neutral-500">Not signed in.</p>
            </main>
        );
    }

    const primaryEmail = user.primaryEmailAddress?.emailAddress;
    const primaryPhone = user.primaryPhoneNumber?.phoneNumber;
    const joined = user.createdAt
        ? new Date(user.createdAt).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
          })
        : null;

    return (
        <main className="min-h-screen">
            <section className="pt-24 sm:px-10 lg:pt-20 max-w-7xl">
                <div className="flex items-center justify-between">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
                        Profile
                    </h1>
                    <SignOutButton>
                        <Button>
                            <LuLogOut className="h-5 w-5" />
                            Sign out
                        </Button>
                    </SignOutButton>
                </div>

                <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-center">
                    <img
                        src={user.imageUrl}
                        alt={user.fullName ?? "Avatar"}
                        className="h-28 w-28 rounded-full object-cover ring-2 ring-neutral-200 dark:ring-neutral-800"
                    />
                    <div className="flex flex-col gap-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            {user.fullName ?? user.username ?? "Unnamed user"}
                        </h2>
                        {user.username && (
                            <p className="text-sm text-neutral-500">
                                @{user.username}
                            </p>
                        )}
                        {primaryEmail && (
                            <p className="text-sm text-neutral-500">
                                {primaryEmail}
                            </p>
                        )}
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Detail label="First name" value={user.firstName} />
                    <Detail label="Last name" value={user.lastName} />
                    <Detail label="Username" value={user.username} />
                    <Detail label="Email" value={primaryEmail} />
                    <Detail label="Phone" value={primaryPhone} />
                    <Detail label="User ID" value={user.id} mono />
                    <Detail label="Joined" value={joined} />
                    <Detail
                        label="2FA"
                        value={user.twoFactorEnabled ? "Enabled" : "Disabled"}
                    />
                </div>

                {user.externalAccounts.length > 0 && (
                    <div className="mt-12">
                        <h3 className="text-lg font-semibold tracking-tight mb-4">
                            Connected accounts
                        </h3>
                        <div className="flex flex-col gap-2">
                            {user.externalAccounts.map((acc) => (
                                <div
                                    key={acc.id}
                                    className="flex items-center justify-between rounded-lg border border-neutral-200 dark:border-neutral-800 px-4 py-3"
                                >
                                    <span className="text-sm font-medium capitalize">
                                        {acc.provider}
                                    </span>
                                    <span className="text-sm text-neutral-500">
                                        {acc.emailAddress ?? acc.username ?? ""}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
}

function Detail({
    label,
    value,
    mono = false,
}: {
    label: string;
    value?: string | null;
    mono?: boolean;
}) {
    return (
        <div className="flex flex-col gap-1 rounded-lg border border-neutral-200 dark:border-neutral-800 px-4 py-3">
            <span className="text-xs uppercase tracking-wide text-neutral-500">
                {label}
            </span>
            <span
                className={`text-sm font-medium ${
                    mono ? "font-mono text-xs" : ""
                }`}
            >
                {value || "—"}
            </span>
        </div>
    );
}
