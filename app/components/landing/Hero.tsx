"use client";
import { motion } from "framer-motion";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { AnimatedButton } from "../ui/AnimatedButton";

export function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
            {/* Spotlight */}
            <Spotlight />

            {/* Dot grid */}
            <div className="dot-grid absolute inset-0 z-0" />

            {/* Radial fade overlay */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />

            <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-sm text-white/60 backdrop-blur-sm"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                    Powered by Docker Containers
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
                >
                    Code. Compile.
                    <br />
                    <span className="gradient-text">Execute Instantly.</span>
                </motion.h1>

                {/* Subtitle */}
                <div className="mx-auto mb-10 max-w-2xl">
                    <TextGenerateEffect
                        words="A blazing-fast online compiler with Docker-isolated execution, real-time output streaming, and support for 10+ programming languages."
                        className="text-base leading-relaxed text-white/40 sm:text-lg md:text-xl"
                    />
                </div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <AnimatedButton href="/editor" variant="primary">
                        Start Coding Now
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
                    <AnimatedButton href="#features" variant="secondary">
                        Explore Features
                    </AnimatedButton>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="mt-20"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="mx-auto flex h-10 w-6 items-start justify-center rounded-full border border-white/[0.15] p-1.5"
                    >
                        <motion.div className="h-1.5 w-1.5 rounded-full bg-white/40" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
