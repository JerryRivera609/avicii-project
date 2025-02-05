import Image from "next/image";
const imgHome = '/home.jpg'
const avicii = '/avicii.webp'

export default function Home(){
    return(
        <section>
            <div className="relative w-full h-screen">
                {/* Imagen de fondo */}
                <div>
                    <img 
                        src={imgHome} 
                        className="absolute inset-0 w-full h-full object-cover" 
                        alt="" 
                    />
                </div>

                {/* Contenido sobre la imagen */}
                <div 
                className="relative z-10 flex flex-col items-end justify-center h-full text-white 
                            shadow-[inset_0px_-159px_117px_-9px_rgba(0,0,0,1)]"
                >
                    <div className="flex flex-col items-end pr-20 pb-40">
                        <h1 className="text-9xl font-Arizona pt-10">Tribute to Avicii</h1>
                        <h2 className="text-4xl font-sans mb-2 tracking-[0.5rem]">IN LOVING MEMORY</h2>
                        <h3 className="text-xl font-sans tracking-[0.4rem] mb-5">1989.09.08 – 2018.04.20</h3>
                        <img src={avicii} className="h-20" alt="" />
                    </div>
                </div>
            </div>
        </section>

    );
};
