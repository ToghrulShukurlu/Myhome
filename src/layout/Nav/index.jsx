import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import searchIcon from "../../assets/icons/search.svg";
import { scroller } from "react-scroll";

const Nav = () => {
  const scrollToSection = (sectionId) => {
    scroller.scrollTo(`#${sectionId}`, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="nav">
      <div className="nav-first">
        <h2>MyHome</h2>
        <ul>
          <li><NavLink to="/">Ana səhifə</NavLink> </li>
          <li onClick={() => scrollToSection("about")}>Haqqımızda</li>
          <li onClick={() => scrollToSection("services")}>Xidmətlərimiz</li>
          <li><NavLink to="/blogs">Blog</NavLink></li>
          <li onClick={() => scrollToSection("contact")}>Əlaqə</li>
          <img src={searchIcon} alt="" />
          <button>Daxil ol</button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
