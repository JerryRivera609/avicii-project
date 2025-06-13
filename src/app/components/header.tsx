import Image from 'next/image';

const logo = '/logo.webp'
const spotify = '/spotify.png'
const youtube = '/youtube.png'
const apple = '/apple.png'


export default function header(){

    return(
        <header className="p-5 flex items-center justify-around bg-black">
            <div>
                <Image src={logo} width={20} height={20} className="w-20 h-auto"  alt="" />
            </div>
            <div>
                <nav>
                    <ul className="flex items-center gap-10 text-[1.2rem] transition-all duration-500">
                        <li><a className="hover:text-[#aaaaaa] transition-all duration-500" href="">Home</a></li>
                        <li><a className="hover:text-[#aaaaaa] transition-all duration-500" href="">About</a></li>
                        <li><a className="hover:text-[#aaaaaa] transition-all duration-500" href="">Albums</a></li>
                        <li><a className="hover:text-[#aaaaaa] transition-all duration-500" href="">Music</a></li>
                        <li><a className="hover:text-[#aaaaaa] transition-all duration-500" href="">Messages</a></li>
                    </ul>
                </nav>
            </div>
            <div className="flex gap-5">
                <div className="w-7">
                    <img src={spotify} alt="" />
                </div>
                <div>
                    <div className="w-7">
                        <img src={youtube} alt="" />
                    </div>
                </div>
                <div>
                    <div className="w-7">
                        <img src={apple} alt="" />
                    </div>
                </div>
            </div>
        </header>
    );
}