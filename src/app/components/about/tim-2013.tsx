
import { useEffect, useRef, useState} from "react";
import { Play, Pause } from "lucide-react";

const songs = [
    {
        title: "Levels - Radio Edit",
        artist: "Avicii",
        image: "./timeline05.jpg",
        audio: "@/public/songs/Avicii-Levels.mp3",
    },
    {
        title: "Seek Bromance - Avicii Vocal Edit",
        artist: "Tim Berg, Avicii",
        image: "./timeline06.webp",
        audio: "@/public/songs/TimBerg-seekBromance.mp3",
    },

];

const wakeMeUp = "/songs/Avicii-WakeMeUp.mp3"
const timPerfil = './tim-perfil.jpg'
const trueAlbum = './true-album.png'

export default function tim2015(){

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
        <section className="min-w-[80vw] h-[95vh] p-7 bg-[url('/section3.jpg')] bg-cover flex bg-center rounded-[25px]">
            <div className="w-1/2 flex flex-col items-center justify-center h-full">
                <h2 className="font-arizonia text-[5rem]">Tim - 2013</h2>
                <p className="text-2xl">2013 was a pivotal year in Avicii's career. With the release of <span className="font-bold">Wake Me Up</span>, he fused electronic music with folk, creating an innovative sound that broke barriers. The song became a global hit, topping charts in over 20 countries and redefining EDM. Additionally, his album True showcased his musical versatility, cementing him as one of the most influential artists of the decade.</p>
                <p className="text-[1.5rem]">◢◤</p>
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center h-full">
                <div>
                {/* SECCTION OF SONG*/}
                    <div className="flex p-5 gap-5  bg-gradient-to-b from-[#757575] to-[#464646] rounded-t-xl">
                        <div>
                            <img src={trueAlbum} width={180} alt="" />
                        </div>
                        <div className="f   lex flex-col justify-end text-white font-roboto">
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
    )
};