import { FaWhatsapp } from 'react-icons/fa'
import { company } from '../data'
import '../styles/WhatsAppFloat.css'
export default function WhatsAppFloat() {
  return <a className="wa" href={`https://wa.me/${company.wa}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
}
