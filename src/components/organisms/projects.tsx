import { BsBehance } from 'react-icons/bs'
import { SectionHeader } from '../molecules/section-header'
import { Section } from './section'

function Projects() {
  const projectImages = [
    ['1', '2'],
    ['3', '4', '5'],
    ['6', '7'],
    ['8', '9', '10'],
  ]
  return (
    <Section>
      <div id="projetos">
        <SectionHeader
          bolder={'Não está convencido?'}
          highlight={'Veja'}
          complement={'com seus próprios olhos, alguns dos meus projetos'}
        />
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="flex justify-center gap-4">
            {projectImages.map((images, index) => (
              <div key={index} className="flex flex-col gap-4">
                {images.map((image) => (
                  <img
                    src={`/projects/${image}.png`}
                    alt={image}
                    key={image}
                    className="m-2 w-48 cursor-pointer transition-all ease-in hover:m-0 hover:w-52"
                  />
                ))}
              </div>
            ))}
          </div>
          <a href="https://behance.net/brunosoaresdesigner" target="_blank" id="contato">
            <button className="flex w-fit items-center justify-center gap-2 rounded-md bg-gradient-primary px-8 py-3 transition-all ease-in-out hover:opacity-90">
              <BsBehance size={20} /> <p className="text-[16px] font-semibold">VER MAIS NO BEHANCE</p>
            </button>
          </a>
        </div>
      </div>
    </Section>
  )
}

export { Projects }
