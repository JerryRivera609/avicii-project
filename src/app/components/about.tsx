"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";

const timeline = './timeline.png'
const timeline01 = './timeline01.jpg'
const timeline02 = './timeline02.jpg'

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
const containerRef = useRef<HTMLDivElement>(null);
const sectionsRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    const container = containerRef.current;
    const sections = sectionsRef.current;

    if (container && sections) {
      // Reseteamos el scroll al principio
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
                <section className="min-w-[80vw] h-[95vh] p-5 bg-[#05051b] rounded-[25px] flex justify-around items-center text-center">
                    <div>
                        <img src={timeline} className="rounded-xl" alt="" />
                    </div>
                        <div>
                        <h2 className="font-arizonia text-[8rem] leading-[7rem] mb-10">Remember Tim <br /> Berling</h2>
                        <div className="flex flex-col justify-center text-center">
                            <p className="font-sans mt-5 text-[1.5rem]" >- LIVE A LIFE YOU WILL REMEMBER -</p>
                            <p className="text-[1.2rem] tracking-[0.5rem]"> 1989 - 2018</p>
                        </div>
                    </div>
                </section>
                <section className="min-w-[80vw] h-[95vh] p-10 bg-[#222831] rounded-[25px] flex">
                    <div className="space-y-5">
                        <img src={timeline02} className="w-[300px] h-auto rounded-xl" alt="" />
                        <img src={timeline01} className="w-[300px] h-auto rounded-xl" alt="" />
                    </div>
                    <div>
                        <h2>Tim Berling - 1989</h2>
                    </div>
                </section>
                <section className="min-w-[80vw] h-[95vh] p-5">🔥 2011 - "Levels" lo hace famoso</section>
                <section className="min-w-[80vw] h-[95vh] p-5">🎤 2013 - "Wake Me Up" rompe récords</section>
                <section className="min-w-[80vw] h-[95vh] p-5">💿 2019 - Álbum póstumo "TIM"</section>
            </div>
        </div>
    );
};

export default Timeline;
