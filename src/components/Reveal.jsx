import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Envuelve una sección y la anima suavemente (aparece + se desliza un poco
 * hacia arriba) la primera vez que entra en el viewport. Respeta la
 * preferencia de "reducir movimiento" del sistema mostrando el contenido
 * de inmediato en ese caso.
 */
export default function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(prefersReducedMotion())

  useEffect(() => {
    if (prefersReducedMotion() || visible) return
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [visible])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  )
}
