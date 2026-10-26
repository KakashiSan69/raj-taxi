import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CarFront,
  Check,
  Clock3,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Plane,
  Route,
  ShieldCheck,
  Star,
  Users,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const PHONE_DISPLAY = "9070399070";
const PHONE_TEL = "9070399070";
const WHATSAPP = "919070399070";
const BUSINESS = "One Way Taxi Nagpur";
const ADDRESS = "Dr. Babasaheb Ambedkar International Airport, MRO Air India, MIHAN, Nagpur, Maharashtra, 440005";
const MAP_URL = "https://www.google.com/maps/dir/?api=1&destination=One+Way+Taxi+Nagpur%2C+Dr.+Babasaheb+Ambedkar+International+Airport%2C+MRO+Air+India%2C+MIHAN%2C+Nagpur%2C+Maharashtra%2C+440005";

const services: { icon: LucideIcon; title: string; copy: string; tone: string }[] = [
  { icon: Plane, title: "Airport Pickup & Drop", copy: "Comfortable, punctual rides to and from Dr. Babasaheb Ambedkar International Airport.", tone: "orange" },
  { icon: Navigation, title: "Railway Station Transfer", copy: "Easy station pickups and drops with a driver who is ready when you arrive.", tone: "blue" },
  { icon: Route, title: "One Way Taxi", copy: "Pay for the route you need and travel across Nagpur and Maharashtra without the return fare.", tone: "violet" },
  { icon: CarFront, title: "Local & Rental Taxi", copy: "Book a sedan, SUV or luxury vehicle for a few hours, a full day or a custom plan.", tone: "green" },
  { icon: BriefcaseBusiness, title: "Corporate Taxis", copy: "Professional, discreet transport for meetings, events and business schedules.", tone: "rose" },
  { icon: Users, title: "Outstation Trips", copy: "Reliable intercity travel for family plans, weekend trips and long-distance journeys.", tone: "gold" },
];

const fleet = [
  { name: "Sedan", detail: "Comfortable city and airport travel", image: "/images/generated/fleet-etios.jpg" },
  { name: "SUV", detail: "More room for family and luggage", image: "/images/generated/fleet-innova-crysta.jpg" },
  { name: "Luxury Vehicle", detail: "Premium travel for important plans", image: "/images/generated/fleet-honda-city.jpg" },
];

const reviews = [
  { name: "Mala Ram", copy: "Apke sath ride karke acha lga", place: "Google review" },
  { name: "Salman", copy: "Good service", place: "Google review" },
  { name: "Browns Block", copy: "Nice service", place: "Google review" },
];

function openWhatsApp(message = "Hello One Way Taxi Nagpur, I would like to enquire about a taxi.") {
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="notice-bar"><Clock3 size={15} /> Open 24 hours, Monday–Sunday <span>•</span> Nagpur &amp; Maharashtra</div>
      <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#home" className="wordmark" aria-label={`${BUSINESS} home`} onClick={closeMenu}>
            <span className="wordmark-icon">O</span>
            <span><strong>One Way Taxi</strong><small>NAGPUR</small></span>
          </a>
          <nav className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#fleet" onClick={closeMenu}>Fleet</a>
            <a href="#reviews" onClick={closeMenu}>Reviews</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="mobile-call" href={`tel:${PHONE_TEL}`} onClick={closeMenu}>Call {PHONE_DISPLAY}</a>
          </nav>
          <div className="nav-actions">
            <a className="nav-phone" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
            <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
      </header>

      <main id="home">
        <section className="hero-new">
          <div className="hero-image" />
          <div className="hero-shade" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> Trusted taxi service in Nagpur</div>
              <h1>Book a Taxi/Cab in <span>Nagpur, Mumbai &amp; Pune</span></h1>
              <p>Safe, comfortable and reliable rides for airport transfers, local travel, one-way routes and outstation journeys across Maharashtra.</p>
              <div className="hero-actions"><a className="primary-button" href={`tel:${PHONE_TEL}`}>Book your ride <ArrowUpRight size={18} /></a><button className="light-button" onClick={() => openWhatsApp()}>WhatsApp us <MessageCircle size={18} /></button></div>
              <div className="hero-points"><span><Check size={15} /> 24×7 availability</span><span><Check size={15} /> Sedan, SUV &amp; luxury</span><span><Check size={15} /> Clear, friendly service</span></div>
            </div>
            <div className="booking-card">
              <div className="booking-card-top"><span>QUICK ENQUIRY</span><BadgeCheck size={20} /></div>
              <h2>Where do you want to go?</h2>
              <p>Tell us what you need and our team will help you choose the right ride.</p>
              <a href={`tel:${PHONE_TEL}`} className="booking-line"><span className="booking-icon"><PhoneIcon /></span><span><small>Call us directly</small><strong>{PHONE_DISPLAY}</strong></span><ArrowUpRight size={18} /></a>
              <button className="booking-line" onClick={() => openWhatsApp("Hello One Way Taxi Nagpur, please share taxi availability and pricing.")}><span className="booking-icon whatsapp"><MessageCircle size={20} /></span><span><small>Message on WhatsApp</small><strong>Get a quick quote</strong></span><ArrowUpRight size={18} /></button>
              <div className="booking-note"><ShieldCheck size={16} /> Available 24 hours, every day</div>
            </div>
          </div>
        </section>

        <section className="trust-strip"><div className="container trust-grid"><div><strong>5.0/5</strong><span>Google rating</span></div><div><strong>6+</strong><span>Google reviews</span></div><div><strong>24×7</strong><span>Always available</span></div><div><strong>MH</strong><span>Local &amp; outstation</span></div></div></section>

        <section id="services" className="section services-new"><div className="container"><div className="section-intro"><span className="section-label">What we do</span><h2>One booking. <em>Every kind of ride.</em></h2><p>From a quick airport pickup to a long-distance one-way trip, choose a service that fits your day.</p></div><div className="services-grid-new">{services.map(({ icon: Icon, title, copy, tone }) => <article className="service-tile" key={title}><div className={`service-icon ${tone}`}><Icon size={23} /></div><h3>{title}</h3><p>{copy}</p><button onClick={() => openWhatsApp(`Hello One Way Taxi Nagpur, I am interested in ${title}.`)}>Enquire <ArrowUpRight size={16} /></button></article>)}</div></div></section>

        <section id="about" className="section about-new"><div className="container about-layout-new"><div className="about-visual"><img src="/images/hero-expressway.png" alt="Comfortable taxi on a highway" loading="lazy" /><div className="about-badge"><Star size={18} fill="currentColor" /><span><strong>5.0 / 5</strong><small>Google rating</small></span></div></div><div className="about-copy-new"><span className="section-label">Why One Way Taxi</span><h2>Travel with a local team you can <em>count on.</em></h2><p>One Way Taxi Nagpur provides safe, comfortable and trustworthy taxi service across Nagpur and Maharashtra. Our goal is simple: make every pickup clear, every ride comfortable and every arrival on time.</p><div className="check-list"><span><ShieldCheck size={19} /> Safe and dependable drivers</span><span><Clock3 size={19} /> Punctual pickup and drop</span><span><BadgeCheck size={19} /> Comfortable vehicle options</span><span><MapPin size={19} /> Local routes, airport and outstation</span></div><a className="text-link" href={MAP_URL} target="_blank" rel="noreferrer">Find our location <ArrowUpRight size={17} /></a></div></div></section>

        <section id="fleet" className="section fleet-new"><div className="container"><div className="section-intro split"><div><span className="section-label">Choose your ride</span><h2>The right car for <em>your plan.</em></h2></div><p>Choose from comfortable Sedan, spacious SUV and premium luxury vehicles for local or outstation travel.</p></div><div className="fleet-grid-new">{fleet.map((vehicle) => <article className="fleet-tile" key={vehicle.name}><img src={vehicle.image} alt={`${vehicle.name} taxi`} loading="lazy" /><div><span>Available to book</span><h3>{vehicle.name}</h3><p>{vehicle.detail}</p><a href={`tel:${PHONE_TEL}`}>Book this ride <ArrowUpRight size={16} /></a></div></article>)}</div></div></section>

        <section id="reviews" className="section reviews-new"><div className="container"><div className="section-intro centered"><span className="section-label">Google reviews</span><h2>Good rides create <em>good words.</em></h2><p>What passengers say about their experience with One Way Taxi Nagpur.</p></div><div className="reviews-grid-new">{reviews.map((review) => <article className="review-tile" key={review.name}><div className="stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div><p>“{review.copy}”</p><strong>{review.name}</strong><span>{review.place}</span></article>)}</div></div></section>

        <section id="contact" className="contact-new"><div className="container contact-layout"><div><span className="section-label light">Start your journey</span><h2>Need a taxi? <span>We are ready.</span></h2><p>Call or message One Way Taxi Nagpur for availability, pricing and route guidance.</p></div><div className="contact-actions"><a className="primary-button" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY} <ArrowUpRight size={18} /></a><a className="light-button" href={MAP_URL} target="_blank" rel="noreferrer"><MapPin size={18} /> Get directions</a></div></div></section>
      </main>

      <footer className="footer-new"><div className="container footer-layout"><div><a href="#home" className="wordmark footer-wordmark"><span className="wordmark-icon">O</span><span><strong>One Way Taxi</strong><small>NAGPUR</small></span></a><p>Safe, comfortable and trustworthy taxi service for Nagpur and Maharashtra.</p></div><div><h4>Quick links</h4><a href="#services">Services</a><a href="#about">About us</a><a href="#fleet">Fleet</a><a href="#contact">Contact</a></div><div><h4>Contact</h4><a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a><a href={MAP_URL} target="_blank" rel="noreferrer">{ADDRESS}</a><span>Open 24 hours, Monday–Sunday</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {BUSINESS}. All rights reserved.</span><span>Taxi Service · Nagpur, Maharashtra</span></div></footer>
      <div className="floating-actions"><a className="floating-call" href={`tel:${PHONE_TEL}`} aria-label="Call One Way Taxi Nagpur"><PhoneIcon /></a><button className="floating-whatsapp" onClick={() => openWhatsApp()} aria-label="WhatsApp One Way Taxi Nagpur"><MessageCircle size={21} /></button></div>
    </div>
  );
}

function PhoneIcon() { return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" /></svg>; }

export default Home;
