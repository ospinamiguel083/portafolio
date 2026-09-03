import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

function getInitialTheme() {
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  // Si no hay preferencia guardada, respeta la del sistema operativo
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
      aria-label={theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
      className="focus-ring fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center justify-center w-10 h-10 rounded-full border border-inkline bg-surface text-paper hover:border-glowCyan hover:text-glowCyan transition-colors"
    >
      {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
    </button>
  )
}
