"use client";
import { motion } from "framer-motion";
import { AnimatedButton } from "../ui/AnimatedButton";

export function CTA() {
    return (
        <section className="relative py-32">
            <div className="mx-auto max-w-4xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-blue-500/[0.07] via-violet-500/[0.05] to-transparent p-12 text-center md:p-16"
                >
                    {/* Decorative glow */}
                    <div className="absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
                    >
                        Ready to start coding?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="relative mb-10 text-lg text-white/40"
                    >
                        No downloads. No configuration. Just open and code.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="relative flex justify-center gap-4"
                    >
                        <AnimatedButton href="/editor" variant="primary">
                            Launch Editor
                            <svg
                                className="ml-2 h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </AnimatedButton>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
