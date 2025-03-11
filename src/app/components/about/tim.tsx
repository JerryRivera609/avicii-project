const timeline = './tim.jpg'

export default function tim (){
    return(
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
    )
};