import { SectionHeader } from '../molecules/section-header'
import { Section } from './section'

function Clients() {
  const clients = ['client_1', 'client_1', 'client_1', 'client_1', 'client_1']
  return (
    <Section>
      <SectionHeader
        bolder={'É confiável mesmo?'}
        highlight={'Sim'}
        complement={', esses estão alguns clientes meus que você já deve ter ouvido falar'}
      />
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
        {clients.map((client) => (
          <img
            src={`/clients/${client}.png`}
            alt={client}
            key={client}
            className="w-52 grayscale transition-all hover:grayscale-0"
          />
        ))}
      </div>
    </Section>
  )
}

export { Clients }
