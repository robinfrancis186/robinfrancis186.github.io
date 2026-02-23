"use client";

import { ExternalLink } from "lucide-react";
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
                        image="/images/project-soulsync.png"
                        title="SoulSync"
                        description="AI Companion for Cognitive Wellness. Features facial recognition, emotion tracking, and memory recall."
                        tags={["AI", "Facial Recognition", "Wellness"]}
                        demoLink="#"
                    />

                    <GridItem
                        variants={item}
                        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                        image="/images/project-foodloop.png"
                        title="FoodLoop"
                        description="AI Platform for Responsible Food Redistribution. Reduces food waste using ML surplus prediction."
                        tags={["Machine Learning", "Sustainability", "React"]}
                        demoLink="#"
                    />

                    <GridItem
                        variants={item}
                        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                        image="/images/project-techx.png"
                        title="TechX Infinia"
                        description="Emerging Tech Flagship Event. Founded and led a large-scale tech festival with 450+ participants."
                        tags={["Leadership", "Event Management", "Strategy"]}
                    />

                    <GridItem
                        variants={item}
                        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                        image="/images/blog/ieee-award.png"
                        title="IEEE R10 Career Fair"
                        description="Co-led the first international virtual career fair with 31 global recruiters and 245 participants."
                        tags={["Global Community", "Networking"]}
                    />

                    <GridItem
                        variants={item}
                        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                        image="/images/blog/accessible-tech.png"
                        title="STRIDE Website"
                        description="Official website for STRIDE Kerala. Central digital hub for assistive technology innovation."
                        tags={["Web Development", "Accessibility", "UI/UX"]}
                        demoLink="#"
                    />
                </motion.ul>
            </div>
        </section>
    );
}

interface GridItemProps {
    area: string;
    image?: string;
    title: string;
    description: React.ReactNode;
    tags?: string[];
    demoLink?: string;
    variants?: any;
}

const GridItem = ({ area, image, title, description, tags, demoLink, variants }: GridItemProps) => {
    return (
        <motion.li variants={variants} className={`min-h-[14rem] list-none ${area}`}>
            <div className="relative h-full rounded-2xl border border-neutral-200/50 dark:border-neutral-800/50 p-2 md:rounded-3xl md:p-3 bg-white/50 dark:bg-black/50 backdrop-blur-md">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-white dark:bg-neutral-950">
                    {image && (
                        <div className="relative h-48 w-full overflow-hidden shrink-0 border-b border-neutral-100 dark:border-neutral-900">
                            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                        </div>
                    )}
                    <div className="flex flex-col flex-1 p-5 md:p-6 justify-between gap-4">
                        <div className="space-y-3">
                            <h3 className="font-sans text-xl font-bold text-neutral-900 dark:text-neutral-100">
                                {title}
                            </h3>
                            <p className="font-sans text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3">
                                {description}
                            </p>

                            {tags && tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {tags.map((tag, idx) => (
                                        <span key={idx} className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-md bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 ring-1 ring-inset ring-neutral-200 dark:ring-neutral-800">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        {demoLink && (
                            <div className="pt-2">
                                <a
                                    href={demoLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                                >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                    Live Demo
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.li>
    );
};
