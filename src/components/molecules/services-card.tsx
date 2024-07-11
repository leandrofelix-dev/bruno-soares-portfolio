interface ServicesCardProps {
  title: string
  description: string
  icon: any
}

function ServicesCard({ title, description, icon }: ServicesCardProps) {
  return (
    <div className="flex h-full w-[300px] flex-col gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-sm">
      <div className="mb-2 h-12 w-12 rounded-md border border-blue-500 bg-blue-700/50 p-2 text-blue-500">{icon}</div>
      <span className="text-[14px] text-sm font-semibold">{title}</span>
      <p className="text-xs font-normal">{description}</p>
    </div>
  )
}
export { ServicesCard }
