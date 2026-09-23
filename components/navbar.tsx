"use client";

import { useEffect, useState } from "react";
import { FiBell, FiSearch } from "react-icons/fi";
import { Input } from "./ui/input";

export const Navbar = () => {
    const [isSearchExpanded, setIsSearchExpanded] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsSearchExpanded(window.scrollY < 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 inset-x-0 h-32 px-8 z-50 w-full flex flex-row justify-between items-center">
            <p className="text-2xl font-bold uppercase">Haema</p>

            <div className="flex flex-row items-center gap-4">
                {isSearchExpanded ? (
                    <Input
                        size="sm"
                        leftIcon={<FiSearch />}
                        placeholder="Search..."
                    />
                ) : (
                    <button
                        type="button"
                        aria-label="Search"
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                            setIsSearchExpanded(true);
                        }}
                        className="relative group grid place-items-center w-10 h-10 rounded-full cursor-pointer transition-colors duration-200 hover:text-theme focus-visible:text-theme focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme/50"
                    >
                        <span className="inline-block transition-transform duration-300 group-hover:scale-110">
                            <FiSearch size={24} />
                        </span>
                    </button>
                )}

                <button
                    type="button"
                    aria-label="Notifications"
                    className="relative group grid place-items-center w-10 h-10 rounded-full cursor-pointer transition-colors duration-200 hover:text-theme focus-visible:text-theme focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme/50"
                >
                    <span className="inline-block transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                        <FiBell size={24} />
                    </span>
                </button>

                <button
                    type="button"
                    aria-label="Account"
                    className="relative group grid place-items-center w-10 h-10 rounded-full cursor-pointer transition-colors duration-200 hover:text-theme focus-visible:text-theme focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme/50"
                >
                    <span className="w-6 h-6 rounded-full bg-white" />
                </button>
            </div>
        </nav>
    );
};
