function Hero() {
  return (
    <div className="mt-40 flex justify-between">
      <div className="max-w-[800px]">
        <img src="/bruno-photo.png" alt="Bruno's Photo" className="h-full w-full" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="max-w-[220px] rounded-sm bg-gradient-primary p-1 text-center">
          <h1 className="text-lg">Olá, me chamo Bruno</h1>
        </div>
        <div className="flex w-[300px]">
          <h2 className="text-2xl">
            Elevo o visual da sua marca com criatividade e estilo. Venha tornar seus projetos visualmente{' '}
            <span className="text-blue-500">memoráveis</span>.
          </h2>
        </div>
        <button>Solicitar orçamento</button>
      </div>
    </div>
  )
}

export { Hero }
