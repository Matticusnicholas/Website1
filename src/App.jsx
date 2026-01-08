import { useState, useEffect } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Calendar,
  Menu,
  X,
  Sparkles,
  Heart,
  Users,
  CheckCircle,
  Star,
  Leaf
} from 'lucide-react';
import './index.css';

// Business Information
const BUSINESS = {
  name: 'Elegant Blue Massage Spa',
  fullName: 'Elegant Blue Massage Spa, LLC',
  phone: '(727) 807-8086',
  phoneRaw: '7278078086',
  address: {
    street: '7671 Cita Lane',
    suite: 'Suite 102',
    city: 'New Port Richey',
    state: 'FL',
    zip: '34653',
    full: '7671 Cita Lane, Suite 102, New Port Richey, FL 34653'
  },
  hours: {
    open: '10:00 AM',
    close: '8:30 PM',
    days: '7 Days a Week'
  },
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.8!2d-82.7!3d28.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDE4JzAwLjAiTiA4MsKwNDInMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890'
};

// Services Data
const SERVICES = [
  {
    icon: <Sparkles size={28} />,
    title: 'Relaxation Massage',
    description: 'Experience pure tranquility with our signature relaxation massage. Using gentle, flowing strokes to ease tension and promote deep relaxation throughout your body.',
    prices: ['30 min - $50', '60 min - $70', '90 min - $110', '2 hours - $150']
  },
  {
    icon: <Heart size={28} />,
    title: 'Deep Tissue Massage',
    description: 'Target chronic muscle tension with our therapeutic deep tissue massage. Ideal for athletes and those with persistent pain, using firm pressure to release deep-seated knots.',
    prices: ['60 min - $80', '90 min - $120']
  },
  {
    icon: <Users size={28} />,
    title: 'Couple Massage',
    description: 'Share a relaxing experience with your partner in our serene couple\'s suite. Perfect for anniversaries, special occasions, or simply reconnecting together.',
    prices: ['$140 per couple']
  }
];

// Additional Services
const ADDITIONAL_SERVICES = [
  'Asian Massage',
  'Hot Stone Massage',
  'Cupping Therapy',
  'Gua Sha Therapy',
  'Body Scrub'
];

// Pricing Data
const PRICING = [
  { name: '30 Minute Massage', price: '$50' },
  { name: '60 Minute Massage', price: '$70' },
  { name: '90 Minute Massage', price: '$110' },
  { name: '2 Hour Massage', price: '$150' },
  { name: '60 Min Deep Tissue', price: '$80' },
  { name: '90 Min Deep Tissue', price: '$120' },
  { name: 'Couple Massage', price: '$140' }
];

// Header Component
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="nav">
          <a href="#" className="logo">
            Elegant <span>Blue</span>
          </a>
          <ul className="nav-links">
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#pricing" className="nav-link">Pricing</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
          <a href={`tel:${BUSINESS.phoneRaw}`} className="nav-phone">
            <Phone size={18} />
            {BUSINESS.phone}
          </a>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <button className="mobile-nav-close" onClick={closeMobileMenu} aria-label="Close menu">
          <X size={30} />
        </button>
        <a href="#services" onClick={closeMobileMenu}>Services</a>
        <a href="#pricing" onClick={closeMobileMenu}>Pricing</a>
        <a href="#about" onClick={closeMobileMenu}>About</a>
        <a href="#contact" onClick={closeMobileMenu}>Contact</a>
        <a href={`tel:${BUSINESS.phoneRaw}`} onClick={closeMobileMenu}>{BUSINESS.phone}</a>
      </div>
    </>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-pattern"></div>
      <div className="hero-content">
        <p className="hero-subtitle">Welcome to</p>
        <h1 className="hero-title">{BUSINESS.name}</h1>
        <p className="hero-description">
          Experience the art of relaxation at our tranquil spa in New Port Richey.
          Our skilled therapists are dedicated to providing you with an exceptional
          massage experience that rejuvenates your body and soul.
        </p>
        <div className="hero-buttons">
          <a href={`tel:${BUSINESS.phoneRaw}`} className="btn btn-primary">
            Book Appointment
          </a>
          <a href="#services" className="btn btn-secondary">
            Our Services
          </a>
        </div>
      </div>
      <div className="hero-info">
        <div className="hero-info-item">
          <Clock size={20} />
          <span>Open {BUSINESS.hours.days}</span>
        </div>
        <div className="hero-info-item">
          <Calendar size={20} />
          <span>{BUSINESS.hours.open} - {BUSINESS.hours.close}</span>
        </div>
        <div className="hero-info-item">
          <MapPin size={20} />
          <span>{BUSINESS.address.city}, {BUSINESS.address.state}</span>
        </div>
      </div>
    </section>
  );
}

// Services Section
function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <p className="section-subtitle">What We Offer</p>
        <h2 className="section-title">Our Massage Services</h2>
        <p className="section-description">
          Choose from our range of professional massage therapies designed to meet your
          specific needs and help you achieve optimal relaxation and wellness.
        </p>
        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-price">
                {service.prices.map((price, i) => (
                  <div key={i}>{price}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Additional Services Section
function AdditionalServices() {
  return (
    <section className="section additional-services">
      <div className="container">
        <p className="section-subtitle">More Treatments</p>
        <h2 className="section-title">We Also Offer</h2>
        <div className="additional-services-content">
          <ul className="additional-services-list">
            {ADDITIONAL_SERVICES.map((service, index) => (
              <li key={index}>
                <CheckCircle size={20} />
                <span>{service}</span>
              </li>
            ))}
          </ul>
          <p className="additional-services-note">
            Contact us for pricing and availability on these specialty treatments.
          </p>
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function Pricing() {
  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <p className="section-subtitle">Transparent Pricing</p>
        <h2 className="section-title">Service Menu</h2>
        <p className="section-description">
          Simple, straightforward pricing for all our massage services.
          No hidden fees, no surprises.
        </p>
        <div className="pricing-table">
          <div className="pricing-header">
            <h3>Massage Services</h3>
            <p>Professional Therapy</p>
          </div>
          <div className="pricing-list">
            {PRICING.map((item, index) => (
              <div key={index} className="pricing-item">
                <span className="pricing-item-name">{item.name}</span>
                <span className="pricing-item-price">{item.price}</span>
              </div>
            ))}
          </div>
          <div className="pricing-cta">
            <a href={`tel:${BUSINESS.phoneRaw}`} className="btn btn-primary">
              Call to Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Section
function About() {
  const features = [
    'Licensed Therapists',
    'Clean Environment',
    'Relaxing Atmosphere',
    'Affordable Prices',
    'Open 7 Days',
    'Walk-ins Welcome'
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <p className="section-subtitle">About Us</p>
            <h2 className="section-title">Your Wellness Journey Starts Here</h2>
            <p className="about-description">
              At {BUSINESS.name}, we believe that everyone deserves moments of peace
              and relaxation. Our experienced massage therapists combine traditional
              techniques with modern methods to deliver a truly rejuvenating experience.
            </p>
            <p className="about-description">
              Located in the heart of New Port Richey, our spa provides a serene escape
              from the stresses of daily life. Whether you&apos;re seeking relief from
              chronic pain or simply want to unwind, we&apos;re here to help you feel
              your best.
            </p>
            <div className="about-features">
              {features.map((feature, index) => (
                <div key={index} className="about-feature">
                  <CheckCircle size={20} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-image">
            <div className="about-image-placeholder">
              <Leaf size={100} />
            </div>
            <div className="about-image-border"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Hours Section
function Hours() {
  return (
    <section className="section hours">
      <div className="container">
        <p className="section-subtitle">Visit Us</p>
        <h2 className="section-title">Business Hours</h2>
        <p className="section-description">
          We&apos;re open every day to serve you. Walk-ins are welcome,
          but appointments are recommended for your convenience.
        </p>
        <div className="hours-content">
          <div className="hours-card">
            <Clock size={50} />
            <h3>Daily Hours</h3>
            <p>
              <span className="highlight">{BUSINESS.hours.open}</span> to{' '}
              <span className="highlight">{BUSINESS.hours.close}</span>
            </p>
          </div>
          <div className="hours-card">
            <Calendar size={50} />
            <h3>Days Open</h3>
            <p>
              <span className="highlight">{BUSINESS.hours.days}</span>
              <br />Including Holidays
            </p>
          </div>
          <div className="hours-card">
            <Star size={50} />
            <h3>Appointments</h3>
            <p>
              Walk-ins Welcome
              <br /><span className="highlight">Call to Book</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <p className="section-subtitle">Get In Touch</p>
        <h2 className="section-title">Contact Us</h2>
        <p className="section-description">
          Ready to experience relaxation? Give us a call or visit our spa.
          We look forward to serving you.
        </p>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>
                  <a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a>
                </p>
                <p>Call us to book your appointment</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-details">
                <h4>Address</h4>
                <p>
                  {BUSINESS.address.street}, {BUSINESS.address.suite}
                  <br />
                  {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <Clock size={24} />
              </div>
              <div className="contact-details">
                <h4>Hours</h4>
                <p>
                  {BUSINESS.hours.days}
                  <br />
                  {BUSINESS.hours.open} - {BUSINESS.hours.close}
                </p>
              </div>
            </div>
          </div>
          <div className="contact-map">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(BUSINESS.address.full)}`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <h2 className="cta-title">Ready to Relax?</h2>
        <p className="cta-description">
          Book your massage appointment today and take the first step
          towards a more relaxed, rejuvenated you.
        </p>
        <div className="cta-phone">
          <a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a>
        </div>
        <a href={`tel:${BUSINESS.phoneRaw}`} className="btn btn-primary">
          Call Now to Book
        </a>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <a href="#" className="logo">
            Elegant <span>Blue</span>
          </a>
          <p>
            Professional massage therapy services in New Port Richey, Florida.
            Experience relaxation and wellness at our tranquil spa.
          </p>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Relaxation Massage</a></li>
            <li><a href="#services">Deep Tissue</a></li>
            <li><a href="#services">Couple Massage</a></li>
            <li><a href="#services">Asian Massage</a></li>
            <li><a href="#services">Hot Stone</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li><a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a></li>
            <li><a href="#contact">{BUSINESS.address.city}, {BUSINESS.address.state}</a></li>
            <li><a href="#contact">{BUSINESS.hours.days}</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} {BUSINESS.fullName}. All rights reserved.</p>
        <p>Massage Therapy Services in New Port Richey, FL</p>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <AdditionalServices />
        <Pricing />
        <About />
        <Hours />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
