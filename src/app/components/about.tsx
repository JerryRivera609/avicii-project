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
                            <p className="font-sans mt-5 text-[1.5rem]" >LIVE A LIFE YOU WILL REMEMBER</p>
                            <p className="text-[1.2rem] tracking-[0.5rem]"> 1989 - 2018</p>
                            <p>◢◤</p>
                        </div>
                    </div>
                </section>
                <section className="min-w-[80vw] h-[95vh] p-10 bg-[#222831] rounded-[25px] flex gap-4">
                    <div className="space-y-5 w-1/3 flex flex-col justify-center">
                        <img src={timeline02} className="w-[300px] h-auto rounded-xl" alt="" />
                        <img src={timeline01} className="w-[300px] h-auto rounded-xl" alt="" />
                    </div>
                    <div className="flex flex-col text-[1.2rem] w-2/3 justify-center items-center text-center">
                        <h2 className="font-lato text-[3rem]">TIM BERLING - 1989</h2>
                        <p>Tim Bergling was born on September 8, 1989, in Stockholm, Sweden. From a young age, he showed a strong passion for music and creativity. Inspired by artists like Daft Punk and Swedish House Mafia, he began experimenting with music production during his teenage years.</p>
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
