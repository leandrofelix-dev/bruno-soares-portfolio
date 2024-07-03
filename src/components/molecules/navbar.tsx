import { useState } from 'react'
import { FiX } from 'react-icons/fi'
import { TbMenu } from 'react-icons/tb'
import { twMerge } from 'tailwind-merge'

interface INavBarProps {
  focus: number
}

function NavBar({ focus }: INavBarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const navItems: Record<number, string> = {
    0: 'Inicio',
    1: 'Sobre mim',
    2: 'Etapas',
    3: 'Projetos',
    4: 'Contato',
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className="fixed z-50 w-screen bg-black/50 px-10 md:px-40">
      <nav className="flex h-20 items-center justify-between md:h-24">
        <div className="flex h-20 items-center justify-between">
          <img src="/logo-header.svg" alt="logo do designer bruno soares" className="full max-h-6 md:max-h-8" />
          <button onClick={toggleModal} className="absolute right-10 text-blue-500 focus:outline-none md:hidden">
            <TbMenu size={24} />
          </button>
        </div>

        <ul className="hidden gap-8 md:flex">
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

      {isModalOpen && (
        <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center">
          <div className="absolute left-0 top-0 z-40 h-full w-full bg-black/50" onClick={toggleModal}></div>
          <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center">
            <div className="absolute left-0 top-0 h-full w-full bg-black/50"></div>
            <div className="relative p-8 shadow-md">
              <button
                onClick={toggleModal}
                className="text-gray-600 hover:text-gray-800 z-60 absolute right-4 top-4 focus:outline-none"
              >
                <FiX className="absolute right-2 h-6 w-6 text-white" />
              </button>
              <ul className="mt-4 flex flex-col items-center gap-8">
                {Object.keys(navItems).map((key) => {
                  const numKey = parseInt(key, 10)
                  const isActive = focus === numKey
                  return (
                    <li key={numKey}>
                      <a
                        href={`#${navItems[numKey].replace(' ', '-').toLowerCase()}`}
                        className={twMerge(`text-xl font-medium text-white ${isActive ? '' : 'text-blue-500'}`)}
                        onClick={toggleModal}
                      >
                        {navItems[numKey]}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export { NavBar }
