interface ServicesCardProps {
  title: string
  description: string
  icon: any
}

function ServicesCard({ title, description, icon }: ServicesCardProps) {
  return (
    <div className="flex h-full w-60 flex-col gap-2 rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
      <div className="h-12 w-12 rounded-md border border-blue-500 bg-blue-700/50 p-2 text-blue-500">{icon}</div>
      <span className="text-sm">{title}</span>
      <p className="text-xs">{description}</p>
    </div>
  )
}
export { ServicesCard }
