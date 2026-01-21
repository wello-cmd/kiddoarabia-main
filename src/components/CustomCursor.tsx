import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useInteraction } from '@/contexts/InteractionContext';

const CustomCursor = () => {
    const { isHovering } = useInteraction();
    const [isVisible, setIsVisible] = useState(false);

    // Mouse position values
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Spring configurations for "Magnetic" feel
    const cursorSpringConfig = { damping: 20, stiffness: 400, mass: 0.5 }; // Tight and responsive for the dot
    const followerSpringConfig = { damping: 30, stiffness: 200, mass: 0.8 }; // Smooth trail for the ring

    const cursorX = useSpring(mouseX, cursorSpringConfig);
    const cursorY = useSpring(mouseY, cursorSpringConfig);

    const followerX = useSpring(mouseX, followerSpringConfig);
    const followerY = useSpring(mouseY, followerSpringConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible && e.clientX > 0) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        // Bind events
        window.addEventListener('mousemove', moveCursor);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        // Hide on touch
        if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
            setIsVisible(false);
        }

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

    return (
        <>
            {/* Main Pointer (Dot) */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-exclusion hidden lg:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <motion.div
                    className="bg-white rounded-full"
                    animate={{
                        width: isHovering ? 8 : 8,
                        height: isHovering ? 8 : 8,
                        scale: isHovering ? 0 : 1 // Hide dot when hovering for cleaner look
                    }}
                />
            </motion.div>

            {/* Follower Ring (The Magnet) */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference hidden lg:block"
                style={{
                    x: followerX,
                    y: followerY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <motion.div
                    className="border border-white/50 rounded-full"
                    animate={{
                        width: isHovering ? 60 : 24,
                        height: isHovering ? 60 : 24,
                        backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)',
                        borderWidth: isHovering ? '1px' : '1.5px',
                        borderColor: isHovering ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.5)',
                        scale: isVisible ? 1 : 0
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25
                    }}
                />
            </motion.div>
        </>
    );
};

export default CustomCursor;
