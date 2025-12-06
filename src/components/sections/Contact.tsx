import { DotScreenShader } from "@/components/ui/dot-shader-background";
import { Button } from "@/components/ui/neon-button";

const Contact = () => {
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
                    <form className="space-y-4">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="rounded-lg border border-neutral-200 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-white placeholder:text-neutral-400 text-neutral-900 px-4 py-2"
                        />
                        <textarea
                            placeholder="Your message"
                            rows={4}
                            className="rounded-lg border border-neutral-200 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-white placeholder:text-neutral-400 text-neutral-900 px-4 py-2"
                        />
                        <Button neon={true} className="w-full bg-teal-500 hover:bg-teal-600 text-white border-transparent">
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
