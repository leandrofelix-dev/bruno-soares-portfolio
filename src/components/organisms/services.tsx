import { FaInstagram } from 'react-icons/fa'
import { ServicesCard } from '../molecules/services-card'
import { BiVector } from 'react-icons/bi'
import { LuPrinter } from 'react-icons/lu'

function Services() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h2 className="text-center text-2xl font-semibold">Busca um profissional completo?</h2>
          <h4 className="text-center text-xl">
            <span className="text-blue-500">Eu desenvolvo</span> o que a sua empresa precisa!
          </h4>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="flex w-3/4 max-w-[1200px] flex-col justify-between gap-4 md:flex-row">
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
    </>
  )
}

export { Services }
