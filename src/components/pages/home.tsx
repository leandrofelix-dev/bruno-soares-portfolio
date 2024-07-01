import { AboutMe } from "../organisms/about-me"
import { Services } from "../organisms/services"
import { Hero } from "../organisms/hero"
import { Processes } from "../organisms/processes"
import { Clients } from "../organisms/clients"
import { Projects } from "../organisms/projects"
import { Footer } from "../organisms/footer"
import { NavBar } from "../molecules/navbar"

function Home() {
  return (
    <>
      <div className="bg-black w-full h-screen text-white">
        <NavBar />
        <Hero />
        <Services />
        <AboutMe />
        <Processes />
        <Clients />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export { Home }
