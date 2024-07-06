import { FaInstagram } from 'react-icons/fa'
import { ServicesCard } from '../molecules/services-card'

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
        <ServicesCard
          title={'Mídias Sociais'}
          description={
            'Sou designer gráfico especialista em criação de posts para social media. Crio posts para Instagram, Facebook, Twitter, LinkedIn e outras plataformas. Produzo imagens, vídeos, infográficos, animações e outros elementos visuais que compõem o seu perfil nas redes sociais.'
          }
          icon={<FaInstagram size={30} />}
        />
      </div>
    </>
  )
}

export { Services }
