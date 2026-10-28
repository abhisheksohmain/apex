
import { FaStar, FaQuoteLeft, FaArrowRight } from 'react-icons/fa'
import '../styles/Testimonials.css'

const topReviews = [
  {
    name: 'Rahul Sharma',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&crop=faces',
    review:
      'Excellent service from start to finish. The team was professional, punctual, and paid attention to every little detail. Highly recommended!',
    service: 'Home Renovation',
    rating: 5,
  },
  {
    name: 'Priya Mehta',
    role: 'Property Owner',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&crop=faces',
    review:
      'The entire experience was smooth and stress-free. Great communication, transparent pricing, and quality work that exceeded my expectations.',
    service: 'Interior Solutions',
    rating: 5,
  },
  {
    name: 'Amit Verma',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&h=160&fit=crop&crop=faces',
    review:
      'A reliable team that genuinely cares about quality. They completed the work on schedule and kept everything clean and organised.',
    service: 'Electrical Work',
    rating: 5,
  },
  {
    name: 'Neha Kapoor',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=160&h=160&fit=crop&crop=faces',
    review:
      'Very impressed with their professionalism and finishing. They listened to what we needed and delivered exactly what we had in mind.',
    service: 'Plumbing Solutions',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    role: 'Villa Owner',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=160&h=160&fit=crop&crop=faces',
    review:
      'From the first consultation to the final inspection, everything was handled beautifully. A dependable team I would hire again.',
    service: 'Villa Maintenance',
    rating: 5,
  },
  {
    name: 'Ananya Roy',
    role: 'Apartment Owner',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=160&h=160&fit=crop&crop=faces',
    review:
      'Fantastic attention to detail and a friendly team. The result looks great, and the whole process was much easier than expected.',
    service: 'Painting & Finishing',
    rating: 5,
  },
]

const bottomReviews = [
  {
    name: 'Karan Malhotra',
    role: 'Office Manager',
    image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=160&h=160&fit=crop&crop=faces',
    review:
      'Our office maintenance was completed efficiently with minimal disruption. The team was organised, courteous, and very professional.',
    service: 'Commercial Maintenance',
    rating: 5,
  },
  {
    name: 'Simran Kaur',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=160&h=160&fit=crop&crop=faces',
    review:
      'Clear communication, dependable service, and a beautiful final result. I appreciated how carefully they handled our home.',
    service: 'Home Improvement',
    rating: 5,
  },
  {
    name: 'Arjun Patel',
    role: 'Property Investor',
    image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=160&h=160&fit=crop&crop=faces',
    review:
      'They understood the requirements quickly and delivered quality work without unnecessary delays. Great value and a great experience.',
    service: 'Property Repairs',
    rating: 5,
  },
  {
    name: 'Ishita Das',
    role: 'Apartment Owner',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=160&h=160&fit=crop&crop=faces',
    review:
      'The team was responsive, polite, and thorough. Every detail was checked before the job was completed. I am very happy with the result.',
    service: 'Interior Finishing',
    rating: 5,
  },
  {
    name: 'Rohan Gupta',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=160&h=160&fit=crop&crop=faces',
    review:
      'Professional service and excellent workmanship. They kept us updated throughout the project and delivered what they promised.',
    service: 'Technical Solutions',
    rating: 5,
  },
  {
    name: 'Meera Joshi',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&h=160&fit=crop&crop=faces',
    review:
      'A genuinely helpful team that made everything straightforward. The quality and attention to detail were exactly what we wanted.',
    service: 'Home Renovation',
    rating: 5,
  },
]

function ReviewCard({ review }) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-card-shine" aria-hidden="true" />

      <div className="testimonial-card-top">
        <span className="testimonial-quote-icon">
          <FaQuoteLeft />
        </span>

        <span className="testimonial-service">{review.service}</span>
      </div>

      <div
        className="testimonial-stars"
        aria-label={`${review.rating} out of 5 stars`}
      >
        {Array.from({ length: review.rating }, (_, index) => (
          <FaStar key={index} />
        ))}
      </div>

      <p className="testimonial-review">“{review.review}”</p>

      <div className="testimonial-client">
        <div className="testimonial-avatar-wrap">
          <img
            src={review.image}
            alt={review.name}
            className="testimonial-avatar"
            loading="lazy"
          />
          <span className="testimonial-avatar-status" />
        </div>

        <div className="testimonial-client-info">
          <h3>{review.name}</h3>
          <p>{review.role}</p>
        </div>

        <span className="testimonial-verified" title="Sample testimonial">
          ★
        </span>
      </div>
    </article>
  )
}

function ReviewTrack({ reviews, direction }) {
  // Duplicate cards to create a seamless infinite carousel.
  const repeatedReviews = [...reviews, ...reviews]

  return (
    <div className={`testimonial-track-window ${direction}`}>
      <div className="testimonial-track">
        {repeatedReviews.map((review, index) => (
          <ReviewCard key={`${direction}-${review.name}-${index}`} review={review} />
        ))}
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-heading">
        <span className="testimonials-eyebrow">
          <span className="testimonials-eyebrow-line" />
          CLIENT LOVE
          <span className="testimonials-eyebrow-line" />
        </span>

        <h2>
          Trusted by Clients.
          <br />
          <span>Loved for Our Work.</span>
        </h2>

        <p>
          Every project tells a story. Here’s what our clients say about
          working with our team.
        </p>

        <div className="testimonials-rating">
          <span className="testimonials-rating-stars">★★★★★</span>
          <span>
            <strong>5.0/5</strong> · Sample design rating
          </span>
        </div>
      </div>

      <div className="testimonials-carousel-area">
        <ReviewTrack reviews={topReviews} direction="testimonial-ltr" />
        <ReviewTrack reviews={bottomReviews} direction="testimonial-rtl" />
      </div>

      <div className="testimonials-bottom-cta">
        <p>Ready to make your next project a success?</p>
        <a href="/contact" className="testimonials-cta-button">
          Let’s Talk <FaArrowRight />
        </a>
      </div>
    </section>
  )
}
