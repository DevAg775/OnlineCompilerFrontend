"use client";
import { cn } from "@/app/lib/cn";
import { motion } from "framer-motion";

type SpotlightProps = {
    className?: string;
    fill?: string;
};

export function Spotlight({ className, fill }: SpotlightProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={cn(
                "pointer-events-none absolute inset-0 z-0 overflow-hidden",
                className
            )}
        >
            <svg
                className="absolute h-[200%] w-[200%] -translate-x-[40%] -translate-y-[30%] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter id="spotlight-blur">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="80" />
                    </filter>
                </defs>
                <ellipse
                    cx="50%"
                    cy="50%"
                    rx="25%"
                    ry="20%"
                    fill={fill || "rgba(59, 130, 246, 0.15)"}
                    filter="url(#spotlight-blur)"
                />
            </svg>
            {/* Secondary purple glow */}
            <svg
                className="absolute h-[200%] w-[200%] translate-x-[10%] -translate-y-[10%] opacity-30"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter id="spotlight-blur-2">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="100" />
                    </filter>
                </defs>
                <ellipse
                    cx="50%"
                    cy="50%"
                    rx="20%"
                    ry="15%"
                    fill="rgba(139, 92, 246, 0.12)"
                    filter="url(#spotlight-blur-2)"
                />
            </svg>
        </motion.div>
    );
}
