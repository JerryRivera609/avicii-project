"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";



const timeline = './tim.jpg'
const timeline01 = './timeline01.jpg'
const timeline02 = './timeline02.jpg'
const timeline03 = './timeline03.jpg'
const timeline04 = './timeline04.jpg'
const timeline05 = './timeline05.jpg'
const timeline06 = './timeline06.webp'

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
                <section className="min-w-[80vw] h-[95vh] p-5 bg-[#020107] text-[#dfdfdf] rounded-[25px] flex justify-around items-center text-center">
                    <div>
                        <img src={timeline} className="rounded-xl w-[400px]" alt="" />
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
                <section className="min-w-[80vw] h-[95vh] p-10 bg-[#0f0f0f] rounded-[25px] items-center justify-center flex flex-col-reverse gap-4">
                    <div className="gap-10 flex justify-center">
                        <img src={timeline02} className="w-[30%] h-auto rounded-xl" alt="" />
                        <img src={timeline01} className="w-[30%] h-auto rounded-xl" alt="" />
                        <img src={timeline03} className="w-[30%] h-auto rounded-xl" alt="" />
                    </div>
                    <div className="flex flex-col text-[1.2rem] p-8 justify-center items-center text-center">
                        <h2 className="font-arizonia text-[5rem]">Tim - 1989</h2>
                        <p className="font-lato text-[1.5rem]">Tim Bergling was born on September 8, 1989, in Stockholm, Sweden. From a young age, he showed a strong passion for music and creativity. Inspired by artists like Daft Punk and Swedish House Mafia, he began experimenting with music production during his teenage years.</p>
                    </div>
                </section>
                <section className="min-w-[80vw] h-[95vh] p-5 bg-[#292711] rounded-xl flex justify-center items-center gap-5">
                    <div className="w-1/3">
                        <img src={timeline04} className="rounded-xl w-[800px]" alt="" />
                    </div>
                    <div className="flex flex-col w-2/3 justify-center items-center">
                        <div>
                            <h2 className="font-arizonia text-[5rem] text-center">Tim - 2011</h2>
                            <p className="font-lato text-center mb-3 text-[1.2rem]">In 2011, Avicii established himself as one of the biggest promises in electronic music. His track 'Levels' revolutionized the industry and became an EDM anthem. That same year, his performance at Tomorrowland left a lasting mark, marking the beginning of a golden era in his career.</p>
                        </div>
                        <div className="flex gap-5 justify-around items-start">
                            <div className="flex flex-col p-5 rounded-xl w-[35%] transition-all duration-300 hover:bg-[#323232] text-center">
                                <img src={timeline05} width={200} className="rounded-xl" alt="" />
                                <h3 className="text-[1.5rem] font-bold font-sans">Levels - Radio Edit</h3>
                                <p className="text-[#ffffff]"><span className="text-[#b1b1b1]">Song -</span> Avicii</p>
                            </div>
                            <div className="flex flex-col p-5 rounded-xl w-[35%] transition-all duration-300 hover:bg-[#323232] text-center">
                                <img src={timeline06} width={200} className="rounded-xl" alt="" />
                                <h3 className="text-[1.5rem] font-bold font-sans">Seek Bromance - Avicii Vocal Edit</h3>
                                <p className="text-[#ffffff]"><span className="text-[#b1b1b1]">Song -</span> Tim Berg, Avicii</p>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </section>
                <section className="min-w-[80vw] h-[95vh] p-5">🎤 2013 - "Wake Me Up" rompe récords</section>
                <section className="min-w-[80vw] h-[95vh] p-5">💿 2019 - Álbum póstumo "TIM"</section>
            </div>
        </div>
    );
};

export default About;
