import Image from 'next/image';
import { useRef, useState} from "react";
import { Play, Pause } from "lucide-react";


const timeline04 = '/timeline04.jpg'

const songs = [
    {
        title: "Levels - Radio Edit",
        artist: "Avicii",
        image: "/timeline05.jpg",
        audio: "/songs/Avicii-Levels.mp3",
    },
    {
        title: "Seek Bromance - Avicii Vocal Edit",
        artist: "Tim Berg, Avicii",
        image: "/timeline06.webp",
        audio: "/songs/TimBerg-seekBromance.mp3",
    },

];

export default function tim2011 (){

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

    return(
        <section className="min-w-[80vw] h-[95vh] p-5 bg-[#544417] rounded-xl flex justify-center items-center gap-5">
            <div className="w-1/3">
                <Image src={timeline04} width={400} height={700} className="rounded-xl w-[800px]" alt="" />
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
                                <Image src={song.image} width={300} height={300} className="rounded-xl w-full" alt={song.title} />
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
        </section>
    )
};