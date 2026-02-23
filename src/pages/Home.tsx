import { Suspense, lazy } from 'react'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'

// Lazy load heavy sections
const Skills = lazy(() => import('@/components/sections/Skills'))
const Projects = lazy(() => import('@/components/sections/Projects'))
const Blog = lazy(() => import('@/components/sections/Blog'))
const Contact = lazy(() => import('@/components/sections/Contact'))

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Suspense fallback={<div className="min-h-[50vh]" />}>
                <Skills />
                <Projects />
                <Blog />
                <Contact />
            </Suspense>
        </main>
    );
};

export default Home;
