"use client";
import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export const Button: React.FC<ButtonProps> = ({ variant = "primary", className, children, ...props }) => {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold transition-colors focus-outline";
  const variants = {
    primary:
      "bg-primary text-black hover:bg-orange-400 active:bg-orange-500 shadow-glow",
    secondary:
      "bg-secondary text-black hover:bg-emerald-400 active:bg-emerald-500",
    ghost:
      "bg-transparent text-text hover:bg-surface/60 border border-surface"
  };
  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};
