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
    <div className="bg-black/50 px-40 fixed w-screen">
      <nav className="flex justify-between items-center h-20">
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
                  href={`#${numKey}`}
                  className={twMerge(
                    `text-white ${isActive ? '' : 'hover:text-blue-700 text-blue-500 hover:text-blue-500/80'}`,
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
