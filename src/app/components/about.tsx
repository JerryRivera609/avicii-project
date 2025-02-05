"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
const containerRef = useRef<HTMLDivElement>(null);
const sectionsRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    const container = containerRef.current;
    const sections = sectionsRef.current;

    if (container && sections) {
        window.scrollTo({ top: 0, behavior: "smooth" });

        gsap.to(sections, {
        x: () => -1 * (sections.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${sections.scrollWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            },
        });
    }
}, []);

    return (
        <div className="timeline-container" ref={containerRef}>
            <div className="timeline-sections" ref={sectionsRef}>
                <section className="timeline-item">🎧 1989 - Nacimiento en Estocolmo</section>
                <section className="timeline-item">🔥 2011 - "Levels" lo hace famoso</section>
                <section className="timeline-item">🎤 2013 - "Wake Me Up" rompe récords</section>
                <section className="timeline-item">💿 2019 - Álbum póstumo "TIM"</section>
            </div>
        </div>
    );
};

export default Timeline;
