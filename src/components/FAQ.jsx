
import { useState } from 'react'
import {
  FaPlus,
  FaMinus,
  FaArrowRight,
  FaQuestionCircle,
} from 'react-icons/fa'
import '../styles/FAQ.css'

const faqItems = [
  {
    question: 'What services does your company provide?',
    answer:
      'We provide a range of technical and property solutions, including plumbing, electrical work, painting, interior finishing, repairs, renovation, and property maintenance. Contact us to discuss your specific requirements.',
  },
  {
    question: 'How can I request a service or quotation?',
    answer:
      'Simply contact our team through the Contact Us page or your preferred contact channel. Share your requirements, location, and preferred schedule so we can understand the project and guide you through the next steps.',
  },
  {
    question: 'Do you provide services for both homes and businesses?',
    answer:
      'Yes. Our services can be tailored to residential properties, apartments, villas, offices, and commercial spaces, depending on the type and scope of work required.',
  },
  {
    question: 'How do you determine the cost of a project?',
    answer:
      'Pricing depends on the type of service, materials, site conditions, and project complexity. We recommend discussing your requirements with our team to receive a suitable estimate before work begins.',
  },
  {
    question: 'Can I book a service at a convenient time?',
    answer:
      'You can share your preferred date and time when contacting us. Scheduling depends on service availability, project requirements, and the location of the work.',
  },
  {
    question: 'Do you handle large projects as well as small repairs?',
    answer:
      'We can discuss both individual repair jobs and larger improvement or maintenance projects. Share the scope of your work with us so we can determine the right approach.',
  },
  {
    question: 'How can I get updates about my project?',
    answer:
      'Our team can discuss the communication and progress-update process with you before the work starts, helping you understand the expected stages and next steps.',
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0)

  const toggleFAQ = (index) => {
    setActiveIndex((current) => (current === index ? -1 : index))
  }

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        {/* Section heading */}
        <div className="faq-heading">
          <span className="faq-eyebrow">
            <span className="faq-eyebrow-line" />
            WE ARE HERE TO HELP
            <span className="faq-eyebrow-line" />
          </span>

          <h2>
            Frequently Asked
            <span> Questions</span>
          </h2>

          <p>
            Everything you need to know about our services, project
            process, and how we can help you.
          </p>
        </div>

        {/* Image + FAQ content */}
        <div className="faq-layout">
          <div className="faq-visual">
            <img
              className="faq-main-image"
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1000&q=85"
              alt="Professional technician working on a property project"
              loading="lazy"
            />

            <div className="faq-image-overlay" />

            <div className="faq-image-caption">
              <span className="faq-caption-icon">
                <FaQuestionCircle />
              </span>

              <div>
                <h3>Need a Helping Hand?</h3>
                <p>We’re here to guide you through your project.</p>
              </div>
            </div>

            <div className="faq-image-badge">
              <span className="faq-badge-dot" />
              <span>Quality. Care. Commitment.</span>
            </div>
          </div>

          <div className="faq-content">
            <div className="faq-content-intro">
              <span className="faq-content-label">GOT QUESTIONS?</span>
              <h3>Let’s make things clear.</h3>
              <p>
                Explore our answers below. If you need more information,
                our team will be happy to discuss your requirements.
              </p>
            </div>

            <div className="faq-list">
              {faqItems.map((item, index) => {
                const isOpen = activeIndex === index
                const answerId = `faq-answer-${index}`

                return (
                  <article
                    className={`faq-item ${isOpen ? 'is-open' : ''}`}
                    key={item.question}
                  >
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                    >
                      <span className="faq-question-number">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span className="faq-question-text">
                        {item.question}
                      </span>

                      <span className="faq-toggle-icon">
                        {isOpen ? <FaMinus /> : <FaPlus />}
                      </span>
                    </button>

                    <div
                      className="faq-answer-wrap"
                      id={answerId}
                      aria-hidden={!isOpen}
                    >
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="faq-contact-note">
              <p>Still have questions?</p>
              <a href="/contact" className="faq-contact-link">
                Contact Our Team <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
