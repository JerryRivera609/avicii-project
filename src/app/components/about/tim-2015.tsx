const lupa = "/lupa.png"
const flecha = "/flechaDerecha.png"
const perfil = "/tim-perfil2.jpg"
const stories = "/stories.jpg"
const descarga = "/descarga.png"
const agregar = "/add.png"
const compartir = "/share.png"
const more = "/more.png"
const play = "/play.png"

const listMusic = [
    {
        id: "1",    title: "Waiting For Love",  artist: "Avicii",   duration: "3:51",   reproductions: "1972 M reproducciones",
    },
    {
        id: "2",    title: "Talk To Myself",  artist: "Avicii",   duration: "3:07",   reproductions: "8.3 M reproducciones",
    },
    {
        id: "3",    title: "Touch Me",  artist: "Avicii",   duration: "3:07",   reproductions: "5.9 M reproducciones",
    },
    {
        id: "4",    title: "Ten More Days",  artist: "Avicii",   duration: "4:06",   reproductions: "7.4 M reproducciones",
    },
    {
        id: "5",    title: "For A Better Day",  artist: "Avicii",   duration: "3:27",   reproductions: "121 M reproducciones",
    },
    {
        id: "6",    title: "Broken Arrows",  artist: "Avicii",   duration: "3:53",   reproductions: "151 M reproducciones",
    },
    {
        id: "7",    title: "True Believer",  artist: "Avicii",   duration: "4:49",   reproductions: "7.7 M reproducciones",
    },
    {
        id: "8",    title: "City Lights",  artist: "Avicii",   duration: "6:29",   reproductions: "10 M reproducciones",
    },
    {
        id: "9",    title: "Pure Grinding",  artist: "Avicii",   duration: "2:52",   reproductions: "39 M reproducciones",
    },
    {
        id: "10",    title: "Sunset Jesus",  artist: "Avicii",   duration: "4:25",   reproductions: "26 M reproducciones",
    },
    {
        id: "11",    title: "Can't Catch Me",  artist: "Avicii",   duration: "4:00",   reproductions: "6.5 M reproducciones",
    },
    {
        id: "12",    title: "Somewhere In Stockholm",  artist: "Avicii",   duration: "3:23",   reproductions: "11 M reproducciones",
    },
    {
        id: "13",    title: "Trouble",  artist: "Avicii",   duration: "2:52",   reproductions: "21 M reproducciones",
    },
    {
        id: "14",    title: "Gonna Love Ya",  artist: "Avicii",   duration: "3:36",   reproductions: "14 M reproducciones",
    },
    
];

export default function tim2015(){

    
    return(
        <section className="min-w-[80vw] h-[95vh] p-7 bg-[url('/section4.png')] bg-cover flex bg-center rounded-[25px]">
            <div className="w-4/6">
                <h2 className="font-arizonia text-[5rem]">Tim - 2015</h2>
                <p>In 2015, Avicii released Stories, his second studio album, showcasing a more diverse and personal sound that blended EDM with pop, rock, and country influences. The album featured hit songs like Waiting for Love, The Nights, and Broken Arrows, collaborating with artists such as Chris Martin, Zac Brown Band, and Martin Garrix. Stories received critical acclaim for its innovation and emotional depth, further solidifying Avicii’s status as a pioneer in electronic music. However, during this period, he also faced serious health issues due to his relentless work schedule, leading him to announce his retirement from touring the following year.</p>
            </div>
            <div className="w-2/6">
                <div className=" rounded-xl max-h-full overflow-x-auto custom-scroll">
                    <div className="flex flex-col justify-center text-center items-center">
                        <div className="w-full bg-gradient-to-b from-[#ffffff02] to-[#000000] backdrop-blur-md ">
                            <div className="flex justify-between w-full pt-3 px-3">
                                <img src={flecha} className="w-5 h-5" alt="" />
                                <img src={lupa} className="w-5 h-5"  alt="" />
                            </div>
                            <div className="leading-7">
                                <h3 className="gap-2 flex justify-center items-center"><img src={perfil} className="w-6 h-6 rounded-xl flex" alt="" />Avicii</h3>
                                <h3 className="text-[#b5b5b5]">Album • 2015</h3>
                            </div>
                            <div className="flex justify-center m-3 items-center">
                                <img src={stories} className="w-60 h-60" alt="" />
                            </div>
                        </div>
                        <div className="bg-black">
                            <div>
                                <h2 className="text-3xl font-bold">Stories</h2>
                                <p className="text-xs text-[#b5b5b5]">Stories es el título del segundo álbum de estudio de disc jockey y productor sueco Avicii. Fue lanz<a href="" className="text-white">... Más</a></p> 
                            </div>
                            <div className="flex gap-4 m-4 justify-center items-center">
                                <a href="" className="p-3 h-auto     bg-stone-800 rounded-full"><img src={descarga} className="w-5" alt="download" /></a>
                                <a href="" className="p-3 bg-stone-800 rounded-full"><img src={agregar} className="w-5" alt="add" /></a>
                                <a href="" className=""><img src={play} className="w-16" alt="play" /></a>
                                <a href="" className="p-3 bg-stone-800 rounded-full"><img src={compartir} className="w-5" alt="share" /></a>
                                <a href=""className="p-3 bg-stone-800 rounded-full"><img src={more} className="w-5  " alt="more" /></a>
                            </div>
                            <div>
                                <a href="" className="flex gap-8 w-full justify-center items-center p-2 rounded-xl transition-all duration-500 hover:bg-stone-800">
                                    <div>
                                        <h4>1</h4>
                                    </div>
                                    <div className="text-start">
                                        <h5 className="text-xs font-bold">Waiting For Love</h5>
                                        <p className="text-xs text-[#b5b5b5]">Avicii • 3:51 • 1972 M reproducciones</p>
                                    </div>
                                    <div>
                                        <button type="button"><img src={more} className="w-5" alt="" /></button>
                                    </div>
                                </a>
                                <a href="" className="flex gap-8 w-full justify-center items-center p-2 rounded-xl transition-all duration-500 hover:bg-stone-800">
                                    <div>
                                        <h4>1</h4>
                                    </div>
                                    <div className="text-start">
                                        <h5 className="text-xs font-bold">Waiting For Love</h5>
                                        <p className="text-xs text-[#b5b5b5]">Avicii • 3:51 • 1972 M reproducciones</p>
                                    </div>
                                    <div>
                                        <button type="button"><img src={more} className="w-5" alt="" /></button>
                                    </div>
                                </a>
                                <a href="" className="flex gap-8 w-full justify-center items-center p-2 rounded-xl transition-all duration-500 hover:bg-stone-800">
                                    <div>
                                        <h4>1</h4>
                                    </div>
                                    <div className="text-start">
                                        <h5 className="text-xs font-bold">Waiting For Love</h5>
                                        <p className="text-xs text-[#b5b5b5]">Avicii • 3:51 • 1972 M reproducciones</p>
                                    </div>
                                    <div>
                                        <button type="button"><img src={more} className="w-5" alt="" /></button>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>   
    )
};