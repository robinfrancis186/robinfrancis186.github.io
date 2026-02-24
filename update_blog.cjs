const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, 'src', 'pages', 'BlogPage.tsx');
let content = fs.readFileSync(targetPath, 'utf8');

const importsToAdd = `import { useEffect, useState } from 'react';
import { client, urlFor } from '../lib/sanity';
`;

content = content.replace(
    "import { ArrowRight } from 'lucide-react';",
    importsToAdd + "import { ArrowRight } from 'lucide-react';"
);

const hooksToAdd = `
    const [sanityPosts, setSanityPosts] = useState<any[]>([]);

    useEffect(() => {
        client.fetch(\`*[_type == "blogPost"] | order(date desc)\`).then((data) => {
            setSanityPosts(data);
        }).catch(console.error);
    }, []);

    const renderSanityPost = (post: any) => {
        const imageUrl = post.image && post.image.asset ? urlFor(post.image).width(800).url() : '';
        const title = post.title || 'Untitled Post';
        const excerpt = post.excerpt || '';
        const date = post.date ? new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '';
        const tag = post.tags && post.tags.length > 0 ? post.tags[0] : 'POST';

        return (
            <div key={post._id}>
                <a href="#" className="group flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
                    <div className="w-full sm:w-[280px] shrink-0 overflow-hidden rounded-lg bg-white dark:bg-slate-900 ring-1 ring-neutral-200 dark:ring-neutral-800 shadow-sm">
                        {imageUrl ? <img src={imageUrl} alt={title} className="w-full h-48 sm:h-36 object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" /> : <div className="w-full h-48 sm:h-36 bg-neutral-100 dark:bg-neutral-800" />}
                    </div>
                    <div className="flex-1 flex flex-col justify-center min-w-0 pr-4 relative">
                        <div className="flex items-center gap-4 mb-3">
                            <span className="text-xs font-bold tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">{tag.toUpperCase()}</span>
                            <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase">{date}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary text-neutral-900 dark:text-neutral-100 transition-colors">
                            {title}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm line-clamp-2">
                            {excerpt}
                        </p>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-600 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>
                </a>
                <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800 my-8 md:my-12"></div>
            </div>
        );
    };
`;

content = content.replace(
    "const BlogPage = () => {",
    `const BlogPage = () => {${hooksToAdd}`
);

const conditionalRenderPattern = `<div className="flex flex-col gap-8 md:gap-12">`;
const newConditionalRender = `<div className="flex flex-col gap-8 md:gap-12">
                    {sanityPosts.length > 0 ? (
                        sanityPosts.map(renderSanityPost)
                    ) : (
                        <>`;

content = content.replace(conditionalRenderPattern, newConditionalRender);

// close the conditional
const closeTags = `                    </a>

                </div>`;
const newCloseTags = `                    </a>
                        </>
                    )}
                </div>`;
content = content.replace(closeTags, newCloseTags);

fs.writeFileSync(targetPath, content);
console.log("BlogPage successfully updated.");
