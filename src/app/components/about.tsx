"use client";

import { useEffect, useRef, useState} from "react";
import { Play, Pause } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";
import Tim from "@/app/components/about/tim";
import Tim1989 from "@/app/components/about/tim-1989"
import Tim2011 from "@/app/components/about/tim-2011"
import Tim2013 from "@/app/components/about/tim-2013"

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
                
                <section className="min-w-[80vw] h-[95vh] p-7 bg-[url('/section4.png')] bg-cover flex bg-center rounded-[25px]">
                    <div>
                        <h2 className="font-arizonia text-[5rem]">Tim - 2015</h2>
                        <p>In 2015, Avicii released Stories, his second studio album, showcasing a more diverse and personal sound that blended EDM with pop, rock, and country influences. The album featured hit songs like Waiting for Love, The Nights, and Broken Arrows, collaborating with artists such as Chris Martin, Zac Brown Band, and Martin Garrix. Stories received critical acclaim for its innovation and emotional depth, further solidifying Avicii’s status as a pioneer in electronic music. However, during this period, he also faced serious health issues due to his relentless work schedule, leading him to announce his retirement from touring the following year.</p>
                    </div>
                    <div className="p-5">
                        <div className="bg-black p-3">
                            <div>
                                <img src="" alt="" />
                                <img src="" alt="" />
                            </div>
                            <h1 className="font-lato">YOUTUBE MUSIC</h1>
                        </div>
                    </div>
                </section>
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
