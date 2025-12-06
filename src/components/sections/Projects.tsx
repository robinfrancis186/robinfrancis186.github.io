"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

import { motion } from "framer-motion";

export default function Projects() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="projects" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <motion.ul
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2"
                >
                    <GridItem
                        variants={item}
                        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                        icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
                        title="SoulSync"
                        description="AI Companion for Cognitive Wellness. Features facial recognition, emotion tracking, and memory recall."
                    />

                    <GridItem
                        variants={item}
                        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                        icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
                        title="FoodLoop"
                        description="AI Platform for Responsible Food Redistribution. Reduces food waste using ML surplus prediction."
                    />

                    <GridItem
                        variants={item}
                        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                        icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
                        title="TechX Infinia"
                        description="Emerging Tech Flagship Event. Founded and led a large-scale tech festival with 450+ participants."
                    />

                    <GridItem
                        variants={item}
                        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                        icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
                        title="IEEE R10 Virtual Career Fair"
                        description="Co-led the first international virtual career fair with 31 global recruiters and 245 participants."
                    />

                    <GridItem
                        variants={item}
                        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                        icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
                        title="STRIDE Website"
                        description="Official website for STRIDE Kerala. Central digital hub for assistive technology innovation."
                    />
                </motion.ul>
            </div>
        </section>
    );
}

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
    variants?: any;
}

const GridItem = ({ area, icon, title, description, variants }: GridItemProps) => {
    return (
        <motion.li variants={variants} className={`min-h-[14rem] list-none ${area}`}>
            <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] bg-white dark:bg-black">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border border-gray-600 p-2">
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                                {title}
                            </h3>
                            <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </motion.li>
    );
};
