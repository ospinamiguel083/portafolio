import SectionHeading from './SectionHeading.jsx'
import {
  SiJavascript, SiPython, SiCplusplus, SiReact, SiGithub, SiGit, SiMysql,
  SiPostgresql, SiIntellijidea, SiPostman, SiXampp, SiVirtualbox,
  SiClaude, SiGooglegemini, SiMongodb, SiNodedotjs,
} from 'react-icons/si'
import { DiJava, DiVisualstudio, DiDatabase } from 'react-icons/di'

// Placa de texto para tecnologías sin un ícono de marca libre confiable
// (C# y pgAdmin), coherente en tamaño y estilo con el resto del set.
function TextMark(text) {
  return function Mark({ className }) {
    return (
      <span className={`font-mono font-semibold ${className}`} aria-hidden="true">
        {text}
      </span>
    )
  }
}

const skills = [
  { name: 'Java', Icon: DiJava },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'React', Icon: SiReact },
  { name: 'Python', Icon: SiPython },
  { name: 'C++', Icon: SiCplusplus },
  { name: 'C#', Icon: TextMark('C#') },
  { name: 'GitHub', Icon: SiGithub },
  { name: 'Git', Icon: SiGit },
  { name: 'MySQL', Icon: SiMysql },
  { name: 'PostgreSQL', Icon: SiPostgresql },
  { name: 'pgAdmin', Icon: TextMark('pgA') },
  { name: 'SQL Server', Icon: TextMark('SQL') },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'NoSQL', Icon: DiDatabase },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'Visual Studio', Icon: DiVisualstudio },
  { name: 'IntelliJ IDEA', Icon: SiIntellijidea },
  { name: 'Postman', Icon: SiPostman },
  { name: 'XAMPP', Icon: SiXampp },
  { name: 'VirtualBox', Icon: SiVirtualbox },
  { name: 'Claude', Icon: SiClaude },
  { name: 'Gemini', Icon: SiGooglegemini },
  { name: 'ChatGPT', Icon: TextMark('GPT') },
]

function SkillCard({ name, Icon }) {
  return (
    <div className="flex items-center gap-3 shrink-0 border border-inkline bg-surface rounded-sm px-5 py-4 mx-2 sm:mx-3 hover:border-glowCyan/60 transition-colors">
      <Icon className="text-2xl text-glowCyan shrink-0" />
      <span className="text-paper text-sm sm:text-base whitespace-nowrap">{name}</span>
    </div>
  )
}

export default function Skills() {
  // Se duplica la lista para lograr un loop continuo sin salto visible.
  const loop = [...skills, ...skills]

  return (
    <section className="py-20 border-t border-inkline">
      <div className="max-w-5xl mx-auto px-5 sm:px-10">
        <SectionHeading index="03" title="Habilidades" id="habilidades" />
        <p className="text-paperdim max-w-xl mb-10">
          Lenguajes, herramientas, motores de base de datos y asistentes de IA
          con los que he trabajado a lo largo de la carrera.
        </p>
      </div>

      <div className="marquee-viewport overflow-hidden">
        <div className="marquee-track flex">
          {loop.map((skill, i) => (
            <SkillCard key={`${skill.name}-${i}`} name={skill.name} Icon={skill.Icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
