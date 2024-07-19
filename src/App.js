import "./App.css";
import "./Query.css";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PaymentIcon from "@mui/icons-material/Payment";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";

const services = [
  {
    id: 0,
    icon: <NotificationsNoneOutlinedIcon />,
    name: "Scheduling",
    detail:
      "  Let your clients choose the most efficient time to meet with you and fix their car issues.",
  },
  {
    id: 1,
    icon: <PaymentIcon />,
    name: "Payment gateway",
    detail: "An efficient payment system worthy of your services.",
  },
  {
    id: 2,
    icon: <EventNoteOutlinedIcon />,
    name: "Generalize invoice",
    detail: "Get your receipts and invoices for payment proof.",
  },
  {
    id: 3,
    icon: <EventNoteOutlinedIcon />,
    name: "Send SMS",
    detail:
      "Stay on the loop with all your business activities with our SMS notifications.",
  },
  {
    id: 4,
    icon: <EventNoteOutlinedIcon />,
    name: "Send Reminders",
    detail:
      "Let’s remind you and your clients about the upcoming meetings before time.",
  },
];

export default function App({ isOpen }) {
  useEffect(function () {
    document.title = "Mechdly";
  }, []);
  return (
    <div className="App">
      <Header />
      <Hero />
      <Message />
      <Services />
      <Footer />
    </div>
  );
}

function Logo() {
  return <img src="./logo.png" alt="logo" className="img" />;
}

function MobileNav() {
  return (
    <div className="mobile-nav">
      <div className="mobile-container">
        <div className="mobile-btn">
          <button className="login-btn">Log in</button>
          <button>Get started</button>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <header>
      <nav>
        <div className="nav-container">
          <Logo />
          <div className="nav-btns">
            <button className="login-btn">Log in</button>
            <button>Get started</button>
          </div>
          <span
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            className="nav-active active"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </span>
          {isOpen ? <MobileNav /> : null}
        </div>
      </nav>
      <div className="h-container">
        <div className="header-left">
          <h1>
            Schedule, <br /> Make Payments, & <br /> Send invoice to <br /> your
            customers.
          </h1>
          <p className="header-subtext">
            Efficiently and professionally run your business and with your
            clients eliminating the complaints of your customers so you can go
            back to work.
          </p>

          <button className="header-btn">Get Started</button>
        </div>

        <div className="header-right">
          <img src="./header-img.png" alt="header-image" />
          <span className="blur-header"></span>
        </div>
      </div>
    </header>
  );
}

// HERO
function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <img src="./time-image.png" alt="hero-image" />
        </div>
        <div className="hero-right">
          <h2>
            Let your customers <br /> know what time is <br /> avalaible in a
            day!
          </h2>
          <button className="hero-btn">Setup now</button>
        </div>
      </div>
    </div>
  );
}

function Message() {
  return (
    <section className="message">
      <div className="m-container">
        <div className="m-left">
          <h2>Send reminders , SMS and incoives to customers</h2>
          <button className="m-btn">Setup now</button>
        </div>
        <div className="m-right">
          <img src="./message.png" alt="message-imgage" />
          <span className="blur-header"></span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services">
      <h3>SERVICES WE OFFER</h3>
      <div className="s-container">
        {services.map((service) => (
          <div className="s-box s-b-push">
            <div classNAme="s-box0">
              <span>{service.icon}</span>
              <h4>{service.name}</h4>
              <p>{service.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <span className="blur"></span>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="f-container">
        <div className="footer-coln1">
          <Logo />
          <div className="f-logo-right">
            <h3>Ready for your setup?</h3>
            <button className="footer-btn">Get started</button>
          </div>
        </div>
        <div className="footer-line"></div>

        <div className="footer-coln2">
          <div className="footer-news">
            <h3>Subscribe to our newsletter!</h3>
            <div className="footer-input">
              <input type="email" placeholder="Email address" />
              <button>Sign up</button>
            </div>
          </div>

          <div className="footer-list">
            <ul>
              <li className="b">Company</li>
              <li>About Us</li>
              <li>Patners & Affiliates</li>
            </ul>

            <ul>
              <li className="b">Products</li>
              <li>How it works</li>
              <li>Features</li>
              <li>Pricing</li>
            </ul>

            <ul>
              <li className="b">Support</li>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
