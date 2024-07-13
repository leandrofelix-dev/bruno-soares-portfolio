interface SectionProps {
  children: React.ReactNode
  props?: React.HTMLProps<HTMLDivElement>
}

function Section({ children, ...props }: SectionProps) {
  return (
    <section className="my-10" {...props}>
      {children}
    </section>
  )
}

export { Section }
