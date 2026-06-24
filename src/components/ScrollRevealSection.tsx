import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealSectionProps {
    children: ReactNode;
    index: number;
}

export function ScrollRevealSection({ children, index }: ScrollRevealSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
            // Skip animations if user prefers reduced motion
            section.style.opacity = "1";
            section.style.transform = "none";
            return;
        }

        // Set initial state
        section.style.opacity = "0";
        section.style.transform = "translateY(60px) scale(0.95)";
        section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";

        const handleScroll = () => {
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Start animation when section is 20% into viewport
            const triggerPoint = windowHeight * 0.8;

            if (rect.top < triggerPoint) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0) scale(1)";
            }
        };

        // Initial check
        handleScroll();

        // Add scroll listener
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div ref={sectionRef} style={{ willChange: "opacity, transform" }}>
            {children}
        </div>
    );
}
