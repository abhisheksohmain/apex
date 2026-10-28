import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { img } from '../data'
import { useReveal } from '../hooks'
import '../styles/AboutSection.css'

export default function AboutSection() {
  useReveal()
  return (
    <section className="section ab">
      <div className="container ab-grid">
        <div className="ab-imgs reveal">
          <img className="big shine" src={img('office.jpg')} alt="Lion Apex office" />
          {/* <img className="small shine" src={img('carpentry.jpg')} alt="Carpentry work" /> */}
          <div className="ab-exp">Dubai<small>Based Team</small></div>
        </div>
        <div className="reveal">
          <span className="tag">About Us</span>
          <h2 className="title">Your Trusted Partner for <span>Every Technical Need</span></h2>
          <p>Lion Apex Technical Services LLC is based in Al Furjan, Dubai. We bring electrical, AC, plumbing, carpentry, tiling, painting, renovation and cleaning together under one roof, so you deal with one team, one standard and one point of contact.</p>
          <ul>
            {['Quick response and on-time completion', 'Neat, clean and safe workmanship', 'Residential, commercial and fit-out projects', 'Transparent communication from quote to handover'].map((t) => <li key={t}><FaCheck /> {t}</li>)}
          </ul>
          <Link to="/contact" className="btn btn-gold">Talk to Our Team</Link>
        </div>
      </div>
    </section>
  )
}
