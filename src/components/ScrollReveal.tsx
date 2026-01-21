import React, { useRef } from 'react';
import { motion, useInView, Variant } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    width?: 'fit-content' | '100%';
    animation?: 'fade' | 'slide' | 'scale' | 'none';
    delay?: number;
    duration?: number;
}

const animations = {
    fade: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    },
    slide: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    },
    scale: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
    none: {
        hidden: {},
        visible: {},
    },
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    className,
    width = '100%',
    animation = 'fade',
    delay = 0,
    duration = 0.5
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    const selectedAnimation = animations[animation];

    return (
        <div
            ref={ref}
            style={{ width }}
            className={cn("relative overflow-visible", className)}
        >
            <motion.div
                variants={{
                    hidden: selectedAnimation.hidden,
                    visible: selectedAnimation.visible,
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ScrollReveal;
