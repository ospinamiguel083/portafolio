import { useEffect, useState } from 'react'
import SectionHeading from './SectionHeading.jsx'

const GITHUB_USER = 'ospinamiguel083'

export default function GithubRepos() {
  const [repos, setRepos] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=6`)
      .then((res) => {
        if (!res.ok) throw new Error('request failed')
        return res.json()
      })
      .then((data) => setRepos(Array.isArray(data) ? data : []))
      .catch(() => setError(true))
  }, [])

  return (
    <section className="max-w-5xl mx-auto px-5 sm:px-10 py-16 sm:py-20 border-t border-inkline">
      <SectionHeading index="06" title="Repositorios" id="repositorios" />

      <p className="text-paperdim max-w-xl mb-8">
        Esta lista se actualiza sola: se trae en vivo desde{' '}
        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noreferrer"
          className="focus-ring text-accent hover:underline"
        >
          github.com/{GITHUB_USER}
        </a>
        , así que no hay que tocar código cada vez que subo algo nuevo.
      </p>

      {error && (
        <p className="text-teal">
          No se pudieron cargar los repositorios en este momento. Puedes
          verlos directamente en mi perfil de GitHub.
        </p>
      )}

      {!error && repos === null && (
        <p className="font-mono text-sm text-teal">Cargando repositorios…</p>
      )}

      {!error && repos !== null && repos.length === 0 && (
        <p className="text-teal">
          Todavía no hay repositorios públicos en esta cuenta.
        </p>
      )}

      {!error && repos && repos.length > 0 && (
        <div className="grid sm:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="focus-ring plate border border-inkline p-6 hover:border-accent transition-colors"
            >
              <h3 className="font-display text-lg text-paper">{repo.name}</h3>
              <p className="mt-2 text-sm text-paperdim leading-relaxed min-h-[2.5rem]">
                {repo.description || 'Sin descripción todavía.'}
              </p>
              <div className="flex items-center gap-4 mt-4 font-mono text-xs text-teal">
                {repo.language && <span>{repo.language}</span>}
                <span>{repo.stargazers_count} estrellas</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  )
}
