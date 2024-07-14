interface ProcessCardProps {
  title: string
  description: string
  number: string
}

function ProcessCard({ title, description, number }: ProcessCardProps) {
  return (
    <div className="flex w-fit gap-3 p-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/80">
        <span className="text-3xl">{number}</span>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold text-blue-500">{title}</h1>
        <p className="w-40 text-sm">{description}</p>
      </div>
    </div>
  )
}

export { ProcessCard }
