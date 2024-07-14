interface SectionHeaderProps {
  bolder: string
  highlight: string
  complement: string
}

function SectionHeader({ bolder, highlight, complement }: SectionHeaderProps) {
  return (
    <div className="my-10 flex flex-col">
      <h2 className="text-center text-2xl font-semibold">{bolder}</h2>
      <h4 className="text-center text-xl">
        <span className="text-blue-500">{highlight}</span> {complement}
      </h4>
    </div>
  )
}

export { SectionHeader }
9
