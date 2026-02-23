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
                                <div className="relative flex items-center">
                                    <div className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] uppercase tracking-wider font-mono flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></span>
                                        Live
                                    </div>
                                    <div className="absolute -right-4 -top-3 animate-[bounce_3s_infinite_ease-in-out]">
                                        <svg className="w-3 h-3 text-purple-500 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor" style={{ transform: "rotate(-25deg)" }}>
                                            <path d="M5.5 3.21l10.8 5.4a1 1 0 0 1 .16 1.7l-4.2 2.1 2.1 4.2a1 1 0 0 1-1.8.9l-2.1-4.2-4.2 2.1a1 1 0 0 1-1.45-1.09l1.69-11.11z"></path>
                                        </svg>
                                    </div>
                                </div>
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
                                <div className="relative flex items-center">
                                    <div className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] uppercase tracking-wider font-mono flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" style={{ animationDelay: "0.5s" }}></span>
                                        Live
                                    </div>
                                    <div className="absolute -right-4 -top-3 animate-[bounce_4s_infinite_ease-in-out]">
                                        <svg className="w-3 h-3 text-blue-500 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor" style={{ transform: "rotate(15deg)" }}>
                                            <path d="M5.5 3.21l10.8 5.4a1 1 0 0 1 .16 1.7l-4.2 2.1 2.1 4.2a1 1 0 0 1-1.8.9l-2.1-4.2-4.2 2.1a1 1 0 0 1-1.45-1.09l1.69-11.11z"></path>
                                        </svg>
                                    </div>
                                </div>
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
                                <div className="relative flex items-center">
                                    <div className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] uppercase tracking-wider font-mono flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" style={{ animationDelay: "1s" }}></span>
                                        Live
                                    </div>
                                    <div className="absolute -right-5 -top-2 animate-[bounce_3.5s_infinite_ease-in-out]">
                                        <svg className="w-3 h-3 text-orange-500 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor" style={{ transform: "rotate(-5deg)" }}>
                                            <path d="M5.5 3.21l10.8 5.4a1 1 0 0 1 .16 1.7l-4.2 2.1 2.1 4.2a1 1 0 0 1-1.8.9l-2.1-4.2-4.2 2.1a1 1 0 0 1-1.45-1.09l1.69-11.11z"></path>
                                        </svg>
                                    </div>
                                </div>
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

            {/* Live Cursor Showcase Section added at the bottom */}
            <motion.section
                className="mt-32 pt-20 border-t border-neutral-200 dark:border-neutral-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mx-auto">
                    <div className="order-2 lg:order-1 aspect-square lg:aspect-video overflow-hidden group bg-[#0A0A0A] border-white/10 border rounded-2xl relative">
                        <style dangerouslySetInnerHTML={{
                            __html: `
                            @keyframes cursor-float-1 {
                                0%, 100% { transform: translate3d(-20px, 40px, 0); }
                                33% { transform: translate3d(60px, -30px, 0); }
                                66% { transform: translate3d(-40px, -10px, 0); }
                            }
                            @keyframes cursor-float-2 {
                                0%, 100% { transform: translate3d(40px, -40px, 0); }
                                50% { transform: translate3d(-30px, 50px, 0); }
                            }
                            @keyframes comment-pop {
                                0% { opacity: 0; transform: scale(0.8) translateY(10px); }
                                10%, 90% { opacity: 1; transform: scale(1) translateY(0); }
                                100% { opacity: 0; transform: scale(0.8) translateY(10px); }
                            }
                        `}} />

                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]"></div>

                        {/* Central Scene Container */}
                        <div className="flex overflow-hidden absolute top-0 right-0 bottom-0 left-0 perspective-[800px] items-center justify-center">
                            {/* 3D Component */}
                            <div className="relative w-64 h-40 bg-[#111]/90 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl transform transition-transform duration-700 ease-out group-hover:rotate-x-6 group-hover:rotate-y-6 flex flex-col p-1 z-10" style={{ transform: "rotateX(12deg) rotateY(-12deg)" }}>
                                {/* Window Bar */}
                                <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                                    </div>
                                    <div className="w-20 h-1.5 bg-white/5 rounded-full ml-auto"></div>
                                </div>
                                {/* Content */}
                                <div className="flex-1 p-3 grid grid-cols-2 gap-3 relative">
                                    <div className="group-hover:bg-purple-500/10 transition-colors bg-purple-500/5 border-purple-500/10 border rounded"></div>
                                    <div className="bg-blue-500/5 rounded border border-blue-500/10 group-hover:bg-blue-500/10 transition-colors"></div>

                                    {/* Comment Floating Attached */}
                                    <div className="absolute -right-24 top-0 bg-neutral-800 border border-white/10 rounded-lg p-3 shadow-xl z-50 w-40 animate-[comment-pop_8s_ease-in-out_infinite] origin-bottom-left">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <div className="flex text-[9px] font-bold text-black bg-gradient-to-tr from-green-500 to-emerald-400 w-5 h-5 border-white/10 border rounded-full items-center justify-center">JD</div>
                                            <span className="text-[9px] text-neutral-500">Just now</span>
                                        </div>
                                        <div className="text-[11px] text-neutral-300 leading-snug">
                                            Can we make this texture more responsive?
                                        </div>
                                        {/* Connector */}
                                        <div className="absolute bottom-4 -left-1.5 w-3 h-3 bg-neutral-800 border-b border-l border-white/10 transform rotate-45"></div>
                                    </div>
                                </div>
                            </div>

                            {/* User 1 Cursor (Sarah - Purple) */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                                <div className="animate-[cursor-float-1_12s_infinite_ease-in-out]">
                                    <svg className="w-5 h-5 text-purple-500 drop-shadow-[0_4px_12px_rgba(168,85,247,0.5)]" viewBox="0 0 24 24" fill="currentColor" style={{ transform: "rotate(-25deg)" }}>
                                        <path d="M5.5 3.21l10.8 5.4a1 1 0 0 1 .16 1.7l-4.2 2.1 2.1 4.2a1 1 0 0 1-1.8.9l-2.1-4.2-4.2 2.1a1 1 0 0 1-1.45-1.09l1.69-11.11z"></path>
                                    </svg>
                                    <div className="ml-3.5 -mt-1 px-2 py-0.5 rounded-full bg-purple-500 text-[10px] font-bold text-white shadow-sm whitespace-nowrap opacity-90">Sarah</div>
                                </div>
                            </div>

                            {/* User 2 Cursor (John - Green) */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                                <div className="animate-[cursor-float-2_15s_infinite_ease-in-out_1s]">
                                    <svg className="w-5 h-5 text-green-500 drop-shadow-[0_4px_12px_rgba(34,197,94,0.5)]" viewBox="0 0 24 24" fill="currentColor" style={{ transform: "rotate(-25deg)" }}>
                                        <path d="M5.5 3.21l10.8 5.4a1 1 0 0 1 .16 1.7l-4.2 2.1 2.1 4.2a1 1 0 0 1-1.8.9l-2.1-4.2-4.2 2.1a1 1 0 0 1-1.45-1.09l1.69-11.11z"></path>
                                    </svg>
                                    <div className="ml-3.5 -mt-1 px-2 py-0.5 rounded-full bg-green-500 text-[10px] font-bold text-black shadow-sm whitespace-nowrap opacity-90">John</div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Status Bar */}
                        <div className="flex absolute right-4 bottom-4 left-4 items-center justify-between">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full border-2 border-[#0A0A0A] bg-purple-500 flex items-center justify-center text-xs font-bold text-white">S</div>
                                <div className="w-8 h-8 rounded-full border-2 border-[#0A0A0A] bg-green-500 flex items-center justify-center text-xs font-bold text-black">J</div>
                                <div className="w-8 h-8 rounded-full border-2 border-[#0A0A0A] bg-neutral-700 flex items-center justify-center text-xs text-white text-[10px]">+2</div>
                            </div>
                            <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] uppercase tracking-wider font-mono flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                Live
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h3 className="text-3xl font-medium text-neutral-900 dark:text-white tracking-tight font-display mb-4">
                            Multiplayer by Default
                        </h3>
                        <p className="leading-relaxed text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                            Work together in real-time. See cursors, share component states,
                            and leave comments directly in 3D space. No more screen sharing.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 text-primary">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                Live cursor tracking
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 text-primary">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                Threaded spatial comments
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 text-primary">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                Version history & rollback
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.section>
        </main>
    );
};

export default BlogPage;
