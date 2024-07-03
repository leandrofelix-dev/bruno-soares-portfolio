import { FaRegPaperPlane } from 'react-icons/fa'

function Hero() {
  return (
    <div className="flex justify-center">
      <div className="h-[740px] w-[700px]">
        <img src="/_bruno-photo.png" alt="Bruno Foto" className="z-20" />
        <img src="/photoshop.png" alt="Logo Photoshop" className="absolute left-[200px] top-[240px] -z-10 w-48" />
        <img src="/illustrator.png" alt="Logo Illustrator" className="absolute left-[450px] top-[300px] z-10 w-48" />
        <img src="/figma.png" alt="Logo Figma" className="absolute left-[230px] top-[360px] z-10 w-48" />
        <img src="/coreldraw.png" alt="Logo Coreldraw" className="absolute left-[450px] top-[420px] z-10 w-48" />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <div className="max-w-[170px] rounded-sm bg-gradient-primary p-0.5 text-center">
            <h1 className="text-[14px]">Olá, me chamo Bruno</h1>
          </div>
          <div className="flex w-[300px]">
            <h2 className="text-2xl">
              Elevo o visual da sua marca com criatividade e estilo. Venha tornar seus projetos visualmente{' '}
              <span className="text-blue-500">memoráveis</span>.
            </h2>
          </div>
        </div>
        <button className="flex items-center justify-center gap-4 rounded-md bg-gradient-primary py-3">
          <FaRegPaperPlane size={20} /> <p className="text-[16px] font-semibold">SOLICITAR ORÇAMENTO</p>
        </button>
      </div>
    </div>
  )
}

export { Hero }
