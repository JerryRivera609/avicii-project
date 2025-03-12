const lupa = "/lupa.png"
const flecha = "/flechaDerecha.png"
const perfil = "/tim-perfil2.jpg"
const stories = "/stories.jpg"
const descarga = "/descarga.png"
const agregar = "/add.png"
const compartir = "/share.png"
const more = "/more.png"
const play = "/play.png"

export default function tim2015(){


    return(
        <section className="min-w-[80vw] h-[95vh] p-7 bg-[url('/section4.png')] bg-cover flex bg-center rounded-[25px]">
            <div className="w-4/6">
                <h2 className="font-arizonia text-[5rem]">Tim - 2015</h2>
                <p>In 2015, Avicii released Stories, his second studio album, showcasing a more diverse and personal sound that blended EDM with pop, rock, and country influences. The album featured hit songs like Waiting for Love, The Nights, and Broken Arrows, collaborating with artists such as Chris Martin, Zac Brown Band, and Martin Garrix. Stories received critical acclaim for its innovation and emotional depth, further solidifying Avicii’s status as a pioneer in electronic music. However, during this period, he also faced serious health issues due to his relentless work schedule, leading him to announce his retirement from touring the following year.</p>
            </div>
            <div className="p-5 w-2/6 h-[90vh]">
                <div className="bg-black p-5 rounded-xl">
                    <div className="flex justify-between">
                        <img src={flecha} className="w-5 h-5" alt="" />
                        <img src={lupa} className="w-5 h-5"  alt="" />
                    </div>
                    <div className="flex flex-col justify-center text-center items-center">
                        <div className="leading-7">
                            <h3 className="gap-2 flex justify-center items-center"><img src={perfil} className="w-6 h-6 rounded-xl flex" alt="" />Avicii</h3>
                            <h3 className="text-[#b5b5b5]">Album • 2015</h3>
                        </div>
                        <div className="m-3">
                            <img src={stories} className="w-60 h-60" alt="" />
                        </div>
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
                            <a href="" className="flex gap-8 w-full justify-center items-center p-2 rounded-lg transition-all duration-500 hover:bg-stone-800">
                                <div>
                                    <h4>1</h4>
                                </div>
                                <div className="text-start">
                                    <h5 className="text-xs font-bold">Waiting For Love</h5>
                                    <p className="text-xs text-[#b5b5b5]">Avicii • 3:51 • 1972 M reproducciones</p>
                                </div>
                                <div>
                                    <a type="button"><img src={more} className="w-5" alt="" /></a>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>   
    )
};