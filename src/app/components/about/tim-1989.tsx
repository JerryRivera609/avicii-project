import Image from 'next/image';

const timeline01 = '/timeline01.jpg'
const timeline02 = '/timeline02.jpg'
const timeline03 = '/timeline03.jpg'

export default function tim1989 (){
    return(
        <section className="min-w-[80vw] h-[95vh] p-5 bg-[#bebebe] rounded-[25px] items-center justify-center flex flex-col-reverse gap-4">
            <div className="gap-10 flex justify-center">
                <Image src={timeline02} width={400} height={100} className="w-[30%] h-auto rounded-xl" alt="" />
                <Image src={timeline01} width={400} height={100} className="w-[30%] h-auto rounded-xl" alt="" />
                <Image src={timeline03} width={400} height={100} className="w-[30%] h-auto rounded-xl" alt="" />
            </div>
            <div className="flex flex-col text-[1.2rem] p-5 justify-center items-center text-center">
                <h2 className="font-arizonia text-[5rem] text-black">Tim - 1989</h2>
                <p className="font-lato text-[1.5rem] text-black">Tim Bergling was born on September 8, 1989, in Stockholm, Sweden. From a young age, he showed a strong passion for music and creativity. Inspired by artists like Daft Punk and Swedish House Mafia, he began experimenting with music production during his teenage years.</p>
            </div>
        </section>
    )
}