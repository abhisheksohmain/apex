import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { services } from '../data'
import { useReveal } from '../hooks'
import '../styles/ServicesGrid.css'

export default function ServicesGrid({ heading = true }) {
  useReveal()
  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        {heading && (
          <div className="center reveal">
            <span className="tag">What We Do</span>
            <h2 className="title">Complete <span>Technical Solutions</span></h2>
            <p>From a leaking pipe to a full villa fit-out, one trusted team handles it all.</p>
          </div>
        )}
        <div className="sv-grid">
          {services.map((s, i) => (
            <article key={s.title} className="sv-card shine reveal" style={{ transitionDelay: `${(i % 4) * 90}ms` }}>
              <div className="sv-img"><img src={s.image} alt={s.title} loading="lazy" /></div>
              <div className="sv-ic"><s.icon /></div>
              <div className="sv-body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <Link to="/contact">Book Now <FaArrowRight /></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
