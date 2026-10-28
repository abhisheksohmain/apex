import { Link } from 'react-router-dom'
import '../styles/PageBanner.css'
export default function PageBanner({ title, image }) {
  return (
    <section className="pb" style={{ backgroundImage: `linear-gradient(rgba(6,21,50,.82),rgba(6,21,50,.9)),url(${image})` }}>
      <div className="container">
        <h1>{title}</h1>
        <p><Link to="/">Home</Link> / <span>{title}</span></p>
      </div>
    </section>
  )
}
