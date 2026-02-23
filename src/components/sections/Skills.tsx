"use client";

import { motion } from "framer-motion";

const Skills = () => {
    return (
        <section id="skills" className="py-20 w-full flex flex-col bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
                        Technical <span className="text-primary">Skills</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <SkillCard
                        title="AI & ML"
                        skills={[
                            { name: "Python", icon: "🐍" },
                            { name: "TensorFlow", icon: "🧠" },
                            { name: "PyTorch", icon: "🔥" },
                            { name: "Scikit-Learn", icon: "📊" },
                            { name: "Computer Vision", icon: "👁️" },
                            { name: "Generative AI", icon: "🤖" },
                        ]}
                        delay={0.1}
                    />

                    <SkillCard
                        title="Backend & Data"
                        skills={[
                            { name: "Node.js", icon: "🟢" },
                            { name: "C++", icon: "⚙️" },
                            { name: "PostgreSQL", icon: "🗄️" },
                            { name: "MongoDB", icon: "🍃" },
                            { name: "Firebase", icon: "🔥" },
                            { name: "REST APIs", icon: "🌐" },
                        ]}
                        delay={0.2}
                    />

                    <SkillCard
                        title="Frontend & Tools"
                        skills={[
                            { name: "React / Next.js", icon: "⚛️" },
                            { name: "TypeScript", icon: "📘" },
                            { name: "Tailwind CSS", icon: "🌊" },
                            { name: "Three.js", icon: "🧊" },
                            { name: "Git / GitHub", icon: "🐙" },
                            { name: "Figma", icon: "🎨" },
                        ]}
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
};

const SkillCard = ({ title, skills, delay }: { title: string, skills: { name: string, icon: string }[], delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="p-[1px] rounded-2xl bg-gradient-to-b from-neutral-200 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 shadow-xl"
        >
            <div className="h-full w-full rounded-2xl bg-white dark:bg-neutral-950 p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-6 pb-4 border-b border-neutral-100 dark:border-neutral-900 text-neutral-800 dark:text-neutral-200">
                    {title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                    {skills.map((skill, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-primary/50 dark:hover:border-primary/50 transition-colors cursor-default"
                        >
                            <span className="text-sm">{skill.icon}</span>
                            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Skills;
