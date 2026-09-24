"use client";

import Link from "next/link";
import {
    SiX,
    SiGithub,
    SiYoutube,
    SiInstagram,
    SiDiscord,
    SiFacebook,
} from "react-icons/si";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { Input } from "./ui/input";
import { usePathname } from "next/navigation";

export const Footer = () => {
    const pathname = usePathname();

    const quickLinks = [
        { label: "Donate Blood", href: "/donate" },
        { label: "Request Blood", href: "/request-blood" },
        { label: "Find a Camp", href: "/camps" },
        { label: "Schedule Checkup", href: "/checkup" },
    ];

    const supportLinks = [
        { label: "Contact Us", href: "/contact-us" },
        { label: "FAQs", href: "/faqs" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms & Conditions", href: "/terms-of-service" },
    ];

    const socials = [
        { icon: SiGithub, href: "/", label: "GitHub" },
        { icon: SiX, href: "/", label: "X" },
        { icon: SiYoutube, href: "/", label: "YouTube" },
        { icon: SiInstagram, href: "/", label: "Instagram" },
        { icon: SiFacebook, href: "/", label: "Facebook" },
        { icon: SiDiscord, href: "/", label: "Discord" },
    ];

    if (pathname.includes("/auth")) return;

    return (
        <footer className="w-full px-6 md:px-18 lg:px-28 xl:px-40 pt-20 pb-8">
            <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] lg:gap-16 py-8">
                <div className="flex flex-col gap-4">
                    <Link
                        href="/"
                        className="w-fit text-2xl font-bold uppercase tracking-tight"
                    >
                        HAEMA
                    </Link>

                    <p className="mt-6 max-w-sm text-sm leading-6 text-foreground/75">
                        Every drop tells a story. We connect donors, patients,
                        and hospitals so no one waits for the blood that could
                        save them.
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                        {socials.map(({ icon: Icon, href, label }) => (
                            <Link
                                key={label}
                                href={href}
                                aria-label={label}
                                className="
                                    hover:rotate-360
                                    group flex h-12 w-12 items-center justify-center
                                    rounded-full border border-theme/25
                                    text-foreground
                                    transition-all duration-300
                                    hover:border-theme hover:text-theme
                                    focus-visible:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-theme/50
                                "
                            >
                                <Icon
                                    size={19}
                                    className="transition-transform duration-300 group-hover:scale-110"
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col  gap-4">
                    <p className="text-base font-bold">Quick Links</p>

                    <nav className="mt-6 flex flex-col items-start gap-2">
                        {quickLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="
                                    text-sm text-foreground/75
                                    transition-colors duration-200
                                    hover:text-foreground
                                "
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex flex-col  gap-4">
                    <p className="text-base font-bold">Support</p>

                    <nav className="mt-6 flex flex-col items-start gap-2">
                        {supportLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="
                                    text-sm text-foreground/75
                                    transition-colors duration-200
                                    hover:text-foreground
                                "
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="text-base font-bold">Stay Updated</p>

                    <p className="mt-6 max-w-sm text-sm leading-6 text-foreground/75">
                        Real stories, upcoming camps, and the moments your
                        donation made possible. Straight to your inbox.
                    </p>

                    <form className="mt-6 flex items-center gap-3">
                        <Input
                            type="email"
                            placeholder="Enter your email address"
                            leftIcon={<FiMail size={18} />}
                            fullWidth
                        />

                        <button
                            type="submit"
                            aria-label="Subscribe"
                            className="
                                group flex h-14 w-14 shrink-0
                                items-center justify-center
                                rounded-full bg-theme
                                text-white
                                transition-all duration-300
                                hover:scale-105
                                hover:bg-theme/90
                                focus-visible:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-theme/50
                            "
                        >
                            <FiArrowUpRight
                                size={21}
                                className="
                                    transition-transform duration-300
                                    group-hover:rotate-45
                                "
                            />
                        </button>
                    </form>
                </div>
            </section>

            <div
                className="my-12 h-px w-full bg-foreground/10"
                aria-hidden="true"
            />

            <section className="flex flex-col gap-5 text-sm text-foreground/50 md:flex-row md:items-center md:justify-between py-8">
                <p>© {new Date().getFullYear()} HAEMA. All rights reserved.</p>

                <div className="flex items-center gap-4">
                    <span>Donate Blood</span>

                    <span className="text-foreground/20">/</span>

                    <span>Save Lives</span>
                </div>
            </section>
        </footer>
    );
};
