import { Github, Linkedin, Mail } from 'lucide-react';
import { WavePath } from "@/components/ui/wave-path";

const Footer = () => {
    return (
        <footer className="bg-background border-t py-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex justify-center opacity-50">
                <WavePath />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm text-muted-foreground">
                            &copy; 2026 Robin Francis. All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="mailto:robinfrancis186@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                            <Mail size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/robin-francis-b43565175" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://github.com/robinfrancis186" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <Github size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
