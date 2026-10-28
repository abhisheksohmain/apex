import PageBanner from '../components/PageBanner'
import AboutSection from '../components/AboutSection'
import WhyUs from '../components/WhyUs'
import CTA from '../components/CTA'
import { img } from '../data'
export default function About() {
  return <><PageBanner title="About Us" image={img('hero.jpg')} /><AboutSection /><WhyUs /><CTA /></>
}
