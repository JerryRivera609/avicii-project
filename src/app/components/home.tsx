import Image from "next/image";
const imgHome = '/home.jpg'

export default function Home(){
    return(
        <section>
            <div className="relative w-full h-screen">
                {/* Imagen de fondo */}
                <div>
                    <img src={imgHome} className="absolute inset-0 w-full h-full object-cover" alt="" />
                </div>

                {/* Contenido sobre la imagen */}
                <div className="relative z-10 flex items-start justify-end h-full text-white">
                    <h1 className="text-9xl font-Arizona pr-20 pt-20">Tribute to Avicii</h1>
                </div>
            </div>

        </section>
    );
};
