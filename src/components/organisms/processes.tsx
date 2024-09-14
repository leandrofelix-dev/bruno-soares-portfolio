import { SectionHeader } from '../molecules/section-header'
import { ProcessCard } from './process-card'
import { Section } from './section'

function Processes() {
  return (
    <Section>
      <div id="etapas">
        <SectionHeader
          bolder={'Tá, mas como é o processo?'}
          highlight={'Simples'}
          complement={', são apenas algumas etapas'}
        />
        <div className="relative -ml-20 w-screen bg-blue-500">
          <div className="left-0 flex w-full items-center justify-center bg-blue-700/50">
            <div className="grid max-w-screen-2xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <ProcessCard
                title={'Breafing'}
                description={
                  'O primeiro passo é realizar um briefing com o cliente para entender seus objetivos, público-alvo, ajustar os conteúdos e repassar orçamentos.'
                }
                number={'1'}
              />
              <ProcessCard
                title={'Proposta'}
                description={
                  'Após coletar algumas informações necessárias para realizar o seu projeto, lhe envio uma proposta que, após aceita, daremos continuidade com a produção do projeto.'
                }
                number={'2'}
              />
              <ProcessCard
                title={'Ajustes'}
                description={
                  'No processo de criação, enviarei a pré-visualização do projeto, a fim de que você analise e aprove ou promova ajustes ao projeto.'
                }
                number={'3'}
              />
              <ProcessCard
                title={'Entrega'}
                description={
                  'Após a aprovação final, entrego os arquivos finais em diversos formatos para que o cliente possa utilizá-los em diferentes plataformas.'
                }
                number={'4'}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export { Processes }
