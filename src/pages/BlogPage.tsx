import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogPage = () => {
    return (
        <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto bg-background text-foreground">
            <motion.section
                id="blog-feed"
                className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Left Column - Header Area */}
                <div className="flex flex-col h-full">
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
                            Latest from<br />the Journal
                        </h1>
                        <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed max-w-sm mb-12">
                            Field notes, photography tips, and stories from our team of explorers on the ground.
                        </p>

                        <a
                            href="#view-all"
                            className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase hover:text-primary/80 transition-colors"
                        >
                            View All Stories
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Bottom aligned text on desktop */}
                    <div className="mt-24 lg:mt-auto pt-6 border-t border-neutral-200 dark:border-neutral-800">
                        <p className="text-neutral-500 text-xs tracking-widest uppercase font-mono">
                            Updated Daily
                        </p>
                    </div>
                </div>

                {/* Right Column - Article Feed */}
                <div className="flex flex-col gap-8 md:gap-12">

                    {/* Article 1 */}
                    <a href="#article-1" className="group flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
                        <div className="w-full sm:w-[280px] shrink-0 overflow-hidden rounded-lg bg-white dark:bg-slate-900 ring-1 ring-neutral-200 dark:ring-neutral-800 shadow-sm">
                            <img
                                src="/images/blog/cinque_terre.png"
                                alt="Cinque Terre"
                                className="w-full h-48 sm:h-36 object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                            />
                        </div>
                        <div className="flex-1 flex flex-col justify-center min-w-0 pr-4 relative">
                            <div className="flex items-center gap-4 mb-3">
                                <span className="text-xs font-bold tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">GUIDE</span>
                                <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase">Oct 12, 2024</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary text-neutral-900 dark:text-neutral-100 transition-colors">
                                Hidden Trails of Cinque Terre
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                                Avoiding the crowds in Italy's most colorful coastal villages by taking the high roads.
                            </p>

                            {/* Arrow that slides in on hover */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-600 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>
                    </a>

                    {/* Divider */}
                    <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800"></div>

                    {/* Article 2 */}
                    <a href="#article-2" className="group flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
                        <div className="w-full sm:w-[280px] shrink-0 overflow-hidden rounded-lg bg-white dark:bg-slate-900 ring-1 ring-neutral-200 dark:ring-neutral-800 shadow-sm">
                            <img
                                src="/images/blog/autumn_camping.png"
                                alt="Autumn Camping"
                                className="w-full h-48 sm:h-36 object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                            />
                        </div>
                        <div className="flex-1 flex flex-col justify-center min-w-0 pr-4 relative">
                            <div className="flex items-center gap-4 mb-3">
                                <span className="text-xs font-bold tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">GEAR</span>
                                <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase">Sep 28, 2024</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary text-neutral-900 dark:text-neutral-100 transition-colors">
                                Ultralight Packing for Autumn
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                                Our essential checklist for staying warm without the weight during shoulder season.
                            </p>

                            {/* Arrow that slides in on hover */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-600 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>
                    </a>

                    {/* Divider */}
                    <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800"></div>

                    {/* Article 3 */}
                    <a href="#article-3" className="group flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
                        <div className="w-full sm:w-[280px] shrink-0 overflow-hidden rounded-lg bg-white dark:bg-slate-900 ring-1 ring-neutral-200 dark:ring-neutral-800 shadow-sm">
                            <img
                                src="/images/blog/lake_district.png"
                                alt="Lake District"
                                className="w-full h-48 sm:h-36 object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                            />
                        </div>
                        <div className="flex-1 flex flex-col justify-center min-w-0 pr-4 relative">
                            <div className="flex items-center gap-4 mb-3">
                                <span className="text-xs font-bold tracking-widest text-neutral-600 dark:text-neutral-400 bg-neutral-200 dark:bg-neutral-800 px-2 py-1 rounded">PHOTO</span>
                                <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase">Sep 15, 2024</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary text-primary transition-colors">
                                Reflections: The Lake District
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                                A photo essay capturing the moody atmosphere of England's most dramatic landscapes.
                            </p>

                            {/* Arrow that slides in on hover */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-600 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>
                    </a>

                </div>
            </motion.section>
        </main>
    );
};

export default BlogPage;
