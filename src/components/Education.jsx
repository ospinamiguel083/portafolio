import SectionHeading from './SectionHeading.jsx'

export default function Education() {
  return (
    <section className="max-w-5xl mx-auto px-5 sm:px-10 py-16 sm:py-20 border-t border-inkline">
      <SectionHeading index="02" title="Formación" id="formacion" />
      <div className="plate border border-inkline p-6 sm:p-8 max-w-2xl text-teal">
        <p className="font-display text-2xl text-paper">
          Tecnología en Desarrollo de Software
        </p>
        <p className="mt-2 text-paperdim">
          Institución Universitaria Pascual Bravo — Medellín, Colombia
        </p>
        <p className="mt-1 font-mono text-sm text-teal">5° semestre, en curso</p>
      </div>
    </section>
  )
}
