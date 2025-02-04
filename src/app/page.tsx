
import HomeComponent from '@/app/components/home'
import Header from '@/app/components/header'
import About from '@/app/components/about'
import Albums from '@/app/components/albums'
import Music from '@/app/components/music'
import Messages from '@/app/components/messages'

export default function Home() {
  return (
    <>
    <Header />
    <HomeComponent />
    <About />
    <Albums />
    <Music />
    <Messages />
    
    </>
  );
}
