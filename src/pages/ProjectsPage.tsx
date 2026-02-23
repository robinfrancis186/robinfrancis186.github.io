import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
    return (
        <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
            <motion.section
                id="portfolio"
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex sm:mb-8 mb-6 items-end justify-between">
                    <div className="">
                        <p className="text-[11px] sm:text-xs tracking-widest text-neutral-500 uppercase font-geist">(03) Selected Work</p>
                        <h3 className="mt-2 text-2xl sm:text-3xl tracking-tight font-geist font-medium">A few projects I'm proud of.</h3>
                    </div>
                    <a href="/#work" className="hidden sm:inline-flex items-center gap-2 ring-1 ring-neutral-200 hover:shadow text-sm text-neutral-700 font-geist bg-white rounded-full pt-2 pr-4 pb-2 pl-4 dark:bg-slate-900 dark:text-neutral-300 dark:ring-neutral-700 dark:hover:bg-slate-800 transition-colors">
                        View Portfolio
                        <ArrowUpRight className="w-5 h-5" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-4 sm:gap-5">
                        <a href="/#work" className="group relative overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800 bg-white dark:bg-slate-900 rounded-3xl shadow-sm">
                            <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/af5c4f11-0653-43c0-b21e-5b8cc085c9f3_800w.jpg" alt="Cloud Analytics dashboard project" className="h-56 w-full transition-transform duration-500 group-hover:scale-105 object-cover" />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <p className="text-xs text-white/80 font-geist">SaaS • Product</p>
                                <div className="mt-1 flex items-center justify-between">
                                    <h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Cloud Analytics</h4>
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
                                        <ArrowRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </div>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex bg-black/40 pt-6 pr-6 pb-6 pl-6 backdrop-blur-md items-center justify-center">
                                <div className="transform group-hover:translate-y-0 transition-transform duration-300 delay-75 text-center translate-y-8">
                                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3">Cloud Analytics</h3>
                                    <p className="text-sm text-white/90 leading-relaxed mb-4">Advanced analytics platform for SaaS companies. Real-time insights, custom dashboards, and predictive analytics.</p>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-white/20 text-white text-xs px-3 py-1.5 backdrop-blur-sm">
                                        <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                                        Live Project
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="/#work" className="group relative overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800 bg-white dark:bg-slate-900 rounded-3xl shadow-sm">
                            <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/60f49edd-2009-43cf-a12a-d82fd91aae5e_800w.jpg" alt="E-commerce platform" className="h-72 w-full transition-transform duration-500 group-hover:scale-105 object-cover" />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <p className="text-xs text-white/80 font-geist">E-commerce • Platform</p>
                                <div className="mt-1 flex items-center justify-between">
                                    <h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Shop Pro</h4>
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
                                        <ArrowRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </div>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex bg-black/40 pt-6 pr-6 pb-6 pl-6 backdrop-blur-md items-center justify-center">
                                <div className="transform group-hover:translate-y-0 transition-transform duration-300 delay-75 text-center translate-y-8">
                                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3">Shop Pro</h3>
                                    <p className="text-sm text-white/90 leading-relaxed mb-4">Modern e-commerce platform with automated inventory, seamless checkout, and real-time sales reporting.</p>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-white/20 text-white text-xs px-3 py-1.5 backdrop-blur-sm">
                                        <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                                        Live Project
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="/#work" className="group relative overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800 bg-white dark:bg-slate-900 rounded-3xl shadow-sm">
                            <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/27aa90c0-b947-4bfd-b8da-7cf0ab291ab1_800w.jpg" alt="Portfolio website" className="h-48 w-full transition-transform duration-500 group-hover:scale-105 object-cover" />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <p className="text-xs text-white/80 font-geist">Portfolio • Website</p>
                                <div className="mt-1 flex items-center justify-between">
                                    <h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Creative Hub</h4>
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
                                        <ArrowRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </div>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex bg-black/40 pt-6 pr-6 pb-6 pl-6 backdrop-blur-md items-center justify-center">
                                <div className="transform group-hover:translate-y-0 transition-transform duration-300 delay-75 text-center translate-y-8">
                                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3">Creative Hub</h3>
                                    <p className="text-sm text-white/90 leading-relaxed mb-4">Comprehensive portfolio platform with interactive showcases, client portals, and seamless onboarding flows.</p>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-white/20 text-white text-xs px-3 py-1.5 backdrop-blur-sm">
                                        <span className="h-2 w-2 rounded-full bg-amber-400"></span>
                                        In Development
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-4 sm:gap-5">
                        <a href="/#work" className="group relative overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800 bg-white dark:bg-slate-900 rounded-3xl shadow-sm">
                            <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b19e7d3a-309c-4d55-9373-80ca043c0f49_800w.jpg" alt="Product launch landing page" className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <p className="text-xs text-white/80 font-geist">Platform • Website</p>
                                <div className="mt-1 flex items-center justify-between">
                                    <h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Boltshift Launch</h4>
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
                                        <ArrowRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </div>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex bg-black/40 pt-6 pr-6 pb-6 pl-6 backdrop-blur-md items-center justify-center">
                                <div className="transform group-hover:translate-y-0 transition-transform duration-300 delay-75 text-center translate-y-8">
                                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3">Boltshift Launch</h3>
                                    <p className="text-sm text-white/90 leading-relaxed mb-4">High-conversion landing page for product launch with interactive 3D elements, dynamic pricing, and real-time analytics.</p>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-white/20 text-white text-xs px-3 py-1.5 backdrop-blur-sm">
                                        <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                                        Live Project
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="/#work" className="group relative overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800 bg-white dark:bg-slate-900 rounded-3xl shadow-sm">
                            <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a76e4f7e-e0f8-4732-8b99-5b3abe6fd91d_800w.jpg" alt="Mobile app design" className="h-56 w-full transition-transform duration-500 group-hover:scale-105 object-cover" />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <p className="text-xs text-white/80 font-geist">Mobile • App</p>
                                <div className="mt-1 flex items-center justify-between">
                                    <h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">FitTracker</h4>
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
                                        <ArrowRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </div>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex bg-black/40 pt-6 pr-6 pb-6 pl-6 backdrop-blur-md items-center justify-center">
                                <div className="transform group-hover:translate-y-0 transition-transform duration-300 delay-75 text-center translate-y-8">
                                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3">FitTracker</h3>
                                    <p className="text-sm text-white/90 leading-relaxed mb-4">Intelligent fitness app with personalized workout plans, real-time activity tracking, and community challenges.</p>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-white/20 text-white text-xs px-3 py-1.5 backdrop-blur-sm">
                                        <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                                        Beta Release
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="/#work" className="group relative overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800 bg-white dark:bg-slate-900 rounded-3xl shadow-sm">
                            <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cac77434-d322-40be-a298-4e2198a61175_800w.jpg" alt="Data visualization" className="h-56 w-full transition-transform duration-500 group-hover:scale-105 object-cover" />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <p className="text-xs text-white/80 font-geist">Data • Visualization</p>
                                <div className="mt-1 flex items-center justify-between">
                                    <h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">DataFlow</h4>
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
                                        <ArrowRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </div>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex bg-black/40 pt-6 pr-6 pb-6 pl-6 backdrop-blur-md items-center justify-center">
                                <div className="transform group-hover:translate-y-0 transition-transform duration-300 delay-75 text-center translate-y-8">
                                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3">DataFlow</h3>
                                    <p className="text-sm text-white/90 leading-relaxed mb-4">Real-time data visualization platform with live streaming, complex charting, and interactive filtering.</p>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-white/20 text-white text-xs px-3 py-1.5 backdrop-blur-sm">
                                        <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                                        Live Project
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-4 sm:gap-5">
                        <a href="/#work" className="group relative overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800 bg-white dark:bg-slate-900 rounded-3xl shadow-sm">
                            <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7df94c66-5d1e-4235-a476-1d2d8881a456_800w.jpg" alt="Design system" className="h-72 w-full transition-transform duration-500 group-hover:scale-105 object-cover" />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <p className="text-xs text-white/80 font-geist">Design • System</p>
                                <div className="mt-1 flex items-center justify-between">
                                    <h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Nexus System</h4>
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
                                        <ArrowRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </div>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex bg-black/40 pt-6 pr-6 pb-6 pl-6 backdrop-blur-md items-center justify-center">
                                <div className="transform group-hover:translate-y-0 transition-transform duration-300 delay-75 text-center translate-y-8">
                                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3">Nexus System</h3>
                                    <p className="text-sm text-white/90 leading-relaxed mb-4">Comprehensive design system with reusable components, clear guidelines, and seamless developer handoff.</p>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-white/20 text-white text-xs px-3 py-1.5 backdrop-blur-sm">
                                        <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                                        Production Ready
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="/#work" className="group relative overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800 bg-white dark:bg-slate-900 rounded-3xl shadow-sm">
                            <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b1350108-f0ef-4f66-83ae-fe50447f6f74_800w.jpg" alt="Brand identity and campaign visuals" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <p className="text-xs text-white/80 font-geist">Identity • Campaign</p>
                                <div className="mt-1 flex items-center justify-between">
                                    <h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Quotient Rebrand</h4>
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
                                        <ArrowRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </div>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex bg-black/40 pt-6 pr-6 pb-6 pl-6 backdrop-blur-md items-center justify-center">
                                <div className="transform group-hover:translate-y-0 transition-transform duration-300 delay-75 text-center translate-y-8">
                                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3">Quotient Rebrand</h3>
                                    <p className="text-sm text-white/90 leading-relaxed mb-4">Complete brand identity redesign with new typography, color palette, and digital brand guidelines.</p>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-white/20 text-white text-xs px-3 py-1.5 backdrop-blur-sm">
                                        <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                                        Live Project
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="/#work" className="group relative overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800 bg-white dark:bg-slate-900 rounded-3xl shadow-sm">
                            <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/68a7825c-0f07-4225-a8e0-d22929426aa3_800w.jpg" alt="Web application" className="h-56 w-full transition-transform duration-500 group-hover:scale-105 object-cover" />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <p className="text-xs text-white/80 font-geist">Web • Application</p>
                                <div className="mt-1 flex items-center justify-between">
                                    <h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">TaskFlow Pro</h4>
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
                                        <ArrowRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </div>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex bg-black/40 pt-6 pr-6 pb-6 pl-6 backdrop-blur-md items-center justify-center">
                                <div className="transform group-hover:translate-y-0 transition-transform duration-300 delay-75 text-center translate-y-8">
                                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3">TaskFlow Pro</h3>
                                    <p className="text-sm text-white/90 leading-relaxed mb-4">Real-time task management platform with live cursors, shared workspaces, and conflict-free synchronization.</p>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-white/20 text-white text-xs px-3 py-1.5 backdrop-blur-sm">
                                        <span className="h-2 w-2 rounded-full bg-amber-400"></span>
                                        Coming Soon
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="mt-8 sm:mt-10 flex justify-center">
                    <a href="/#work" className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-slate-900 ring-1 ring-neutral-200 dark:ring-neutral-700 px-5 py-3 text-sm text-neutral-700 dark:text-neutral-300 hover:shadow dark:hover:bg-slate-800 transition-colors font-geist">
                        View All Work
                        <ArrowUpRight className="w-5 h-5" />
                    </a>
                </div>
            </motion.section>
        </main>
    );
};

export default ProjectsPage;
