import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "ghost" | "danger";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    fullWidth?: boolean;
    as?: React.ElementType;
};

export const Button = ({
    children,
    className = "",
    onClick,
    variant = "primary",
    size = "md",
    disabled = false,
    type = "button",
    fullWidth = false,
    as,
    ...props
}: ButtonProps) => {
    const base =
        "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-theme/50 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-hover text-foreground hover:bg-theme hover:text-white active:bg-theme/90",
        secondary:
            "bg-transparent text-theme border border-theme/30 hover:bg-theme/5 active:bg-theme/10",
        ghost: "bg-transparent text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200",
        danger: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2.5 text-base",
        lg: "px-7 py-3.5 text-lg",
    };

    const defaultTag: Record<string, React.ElementType> = {
        primary: "button",
        secondary: "button",
        ghost: "button",
        danger: "button",
    };

    const Component = as || defaultTag[variant] || "button";

    return (
        <Component
            type={Component === "button" ? type : undefined}
            disabled={Component === "button" ? disabled : undefined}
            onClick={onClick}
            className={`
                ${base}
                ${variants[variant]}
                ${sizes[size]}
                ${fullWidth ? "w-full" : ""}
                ${className}
                cursor-pointer
            `}
            {...props}
        >
            {children}
        </Component>
    );
};
