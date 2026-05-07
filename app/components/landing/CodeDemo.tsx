"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const codeLines = [
    { text: '# Quick Sort in Python', color: 'text-white/30' },
    { text: 'def quicksort(arr):', color: 'text-blue-400' },
    { text: '    if len(arr) <= 1:', color: 'text-white/70' },
    { text: '        return arr', color: 'text-emerald-400' },
    { text: '    pivot = arr[len(arr) // 2]', color: 'text-white/70' },
    { text: '    left = [x for x in arr if x < pivot]', color: 'text-white/70' },
    { text: '    middle = [x for x in arr if x == pivot]', color: 'text-white/70' },
    { text: '    right = [x for x in arr if x > pivot]', color: 'text-white/70' },
    { text: '    return quicksort(left) + middle + quicksort(right)', color: 'text-violet-400' },
    { text: '', color: 'text-white/70' },
    { text: 'data = [3, 6, 8, 10, 1, 2, 1]', color: 'text-amber-400' },
    { text: 'print(quicksort(data))', color: 'text-white/70' },
];

const outputLines = [
    '$ python main.py',
    '[1, 1, 2, 3, 6, 8, 10]',
    '',
    'Process exited with code 0',
];

export function CodeDemo() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [visibleLines, setVisibleLines] = useState(0);
    const [showOutput, setShowOutput] = useState(false);

    useEffect(() => {
        if (!isInView) return;
        const interval = setInterval(() => {
            setVisibleLines((prev) => {
                if (prev >= codeLines.length) {
                    clearInterval(interval);
                    setTimeout(() => setShowOutput(true), 600);
                    return prev;
                }
                return prev + 1;
            });
        }, 120);
        return () => clearInterval(interval);
    }, [isInView]);

    return (
        <section id="demo" className="relative py-32">
            <div className="mx-auto max-w-5xl px-6">
                {/* Heading */}
                <div className="mb-16 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-3 text-sm font-medium uppercase tracking-widest text-emerald-400/70"
                    >
                        Live Preview
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
                    >
                        See it <span className="text-white/40">in action.</span>
                    </motion.h2>
                </div>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c0c] shadow-2xl shadow-blue-500/[0.03]"
                >
                    {/* Window chrome */}
                    <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
                        <div className="h-3 w-3 rounded-full bg-red-500/70" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                        <div className="h-3 w-3 rounded-full bg-green-500/70" />
                        <span className="ml-3 text-xs text-white/30 font-mono">main.py — CodeForge</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Code editor side */}
                        <div className="border-r border-white/[0.06] p-5">
                            <div className="font-mono text-sm leading-7">
                                {codeLines.map((line, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={
                                            i < visibleLines
                                                ? { opacity: 1, x: 0 }
                                                : { opacity: 0, x: -10 }
                                        }
                                        transition={{ duration: 0.3 }}
                                        className="flex"
                                    >
                                        <span className="mr-4 w-6 select-none text-right text-white/15">
                                            {i + 1}
                                        </span>
                                        <span className={line.color}>{line.text}</span>
                                    </motion.div>
                                ))}
                                {/* Cursor blink */}
                                {visibleLines <= codeLines.length && (
                                    <motion.div
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="ml-10 mt-0.5 h-5 w-2 bg-blue-400/70"
                                    />
                                )}
                            </div>
                        </div>

                        {/* Output / terminal side */}
                        <div className="bg-black/40 p-5">
                            <div className="mb-3 flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-emerald-400/60" />
                                <span className="text-xs font-medium uppercase tracking-wider text-white/30">
                                    Output
                                </span>
                            </div>
                            <div className="font-mono text-sm leading-7">
                                {showOutput &&
                                    outputLines.map((line, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: i * 0.15, duration: 0.3 }}
                                            className={
                                                i === 0
                                                    ? "text-white/30"
                                                    : i === outputLines.length - 1
                                                        ? "text-emerald-400/70"
                                                        : "text-white/70"
                                            }
                                        >
                                            {line}
                                        </motion.div>
                                    ))}
                                {!showOutput && (
                                    <span className="text-white/20">Waiting for execution...</span>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
