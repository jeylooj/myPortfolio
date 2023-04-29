import Image from 'next/image'
import NavBar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TechStackSection from './components/TechStackSection'
import ProjectSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <NavBar/>
      <HeroSection/>
      <TechStackSection/>
      <ProjectSection/>
      <ContactSection/>
      <Footer/>
    </main>
  )
}
