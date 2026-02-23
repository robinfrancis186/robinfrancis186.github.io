import { useEffect, Suspense, lazy } from 'react'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Lenis from 'lenis'

// Lazy load heavy sections
const Skills = lazy(() => import('./components/sections/Skills'))
const Projects = lazy(() => import('./components/sections/Projects'))
const Blog = lazy(() => import('./components/sections/Blog'))
const Contact = lazy(() => import('./components/sections/Contact'))
import Footer from './components/Footer'

function App() {

    useEffect(() => {
        // Initialize Lenis for smooth scrolling
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        })

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])



    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <div className="fixed top-4 right-4 z-[5001]">
                <ThemeToggle />
            </div>
            <Navbar />
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
            <Footer />
        </div>
    )
}

export default App
