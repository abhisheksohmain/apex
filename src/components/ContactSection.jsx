
import { useState } from 'react'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from 'react-icons/fa'

import { company, services } from '../data'
import { useReveal } from '../hooks'
import '../styles/ContactSection.css'

export default function ContactSection() {
  useReveal()

  const [f, setF] = useState({
    name: '',
    phone: '',
    service: '',
    otherService: '',
    msg: '',
  })

  const set = (key) => (e) => {
    setF((prev) => ({
      ...prev,
      [key]: e.target.value,
    }))
  }

  const serviceOptions = services.map((s) => s.title)

  const submit = (e) => {
    e.preventDefault()

    const selectedService =
      f.service === 'Others'
        ? `Others: ${f.otherService.trim()}`
        : f.service

    const text = [
      'Hello Lion Apex, I would like to request a free quote.',
      '',
      `Name: ${f.name}`,
      `Phone: ${f.phone}`,
      `Service: ${selectedService}`,
      `Project Details: ${f.msg || 'Not provided'}`,
    ].join('\n')

    const whatsappNumber = String(company.wa || '').replace(/\D/g, '')

    if (!whatsappNumber) {
      alert('WhatsApp number is not configured. Please contact us directly.')
      return
    }

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  const phoneLink = `tel:${String(company.phone || '').replace(/[^\d+]/g, '')}`

  const info = [
    [FaPhoneAlt, 'Call Us', company.phone, phoneLink],
    [FaEnvelope, 'Email', company.email, `mailto:${company.email}`],
    [FaMapMarkerAlt, 'Location', company.location, company.map],
    [
      FaWhatsapp,
      'WhatsApp',
      'Chat with us now',
      `https://wa.me/${String(company.wa || '').replace(/\D/g, '')}`,
    ],
  ]

  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container ct-grid">
        {/* Contact Information */}
        <div className="reveal">
          <span className="tag">Get In Touch</span>

          <h2 className="title">
            Let’s Discuss <span>Your Requirement</span>
          </h2>

          {info.map(([Icon, title, value, href]) => (
            <a
              key={title}
              href={href}
              target={title === 'Call Us' || title === 'Email' ? undefined : '_blank'}
              rel={title === 'Call Us' || title === 'Email' ? undefined : 'noopener noreferrer'}
              className="ct-box shine"
            >
              <Icon aria-hidden="true" />
              <div>
                <b>{title}</b>
                <span>{value}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <form className="ct-form reveal" onSubmit={submit}>
          <h3>Request a Free Quote</h3>

          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            placeholder="Your Name"
            value={f.name}
            onChange={set('name')}
          />

          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            required
            placeholder="Phone Number"
            value={f.phone}
            onChange={set('phone')}
          />

          {/* Service selector at the top */}
          <label htmlFor="contact-service">
            Choose Services
          </label>

          <select
            id="contact-service"
            name="service"
            required
            value={f.service}
            onChange={set('service')}
          >
            <option value="" disabled>
              Choose Services
            </option>

            {serviceOptions.map((title) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}

            <option value="Others">Others</option>
          </select>

          {/* Show custom service field only for Others */}
          {f.service === 'Others' && (
            <input
              type="text"
              name="otherService"
              required
              placeholder="Please specify your required service"
              value={f.otherService}
              onChange={set('otherService')}
            />
          )}

          <textarea
            name="message"
            rows="4"
            placeholder="Tell us about your project"
            value={f.msg}
            onChange={set('msg')}
          />

          <button className="btn btn-gold" type="submit">
            <FaWhatsapp aria-hidden="true" />
            Send via WhatsApp
          </button>
        </form>
      </div>

      {/* Google Map */}
      <div className="container ct-map reveal">
        <iframe
          title="Lion Apex location in Al Furjan, Dubai"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=Al%20Furjan%20Dubai&output=embed"
          allowFullScreen
        />
      </div>
    </section>
  )
}
