"use client";
import { cn } from "@/app/lib/cn";
import { motion } from "framer-motion";
import Link from "next/link";

export function AnimatedButton({
    children,
    href,
    className,
    variant = "primary",
}: {
    children: React.ReactNode;
    href: string;
    className?: string;
    variant?: "primary" | "secondary";
}) {
    return (
        <Link href={href}>
            <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "relative inline-flex items-center justify-center overflow-hidden rounded-xl px-8 py-3.5 text-sm font-semibold transition-all duration-300",
                    variant === "primary" && [
                        "bg-gradient-to-r from-blue-600 via-blue-500 to-violet-600 text-white",
                        "shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30",
                    ],
                    variant === "secondary" && [
                        "border border-white/[0.1] bg-white/[0.03] text-white/80",
                        "hover:border-white/[0.2] hover:bg-white/[0.06] hover:text-white",
                    ],
                    className
                )}
            >
                {/* Shimmer overlay for primary */}
                {variant === "primary" && (
                    <div className="absolute inset-0 animate-shimmer bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:200%_100%]" />
                )}
                <span className="relative z-10">{children}</span>
            </motion.div>
        </Link>
    );
}
