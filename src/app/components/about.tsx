"use client";

import { useEffect, useRef, useState} from "react";
import { Play, Pause } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";

const songs = [
    {
        title: "Levels - Radio Edit",
        artist: "Avicii",
        image: "./timeline05.jpg",
        audio: "/songs/Avicii-Levels.mp3",
    },
    {
        title: "Seek Bromance - Avicii Vocal Edit",
        artist: "Tim Berg, Avicii",
        image: "./timeline06.webp",
        audio: "/songs/TimBerg-seekBromance.mp3",
    },

];

const wakeMeUp = "/songs/Avicii-WakeMeUp.mp3"

const timeline = './tim.jpg'
const timeline01 = './timeline01.jpg'
const timeline02 = './timeline02.jpg'
const timeline03 = './timeline03.jpg'
const timeline04 = './timeline04.jpg'

const timPerfil = './tim-perfil.jpg'
const trueAlbum = './true-album.png'

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionsRef = useRef<HTMLDivElement>(null);

    const [playingIndex, setPlayingIndex] = useState<number | null>(null);
    const audioRefs = useRef<HTMLAudioElement[]>([]);

    const handlePlayPause = (index: number) => {
        if (playingIndex === index) {
            audioRefs.current[index]?.pause();
            setPlayingIndex(null);
        } else {
            audioRefs.current.forEach((audio, i) => {
                if (i !== index) audio?.pause();
            });
            audioRefs.current[index]?.play();
            setPlayingIndex(index);
        }
    };
    

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
                <section className="min-w-[80vw] h-[95vh] p-5 bg-[#020107] text-[#bbb4b4]  rounded-[25px] flex justify-around items-center text-center">
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
                <section className="min-w-[80vw] h-[95vh] p-5 bg-[#bebebe] rounded-[25px] items-center justify-center flex flex-col-reverse gap-4">
                    <div className="gap-10 flex justify-center">
                        <img src={timeline02} className="w-[30%] h-auto rounded-xl" alt="" />
                        <img src={timeline01} className="w-[30%] h-auto rounded-xl" alt="" />
                        <img src={timeline03} className="w-[30%] h-auto rounded-xl" alt="" />
                    </div>
                    <div className="flex flex-col text-[1.2rem] p-5 justify-center items-center text-center">
                        <h2 className="font-arizonia text-[5rem] text-black">Tim - 1989</h2>
                        <p className="font-lato text-[1.5rem] text-black">Tim Bergling was born on September 8, 1989, in Stockholm, Sweden. From a young age, he showed a strong passion for music and creativity. Inspired by artists like Daft Punk and Swedish House Mafia, he began experimenting with music production during his teenage years.</p>
                    </div>
                </section>
                <section className="min-w-[80vw] h-[95vh] p-5 bg-[#544417] rounded-xl flex justify-center items-center gap-5">
                    <div className="w-1/3">
                        <img src={timeline04} className="rounded-xl w-[800px]" alt="" />
                    </div>
                    <div className="flex flex-col w-2/3 justify-center items-center">
                        <div>
                            <h2 className="font-arizonia text-[5rem] text-center">Tim - 2011</h2>
                            <p className="font-lato text-center mb-3 text-[1.2rem]">In 2011, Avicii established himself as one of the biggest promises in electronic music. His track 'Levels' revolutionized the industry and became an EDM anthem. That same year, his performance at Tomorrowland left a lasting mark, marking the beginning of a golden era in his career.</p>
                        </div>
                        <div className="flex gap-5 justify-around items-start">
                            {songs.map((song, index) => (
                                <div
                                    key={index}
                                    className="relative flex flex-col p-5 rounded-xl w-[35%] transition-all duration-300 hover:bg-[#323232] text-center group"
                                >
                                <div className="relative">
                                    <img src={song.image} className="rounded-xl w-full" alt={song.title} />
                                    <button
                                    onClick={() => handlePlayPause(index)}
                                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-xl"
                                    >
                                    {playingIndex === index ? <Pause size={50} color="#1DB954" /> : <Play size={50} color="#1DB954" />}
                                    </button>
                                </div>
                                <h3 className="text-[1.5rem] font-bold font-sans">{song.title}</h3>
                                <p className="text-[#ffffff]">
                                    <span className="text-[#b1b1b1]">Song -</span> {song.artist}
                                </p>
                                <audio ref={(el) => (audioRefs.current[index] = el!)} src={song.audio} />
                                </div>
                            ))}
                            </div>
                    </div>
                    <div></div>
                </section>
                <section className="min-w-[80vw] h-[95vh] p-7 bg-[url('/section3.jpg')] bg-cover flex bg-center rounded-[25px]">
                    <div className="w-1/2 flex flex-col items-center justify-center h-full">
                        <h2 className="font-arizonia text-[5rem]">Tim - 2013</h2>
                        <p className="text-[1.2rem]">2013 was a pivotal year in Avicii's career. With the release of <span className="font-bold">Wake Me Up</span>, he fused electronic music with folk, creating an innovative sound that broke barriers. The song became a global hit, topping charts in over 20 countries and redefining EDM. Additionally, his album True showcased his musical versatility, cementing him as one of the most influential artists of the decade.</p>
                        <p className="text-[1.5rem]">◢◤</p>
                    </div>
                    <div className="w-1/2 flex flex-col items-center justify-center h-full">
                        <div>
                            {/* SECCTION OF SONG*/}
                            <div className="flex p-5 gap-5  bg-gradient-to-b from-[#757575] to-[#464646] rounded-t-xl">
                                <div>
                                    <img src={trueAlbum} width={180} alt="" />
                                </div>
                                <div className="flex flex-col justify-end text-white font-roboto">
                                    <div>
                                        <p className="text-[1.2rem]">Song</p>
                                    </div>
                                    <div>
                                        <h3 className="text-[3rem] font-bold">Wake Me Up</h3>
                                    </div>
                                    <div className="flex gap-3">
                                        <p className="flex gap-1 justify-center items-center">
                                            <img src={timPerfil} width={20} className="rounded-full" alt="" />
                                            <a href="https://open.spotify.com/intl-es/artist/1vCWHaC5f2uS3yhpwWbIA6" className="font-bold hover:underline">Avicii</a>
                                            • 
                                            <a href="https://open.spotify.com/intl-es/album/2H6i2CrWgXE1HookLu8Au0" className="font-bold hover:underline">True</a>
                                            • 2013 • 4:07 • 2.605.213.176
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* SECCTION PLAY AND ARTIST*/}
                            <div className="bg-gradient-to-b from-[#373737] to-[#1f1f1f] rounded-b-xl p-5">
                                {/* Botón de Play/Pause */}
                                <div className="flex p-5 gap-5 items-center">
                                        <button 
                                            onClick={() => handlePlayPause(songs.length)} 
                                            className="w-14 h-14 bg-[#1da54d] flex items-center justify-center rounded-full transition-all duration-300 hover:scale-105 hover:bg-[#21d25f]"
                                        >
                                            {playingIndex === songs.length ? <Pause size={30} /> : <Play size={30} />}                                        </button>
                                    <p className="text-[2rem] text-[#7a7a7a] "> + </p>
                                    <p className="text-[2rem] text-[#7a7a7a]"> ••• </p>
                                </div>

                                {/* Info del artista */}
                                <div className="flex gap-3 p-2 transition-all duration-300 hover:bg-[#5d5d5da0] rounded-xl">
                                    <div>
                                        <img src={timPerfil} width={80} className="rounded-full" alt="Avicii" />
                                    </div>
                                    <div className="flex flex-col font-roboto text-[1.2rem] font-bold justify-center items-center">
                                        <p>Artist</p>
                                        <a href="https://open.spotify.com/intl-es/artist/1vCWHaC5f2uS3yhpwWbIA6" 
                                        className="hover:underline" 
                                        target="_blank" 
                                        rel="noopener noreferrer">
                                            Avicii
                                        </a>
                                    </div>
                                </div>
                                <audio ref={(el) => (audioRefs.current[songs.length] = el!)} src={wakeMeUp} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="min-w-[80vw] h-[95vh] p-7 bg-[url('/section4.png')] bg-cover flex bg-center rounded-[25px]">
                    <div>
                        <h2 className="font-arizonia text-[5rem]">Tim - 2015</h2>
                        <p>In 2015, Avicii released Stories, his second studio album, showcasing a more diverse and personal sound that blended EDM with pop, rock, and country influences. The album featured hit songs like Waiting for Love, The Nights, and Broken Arrows, collaborating with artists such as Chris Martin, Zac Brown Band, and Martin Garrix. Stories received critical acclaim for its innovation and emotional depth, further solidifying Avicii’s status as a pioneer in electronic music. However, during this period, he also faced serious health issues due to his relentless work schedule, leading him to announce his retirement from touring the following year.</p>
                    </div>
                    <div>
                        
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
