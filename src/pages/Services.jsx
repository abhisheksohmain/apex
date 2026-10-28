import PageBanner from '../components/PageBanner'
import ServicesGrid from '../components/ServicesGrid'
import CTA from '../components/CTA'
import { img } from '../data'
export default function Services() {
  return <><PageBanner title="Our Services" image={img('electrical.jpg')} /><ServicesGrid heading={false} /><CTA /></>
}
