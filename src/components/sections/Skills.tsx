"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const Skills = () => {
    return (
        <section className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10">Technical Skills</h2>
            <InfiniteMovingCards
                items={skills}
                direction="right"
                speed="slow"
            />
        </section>
    );
};

const skills = [
    {
        quote: "Building interactive UIs",
        name: "React",
        title: "Frontend Library",
    },
    {
        quote: "Type-safe development",
        name: "TypeScript",
        title: "Language",
    },
    {
        quote: "Utility-first styling",
        name: "Tailwind CSS",
        title: "CSS Framework",
    },
    {
        quote: "Production-grade React framework",
        name: "Next.js",
        title: "Framework",
    },
    {
        quote: "Backend development",
        name: "Node.js",
        title: "Runtime",
    },
    {
        quote: "Database management",
        name: "PostgreSQL",
        title: "Database",
    },
    {
        quote: "Containerization",
        name: "Docker",
        title: "DevOps",
    },
];

export default Skills;
