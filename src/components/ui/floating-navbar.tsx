"use client";
import { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "react-scroll";


export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();

    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                setVisible(true);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    return (
        <>
            <a
                href="#home"
                className="fixed top-4 left-4 z-[5001] rounded-full bg-white/80 dark:bg-slate-900/80 border border-white/60 dark:border-slate-800 shadow-md px-3 py-2"
            >
                <img src="/images/logo.png" alt="Logo" className="h-10 w-auto object-contain" />
            </a>

            <AnimatePresence mode="wait">
                <motion.div
                    initial={{
                        opacity: 1,
                        y: -100,
                    }}
                    animate={{
                        y: visible ? 0 : -100,
                        opacity: visible ? 1 : 0,
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                    className={cn(
                        "flex max-w-fit fixed top-4 inset-x-0 mx-auto glass-panel rounded-full z-[5000] pr-2 pl-6 py-1.5 items-center justify-center space-x-5",
                        className
                    )}
                >
                    {navItems.map((navItem: any, idx: number) => (
                        <Link
                            key={`link=${idx}`}
                            to={navItem.link.replace('#', '')}
                            smooth={true}
                            duration={500}
                            className={cn(
                                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 cursor-pointer"
                            )}
                        >
                            <span className="block sm:hidden">{navItem.icon}</span>
                            <span className="hidden sm:block text-sm">{navItem.name}</span>
                        </Link>
                    ))}

                    <a
                        href="#contact"
                        className="relative inline-flex items-center justify-center text-sm font-medium px-4 py-2 rounded-full bg-white text-slate-900 border border-slate-300 shadow-sm hover:bg-slate-50 hover:shadow-md transition dark:bg-slate-900 dark:text-white dark:border-slate-600 dark:hover:bg-slate-800"
                    >
                        <span>Contact</span>
                        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
                    </a>
                </motion.div>
            </AnimatePresence>
        </>
    );
};
