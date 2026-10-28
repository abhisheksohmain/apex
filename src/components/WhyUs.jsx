import { FaUserShield, FaClock, FaGem, FaHandshake } from 'react-icons/fa'
import { img } from '../data'
import { useReveal } from '../hooks'
import '../styles/WhyUs.css'

const items = [
  [FaUserShield, 'Skilled Technicians', 'Trained, uniformed professionals who work safely and cleanly.'],
  [FaClock, 'Prompt Service', 'We respect your time and deliver on the schedule we promise.'],
  [FaGem, 'Premium Finish', 'Attention to detail in every cut, joint, coat and tile.'],
  [FaHandshake, 'One Trusted Team', 'Eight services, one contact. No juggling multiple vendors.'],
]

export default function WhyUs() {
  useReveal()
  return (
    <section className="why" style={{ backgroundImage: `linear-gradient(rgba(6,21,50,.9),rgba(6,21,50,.92)),url(${img('tiling.jpg')})` }}>
      <div className="container">
        <div className="center reveal">
          <span className="tag">Why Lion Apex</span>
          <h2 className="title" style={{ color: '#fff' }}>Built on <span>Quality & Trust</span></h2>
        </div>
        <div className="why-grid">
          {items.map(([I, t, d], i) => (
            <div key={t} className="why-card shine reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <I /><h3>{t}</h3><p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
