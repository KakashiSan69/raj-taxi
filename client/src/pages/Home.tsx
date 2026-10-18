import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  CarFront,
  CheckCircle2,
  Clock3,
  Compass,
  Facebook,
  Headphones,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Plane,
  Route,
  ShieldCheck,
  Star,
  Twitter,
  Users,
  Wallet,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const PHONE_DISPLAY = "7991800467";
const PHONE_TEL = "7991800467";
const WHATSAPP_NUMBER = "917991800467";
const EMAIL = "kartikeymishra528@gmail.com";
const ADDRESS = "Vishwanath Puram Colony, Chitaipur, Awleshpur, Varanasi, Uttar Pradesh";

const navItems: [string, string][] = [
  ["About", "#about"],
  ["Choose Your Ride", "#fleet"],
  ["Services", "#services"],
  ["Routes", "#routes"],
  ["Reviews", "#reviews"],
];

const heroSlides = [
  { image: "/images/generated/hero-varanasi-night.jpg", tag: "Your Varanasi Journey Starts Here", title: "Travel Varanasi In Comfort", copy: "Comfortable rides, thoughtful service and dependable drivers for every Varanasi journey." },
  { image: "/images/generated/hero-ghat-sunrise.jpg", tag: "See More. Stress Less.", title: "A Better Way To Discover Varanasi", copy: "Clean cars, courteous drivers and clear pricing — exactly how travel should feel." },
  { image: "/images/generated/hero-temple-road.jpg", tag: "Your Journey, Our Priority", title: "Reliable Rides. Memorable Journeys.", copy: "From airport pickups to full-day temple tours, your ride is ready when you are." },
];

const stats = [
  { value: "4930", label: "Happy Customers" },
  { value: "34", label: "Expert Drivers" },
  { value: "6", label: "Vehicle Types", icon: CarFront },
  { value: "24/7", label: "Always Available" },
];

const fleet: { name: string; tag: string; copy: string; image: string }[] = [
  { name: "Maruti Ertiga", tag: "7 Seater", copy: "Roomy, practical and perfect for family days out or group travel.", image: "/images/generated/fleet-ertiga.jpg" },
  { name: "Toyota Etios", tag: "Sedan", copy: "A smooth, spacious sedan for easy city rides and longer journeys.", image: "/images/generated/fleet-etios.jpg" },
  { name: "Honda City", tag: "Premium", copy: "A refined sedan for airport transfers, business travel and special days.", image: "/images/generated/fleet-honda-city.jpg" },
  { name: "Swift Dzire", tag: "Budget", copy: "Smart, comfortable and easy on the budget for everyday rides.", image: "/images/generated/fleet-swift-dzire.jpg" },
  { name: "Innova Crysta", tag: "Luxury", copy: "Extra space and premium comfort for relaxed family and outstation travel.", image: "/images/generated/fleet-innova-crysta.jpg" },
  { name: "Tempo Traveller", tag: "Group", copy: "Spacious group travel made easy for tours, events and family plans.", image: "/images/generated/fleet-tempo-traveller.jpg" },
  { name: "12 Seater Tempo Traveller", tag: "12 Seater", copy: "A practical, comfortable choice for medium-sized groups and tours.", image: "/images/generated/fleet-tempo-12-seater.jpg" },
];

const aboutCards: { icon: LucideIcon; title: string; copy: string }[] = [
  { icon: ShieldCheck, title: "Safe & Verified", copy: "100% police-verified drivers with background checks." },
  { icon: Clock3, title: "Always On Time", copy: "We respect your schedule and guarantee punctual service." },
  { icon: Wallet, title: "Clear From The Start", copy: "No hidden charges. Fair and upfront pricing always." },
  { icon: Headphones, title: "Here When You Need Us", copy: "Our team is available around the clock to assist you." },
];

const services: { icon: LucideIcon; title: string; copy: string }[] = [
  { icon: Plane, title: "Airport Transfers", copy: "Scheduled airport pickups and drop-offs with timely coordination, courteous chauffeurs and comfortable vehicles." },
  { icon: Compass, title: "Outstation Travel", copy: "Reliable intercity travel to Sarnath, Ayodhya, Prayagraj, Bodh Gaya and destinations across North India." },
  { icon: MapPin, title: "Varanasi Sightseeing", copy: "Explore ghats, temples and local landmarks with knowledgeable chauffeurs and flexible sightseeing stops." },
  { icon: Briefcase, title: "Corporate Mobility", copy: "Dependable transportation for meetings, conferences and business schedules with professional service." },
  { icon: Route, title: "Hotel & Station Transfers", copy: "Seamless door-to-door transfers between hotels, airports, railway stations and key attractions." },
  { icon: Users, title: "Group & Event Travel", copy: "Spacious, coordinated travel for families, tour groups and events with vehicles suited to your party." },
];

const whyChoose: { icon: LucideIcon; title: string; copy: string }[] = [
  { icon: ShieldCheck, title: "Peace Of Mind", copy: "Verified drivers and dependable cars for a relaxed journey." },
  { icon: BadgeCheck, title: "People You Can Trust", copy: "Polite, experienced chauffeurs who put your comfort first." },
  { icon: Star, title: "Comfort Every Time", copy: "Fresh, clean and air-conditioned vehicles for every ride." },
  { icon: Wallet, title: "Clear From The Start", copy: "Straightforward fares with no surprises at the end." },
  { icon: Clock3, title: "Punctual By Promise", copy: "Your time matters, so we aim to be there when we say we will." },
  { icon: Headphones, title: "Here When You Need Us", copy: "Friendly support whenever your journey needs a helping hand." },
  { icon: MapPin, title: "Know The Way", copy: "Local knowledge that helps every ride feel easier and more direct." },
  { icon: HeartHandshake, title: "Chosen By Travelers", copy: "A growing community of travelers chooses us for comfortable, dependable rides." },
];

const routes = [
  "Varanasi Airport ↔ City Centre",
  "Varanasi ↔ Sarnath",
  "Varanasi ↔ Ayodhya",
  "Varanasi ↔ Prayagraj",
  "Varanasi ↔ Lucknow",
  "Varanasi ↔ Bodh Gaya",
  "Varanasi ↔ Vindhyachal",
  "Varanasi ↔ Outstation",
];

const testimonials = [
  { text: "The driver was polite, the car was spotless and the whole ride felt effortless. I will book again.", name: "Amit Sharma", place: "Varanasi", image: "/images/generated/avatar-amit.jpg" },
  { text: "A wonderful way to see Varanasi. Our driver was helpful, calm and knew every important stop.", name: "Pooja Singh", place: "Varanasi", image: "/images/generated/avatar-pooja.jpg" },
  { text: "Clear pricing, a clean car and an on-time pickup. Exactly the kind of service every trip needs.", name: "Rajesh Verma", place: "DLW, Varanasi", image: "/images/generated/avatar-rajesh.jpg" },
];

function AnimatedStatValue({ value }: { value: string }) {
  const isNumeric = /^\d+$/.test(value);
  const [count, setCount] = useState(isNumeric ? 0 : value);
  const [started, setStarted] = useState(!isNumeric);
  const statRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isNumeric || !statRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStarted(true);
        observer.disconnect();
      }
    }, { threshold: 0.45 });
    observer.observe(statRef.current);
    return () => observer.disconnect();
  }, [isNumeric]);

  useEffect(() => {
    if (!isNumeric || !started) return;
    const target = Number(value);
    const duration = 1500;
    let frame = 0;
    let startTime: number | null = null;
    const easeOut = (progress: number) => 1 - Math.pow(1 - progress, 3);
    const tick = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(target * easeOut(progress)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isNumeric, started, value]);

  return <strong ref={statRef}>{isNumeric ? count : value}</strong>;
}

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % heroSlides.length), 5500);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearInterval(timer);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const openWhatsApp = (message: string) => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  const bookMessage = (vehicle = "a vehicle") => openWhatsApp(`Hello Shreyansh Tour And Travels, I would like to book ${vehicle}. Please share availability and quotation.`);
  const slide = heroSlides[activeSlide];

  return (
    <div className="site-shell">
      <div className="topbar"><Star size={13} fill="currentColor" /><span>VARANASI&apos;S MOST RELIABLE RIDE PARTNER — BOOK NOW AT <strong>{PHONE_DISPLAY}</strong></span><Star size={13} fill="currentColor" /></div>

      <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
        <div className="container nav-inner">
          <a className="brand" href="#home" aria-label="Shreyansh Tour And Travels home"><img src="/images/shreyansh-logo.png" alt="Shreyansh Tour And Travels Logo" className="brand-logo" /></a>
          <nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`} aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
            <a className="nav-book-mobile button button--gold" href={`tel:${PHONE_TEL}`} onClick={closeMenu}><Phone size={15} /> {PHONE_DISPLAY}</a>
          </nav>
          <div className="nav-actions"><a className="nav-phone" href={`tel:${PHONE_TEL}`}><Phone size={15} /> {PHONE_DISPLAY}</a><button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button></div>
        </div>
      </header>

      <main id="home">
        <section className="hero hero-carousel" style={{ backgroundImage: `url(${slide.image})` }}>
          <div className="hero-overlay" />
          <button className="carousel-control carousel-control--prev" onClick={() => setActiveSlide((activeSlide + heroSlides.length - 1) % heroSlides.length)} aria-label="Previous slide">‹</button>
          <div className="container hero-inner"><div className="hero-content">
            <span className="hero-badge">{slide.tag}</span>
            <h1>{slide.title}</h1>
            <p className="hero-subtitle">{slide.copy}</p>
            <div className="hero-actions"><a className="button button--gold" href={`tel:${PHONE_TEL}`}><Phone size={17} /> Call Now</a><a className="button button--ghost" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a></div>
          </div></div>
          <button className="carousel-control carousel-control--next" onClick={() => setActiveSlide((activeSlide + 1) % heroSlides.length)} aria-label="Next slide">›</button>
          <div className="carousel-dots">{heroSlides.map((item, index) => <button key={item.title} className={index === activeSlide ? "active" : ""} onClick={() => setActiveSlide(index)} aria-label={`Go to slide ${index + 1}`} />)}</div>
        </section>

        <section className="stats"><div className="container stats-grid">{stats.map(({ value, label, icon: Icon }) => <div className="stat" key={label}>{Icon && <Icon size={31} className="stat-icon" />}<AnimatedStatValue value={value} /><span>{label}</span></div>)}</div></section>

        <section id="fleet" className="section fleet-section"><div className="container"><div className="section-head"><p className="kicker">Choose Your Ride</p><h2 className="section-title">Comfort For <em>Every Journey</em></h2><p className="section-lede">Choose a clean, comfortable vehicle that fits your route, group and travel style.</p></div><div className="fleet-grid">{fleet.map((vehicle) => <article className="fleet-card" key={`${vehicle.name}-${vehicle.tag}`}><div className="fleet-image-wrap"><img src={vehicle.image} alt={vehicle.name} loading="lazy" /><span className="fleet-tag">{vehicle.tag}</span></div><div className="fleet-content"><h3>{vehicle.name}</h3><p>{vehicle.copy}</p><a className="fleet-book" href={`tel:${PHONE_TEL}`}>Book Now <ArrowRight size={15} /></a></div></article>)}</div></div></section>

        <section id="about" className="section about-section"><div className="container about-layout"><div className="about-copy"><p className="kicker">The Shreyansh Difference</p><h2 className="section-title">Travel With <em>Confidence</em></h2><p>At <strong>Shreyansh Tour And Travels</strong>, every ride is shaped around your comfort. From the first pickup to the final drop, we make Varanasi travel feel simple, safe and beautifully unhurried.</p><p>Our local drivers know the ghats, temples and best routes — so you can spend less time navigating and more time enjoying Varanasi.</p><a className="button button--green" href={`tel:${PHONE_TEL}`}><Phone size={16} /> Call Us Now</a></div><div className="about-cards">{aboutCards.map(({ icon: Icon, title, copy }) => <div className="about-card" key={title}><div className="ic"><Icon size={22} /></div><h5>{title}</h5><p>{copy}</p></div>)}</div></div></section>

        <section id="services" className="section services-section"><div className="container"><div className="section-head"><p className="kicker">Travel Made Simple</p><h2 className="section-title">Services Built <em>Around You</em></h2><p className="section-lede">From the first pickup to the final drop, enjoy thoughtful service at every turn.</p></div><div className="services-grid">{services.map(({ icon: Icon, title, copy }) => <article className="service-card" key={title}><div className="service-ic"><Icon size={26} /></div><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

        <section className="section why-section"><div className="container"><div className="section-head"><p className="kicker">Why Ride With Us</p><h2 className="section-title">Every Trip Feels <em>Better</em></h2><p className="section-lede">Small details, dependable service and a better experience from pickup to drop-off.</p></div><div className="why-grid">{whyChoose.map(({ icon: Icon, title, copy }) => <div className="why-card" key={title}><div className="ic"><Icon size={22} /></div><h5>{title}</h5><p>{copy}</p></div>)}</div></div></section>

        <section id="routes" className="section routes-section"><div className="container"><div className="section-head"><p className="kicker">Go Further</p><h2 className="section-title">Popular Routes <em>Made Easy</em></h2><p className="section-lede">Reliable rides across Varanasi and the destinations travelers love to visit.</p></div><div className="routes-grid">{routes.map((route) => <a className="route-pill" key={route} href={`tel:${PHONE_TEL}`}><MapPin size={18} />{route}</a>)}</div></div></section>

        <section id="reviews" className="section testi-section"><div className="container"><div className="section-head"><p className="kicker">Traveler Notes</p><h2 className="section-title">Loved By <em>Travelers</em></h2></div><div className="testi-grid">{testimonials.map((testimonial) => <article className="testi-card" key={testimonial.name}><span className="testi-quote">&ldquo;</span><div className="testi-stars">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={16} fill="currentColor" />)}</div><p>{testimonial.text}</p><div className="testi-person"><span className="testi-avatar"><img src={testimonial.image} alt={`${testimonial.name} testimonial`} loading="lazy" /></span><div><strong>{testimonial.name}</strong><span>{testimonial.place}</span></div></div></article>)}</div></div></section>

        <section className="cta-section"><div className="container cta-inner"><h2>Ready For A Better Ride?</h2><p>Tell us where you are going — we will help make the journey simple.</p><div className="cta-actions"><a className="button button--gold" href={`tel:${PHONE_TEL}`}><Phone size={17} /> Call Now</a><a className="button button--wa" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp Us</a></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-grid"><div className="footer-brand"><a className="brand" href="#home" aria-label="Shreyansh Tour And Travels home"><img src="/images/shreyansh-logo.png" alt="Shreyansh Tour And Travels Logo" className="brand-logo brand-logo--footer" /></a><p>Comfortable taxi rides, thoughtful local service and dependable travel across Varanasi — available 24/7.</p><div className="footer-social"><a href="#home" aria-label="Facebook"><Facebook size={18} /></a><a href="#home" aria-label="Instagram"><Instagram size={18} /></a><a href="#home" aria-label="Twitter"><Twitter size={18} /></a><button className="footer-social-btn" onClick={() => bookMessage()} aria-label="WhatsApp"><MessageCircle size={18} /></button></div></div><div className="footer-col"><h5>Quick Links</h5><div className="footer-links">{navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div></div><div className="footer-col"><h5>Contact Us</h5><div className="footer-contact"><a href={`tel:${PHONE_TEL}`}><Phone size={16} /> {PHONE_DISPLAY}</a><a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp: {PHONE_DISPLAY}</a><a href={`mailto:${EMAIL}`}><Mail size={16} /> {EMAIL}</a><span><MapPin size={16} /> {ADDRESS}</span></div></div></div><div className="footer-bottom"><div className="container">&copy; {new Date().getFullYear()} Shreyansh Tour And Travels. All Rights Reserved.</div></div></footer>
      <div className="floating-actions"><a className="floating-call" href={`tel:${PHONE_TEL}`} aria-label="Call Shreyansh Tour And Travels"><Phone size={20} /></a><a className="floating-wa" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" aria-label="WhatsApp Shreyansh Tour And Travels"><MessageCircle size={22} /></a></div>
    </div>
  );
}

export default Home;
