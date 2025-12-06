import { TracingBeam } from "@/components/ui/tracing-beam";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { MovingBorderButton } from "@/components/ui/moving-border";

const About = () => {
    const education = [
        {
            year: "2021 – 2025",
            degree: "B.Tech in Computer Science & Engineering",
            institution: "Sahrdaya College of Engineering & Technology",
            description: "First Class | CGPA: 7.17. Focused on AI systems, software engineering, and product development."
        },
        {
            year: "2019 – 2021",
            degree: "Higher Secondary – Computer Science",
            institution: "National Higher Secondary School",
            description: "Secured 96%"
        },
        {
            year: "2019",
            degree: "Secondary School Certificate",
            institution: "Don Bosco High School",
            description: "Secured 100%"
        }
    ];

    const achievements = [
        {
            title: "IEEE R10 Outstanding Volunteer Award 2024",
            description: "First student from the Asia-Pacific Region to receive this honor."
        },
        {
            title: "IBM Watsonx GenAI Challenge — 1st Runner-Up",
            description: "Awarded for building an intelligent GenAI-powered solution."
        },
        {
            title: "3× Hackathon Winner",
            description: "Wins include GenAI challenges, food sustainability platforms, and game development competitions."
        },
        {
            title: "Champion of Impact – IEEE Computer Society",
            description: "Recognized for founding & leading a flagship event with 450+ participants."
        },
        {
            title: "Raised $2,650+ for community-impact projects",
            description: "Successfully fundraised for various social initiatives and community events."
        },
        {
            title: "National Bronze Medalist – .22 Rifle Shooting",
            description: "Awarded at a national competition in Delhi."
        }
    ];

    return (
        <section id="about" className="py-20 bg-background relative overflow-hidden">
            <TracingBeam className="px-6">
                <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            I am a passionate AI developer, program strategist, and community builder with a strong track record in leading high-impact technical initiatives. My work spans accessible technology, GenAI solutions, student empowerment, and large-scale program execution. I believe in building technology that solves real human problems while uplifting communities through collaboration, mentorship, and creativity.
                        </p>
                        <MovingBorderButton
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            Download CV
                        </MovingBorderButton>
                    </motion.div>

                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <GraduationCap className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold">Education</h3>
                        </div>
                        <div className="space-y-8 relative">
                            <div className="absolute left-[9px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary/50 to-transparent" />
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative pl-8"
                                >
                                    <div className="absolute left-0 top-1.5 h-5 w-5 rounded-full border-4 border-background bg-primary shadow-lg shadow-primary/30" />
                                    <span className="text-sm text-primary font-semibold tracking-wide uppercase">{edu.year}</span>
                                    <h4 className="text-xl font-bold mt-1">{edu.degree}</h4>
                                    <p className="text-muted-foreground font-medium">{edu.institution}</p>
                                    <p className="text-muted-foreground mt-2 leading-relaxed">{edu.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <Award className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold">Achievements</h3>
                        </div>
                        <div className="grid gap-6">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(var(--primary), 0.05)" }}
                                    className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl"
                                >
                                    <h4 className="text-lg font-bold mb-2">{achievement.title}</h4>
                                    <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </TracingBeam>
        </section>
    );
};

export default About;
