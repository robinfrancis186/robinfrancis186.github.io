"use client";

import { Carousel3D, CarouselItem } from "@/components/ui/carousel-3d";
import { BookOpen } from "lucide-react";

const Blog = () => {
    const posts: CarouselItem[] = [
        {
            id: 1,
            title: "SoulSync: Building AI for Emotional & Cognitive Wellness",
            category: "Wellness",
            image: "/images/blog/1720937570476.jpeg",
            excerpt: "A deep dive into creating AI-enabled tools for elders and caregivers.",
        },
        {
            id: 2,
            title: "IEEE R10 Outstanding Volunteer Award: My Journey of Impact",
            category: "Leadership",
            image: "/images/blog/ieee-award.png",
            excerpt: "Reflections on leadership, community-building, and global recognition.",
        },
        {
            id: 3,
            title: "The Future of Accessible Technology",
            category: "Tech",
            image: "/images/blog/accessible-tech.png",
            excerpt: "How AI, multimodal interfaces, and affordable computing can empower millions.",
        },
        {
            id: 4,
            title: "Building Scalable Systems with Student Communities",
            category: "Community",
            image: "/images/blog/scalable-systems.png",
            excerpt: "Lessons from leading 100+ programs and growing organizations.",
        },
        {
            id: 5,
            title: "Designing People-Centric AI Solutions",
            category: "Design",
            image: "/images/blog/people-centric-ai.png",
            excerpt: "Balancing tech innovation with empathy and social awareness.",
        },
    ];

    return (
        <section id="blog" className="py-32 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary ring-1 ring-primary/20 uppercase tracking-wider mb-6">
                        <BookOpen className="h-3.5 w-3.5" />
                        Insights
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Latest <span className="text-primary">Updates</span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed">
                        Thoughts, achievements, and insights from my journey in tech.
                    </p>
                </div>

                <Carousel3D items={posts} />
            </div>
        </section>
    );
};

export default Blog;
