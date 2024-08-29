import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { FaRegPaperPlane } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io5'
import { LuInstagram } from 'react-icons/lu'
import { FaBehance } from 'react-icons/fa'

const positionOnMap: [number, number] = [-6.7925, -39.3047]

const customIcon = new L.Icon({
  iconUrl: '/public/pin.png',
  iconSize: [40, 48],
  iconAnchor: [16, 32],
})

function Footer() {
  return (
    <section style={{ height: '500px' }} className="-z-10 -ml-[80px] w-screen">
      <MapContainer
        className="-z-10"
        center={positionOnMap}
        zoom={16}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png?filter=grayscale" />
        <Marker position={positionOnMap} icon={customIcon} />
      </MapContainer>
      <footer className="z-10 -mt-20 flex h-96 w-full items-center justify-center rounded-tr-[100px] bg-black px-20">
        <div className="flex w-full max-w-[1000px] flex-col items-start justify-between gap-12 md:flex-row md:items-center md:gap-4">
          <div className="flex w-72 flex-col items-start gap-4">
            <img src="/logo-header.svg" alt="logo do designer bruno soares" className="full max-h-6 md:max-h-8" />
            <p>
              <span className="text-blue-500">A solução</span> que a sua marca precisa
            </p>
            <button className="flex items-center justify-center gap-4 rounded-md bg-gradient-primary px-4 py-3">
              <FaRegPaperPlane size={14} /> <p className="text-[12px] font-semibold">SOLICITAR ORÇAMENTO</p>
            </button>
          </div>
          <div>
            <h6 className="text-xl font-semibold">Contato</h6>
            <span className="flex items-center gap-2">
              <IoLogoWhatsapp />
              (88) 9 8127-9672
            </span>
            <span className="flex items-center gap-2">
              <LuInstagram />
              @brunodesigner.psd
            </span>
            <span className="flex items-center gap-2">
              <FaBehance />
              brunosoaresdesigner
            </span>
          </div>
        </div>
      </footer>
    </section>
  )
}

export { Footer }
