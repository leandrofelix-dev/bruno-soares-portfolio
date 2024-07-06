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
      <div className="absolute z-20 flex h-[3000px] w-full flex-col gap-10 bg-black px-20 text-white">
        <Hero />
        <Services />
        <AboutMe />
        <Processes />
        <Clients />
        <Projects />
        <Footer />
      </div>
      <div className="absolute z-10 h-full w-full bg-[url(../../lights.svg)] bg-cover bg-no-repeat" />
      <div className="absolute z-0 h-full w-full bg-black" />
    </>
  )
}

export { Home }
