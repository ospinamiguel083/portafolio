import SectionHeading from './SectionHeading.jsx'

export default function CurrentlyLearning() {
  return (
    <section className="max-w-5xl mx-auto px-5 sm:px-10 py-16 sm:py-20 border-t border-inkline">
      <SectionHeading index="04" title="Actualmente aprendiendo" id="aprendiendo" />
      <div className="plate border border-inkline bg-surface p-6 sm:p-8 max-w-2xl text-glowCyan">
        <p className="text-paperdim leading-relaxed">
          Estoy desarrollando un nuevo proyecto académico basado en una{' '}
          <span className="text-paper font-medium">aplicación móvil</span>, y
          en paralelo profundizando en{' '}
          <span className="text-paper font-medium">gestión de proyectos informáticos</span>:
          metodologías ágiles, planificación de tareas y buenas prácticas de
          trabajo en equipo. Mi idea es cerrar la tecnología con una base
          sólida no solo en programar, sino también en cómo se organiza un
          proyecto de software de principio a fin.
        </p>
      </div>
    </section>
  )
}
