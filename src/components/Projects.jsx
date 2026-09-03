import SectionHeading from './SectionHeading.jsx'

// Cuando agregues un nuevo proyecto, sigue este formato.
// "links" es una lista abierta: puede tener demo, repo, repo del backend, etc.
const projects = [
  {
    name: 'NovaTech',
    description: 'Tienda en línea de componentes tecnológicos. Proyecto full stack: interfaz en React, API en Java con Spring Boot, y base de datos relacional.',
    stack: ['React', 'Java', 'Spring Boot'],
    links: [
      { label: 'Demo en vivo', url: 'https://novatech-fr.netlify.app/' },
      { label: 'Repo frontend', url: 'https://github.com/ospinamiguel083/novatech-frontend' },
      { label: 'Repo backend', url: 'https://github.com/ospinamiguel083/novatech-backend' },
    ],
  },
  {
    name: 'Empresa Comercializadora',
    description: 'Aplicación de escritorio para la gestión de una comercializadora de seguros: clientes, pólizas y generación de certificados en PDF. Proyecto en equipo.',
    stack: ['C#', '.NET', 'WinForms'],
    links: [
      { label: 'Repositorio', url: 'https://github.com/ospinamiguel083/Empresa-Comercializadora-csharp' },
    ],
  },
]

function ProjectCard({ project }) {
  return (
    <article className="plate border border-inkline p-6 text-glowCyan hover:border-glowCyan/50 transition-colors">
      <h3 className="font-display text-xl text-paper">{project.name}</h3>
      <p className="mt-2 text-paperdim text-sm leading-relaxed">
        {project.description}
      </p>
      <ul className="flex flex-wrap gap-2 mt-4">
        {project.stack.map((s) => (
          <li key={s} className="font-mono text-xs border border-inkline rounded-sm px-2 py-1 text-paperdim">
            {s}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-x-4 gap-y-2 mt-5">
        {project.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="focus-ring text-accent text-sm font-semibold hover:underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-5 sm:px-10 py-16 sm:py-20 border-t border-inkline">
      <SectionHeading index="05" title="Proyectos" id="proyectos" />

      {projects.length === 0 ? (
        <div className="plate border border-dashed border-inkline p-10 max-w-2xl text-glowCyan">
          <p className="text-paper font-display text-xl">
            Aún no hay proyectos publicados aquí.
          </p>
          <p className="mt-2 text-paperdim">
            Estoy organizando el material de mis proyectos para mostrarlos con
            el detalle que merecen. Mientras tanto, puedes revisar mis
            repositorios en la sección de abajo.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      )}
    </section>
  )
}
