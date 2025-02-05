"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";
const timeline = '/timeline.png'
const timelinea01 = '/timeline01.jpg'


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
            <section className="timeline-item flex flex-col"
            style={{ backgroundImage: `url(${timeline})` }}
            >
                <div>
                    <h2 className="font-arizonia text-[8rem] leading-[7rem] mb-10">Remember Tim <br /> Berling</h2>
                    <div className="flex flex-col justify-center text-center">
                        <p className="font-sans mt-5" >- LIVE A LIFE YOU WILL REMEMBER -</p>
                        <p className="text-[1rem] tracking-[0.5rem]"> 1989 - 2018</p>
                    </div>
                </div>
            </section>
                <section className="timeline-item flex flex-col"
                style={{ backgroundImage: `url(${timelinea01})` }}
                >
                    <div className="justify-end items-start">
                        <h2 className="font-lato text-[3rem]">TIM BERLING</h2>
                        <p>08 de septiembre de 1989</p>
                        <p>Estocolmo - Suecia</p>
                        <p>Desde joven, mostró una fuerte pasión por la música y la creatividad. Inspirado por artistas como Daft Punk y Swedish House Mafia, comenzó a experimentar con la producción musical desde su adolescencia.</p>
                    </div>
                </section>
                <section className="timeline-item">🔥 2011 - "Levels" lo hace famoso</section>
                <section className="timeline-item">🎤 2013 - "Wake Me Up" rompe récords</section>
                <section className="timeline-item">💿 2019 - Álbum póstumo "TIM"</section>
            </div>
        </div>
    );
};

export default Timeline;
