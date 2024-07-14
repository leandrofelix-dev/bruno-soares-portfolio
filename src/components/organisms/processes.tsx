import { SectionHeader } from '../molecules/section-header'
import { ProcessCard } from './process-card'
import { Section } from './section'

function Processes() {
  return (
    <Section>
      <SectionHeader
        bolder={'Tá, mas como é o processo?'}
        highlight={'Simples'}
        complement={', são apenas algumas etapas'}
      />
      <div className="absolute left-0 flex h-fit w-full items-center justify-center bg-blue-700/50">
        <div className="grid max-w-screen-2xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ProcessCard
            title={'Breafing'}
            description={
              'O primeiro passo é realizar um briefing com o cliente para entender seus objetivos, público-alvo, ajustar os conteúdos e repassar orçamentos.'
            }
            number={'1'}
          />
          <ProcessCard
            title={'Breafing'}
            description={
              'O primeiro passo é realizar um briefing com o cliente para entender seus objetivos, público-alvo, ajustar os conteúdos e repassar orçamentos.'
            }
            number={'2'}
          />
          <ProcessCard
            title={'Breafing'}
            description={
              'O primeiro passo é realizar um briefing com o cliente para entender seus objetivos, público-alvo, ajustar os conteúdos e repassar orçamentos.'
            }
            number={'3'}
          />
          <ProcessCard
            title={'Breafing'}
            description={
              'O primeiro passo é realizar um briefing com o cliente para entender seus objetivos, público-alvo, ajustar os conteúdos e repassar orçamentos.'
            }
            number={'4'}
          />
        </div>
      </div>
    </Section>
  )
}

export { Processes }
