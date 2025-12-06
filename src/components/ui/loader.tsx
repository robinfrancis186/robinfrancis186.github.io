"use client";

import { motion } from "framer-motion";

export const LoaderOne = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-3xl">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative flex flex-col items-center gap-4"
            >
                <div className="relative flex items-center justify-center">
                    <motion.div
                        className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-blue-600 shadow-lg shadow-primary/20"
                        animate={{
                            scale: [1, 1.05, 1],
                            rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <span className="absolute text-2xl font-bold text-white font-geist">RF</span>
                </div>

                <motion.div
                    className="h-1 w-24 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.div
                        className="h-full bg-primary"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};
