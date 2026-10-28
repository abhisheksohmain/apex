import { FaSnowflake, FaBolt, FaWrench, FaHammer, FaThLarge, FaPaintRoller, FaHardHat, FaBroom } from 'react-icons/fa'

const B = import.meta.env.BASE_URL
export const img = (n) => `${B}images/${n}`

export const company = {
  name: 'Lion Apex Technical Services LLC',
  email: 'Lionapextechnicalservicesllc@gmail.com',
  phone: '+971 558942860',
  wa: '971558942860',
  location: 'Al Furjan, Dubai – United Arab Emirates',
  map: 'https://share.google/7fWfXki3TvVRYieje',
}

export const services = [
  { title: 'AC Maintenance & Services', icon: FaSnowflake, image: img('ac-outdoor.jpg'), text: 'Cleaning, gas charging, repair and AMC for split, ducted and outdoor units.' },
  { title: 'Electrical Work', icon: FaBolt, image: img('electrical.jpg'), text: 'DB panels, wiring, fault finding, testing and safe installations.' },
  { title: 'Plumbing Services', icon: FaWrench, image: img('plumbing.jpg'), text: 'Leak repair, drainage, fittings and kitchen and bathroom plumbing.' },
  { title: 'Carpentry Work', icon: FaHammer, image: img('carpentry.jpg'), text: 'Kitchen cabinets, wardrobes, doors and custom woodwork with precise finishing.' },
  { title: 'Tiling Work', icon: FaThLarge, image: img('tiling.jpg'), text: 'Floor and wall tiling, perfectly levelled for bathrooms, kitchens and living areas.' },
  { title: 'Painting', icon: FaPaintRoller, image: img('painting.jpg'), text: 'Interior and exterior painting with clean masking and a smooth, lasting finish.' },
  { title: 'Renovation & Fit Out', icon: FaHardHat, image: img('hero.jpg'), text: 'Complete villa, apartment and office renovation, handled from plan to handover.' },
  { title: 'Building Cleaning', icon: FaBroom, image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80', text: 'Post-construction, deep and routine cleaning for homes and commercial buildings.' },
]
