import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import AboutSection from '../components/AboutSection'
import WhyUs from '../components/WhyUs'
import Gallery from '../components/Gallery'
import CTA from '../components/CTA'
export default function Home() {
  return <><Hero /><AboutSection /><ServicesGrid /><WhyUs /><Gallery limit={6} /><CTA /></>
}
