import { twMerge } from 'tailwind-merge'

interface INavBarProps {
  focus: number
}

function NavBar({ focus }: INavBarProps) {
  const navItems: Record<number, string> = {
    0: 'Inicio',
    1: 'Sobre mim',
    2: 'Etapas',
    3: 'Projetos',
    4: 'Contato',
  }

  return (
    <div className="fixed z-50 w-screen bg-black/50 px-40">
      <nav className="flex h-20 items-center justify-between">
        <div className="h-8">
          <img src="/logo-header.svg" alt="logo do designer bruno soares" className="h-full" />
        </div>
        <ul className="flex gap-8">
          {Object.keys(navItems).map((key) => {
            const numKey = parseInt(key, 10)
            const isActive = focus === numKey
            return (
              <li key={numKey}>
                <a
                  href={`#${navItems[numKey].replace(' ', '-').toLowerCase()}`}
                  className={twMerge(
                    `text-white ${isActive ? '' : 'text-blue-500 hover:text-blue-500/80 hover:text-blue-700'}`,
                  )}
                >
                  {navItems[numKey]}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export { NavBar }
