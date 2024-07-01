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
      <div className="bg-black w-full h-screen text-white px-20">
        <Hero />
        <Services />
        <AboutMe />
        <Processes />
        <Clients />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export { Home }
