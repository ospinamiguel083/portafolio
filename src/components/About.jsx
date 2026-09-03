import SectionHeading from './SectionHeading.jsx'

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-5 sm:px-10 py-16 sm:py-20">
      <SectionHeading index="01" title="Sobre mí" id="sobre-mi" />
      <p className="text-lg text-paperdim max-w-2xl leading-relaxed">
        Estudiante de Tecnología en Desarrollo de Software en la Institución
        Universitaria Pascual Bravo, cursando 5° semestre. Durante la carrera
        he trabajado con varios lenguajes y paradigmas distintos —desde Java
        y C# hasta JavaScript y Python— y eso me ha dado una base amplia para
        moverme entre frontend, backend y bases de datos según lo que pida
        cada proyecto. Ahora mismo estoy enfocado en cerrar bien mi formación
        y construir un portafolio de proyectos reales que respalden lo que sé
        hacer.
      </p>
    </section>
  )
}
