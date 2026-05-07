"use client";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/[0.06] py-12">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
                {/* Logo */}
                <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600">
                        <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="16 18 22 12 16 6" />
                            <polyline points="8 6 2 12 8 18" />
                        </svg>
                    </div>
                    <span className="text-sm font-semibold text-white/60">
                        Code<span className="text-blue-400/80">Forge</span>
                    </span>
                </div>

                {/* Links */}
                <div className="flex gap-8">
                    {[
                        { label: "Features", href: "#features" },
                        { label: "Languages", href: "#languages" },
                        { label: "Demo", href: "#demo" },
                        { label: "Editor", href: "/editor" },
                    ].map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-sm text-white/30 transition-colors hover:text-white/60"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Copyright */}
                <p className="text-xs text-white/20">
                    © {new Date().getFullYear()} CodeForge. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
