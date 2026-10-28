import { Link } from 'react-router-dom'
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import { img } from '../data'
import '../styles/Hero.css'

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `linear-gradient(105deg,rgba(6,21,50,.95) 35%,rgba(6,21,50,.55)),url(${img('ac-indoor.jpg')})` }}>
      <div className="container hero-in">
        <div className="hero-txt">
          <span className="tag">Al Furjan · Dubai · UAE</span>
          <h1>Premium <span>Technical Services</span> Built on Trust</h1>
          <p>AC, electrical, plumbing, carpentry, tiling, painting, renovation and cleaning, delivered by one skilled team with a flawless finish.</p>
          <ul>
            {['Skilled & uniformed technicians', 'Quality materials, clean workmanship', 'One company for every technical need'].map((t) => <li key={t}><FaCheckCircle /> {t}</li>)}
          </ul>
          <div className="hero-btns">
            <Link to="/contact" className="btn btn-gold">Get a Free Quote <FaArrowRight /></Link>
            <Link to="/services" className="btn btn-line">Our Services</Link>
          </div>
        </div>
        <div className="hero-img">
          <div className="frame"><img src={img('hero.jpg')} alt="Lion Apex site engineer" /></div>
          {/* <div className="badge">8<small>Core Services</small></div> */}
        </div>
      </div>
    </section>
  )
}
