"use client";;
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const pathname = usePathname();

    const [isSearchExpanded, setIsSearchExpanded] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsSearchExpanded(window.scrollY < 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (pathname.includes("/sign-in")) return;

    return (
        <nav className="fixed top-0 inset-x-0 h-32 px-8 z-50 w-full flex flex-row justify-between items-center">
            <p className="text-2xl font-bold uppercase">
                {" "}
                H<span className="lowercase text-4xl">α</span>EM
                <span className="lowercase text-4xl">α</span>
            </p>
        </nav>
    );
};
