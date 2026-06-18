import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

const variants = {
  primary:
    "bg-cyan text-ink hover:bg-white hover:-translate-y-0.5 shadow-[0_12px_34px_rgba(49,213,232,.18)]",
  secondary:
    "border border-white/20 bg-white/5 text-white hover:border-cyan/60 hover:bg-white/10 hover:-translate-y-0.5",
  light:
    "border border-slate-300 bg-white text-navy hover:border-navy hover:-translate-y-0.5",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-sm px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan ${variants[variant]} ${className}`}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
