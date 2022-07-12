import React, { useState } from "react";
import style from "./../styles/newheader.module.css";
import logo from "./../assets/Jefferson  logo.png";
import icon1 from "./../assets/hos.png";
import icon2 from "./../assets/profile.svg";
import icon3 from "./../assets/profile-circle.svg";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import ham from "./../assets/ham.png";
import cancel from "./../assets/cancel.svg";
export default function Header() {
  const navigate = useNavigate();
  const [sticky, setSticky] = useState(false);
  function handleScroll(e) {
    if (window.scrollY > 130) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }
  window.addEventListener("scroll", handleScroll);

  const [hamNav, setHamNav] = useState(false);
  function handleShow() {
    setHamNav(!hamNav);
  }

  return (
    <header className={sticky ? style.sticky : ""}>
      <div className={style.prehead}>
        <nav>
          <span>Shop hospitality and kitchen wares on {">>"} </span>
          <span>
            <img src={icon1} alt="" /> Hospitalitte’ Shop
          </span>
        </nav>
        <nav>
          <span>
            <img src={icon3} alt="" /> Join Life
          </span>
          <span>
            <img src={icon2} alt="" /> Sign In
          </span>
        </nav>
      </div>
      <div className={style.main_head}>
        <NavLink to="/">
          <img src={logo} alt="" className={style.logo} />
        </NavLink>
        <nav>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/invest">Invest in Hospitality</NavLink>
          <NavLink to="/collections">Collections</NavLink>
          <NavLink to="/jefferson-life">Jefferson Life</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </nav>
        <button onClick={() => navigate("/contact")}>
          Request Consultation
        </button>

        <div className={style.ham} onClick={handleShow}>
          <img src={ham} alt="" />
        </div>
        <Outlet />
      </div>
      <div className={hamNav ? style.hamHead : style.hideHam}>
        <nav>
          <span>
            <img src={icon1} alt="" /> Hospitalitte’ Shop
          </span>
          <span>
            <img src={icon2} alt="" /> Join Life
          </span>
          <span>
            <img src={icon3} alt="" /> Sign In
          </span>
        </nav>
        <nav className={style.hamNav}>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/invest">Invest in Hospitality</NavLink>
          <NavLink to="/collections">Collections</NavLink>
          <NavLink to="/jefferson-life">Jefferson Life</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
          <button onClick={() => navigate("/request-consultation")}>
            Request Consultation
          </button>
          <div onClick={handleShow}>
            <img src={cancel} alt="" />
          </div>
        </nav>
      </div>
    </header>
  );
}
