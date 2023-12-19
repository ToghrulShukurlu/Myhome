import React from "react";
import './style.scss'
import { NavLink } from "react-router-dom";
import searchIcon from "../../assets/icons/search.svg"

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-first">
        <h2>MyHome</h2>
        <ul>
          <li><NavLink to="/">Ana səhifə</NavLink></li>
          <li><NavLink to="/about">Haqqımızda</NavLink></li>
          <li><NavLink to="/services">Xidmətlərimiz</NavLink> </li>
          <li> <NavLink to="/blogs">Blog</NavLink></li>
          <li><NavLink to="/contact">Əlaqə</NavLink></li>
          <img src={searchIcon} alt="" />
          <button>Daxil ol</button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
