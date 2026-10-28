import PageBanner from '../components/PageBanner'
import ContactSection from '../components/ContactSection'
import { img } from '../data'
export default function Contact() {
  return <><PageBanner title="Contact Us" image={img('office.jpg')} /><ContactSection /></>
}
