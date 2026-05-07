"use client";
import { motion } from "framer-motion";

const languages = [
    { name: "Python", color: "#3776AB", icon: "🐍" },
    { name: "JavaScript", color: "#F7DF1E", icon: "⚡" },
    { name: "TypeScript", color: "#3178C6", icon: "📘" },
    { name: "C++", color: "#00599C", icon: "⚙️" },
    { name: "Java", color: "#ED8B00", icon: "☕" },
    { name: "Go", color: "#00ADD8", icon: "🔷" },
    { name: "Rust", color: "#CE422B", icon: "🦀" },
    { name: "C", color: "#A8B9CC", icon: "🔧" },
    { name: "Ruby", color: "#CC342D", icon: "💎" },
    { name: "PHP", color: "#777BB4", icon: "🐘" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring" as const, stiffness: 200, damping: 20 },
    },
};

export function Languages() {
    return (
        <section id="languages" className="relative py-32">
            <div className="mx-auto max-w-6xl px-6">
                {/* Heading */}
                <div className="mb-16 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-400/70"
                    >
                        Supported Languages
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
                    >
                        Your language,{" "}
                        <span className="text-white/40">your choice.</span>
                    </motion.h2>
                </div>

                {/* Language grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5"
                >
                    {languages.map((lang) => (
                        <motion.div
                            key={lang.name}
                            variants={itemVariants}
                            whileHover={{
                                y: -5,
                                borderColor: `${lang.color}33`,
                                boxShadow: `0 20px 40px -12px ${lang.color}15`,
                            }}
                            className="group relative flex flex-col items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-6 transition-all duration-300"
                        >
                            {/* Glow dot */}
                            <div
                                className="absolute -top-px left-1/2 h-px w-12 -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                style={{
                                    background: `linear-gradient(90deg, transparent, ${lang.color}60, transparent)`,
                                }}
                            />
                            <span className="text-3xl">{lang.icon}</span>
                            <span className="text-sm font-medium text-white/60 transition-colors group-hover:text-white/90">
                                {lang.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
