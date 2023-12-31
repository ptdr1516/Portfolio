import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";
import Type from "./Type";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Purvesh Patidar</h1>
        <h5 className="text-light">
          <div style={{ fontSize: "20", padding: 50, textAlign: "center" }}>
            <Type />
          </div>
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
