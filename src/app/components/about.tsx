"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";
import Tim from "@/app/components/about/tim";
import Tim1989 from "@/app/components/about/tim-1989"
import Tim2011 from "@/app/components/about/tim-2011"
import Tim2013 from "@/app/components/about/tim-2013"
import Tim2015 from "@/app/components/about/tim-2015"

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
                <Tim/>
                <Tim1989/>
                <Tim2011/>
                <Tim2013/>
                <Tim2015/>
                
                <section className="min-w-[80vw] h-[95vh] p-5 bg-[url('/section4.png')] bg-cover flex bg-center rounded-[25px]">
                <h2>Tim - 2012</h2>
                </section>
                <section className="min-w-[80vw] h-[95vh] p-5 bg-[url('/section4.png')] bg-cover flex bg-center rounded-[25px]">
                <h2>Tim - 20</h2>
                </section>
            </div>
        </div>
    );
};

export default About;
