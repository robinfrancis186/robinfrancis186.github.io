const faqs = [
    {
        question: "Who is Robin Francis?",
        answer:
            "Robin Francis is an AI innovator, community leader, and 3× hackathon winner focused on accessible, people-centric technology and scalable digital solutions.",
    },
    {
        question: "What services does Robin offer?",
        answer:
            "Robin builds AI-driven products for accessibility, leads community engineering initiatives, and delivers scalable digital solutions for startups and social impact organizations.",
    },
    {
        question: "How can I contact Robin Francis?",
        answer:
            "Use the contact form or email robinfrancis186@gmail.com. You can also connect via LinkedIn at https://www.linkedin.com/in/robin-francis-b43565175.",
    },
    {
        question: "Where can I see Robin's work and achievements?",
        answer:
            "Visit the Projects and Achievements sections to see recent AI builds, community initiatives, and awards including IBM watsonx GenAI Challenge 1st Runner-Up and IEEE R10 Outstanding Volunteer Award 2024.",
    },
];

const FAQ = () => {
    return (
        <section id="faq" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        Quick answers about who I am, what I build, and how to get in touch.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid gap-4">
                    {faqs.map((faq) => (
                        <div
                            key={faq.question}
                            className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-sm p-6 text-left"
                        >
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                                {faq.question}
                            </h3>
                            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;




