"use client";

import {
    FiHome,
    FiUsers,
    FiDroplet,
    FiCalendar,
    FiFileText,
    FiSun,
    FiMoon,
    FiPlus,
} from "react-icons/fi";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import path from "path";

const items = [
    { label: "Home", Icon: FiHome, path: "/" },
    { label: "Donors", Icon: FiUsers, path: "/donors" },
    { label: "Checkup", Icon: FiPlus, path: "/checkup" },
    { label: "Inventory", Icon: FiDroplet, path: "/inventory" },
    { label: "Camps", Icon: FiCalendar, path: "/camps" },
    { label: "News", Icon: FiFileText, path: "/news" },
];

export const Sidebar = () => {
    const pathname = usePathname();

    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const saved = localStorage.getItem("theme") as "light" | "dark" | null;
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;
        const initial = saved ?? (prefersDark ? "dark" : "light");
        setTheme(initial);
        applyTheme(initial);
    }, []);

    const applyTheme = (mode: "light" | "dark") => {
        const dark = mode === "dark";
        const root = document.documentElement;

        root.style.setProperty("--background", dark ? "#171717" : "#ffffff");
        root.style.setProperty("--foreground", dark ? "#ffffff" : "#171717");
        root.style.setProperty("--hover", dark ? "#323232" : "#cbcbcb");

        root.classList.toggle("dark", dark);
    };

    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark";

        const commit = () => {
            setTheme(next);
            applyTheme(next);
            localStorage.setItem("theme", next);
        };

        if (!document.startViewTransition) {
            commit();
            return;
        }

        document.startViewTransition(commit);
    };

    if (pathname.includes("/auth")) return

    return (
        <nav className="w-32 h-dvh text-white flex flex-col items-center justify-center fixed top-0 left-0 z-50">
            <ul className="flex flex-col items-center gap-8">
                {items.map(({ label, Icon, path }) => {
                    const isActive =
                        path === "/"
                            ? pathname === "/"
                            : pathname.startsWith(path);

                    return (
                        <Link
                            href={path}
                            key={label}
                            className={`
                                    relative group px-3 pt-3 pb-2 cursor-pointer rounded-full transition-colors duration-200
                                    ${
                                        isActive
                                            ? "bg-red-600 text-white"
                                            : "hover:text-theme focus-within:text-theme text-foreground"
                                    }
                                `}
                        >
                            <span className="inline-block transition-transform duration-300 group-hover:rotate-360">
                                <Icon size={24} />
                            </span>

                            <span
                                role="tooltip"
                                className="pointer-events-none absolute text-foreground left-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-hover px-3 py-1.5 text-base font-medium opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 z-50"
                            >
                                {label}
                            </span>
                        </Link>
                    );
                })}

                <li
                    className="w-full h-0.5 rounded-full bg-foreground/10 my-2"
                    aria-hidden="true"
                />

                <li
                    onClick={toggleTheme}
                    role="button"
                    tabIndex={0}
                    aria-label="Toggle theme"
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            toggleTheme();
                        }
                    }}
                    className="relative group px-3 pt-3 pb-2 cursor-pointer rounded-full transition-colors text-foreground duration-200 hover:text-theme focus-visible:text-theme focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme/50"
                >
                    <span className="inline-block transition-transform duration-300 group-hover:rotate-360">
                        {theme === "dark" ? (
                            <FiSun size={24} />
                        ) : (
                            <FiMoon size={24} />
                        )}
                    </span>

                    <span
                        role="tooltip"
                        className="pointer-events-none absolute left-full text-foreground top-1/2 -translate-y-1/2 ml-3 whitespace-nowrap rounded-lg bg-hover px-3 py-1.5 text-base font-medium opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 z-50"
                    >
                        {theme === "dark" ? "Light Mode" : "Dark Mode"}
                    </span>
                </li>
            </ul>
        </nav>
    );
};
