import { img } from '../data'
import { useReveal } from '../hooks'
import '../styles/Gallery.css'

const all = [
  ['ac-outdoor.jpg', 'AC Servicing'], ['electrical.jpg', 'Electrical Work'], ['plumbing.jpg', 'Plumbing'],
  ['carpentry.jpg', 'Carpentry'], ['tiling.jpg', 'Tiling'], ['painting.jpg', 'Painting'],
  ['ac-indoor.jpg', 'AC Maintenance'], ['hero.jpg', 'Site Supervision'],
]

export default function Gallery({ limit = 8, heading = true }) {
  useReveal()
  return (
    <section className="section">
      <div className="container">
        {heading && (
          <div className="center reveal">
            <span className="tag">Our Work</span>
            <h2 className="title">Quality You Can <span>See</span></h2>
          </div>
        )}
        <div className="gal">
          {all.slice(0, limit).map(([f, t], i) => (
            <figure key={f} className={`gal-it shine reveal ${i % 5 === 0 ? 'tall' : ''}`}>
              <img src={img(f)} alt={t} loading="lazy" />
              <figcaption>{t}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
