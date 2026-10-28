import { useState } from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { company, services } from '../data'
import { useReveal } from '../hooks'
import '../styles/ContactSection.css'

export default function ContactSection() {
  useReveal()
  const [f, setF] = useState({ name: '', phone: '', service: services[0].title, msg: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const text = `Hello Lion Apex, I am ${f.name} (${f.phone}). Service: ${f.service}. ${f.msg}`
    window.open(`https://wa.me/${company.wa}?text=${encodeURIComponent(text)}`, '_blank')
  }
  const info = [
    [FaPhoneAlt, 'Call Us', company.phone, `tel:${company.phone.replace(/\s/g, '')}`],
    [FaEnvelope, 'Email', company.email, `mailto:${company.email}`],
    [FaMapMarkerAlt, 'Location', company.location, company.map],
    [FaWhatsapp, 'WhatsApp', 'Chat with us now', `https://wa.me/${company.wa}`],
  ]
  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container ct-grid">
        <div className="reveal">
          <span className="tag">Get In Touch</span>
          <h2 className="title">Let’s Discuss <span>Your Requirement</span></h2>
          {info.map(([I, t, v, h]) => (
            <a key={t} href={h} target="_blank" rel="noreferrer" className="ct-box shine"><I /><div><b>{t}</b><span>{v}</span></div></a>
          ))}
        </div>
        <form className="ct-form reveal" onSubmit={submit}>
          <h3>Request a Free Quote</h3>
          <input required placeholder="Your Name" value={f.name} onChange={set('name')} />
          <input required placeholder="Phone Number" value={f.phone} onChange={set('phone')} />
          <select value={f.service} onChange={set('service')}>{services.map((s) => <option key={s.title}>{s.title}</option>)}</select>
          <textarea rows="4" placeholder="Tell us about your project" value={f.msg} onChange={set('msg')} />
          <button className="btn btn-gold" type="submit"><FaWhatsapp /> Send via WhatsApp</button>
        </form>
      </div>
      <div className="container ct-map reveal">
        <iframe title="Al Furjan Dubai" loading="lazy" src="https://maps.google.com/maps?q=Al%20Furjan%20Dubai&output=embed" />
      </div>
    </section>
  )
}
