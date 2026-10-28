import { Link } from 'react-router-dom'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa'

import { img, company, services } from '../data'
import '../styles/Footer.css'

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/lionapextechnicalservice?srtk=MjdxajZndHVobWZ0',
    icon: FaInstagram,
    className: 'ft-social-instagram',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/19pHdNhfMr/',
    icon: FaFacebookF,
    className: 'ft-social-facebook',
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      {/* Decorative wave — styling and animation in Footer.css */}
      <div className="ft-wave" aria-hidden="true">
        <svg
          className="ft-wave-svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            className="ft-wave-path ft-wave-path-back"
            d="M0,64 C180,120 360,0 540,48 S900,120 1080,54 S1320,10 1440,60 L1440,120 L0,120 Z"
          />
          <path
            className="ft-wave-path ft-wave-path-front"
            d="M0,80 C200,20 360,110 600,66 S950,15 1150,72 S1350,100 1440,50 L1440,120 L0,120 Z"
          />
        </svg>
      </div>

      <div className="container ft-grid">
        {/* Company information */}
        <div className="ft-column ft-company">
          <Link to="/" className="ft-logo" aria-label="Lion Apex Home">
            <img src={img('logo.png')} alt="Lion Apex" />
          </Link>

          <p>
            Reliable technical, maintenance and fit-out solutions for
            homes and businesses across Dubai.
          </p>

          {/* Social media links */}
          <div className="ft-socials" aria-label="Social media">
            {socialLinks.map(({ name, url, icon: Icon, className }) => (
              <a
                key={name}
                href={url}
                className={`ft-social-link ${className}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Lion Apex on ${name}`}
                title={name}
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="ft-column">
          <h4>Quick Links</h4>

          {[
            ['/', 'Home'],
            ['/about', 'About Us'],
            ['/services', 'Services'],
            ['/gallery', 'Gallery'],
            ['/contact', 'Contact'],
          ].map(([to, text]) => (
            <Link key={to} to={to}>
              {text}
            </Link>
          ))}
        </div>

        {/* Services */}
        <div className="ft-column">
          <h4>Our Services</h4>

          {services.slice(0, 6).map((service) => (
            <Link key={service.title} to="/services">
              {service.title}
            </Link>
          ))}
        </div>

        {/* Contact information */}
        <div className="ft-column ft-contact">
          <h4>Contact Us</h4>

          <a
            href={company.map}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt aria-hidden="true" />
            <span>{company.location}</span>
          </a>

          <a href={`tel:${company.phone.replace(/\s/g, '')}`}>
            <FaPhoneAlt aria-hidden="true" />
            <span>{company.phone}</span>
          </a>

          <a href={`mailto:${company.email}`}>
            <FaEnvelope aria-hidden="true" />
            <span>{company.email}</span>
          </a>

          <a
            href={`https://wa.me/${String(company.wa).replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp aria-hidden="true" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="ft-bottom">
        <div className="container ft-bottom-inner">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>

          <div className="ft-bottom-socials">
            {socialLinks.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} — Lion Apex`}
                title={name}
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}