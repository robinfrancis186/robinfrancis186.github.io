"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export const TextHoverEffect = ({
    text,
    duration,
}: {
    text: string;
    duration?: number;
    automatic?: boolean;
}) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const [hovered, setHovered] = useState(false);
    // Use motion values to avoid re-renders on mouse move
    const maskCx = useMotionValue("50%");
    const maskCy = useMotionValue("50%");

    const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
        if (svgRef.current) {
            const svgRect = svgRef.current.getBoundingClientRect();
            const cxPercentage = ((e.clientX - svgRect.left) / svgRect.width) * 100;
            const cyPercentage = ((e.clientY - svgRect.top) / svgRect.height) * 100;
            maskCx.set(`${cxPercentage}%`);
            maskCy.set(`${cyPercentage}%`);
        }
    };

    return (
        <svg
            ref={svgRef}
            width="100%"
            height="100%"
            viewBox="0 0 900 100"
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={handleMouseMove}
            className="select-none"
        >
            <defs>
                <linearGradient
                    id="textGradient"
                    gradientUnits="userSpaceOnUse"
                    cx="50%"
                    cy="50%"
                    r="25%"
                >
                    {hovered && (
                        <>
                            <stop offset="0%" stopColor="#0ea5e9" />
                            <stop offset="25%" stopColor="#3b82f6" />
                            <stop offset="50%" stopColor="#6366f1" />
                            <stop offset="75%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#d946ef" />
                        </>
                    )}
                </linearGradient>

                <motion.radialGradient
                    id="revealMask"
                    gradientUnits="userSpaceOnUse"
                    r="20%"
                    initial={{ cx: "50%", cy: "50%" }}
                    // @ts-ignore - motion values are valid for cx/cy in framer-motion
                    cx={maskCx}
                    // @ts-ignore
                    cy={maskCy}
                    transition={{ duration: duration ?? 0, ease: "easeOut" }}
                >
                    <stop offset="0%" stopColor="white" />
                    <stop offset="100%" stopColor="black" />
                </motion.radialGradient>
                <mask id="textMask">
                    <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="url(#revealMask)"
                    />
                </mask>
            </defs>
            {/* LCP Optimization: Make this visible immediately with low opacity */}
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                strokeWidth="1"
                className="fill-neutral-900/10 stroke-neutral-950 font-[helvetica] text-7xl font-bold dark:fill-neutral-100/10 dark:stroke-neutral-200"
                style={{ opacity: hovered ? 0.7 : 0.2 }}
            >
                {text}
            </text>
            <motion.text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                strokeWidth="1"
                className="fill-neutral-900/10 stroke-neutral-950 font-[helvetica] text-7xl font-bold dark:fill-neutral-100/10 dark:stroke-neutral-200"
                initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
                animate={{
                    strokeDashoffset: 0,
                    strokeDasharray: 1000,
                }}
                transition={{
                    duration: 2, // Reduced from 4s to 2s for better LCP perception
                    ease: "easeInOut",
                }}
            >
                {text}
            </motion.text>
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                stroke="url(#textGradient)"
                strokeWidth="1"
                mask="url(#textMask)"
                className="fill-transparent font-[helvetica] text-7xl font-bold"
            >
                {text}
            </text>
        </svg>
    );
};
