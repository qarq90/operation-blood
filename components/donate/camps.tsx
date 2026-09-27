import { useState } from "react";
import { BLOOD_TYPES } from "@/constants/profile";
import { CITIES, MOCK_CAMPS } from "@/lib/donate";
import { LuMapPin, LuDroplet, LuSearch } from "react-icons/lu";
import { CampCard } from "./camp-card";
import { DropdownSelect } from "../profile/dropdown-select";

export function Camps() {
    const [city, setCity] = useState("All cities");
    const [bloodType, setBloodType] = useState("");
    const [query, setQuery] = useState("");

    return (
        <div className="flex flex-col w-full">
            <section className="mx-auto w-full">
                <form className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-3 dark:border-neutral-800">
                        <LuMapPin className="h-4 w-4 shrink-0 text-neutral-500" />
                        <DropdownSelect
                            value={city}
                            onChange={setCity}
                            options={CITIES}
                            placeholder="All cities"
                        />
                    </div>

                    <div className="flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-3 dark:border-neutral-800">
                        <LuDroplet className="h-4 w-4 shrink-0 text-neutral-500" />
                        <DropdownSelect
                            value={bloodType}
                            onChange={setBloodType}
                            options={BLOOD_TYPES}
                            placeholder="Any blood type"
                        />
                    </div>

                    <div className="flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-3 dark:border-neutral-800">
                        <LuSearch className="h-4 w-4 shrink-0 text-neutral-500" />
                        <input
                            name="q"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search camps…"
                            className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-neutral-400"
                        />
                    </div>
                </form>
            </section>

            <section className="mx-auto w-full pb-24 pt-8">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {MOCK_CAMPS.map((camp) => (
                        <CampCard key={camp.id} camp={camp} />
                    ))}
                </div>
            </section>
        </div>
    );
}
