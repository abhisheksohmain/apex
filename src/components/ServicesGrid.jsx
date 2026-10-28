
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { services } from '../data'
import { useReveal } from '../hooks'
import '../styles/ServicesGrid.css'

export default function ServicesGrid({ heading = true }) {
  useReveal()

  return (
    <section
      className="section services-section"
      style={{ background: 'var(--bg)' }}
    >
      <div className="container">

        {heading && (
          <div className="center reveal">
            <span className="tag">What We Do</span>

            <h2 className="title">
              Complete <span>Technical Solutions</span>
            </h2>

            <p>
              From a leaking pipe to a full villa fit-out,
              one trusted team handles it all.
            </p>
          </div>
        )}

        <div className="sv-grid">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="sv-card shine reveal"
              style={{
                transitionDelay: `${(i % 3) * 90}ms`,
              }}
            >
              {/* IMAGE */}
              <div className="sv-img">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* ICON */}
              <div className="sv-ic" aria-hidden="true">
                <s.icon />
              </div>

              {/* CONTENT BELOW IMAGE */}
              <div className="sv-body">
                <h3>{s.title}</h3>

                <p>{s.text}</p>

                <Link
                  to="/contact"
                  className="sv-link"
                  aria-label={`Book ${s.title}`}
                >
                  Book Now
                  <FaArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
