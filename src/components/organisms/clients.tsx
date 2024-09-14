import { SectionHeader } from '../molecules/section-header'
import { Section } from './section'

function Clients() {
  const clients = ['client_1', 'client_2', 'client_3', 'client_4', 'client_5']
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
            className="m-2 max-h-20 max-w-52 cursor-pointer grayscale transition-all hover:m-0 hover:max-h-24 hover:max-w-56 hover:grayscale-0"
          />
        ))}
      </div>
    </Section>
  )
}

export { Clients }
