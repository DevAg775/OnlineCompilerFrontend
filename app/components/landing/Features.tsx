"use client";
import { motion } from "framer-motion";
import { HoverCard } from "../ui/HoverCard";

const features = [
    {
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
            </svg>
        ),
        title: "Docker Isolation",
        description: "Every code execution runs in an isolated Docker container — safe, sandboxed, and secure.",
        gradient: "from-blue-500/20 to-cyan-500/20",
        iconBg: "bg-blue-500/10",
        iconColor: "text-blue-400",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
        ),
        title: "Multi-Language",
        description: "Write and run code in Python, JavaScript, C++, Java, Go, Rust, and many more languages.",
        gradient: "from-violet-500/20 to-purple-500/20",
        iconBg: "bg-violet-500/10",
        iconColor: "text-violet-400",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
        title: "Real-Time Output",
        description: "Stream output to your browser in real-time via WebSocket — no page refresh needed.",
        gradient: "from-amber-500/20 to-orange-500/20",
        iconBg: "bg-amber-500/10",
        iconColor: "text-amber-400",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
            </svg>
        ),
        title: "Cloud-Based",
        description: "No setup required. Just open your browser, write code, and hit run. Works anywhere.",
        gradient: "from-emerald-500/20 to-teal-500/20",
        iconBg: "bg-emerald-500/10",
        iconColor: "text-emerald-400",
    },
];

export function Features() {
    return (
        <section id="features" className="relative py-32">
            {/* Section heading */}
            <div className="mx-auto mb-16 max-w-3xl px-6 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400/70"
                >
                    Why CodeForge
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
                >
                    Built for developers,
                    <br />
                    <span className="text-white/40">by developers.</span>
                </motion.h2>
            </div>

            {/* Cards grid */}
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-6 sm:grid-cols-2">
                {features.map((feature) => (
                    <HoverCard key={feature.title}>
                        <div className="flex items-start gap-4">
                            <div
                                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${feature.iconBg} ${feature.iconColor}`}
                            >
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="mb-1.5 text-lg font-semibold text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-white/40">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </HoverCard>
                ))}
            </div>
        </section>
    );
}
