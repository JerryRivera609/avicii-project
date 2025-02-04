"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css"; // Asegúrate de tener los estilos

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
const containerRef = useRef<HTMLDivElement>(null);
const sectionsRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    const container = containerRef.current;
    const sections = sectionsRef.current;

    if (container && sections) {
        let scrollTween = gsap.to(sections, {
            x: () => -(sections.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: () => `+=${sections.scrollWidth - window.innerWidth}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            },
        });

        return () => {
            scrollTween.kill();
        };
    }
}, []);

return (
    <div className="timeline-container" ref={containerRef}>
        <div className="timeline-sections" ref={sectionsRef}>
            <section className="timeline-item">🎧 Inicio</section>
            <section className="timeline-item">🎧 1989 - Nacimiento en Estocolmo</section>
            <section className="timeline-item">🔥 2011 - "Levels" lo hace famoso</section>
            <section className="timeline-item">🎤 2013 - "Wake Me Up" rompe récords</section>
            <section className="timeline-item">💿 2019 - Álbum póstumo "TIM"</section>
            <section className="timeline-item">💿 2019 - Álbum póstumo "TIM"</section>
            <section className="timeline-item">💿 2019 - Álbum póstumo "TIM"</section>
        </div>
    </div>
    );
};

export default Timeline;
