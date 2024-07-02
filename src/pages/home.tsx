import { AboutMe } from '../components/organisms/about-me'
import { Services } from '../components/organisms/services'
import { Hero } from '../components/organisms/hero'
import { Processes } from '../components/organisms/processes'
import { Clients } from '../components/organisms/clients'
import { Projects } from '../components/organisms/projects'
import { Footer } from '../components/organisms/footer'
import { NavBar } from '../components/molecules/navbar'

function Home() {
  return (
    <>
      <NavBar focus={0} />
      <div className="absolute w-full h-full text-white px-20 z-20">
        <Hero />
        <Services />
        <AboutMe />
        <Processes />
        <Clients />
        <Projects />
        <Footer />
      </div>
      <div className="absolute h-full w-full z-10 bg-cover bg-no-repeat bg-[url(../../public/lights.svg)]" />
      <div className="absolute h-full w-full z-0 bg-black" />
    </>
  )
}

export { Home }
