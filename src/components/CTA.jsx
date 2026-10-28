import { Link } from 'react-router-dom'
import { FaPhoneAlt } from 'react-icons/fa'
import { img, company } from '../data'
import '../styles/CTA.css'

export default function CTA() {
  return (
    <section className="cta" style={{ backgroundImage: `linear-gradient(rgba(10,31,68,.88),rgba(6,21,50,.92)),url(${img('painting.jpg')})` }}>
      <div className="container">
        <h2>Ready to Start Your <span>Project?</span></h2>
        <p>Call or message us today for a free consultation and quote.</p>
        <div className="cta-b">
          <Link to="/contact" className="btn btn-gold">Request a Quote</Link>
          <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="btn btn-line"><FaPhoneAlt /> {company.phone}</a>
        </div>
      </div>
    </section>
  )
}
