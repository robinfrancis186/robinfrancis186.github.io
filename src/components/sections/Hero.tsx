import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';
import { BeamsBackground } from '@/components/ui/beams-background';

const Hero = () => {
    // Inject Unicorn Studio once for the hero background
    useEffect(() => {
        if (typeof window === 'undefined') return;

        let cancelled = false;

        const tryInit = () => {
            if (cancelled) return false;
            // @ts-ignore - provided by Unicorn script
            const us = window.UnicornStudio;
            if (us?.init) {
                us.init();
                return true;
            }
            return false;
        };

        const existingScript = document.querySelector<HTMLScriptElement>('script[data-unicornstudio]');

        // If script already present, attempt init immediately
        if (existingScript) {
            tryInit();
        } else {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js';
            script.async = true;
            script.dataset.unicornstudio = 'true';
            script.onload = () => {
                tryInit();
            };

            (document.head || document.body).appendChild(script);
        }

        // Retry a few times in case script loads slowly
        const retryInterval = setInterval(() => {
            if (tryInit()) {
                clearInterval(retryInterval);
            }
        }, 500);
        const retryTimeout = setTimeout(() => clearInterval(retryInterval), 5000);

        return () => {
            cancelled = true;
            clearInterval(retryInterval);
            clearTimeout(retryTimeout);
        };
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-background"
        >
            {/* Base background to respect light/dark theme */}
            <div className="absolute inset-0 z-0 bg-background" />
            {/* Background stack with reduced opacity for readability */}
            <BeamsBackground className="absolute inset-0 z-4 pointer-events-none opacity-25" />
            <div
                data-us-project="cqcLtDwfoHqqRPttBbQE"
                className="absolute inset-0 z-5 w-full h-full pointer-events-none opacity-15"
            />

            <div className="container mx-auto px-4 z-10 relative">
                <h1 className="sr-only">Robin Francis | AI Innovator, Community Leader, 3× Hackathon Winner</h1>
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="text-lg md:text-xl font-medium text-primary mb-6 tracking-wide uppercase mt-6 md:mt-10">
                            Hello, I'm
                        </h2>

                        <div className="h-32 md:h-48 flex items-center justify-center mb-8">
                            <TextHoverEffect text="ROBIN FRANCIS" />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="flex items-center justify-center gap-4 text-xl md:text-3xl text-slate-900 dark:text-slate-100 mb-10 font-light tracking-tight"
                        >
                            <span>AI Innovator</span>
                            <span className="text-primary opacity-50">|</span>
                            <span>Community Leader</span>
                            <span className="text-primary opacity-50">|</span>
                            <span>3× Hackathon Winner</span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-lg md:text-xl text-slate-900 dark:text-slate-100 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
                        >
                            Building technology that empowers people and creates meaningful social impact. <br className="hidden md:block" />
                            I focus on AI for accessibility, community-driven engineering, and scalable digital solutions.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
                        >
                            <a href="#projects" className="group relative inline-block">
                                <button className="group hover:shadow-sky-500/30 hover:shadow-2xl
                                    hover:scale-[1.02] hover:-translate-y-1 active:scale-95
                                    transition-all duration-500 ease-out cursor-pointer
                                    hover:border-sky-400/60 overflow-hidden bg-gradient-to-br
                                    from-sky-900/40 via-black-900/60 to-black/80
                                    border-sky-500/30 border-2 rounded-full pt-3 pr-6 pb-3
                                    pl-6 relative shadow-2xl backdrop-blur-xl">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent
                                        via-sky-400/30 to-transparent -translate-x-full
                                        group-hover:translate-x-full transition-transform
                                        duration-1000 ease-out"></div>
                                    <div className="group-hover:opacity-100 transition-opacity duration-500
                                        bg-gradient-to-r from-sky-500/10 via-sky-400/20
                                        to-sky-500/10 opacity-0 rounded-2xl absolute top-0 right-0
                                        bottom-0 left-0"></div>
                                    <div className="relative z-10 flex items-center gap-3">
                                        <div className="flex-1 text-left">
                                            <p className="group-hover:text-white transition-colors duration-300
                                                text-base font-semibold text-white font-geist drop-shadow-sm">View Projects</p>
                                        </div>
                                        <div className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                                            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-5 h-5 text-white">
                                                <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </button>
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3.5 border border-input bg-background/30 backdrop-blur-md hover:bg-white/10 hover:text-white rounded-full font-medium transition-all z-20 text-base"
                            >
                                Contact Me
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="flex items-center justify-center gap-8 z-20 relative"
                        >
                            <a href="mailto:robinfrancis186@gmail.com" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300">
                                <Mail size={28} strokeWidth={1.5} />
                            </a>
                            <a href="https://www.linkedin.com/in/robin-francis-b43565175" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300">
                                <Linkedin size={28} strokeWidth={1.5} />
                            </a>
                            <a href="tel:+918078256598" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300">
                                <Phone size={28} strokeWidth={1.5} />
                            </a>
                            <a href="https://github.com/robinfrancis186" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300">
                                <Github size={28} strokeWidth={1.5} />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
