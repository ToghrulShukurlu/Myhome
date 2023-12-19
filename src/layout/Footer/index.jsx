import React from 'react'
import './style.scss'
import icon from '../../assets/icons/Group 41.svg'
import { NavLink } from 'react-router-dom'
import icon2 from "../../assets/icons/Group 5650.svg"
import icon3 from "../../assets/icons/Group 5651.svg";
import icon4 from "../../assets/icons/Group 5683.svg";
import icon5 from "../../assets/icons/Group 5684.svg";
import icon6 from "../../assets/icons/Vector.svg";



const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={icon} alt="" />
      </div>
      <ul>
        <li><NavLink to="/">Ana səhifə</NavLink> </li>
        <li><NavLink to="/about">Haqqımızda</NavLink></li>
        <li><NavLink to="/services">Xidmətlərimiz</NavLink></li>
        <li><NavLink to="/blogs">Blog</NavLink></li>
        <li><NavLink to="/contact">Əlaqə</NavLink></li>
      </ul>

      <div className="icons">
        <span>Follow us:</span>
        <img src={icon2} alt="" />
        <img src={icon3} alt="" />
        <img src={icon4} alt="" />
        <img src={icon5} alt="" />
        <img src={icon6} alt="" />
      </div>
    </footer>
  );
}

export default Footer