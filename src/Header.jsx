import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Logo from "./Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
};

export default Header;

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
