import { FaInstagram } from 'react-icons/fa'
import { ServicesCard } from '../molecules/services-card'
import { BiVector } from 'react-icons/bi'
import { LuPrinter } from 'react-icons/lu'
import { Section } from './section'
import { SectionHeader } from '../molecules/section-header'

function Services() {
  return (
    <Section>
      <div className="flex flex-col">
        <SectionHeader
          bolder={'Busca um profissional completo?'}
          highlight={'Eu desenvolvo'}
          complement={'o que a sua empresa precisa!'}
        />
        <div className="flex justify-center">
          <div className="flex w-3/4 max-w-[1200px] flex-col items-center justify-center gap-12 md:flex-row">
            <ServicesCard
              title={'Mídias Sociais'}
              description={
                'Sou designer gráfico especialista em criação de posts para social media. Crio posts para Instagram, Facebook, Twitter, LinkedIn e outras plataformas. Produzo imagens, vídeos, infográficos, animações e outros elementos visuais que compõem o seu perfil nas redes sociais.'
              }
              icon={<FaInstagram size={30} />}
            />
            <ServicesCard
              title={'Mídias Sociais'}
              description={
                'Sou designer gráfico especialista em criação de posts para social media. Crio posts para Instagram, Facebook, Twitter, LinkedIn e outras plataformas. Produzo imagens, vídeos, infográficos, animações e outros elementos visuais que compõem o seu perfil nas redes sociais.'
              }
              icon={<BiVector size={30} />}
            />
            <ServicesCard
              title={'Materiais Gráficos'}
              description={
                'Além disso, também posso te ajudar com os materiais gráficos, transformando-os e deixando totalmente editáveis, para você levar para uma gráfica como, por exemplo, cartão de visita, flyers para eventos, cardápios, papéis timbrados e entre outros arquivos de papelaria em geral.'
              }
              icon={<LuPrinter size={30} />}
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export { Services }
