import Image from 'next/image'
import NavBar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TechStackSection from './components/TechStackSection'

export default function Home() {
  return (
    <main>
      <NavBar/>
      <HeroSection/>
      <TechStackSection/>
    </main>
  )
}
