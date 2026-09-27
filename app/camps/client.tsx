"use client";

import { Camps } from "@/components/donate/camps";

export default function Client() {
    return (
        <main className="min-h-screen">
            <section className="pt-24 lg:pt-20 max-w-7xl">
                <h1 className="text-4xl py-4 font-bold tracking-tight sm:text-5xl lg:text-7xl">
                    Camps
                </h1>
                <p className="text-sm text-neutral-500 py-4">
                    Used to match you with the right donation slots.
                </p>
            </section>

            <section>
                <Camps />
            </section>
        </main>
    );
}
