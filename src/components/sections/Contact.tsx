import { DotScreenShader } from "@/components/ui/dot-shader-background";
import { Button } from "@/components/ui/neon-button";
import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `Portfolio Contact from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        window.location.href = `mailto:robinfrancis186@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="contact" className="h-[40rem] w-full rounded-md bg-white relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500  text-center font-sans font-bold">
                    Get in touch
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    I’m always open to collaborations, mentorship, community projects, or opportunities to build meaningful technology
                </p>
                <div className="relative z-10 mt-8">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 w-full">
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="rounded-lg border border-neutral-200/50 dark:border-neutral-800 focus:ring-2 focus:ring-primary/50 w-full bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm placeholder:text-neutral-500 text-neutral-900 dark:text-neutral-100 px-4 py-3 outline-none transition-all"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="rounded-lg border border-neutral-200/50 dark:border-neutral-800 focus:ring-2 focus:ring-primary/50 w-full bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm placeholder:text-neutral-500 text-neutral-900 dark:text-neutral-100 px-4 py-3 outline-none transition-all"
                            />
                        </div>
                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="rounded-lg border border-neutral-200/50 dark:border-neutral-800 focus:ring-2 focus:ring-primary/50 w-full relative z-10 mt-4 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm placeholder:text-neutral-500 text-neutral-900 dark:text-neutral-100 px-4 py-3 outline-none transition-all resize-none"
                        />
                        <Button neon={true} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground border-transparent font-medium py-6 text-sm">
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
            <div className="absolute inset-0 z-0">
                <DotScreenShader />
            </div>
        </section>
    );
};

export default Contact;
