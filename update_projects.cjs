const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, 'src', 'pages', 'ProjectsPage.tsx');
let content = fs.readFileSync(targetPath, 'utf8');

const importsToAdd = `import { useEffect, useState } from 'react';
import { client, urlFor } from '../lib/sanity';
`;

content = content.replace(
    "import { ArrowUpRight, ArrowRight } from 'lucide-react';",
    importsToAdd + "\nimport { ArrowUpRight, ArrowRight } from 'lucide-react';"
);

const hooksToAdd = `
    const [sanityProjects, setSanityProjects] = useState<any[]>([]);

    useEffect(() => {
        client.fetch(\`*[_type == "project"] | order(_createdAt desc)\`).then((data) => {
            setSanityProjects(data);
        }).catch(console.error);
    }, []);

    const getColumns = (items: any[]) => {
        const cols: any[][] = [[], [], []];
        items.forEach((item, i) => cols[i % 3].push(item));
        return cols;
    };

    const renderProjectCard = (project: any, index: number) => {
        const imageUrl = project.image && project.image.asset ? urlFor(project.image).width(800).url() : '';
        const title = project.title || 'Untitled Project';
        const category = project.category || 'Category';
        const link = project.link || '/#work';
        
        const heights = ['h-56', 'h-72', 'h-48', 'h-64'];
        const heightClass = heights[index % heights.length];

        return (
            <a key={project._id} href={link} className="group relative overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800 bg-white dark:bg-slate-900 rounded-3xl shadow-sm">
                {imageUrl ? <img src={imageUrl} alt={title} className={\`\${heightClass} w-full transition-transform duration-500 group-hover:scale-105 object-cover\`} /> : <div className={\`\${heightClass} w-full bg-neutral-100 dark:bg-neutral-800\`}></div>}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-xs text-white/80 font-geist">{category}</p>
                    <div className="mt-1 flex items-center justify-between">
                        <h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">{title}</h4>
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
                            <ArrowRight className="h-4 w-4" />
                        </span>
                    </div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex bg-black/40 pt-6 pr-6 pb-6 pl-6 backdrop-blur-md items-center justify-center">
                    <div className="transform group-hover:translate-y-0 transition-transform duration-300 delay-75 text-center translate-y-8">
                        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3">{title}</h3>
                        <p className="text-sm text-white/90 leading-relaxed mb-4">View project details.</p>
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/20 text-white text-xs px-3 py-1.5 backdrop-blur-sm">
                            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                            Live Project
                        </div>
                    </div>
                </div>
            </a>
        );
    };

    const sanityCols = sanityProjects.length > 0 ? getColumns(sanityProjects) : null;
`;

content = content.replace(
    "const ProjectsPage = () => {",
    `const ProjectsPage = () => {${hooksToAdd}`
);

const conditionalRenderPattern = `<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">`;
const newConditionalRender = `<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                    {sanityCols ? (
                        <>
                            <div className="flex flex-col gap-4 sm:gap-5">
                                {sanityCols[0].map((p, i) => renderProjectCard(p, i))}
                            </div>
                            <div className="flex flex-col gap-4 sm:gap-5">
                                {sanityCols[1].map((p, i) => renderProjectCard(p, i))}
                            </div>
                            <div className="flex flex-col gap-4 sm:gap-5">
                                {sanityCols[2].map((p, i) => renderProjectCard(p, i))}
                            </div>
                        </>
                    ) : (
                        <>`;

content = content.replace(conditionalRenderPattern, newConditionalRender);

// close the conditional
const closeTags = `                    </div>
                </div>`;
const newCloseTags = `                    </div>
                        </>
                    )}
                </div>`;
content = content.replace(closeTags, newCloseTags);

fs.writeFileSync(targetPath, content);
console.log("ProjectsPage successfully updated.");
