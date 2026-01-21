import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import { useInteraction } from "@/contexts/InteractionContext";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const TiltCard = ({ children, className = "", onClick }: TiltCardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { setCursorType, setIsHovering } = useInteraction();

    // Cache dimensions to avoid layout thrashing
    const [bounds, setBounds] = useState({ width: 0, height: 0, left: 0, top: 0 });

    const x = useMotionValue(0.5); // Start at center
    const y = useMotionValue(0.5);

    const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseY, [0, 1], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseX, [0, 1], ["-5deg", "5deg"]);

    // Opacity of glare based on distance from center
    const glareOpacity = useTransform(
        [mouseX, mouseY],
        ([latestX, latestY]: any[]) => {
            const dist = Math.sqrt(Math.pow(latestX - 0.5, 2) + Math.pow(latestY - 0.5, 2));
            return dist * 0.4;
        }
    );

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setBounds({
                width: rect.width,
                height: rect.height,
                left: rect.left,
                top: rect.top
            });
        }
        setCursorType('pointer');
        setIsHovering(true);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        // If somehow bounds aren't set, fallback to center to avoid NaN
        if (bounds.width === 0) return;

        // Use e.clientX/Y relative to the cached bounds
        // NOTE: If the page scrolls while hovering, bounds.top might be stale relative to viewport.
        // For a TiltCard used in a scrollable list, getting rect on Enter is 'okay' 
        // but e.nativeEvent.offsetX is often more reliable for internal coordinates.

        const xPct = (e.clientX - bounds.left) / bounds.width;
        const yPct = (e.clientY - bounds.top) / bounds.height;

        // Clamp to 0-1 to prevent erratic flipping
        x.set(Math.max(0, Math.min(1, xPct)));
        y.set(Math.max(0, Math.min(1, yPct)));
    };

    const handleMouseLeave = () => {
        x.set(0.5);
        y.set(0.5);
        setCursorType('default');
        setIsHovering(false);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onClick={onClick}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className={`relative active:scale-95 transition-transform duration-200 ease-out ${className}`}
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="relative h-full"
            >
                {children}
            </div>

            {/* Glare effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none rounded-xl z-20"
                style={{
                    opacity: glareOpacity
                }}
            />
        </motion.div>
    );
};

export default TiltCard;
