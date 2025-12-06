"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CarouselItem {
    id: string | number;
    title: string;
    category: string;
    image: string;
    excerpt?: string;
}

interface Carousel3DProps {
    items: CarouselItem[];
    autoPlay?: boolean;
    interval?: number;
}

export const Carousel3D = ({
    items,
    autoPlay = false,
    interval = 5000,
}: Carousel3DProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    }, [items.length]);

    const prev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    }, [items.length]);

    useEffect(() => {
        if (!autoPlay) return;
        const timer = setInterval(next, interval);
        return () => clearInterval(timer);
    }, [autoPlay, interval, next]);

    const getCardStyle = (index: number) => {
        const total = items.length;
        // Calculate relative position in a circular manner
        let relativePos = (index - currentIndex) % total;
        if (relativePos < -total / 2) relativePos += total;
        if (relativePos > total / 2) relativePos -= total;

        let transform = "";
        let opacity = 1;
        let filter = "brightness(1)";
        let zIndex = 1;
        let ringClass = "ring-1 ring-white/10";
        let shadow = "";
        let bgClass = "";

        if (relativePos === 0) {
            transform = "translateX(0) scale(1) rotateY(0deg)";
            opacity = 1;
            zIndex = 10;
            ringClass = "ring-2 ring-blue-500/40";
            shadow = "0 20px 60px rgba(59, 130, 246, 0.3)";
            bgClass = "bg-blue-500/10";
        } else if (relativePos === 1 || relativePos === -total + 1) {
            transform = "translateX(180px) scale(0.9) rotateY(-10deg)";
            opacity = 0.6;
            filter = "brightness(0.75)";
            zIndex = 5;
        } else if (relativePos === -1 || relativePos === total - 1) {
            transform = "translateX(-180px) scale(0.9) rotateY(10deg)";
            opacity = 0.6;
            filter = "brightness(0.75)";
            zIndex = 5;
        } else if (relativePos === 2 || relativePos === -total + 2) {
            transform = "translateX(360px) scale(0.85) rotateY(-20deg)";
            opacity = 0.4;
            filter = "brightness(0.6)";
            zIndex = 2;
        } else if (relativePos === -2 || relativePos === total - 2) {
            transform = "translateX(-360px) scale(0.85) rotateY(20deg)";
            opacity = 0.4;
            filter = "brightness(0.6)";
            zIndex = 2;
        } else {
            // Hide other cards or position them far away
            transform = `translateX(${relativePos * 180}px) scale(0.75) rotateY(${-relativePos * 15
                }deg)`;
            opacity = 0;
            filter = "brightness(0.5)";
            zIndex = 1;
        }

        return {
            style: {
                transform,
                opacity,
                filter,
                zIndex,
                boxShadow: shadow,
            },
            className: cn(
                "carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden transition-all duration-500 ease-out",
                ringClass,
                bgClass
            ),
        };
    };

    return (
        <div className="flex mt-16 relative items-center justify-center" style={{ perspective: "1200px" }}>
            <button
                onClick={prev}
                className="absolute left-4 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/80 ring-1 ring-black/5 hover:bg-white shadow-sm transition text-neutral-800"
                aria-label="Previous"
            >
                <ArrowLeft className="h-5 w-5" />
            </button>

            <div className="relative w-full max-w-md h-[500px] flex items-center justify-center">
                <div
                    className="flex transition-transform duration-500 ease-out absolute top-0 right-0 bottom-0 left-0 items-center justify-center"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {items.map((item, index) => {
                        const { style, className } = getCardStyle(index);
                        return (
                            <div key={item.id} className={className} style={style}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                                {/* Featured Badge for center item */}
                                {index === currentIndex && (
                                    <div className="absolute top-6 right-6">
                                        <div className="inline-flex items-center gap-1 rounded-full bg-blue-500 px-3 py-1.5 text-xs font-medium text-white">
                                            <span className="relative flex h-2 w-2 mr-1">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                            </span>
                                            Featured
                                        </div>
                                    </div>
                                )}

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20 mb-3 backdrop-blur-md">
                                        <span className="text-blue-400 font-bold">•</span>
                                        <span className="text-white">{item.category}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                                        {item.title}
                                    </h3>
                                    {item.excerpt && index === currentIndex && (
                                        <p className="text-sm text-neutral-300 line-clamp-2">
                                            {item.excerpt}
                                        </p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <button
                onClick={next}
                className="absolute right-4 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/80 ring-1 ring-black/5 hover:bg-white shadow-sm transition text-neutral-800"
                aria-label="Next"
            >
                <ArrowRight className="h-5 w-5" />
            </button>
        </div>
    );
};
