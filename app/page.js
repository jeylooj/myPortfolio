import Image from 'next/image'
import NavBar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TechStackSection from './components/TechStackSection'
import ProjectSection from './components/ProjectSection'

export default function Home() {
  return (
    <main>
      <NavBar/>
      <HeroSection/>
      <TechStackSection/>
      <ProjectSection/>
    </main>
  )
}
