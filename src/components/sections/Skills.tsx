"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const Skills = () => {
    return (
        <section id="skills" className="py-20 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-16 z-10 w-full">Skills</h2>
            <div className="w-full relative max-w-7xl mx-auto">
                <InfiniteMovingCards
                    items={skills}
                    direction="right"
                    speed="slow"
                />
            </div>
        </section>
    );
};

const skills = [
    {
        quote: "Front-End Development",
        name: "React.js",
        title: "Library",
    },
    {
        quote: "Language",
        name: "TypeScript",
        title: "Development",
    },
    {
        quote: "Styling",
        name: "Tailwind CSS",
        title: "Framework",
    },
    {
        quote: "3D Graphics",
        name: "Three.js",
        title: "Library",
    },
    {
        quote: "Animations",
        name: "Framer Motion",
        title: "Library",
    },
    {
        quote: "AI & Machine Learning",
        name: "Python",
        title: "Language",
    },
    {
        quote: "Generative AI",
        name: "GenAI",
        title: "AI Technology",
    },
    {
        quote: "Backend",
        name: "Node.js",
        title: "Runtime",
    },
    {
        quote: "Version Control",
        name: "Git",
        title: "Tool",
    },
    {
        quote: "Design",
        name: "Figma",
        title: "UI/UX",
    },
];

export default Skills;
