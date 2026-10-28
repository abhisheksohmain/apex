
import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
} from 'react-icons/fa'

import { img, company } from '../data'
import '../styles/Header.css'

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
  ['/gallery', 'Gallery'],
  ['/contact', 'Contact'],
]

const instagramUrl =
  'https://www.instagram.com/lionapextechnicalservice?srtk=MjdxajZndHVobWZ0'

const facebookUrl =
  'https://www.facebook.com/share/19pHdNhfMr/'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [sc, setSc] = useState(false)

  useEffect(() => {
    const handleScroll = () => setSc(window.scrollY > 30)

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top contact bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <span className="topbar-location">
            📍 {company.location}
          </span>

          <div className="topbar-right">
            <a
              className="topbar-email"
              href={`mailto:${company.email}`}
              aria-label="Email Lion Apex"
            >
              <FaEnvelope />
              <span>{company.email}</span>
            </a>

            {/* Instagram */}
            <a
              className="topbar-social topbar-instagram"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Lion Apex on Instagram"
              title="Instagram"
            >
              <FaInstagram />
            </a>

            {/* Facebook */}
            <a
              className="topbar-social topbar-facebook"
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Lion Apex on Facebook"
              title="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className={`header ${sc ? 'scrolled' : ''}`}>
        <div className="container hd-in">
          <Link
            to="/"
            className="brand"
            onClick={() => setOpen(false)}
          >
            <img
              src={img('logo.png')}
              alt="Lion Apex Technical Services"
            />
          </Link>

          <nav className={open ? 'nav open' : 'nav'}>
            {links.map(([to, title]) => (
              <NavLink
                key={to}
                to={to}
                end
                onClick={() => setOpen(false)}
              >
                {title}
              </NavLink>
            ))}
          </nav>

          <a
            href={`tel:${String(company.phone || '').replace(/[^\d+]/g, '')}`}
            className="btn btn-gold hd-cta"
          >
            <FaPhoneAlt />
            {company.phone}
          </a>

          <button
            type="button"
            className="burger"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>
    </>
  )
}
