import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { img, company, services } from '../data'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container ft-grid">
        <div>
          <div className="ft-logo"><img src={img('logo.png')} alt="Lion Apex" /></div>
          <p>Reliable technical, maintenance and fit-out solutions for homes and businesses across Dubai.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/gallery', 'Gallery'], ['/contact', 'Contact']].map(([to, t]) => <Link key={to} to={to}>{t}</Link>)}
        </div>
        <div>
          <h4>Our Services</h4>
          {services.slice(0, 6).map((s) => <Link key={s.title} to="/services">{s.title}</Link>)}
        </div>
        <div>
          <h4>Contact</h4>
          <a href={company.map} target="_blank" rel="noreferrer"><FaMapMarkerAlt /> {company.location}</a>
          <a href={`tel:${company.phone.replace(/\s/g, '')}`}><FaPhoneAlt /> {company.phone}</a>
          <a href={`mailto:${company.email}`}><FaEnvelope /> {company.email}</a>
          <a href={`https://wa.me/${company.wa}`} target="_blank" rel="noreferrer"><FaWhatsapp /> WhatsApp Us</a>
        </div>
      </div>
      <div className="ft-bottom">© {new Date().getFullYear()} {company.name}. All rights reserved.</div>
    </footer>
  )
}
