const lupa = "/lupa.png"
const flecha = "/flechaDerecha.png"
const perfil = "/tim-perfil2.jpg"
const stories = "/stories.jpg"

export default function tim2015(){


    return(
        <section className="min-w-[80vw] h-[95vh] p-7 bg-[url('/section4.png')] bg-cover flex bg-center rounded-[25px]">
            <div className="w-4/6">
                <h2 className="font-arizonia text-[5rem]">Tim - 2015</h2>
                <p>In 2015, Avicii released Stories, his second studio album, showcasing a more diverse and personal sound that blended EDM with pop, rock, and country influences. The album featured hit songs like Waiting for Love, The Nights, and Broken Arrows, collaborating with artists such as Chris Martin, Zac Brown Band, and Martin Garrix. Stories received critical acclaim for its innovation and emotional depth, further solidifying Avicii’s status as a pioneer in electronic music. However, during this period, he also faced serious health issues due to his relentless work schedule, leading him to announce his retirement from touring the following year.</p>
            </div>
            <div className="p-5 w-2/6">
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
                        <div>
                            <a href=""><img src="" alt="download" /></a>
                            <a href=""><img src="" alt="add" /></a>
                            <a href=""><img src="" alt="play" /></a>
                            <a href=""><img src="" alt="share" /></a>
                            <a href=""><img src="" alt="more" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>   
    )
};