
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { company } from '../data'
import '../styles/WhatsAppFloat.css'

export default function WhatsAppFloat() {
  const phone = String(company.phone || '').replace(/[^\d+]/g, '')
  const whatsapp = String(company.wa || '').replace(/\D/g, '')

  return (
    <div className="floating-contact">
      {/* Left: Phone Call */}
      <a
        className="float-contact-icon phone-float"
        href={`tel:${phone}`}
        aria-label="Call Lion Apex"
        title="Call Us"
      >
        <FaPhoneAlt />
      </a>

      {/* Right: WhatsApp */}
      <a
        className="float-contact-icon wa"
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Lion Apex on WhatsApp"
        title="WhatsApp Us"
      >
        <FaWhatsapp />
      </a>
    </div>
  )
}
