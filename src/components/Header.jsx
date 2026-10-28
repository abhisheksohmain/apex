import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa'
import { img, company } from '../data'
import '../styles/Header.css'

const links = [['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/gallery', 'Gallery'], ['/contact', 'Contact']]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [sc, setSc] = useState(false)
  useEffect(() => {
    const f = () => setSc(window.scrollY > 30)
    window.addEventListener('scroll', f); f()
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>📍 {company.location}</span>
          <a href={`mailto:${company.email}`}>✉ {company.email}</a>
        </div>
      </div>
      <header className={`header ${sc ? 'scrolled' : ''}`}>
        <div className="container hd-in">
          <Link to="/" className="brand"><img src={img('logo.png')} alt="Lion Apex Technical Services" /></Link>
          <nav className={open ? 'nav open' : 'nav'}>
            {links.map(([to, t]) => (
              <NavLink key={to} to={to} end onClick={() => setOpen(false)}>{t}</NavLink>
            ))}
          </nav>
          <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="btn btn-gold hd-cta"><FaPhoneAlt /> {company.phone}</a>
          <button className="burger" onClick={() => setOpen(!open)} aria-label="menu">{open ? <FaTimes /> : <FaBars />}</button>
        </div>
      </header>
    </>
  )
}
