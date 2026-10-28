import PageBanner from '../components/PageBanner'
import GalleryGrid from '../components/Gallery'
import CTA from '../components/CTA'
import { img } from '../data'
export default function Gallery() {
  return <><PageBanner title="Gallery" image={img('plumbing.jpg')} /><GalleryGrid heading={false} /><CTA /></>
}
