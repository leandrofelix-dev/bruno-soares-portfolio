import { Section } from './section'

function AboutMe() {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center gap-24 md:flex-row" id="sobre-mim">
        <div className="flex w-72 flex-col gap-2 md:w-96">
          <h2 className="text-2xl font-bold text-blue-500">Quem sou eu?</h2>
          <p className="text-sm">
            Meu nome é Bruno, e sou um designer gráfico apaixonado por criar soluções visuais que conectam, engajam e
            transformam. Há mais de 3 anos, dedico-me a ajudar empresas e pessoas a comunicarem suas ideias de forma
            clara, impactante e memorável. Ao longo da minha carreira, tive a oportunidade de trabalhar em diversos
            projetos, desde a criação de posts para redes sociais que engajam e convertem até o desenvolvimento de
            identidades visuais que encantam e memorizam.
          </p>
        </div>
        <div className="-mt-20 w-80 md:mt-0">
          <img src="/bruno-photo-2.png" alt="" />
        </div>
      </div>
    </Section>
  )
}

export { AboutMe }
