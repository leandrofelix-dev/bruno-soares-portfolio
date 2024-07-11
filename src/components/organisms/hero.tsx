import { useSpring, animated } from 'react-spring'
import { FaRegPaperPlane } from 'react-icons/fa'

function Hero() {
  //@ts-ignore
  const floatPropsPhotoshop = useSpring({
    from: { translateY: 0 },
    to: async (next) => {
      while (true) {
        await next({ translateY: 10 })
        await next({ translateY: 0 })
      }
    },
    config: { tension: 100, friction: 20, duration: 3000, delay: 1000 },
    loop: true,
  })

  //@ts-ignore
  const floatPropsIllustrator = useSpring({
    from: { translateY: 0 },
    to: async (next) => {
      while (true) {
        await next({ translateY: -10 })
        await next({ translateY: 0 })
      }
    },
    config: { tension: 100, friction: 20, duration: 3500, delay: 500 },
    loop: true,
  })

  //@ts-ignore
  const floatPropsFigma = useSpring({
    from: { translateY: 0 },
    to: async (next) => {
      while (true) {
        await next({ translateY: 8 })
        await next({ translateY: 0 })
      }
    },
    config: { tension: 100, friction: 20, duration: 3200, delay: 1200 },
    loop: true,
  })

  //@ts-ignore
  const floatPropsCoreldraw = useSpring({
    from: { translateY: 0 },
    to: async (next) => {
      while (true) {
        await next({ translateY: -8 })
        await next({ translateY: 0 })
      }
    },
    config: { tension: 100, friction: 20, duration: 3800, delay: 800 },
    loop: true,
  })

  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
      <div className="relative hidden flex-col md:flex">
        <img
          src="/_bruno-photo.png"
          alt="Bruno Foto"
          className="z-10 mt-20 h-auto max-w-full"
          style={{ maxWidth: '650px' }}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <animated.img
            src="/photoshop.png"
            alt="Logo Photoshop"
            className="h-auto w-48"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 5, // Z-index menor para ficar atrás da foto do Bruno
              marginLeft: '-250px',
              marginTop: '-90px',
              //@ts-ignore
              transform: floatPropsPhotoshop.translateY.interpolate((y) => `translateY(${y}px)`),
            }}
          />
          <animated.img
            src="/illustrator.png"
            alt="Logo Illustrator"
            className="h-auto w-48"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
              marginLeft: '0px',
              marginTop: '-20px',
              //@ts-ignore
              transform: floatPropsIllustrator.translateY.interpolate((y) => `translateY(${y}px)`),
            }}
          />
          <animated.img
            src="/aftereffects.png"
            alt="Logo Figma"
            className="h-auto w-48"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
              marginLeft: '-200px',
              marginTop: '30px',
              //@ts-ignore
              transform: floatPropsFigma.translateY.interpolate((y) => `translateY(${y}px)`),
            }}
          />
          <animated.img
            src="/coreldraw.png"
            alt="Logo Coreldraw"
            className="h-auto w-48"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
              marginLeft: '0px',
              marginTop: '100px',
              //@ts-ignore
              transform: floatPropsCoreldraw.translateY.interpolate((y) => `translateY(${y}px)`),
            }}
          />
        </div>
      </div>

      <div className="ml-8 mt-40 flex flex-col gap-8 md:mt-0">
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
