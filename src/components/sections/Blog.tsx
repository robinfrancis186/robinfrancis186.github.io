"use client";

import { useEffect, useMemo, useState } from "react";
import { Carousel3D, CarouselItem } from "@/components/ui/carousel-3d";
import { BookOpen, ArrowLeft } from "lucide-react";

const Blog = () => {
    const posts: CarouselItem[] = useMemo(() => ([
        {
            id: 1,
            slug: "soulsync-emotional-wellness",
            title: "SoulSync: Building AI for Emotional & Cognitive Wellness",
            category: "Wellness",
            image: "/images/blog/1720937570476.jpeg",
            excerpt: "A deep dive into creating AI-enabled tools for elders and caregivers.",
            content:
                "SoulSync explores multimodal AI that monitors tone, pacing, and contextual cues to support elders and caregivers. We built lightweight models that run fully on-device to preserve privacy, and tuned them for low-light and low-bandwidth environments where typical cloud assistants fail.\n\nWe added adaptive prompts for different cognitive states, offered optional journaling summaries that can be shared with clinicians, and designed escalation paths that notify family when risk signals—like sentiment drift, agitation, or prolonged silence—appear. The system emphasizes consent, transparency, and clinician-in-the-loop review before deployment, so that automation augments human care rather than replacing it.\n\nA key learning: usability beats model novelty. Care teams preferred predictable, explainable actions (like “ask a grounding question every X minutes”) over complex, opaque behaviors. This shaped our evaluation rubric for safety, comfort, and trust.",
        },
        {
            id: 2,
            slug: "ieee-r10-volunteer-award",
            title: "IEEE R10 Outstanding Volunteer Award: My Journey of Impact",
            category: "Leadership",
            image: "/images/blog/ieee-award.png",
            excerpt: "Reflections on leadership, community-building, and global recognition.",
            content:
                "This write-up covers the leadership principles that scaled our student branches to 100+ events per year. We formalized handover playbooks, paired every lead with a shadow, and ran quarterly retros so new teams inherited context instead of chaos.\n\nWe also built mentorship tracks with clear checkpoints—speaker sourcing, sponsorship decks, logistics checklists, and post-event surveys—to reduce failure points. The result: higher member retention, stronger industry partnerships, and funded innovation programs that kept running even after founders graduated.\n\nThe biggest unlock was data visibility. Simple dashboards for attendance, NPS, and volunteer load helped us rotate responsibilities before burnout and double down on formats that worked (workshops and office hours outperformed large one-off summits).",
        },
        {
            id: 3,
            slug: "future-of-accessible-technology",
            title: "The Future of Accessible Technology",
            category: "Tech",
            image: "/images/blog/accessible-tech.png",
            excerpt: "How AI, multimodal interfaces, and affordable computing can empower millions.",
            content:
                "Accessible tech requires multimodal inputs—voice, gesture, eye-tracking—and low-latency edge compute. We prototyped adaptive layouts that increase target sizes and contrast based on motor ability and vision needs, and we leaned on on-device speech models that tolerate dialectal variety without round-trips to the cloud.\n\nWe tested haptic cues as a redundant channel for critical alerts, added offline fallbacks for intermittent connectivity, and built a settings wizard that asks about comfort preferences up front instead of burying them in menus.\n\nThe takeaway: accessibility is not a bolt-on. It’s a product foundation that improves UX for everyone—faster surfaces for power users, clearer affordances for new users, and resilient behavior when networks are unreliable.",
        },
        {
            id: 4,
            slug: "scalable-systems-with-communities",
            title: "Building Scalable Systems with Student Communities",
            category: "Community",
            image: "/images/blog/scalable-systems.png",
            excerpt: "Lessons from leading 100+ programs and growing organizations.",
            content:
                "We scaled student communities by standardizing playbooks for event ops, creating modular starter kits for hackathons, and setting up OKR-based tracking for chapter health. Kits included sponsor email templates, venue checklists, slide decks, and risk logs—so new chapters could launch in days, not months.\n\nData dashboards surfaced burnout signals (volunteer hours, last-minute cancellations) and helped us rotate leads before bottlenecks formed. We also paired each technical program with a delivery partner—often an NGO—so prototypes had a path to real users after demo day.\n\nResult: more consistent events, higher volunteer retention, and projects that survived beyond judging. The system favored repeatable processes over heroics, which made leadership sustainable.",
        },
        {
            id: 5,
            slug: "people-centric-ai",
            title: "Designing People-Centric AI Solutions",
            category: "Design",
            image: "/images/blog/people-centric-ai.png",
            excerpt: "Balancing tech innovation with empathy and social awareness.",
            content:
                "People-centric AI starts with interviewing across ability, age, and bandwidth profiles. We tailored UX for intermittent connectivity, added offline fallbacks for critical actions, and kept error states explicit (“here’s what failed, here’s what we’ll try next”).\n\nWe used progressive disclosure for model decisions: concise plain-language reasons first, deeper evidence on demand, and opt-out controls for data retention. Every release ran through fairness checks (demographic parity on key flows), explainability reviews (what signals drove this action), and trust surveys.\n\nThe main lesson: transparency without overwhelm. Users responded best when we gave just enough reasoning to build trust, plus a clear escape hatch to disable automation if it felt wrong.",
        },
    ]), []);

    const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

    useEffect(() => {
        const hash = window.location.hash;
        if (hash.startsWith("#/blog/")) {
            const slug = hash.replace("#/blog/", "");
            if (posts.find((p) => p.slug === slug)) {
                setSelectedSlug(slug);
            }
        }
    }, [posts]);

    useEffect(() => {
        if (selectedSlug) {
            window.location.hash = `#/blog/${selectedSlug}`;
        }
    }, [selectedSlug]);

    const selectedPost = selectedSlug
        ? posts.find((p) => p.slug === selectedSlug) ?? null
        : null;

    const handleSelect = (item: CarouselItem) => {
        if (item.slug) {
            setSelectedSlug(item.slug);
            const el = document.getElementById("blog");
            el?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const handleBack = () => {
        setSelectedSlug(null);
        window.location.hash = "#blog";
        const el = document.getElementById("blog");
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section id="blog" className="py-32 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {!selectedPost && (
                    <>
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

                        <Carousel3D items={posts} onSelect={handleSelect} />
                    </>
                )}

                {selectedPost && (
                    <div className="relative max-w-5xl mx-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden">
                        <div className="relative">
                            <img
                                src={selectedPost.image}
                                alt={selectedPost.title}
                                className="w-full h-[320px] md:h-[420px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20 mb-3 backdrop-blur-md">
                                    <span className="text-blue-400 font-bold">•</span>
                                    <span>{selectedPost.category}</span>
                                </span>
                                <h3 className="text-3xl md:text-4xl font-semibold leading-tight">
                                    {selectedPost.title}
                                </h3>
                            </div>
                        </div>

                        <div className="p-6 md:p-10 space-y-6">
                            <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed whitespace-pre-line">
                                {selectedPost.content || selectedPost.excerpt}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={handleBack}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800 transition"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    Back to blog
                                </button>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-500 transition"
                                >
                                    Work with me
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blog;
