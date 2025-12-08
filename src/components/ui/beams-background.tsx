"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type BeamsBackgroundProps = {
    className?: string;
};

// Soft animated beams backdrop for hero section
export const BeamsBackground = ({ className }: BeamsBackgroundProps) => {
    return (
        <div
            className={cn(
                "absolute inset-0 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black",
                className
            )}
            aria-hidden="true"
        >
            <motion.div
                className="absolute -inset-[40%] bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.2),transparent_35%),radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.2),transparent_40%),radial-gradient(circle_at_25%_70%,rgba(14,165,233,0.18),transparent_35%)] blur-3xl"
                animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1.02, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_55%)]"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
};




