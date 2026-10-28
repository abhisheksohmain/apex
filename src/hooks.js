import { useEffect } from 'react'
// Scroll-reveal. Content is ALWAYS visible by default; animation only runs when JS is ready,
// and a fallback timer force-shows anything still hidden (so no page can ever stay blank).
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)')
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return }
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => io.observe(el))
    const t = setTimeout(() => document.querySelectorAll('.reveal:not(.in)').forEach((e) => e.classList.add('in')), 1800)
    return () => { io.disconnect(); clearTimeout(t) }
  })
}
