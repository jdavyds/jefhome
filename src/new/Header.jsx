import React, { useState } from "react";
import style from "./../styles/newheader.module.css";
import logo from "./../assets/Jefferson  logo.png";
import icon1 from "./../assets/hosnew.png";
import icon2 from "./../assets/profile.svg";
import icon3 from "./../assets/profile-circle.svg";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import ham from "./../assets/ham.png";
import cancel from "./../assets/cancel.svg";
import arrow from "./../assets/Vector.png";
import invert from "./../assets/invert.png";
import header1 from "./../assets/header1.png";
import header2 from "./../assets/header2.png";
import header3 from "./../assets/header3.png";
import header4 from "./../assets/header4.png";
import header5 from "./../assets/header5.png";
import header6 from "./../assets/header6.png";
import header7 from "./../assets/header7.png";
import header8 from "./../assets/header8.png";
import header9 from "./../assets/header9.png";
import header10 from "./../assets/header10.png";
import header11 from "./../assets/header11.png";
import header12 from "./../assets/header12.png";
import header13 from "./../assets/header13.png";
import header14 from "./../assets/header14.png";
import header15 from "./../assets/header15.png";

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
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [mainOne, setMainOne] = useState(false);
  const [mainTwo, setMainTwo] = useState(false);
  const [mainThree, setMainThree] = useState(false);
  function handleOne() {
    setOne(!one);
    setTwo(false);
    setThree(false);
  }
  function handleTwo() {
    setTwo(!two);
    setOne(false);
    setThree(false);
  }
  function handleThree() {
    setThree(!three);
    setOne(false);
    setTwo(false);
  }
  function handleMainOne() {
    setMainOne(!mainOne);
    setMainTwo(false);
    setMainThree(false);
  }
  function handleMainTwo() {
    setMainTwo(!mainTwo);
    setMainOne(false);
    setMainThree(false);
  }
  function handleMainThree() {
    setMainThree(!mainThree);
    setMainOne(false);
    setMainTwo(false);
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
          <NavLink
            to="#"
            onClick={handleMainOne}
            className={mainOne ? style.border : ""}
          >
            About
          </NavLink>
          <nav className={mainOne ? style.openOne : style.closed}>
            <NavLink to="/">
              <img src={header1} alt="" />
              Teams
            </NavLink>
            <NavLink to="/">
              <img src={header2} alt="" />
              Culture
            </NavLink>
            <NavLink to="/">
              <img src={header3} alt="" />
              Brands
            </NavLink>
            <NavLink to="/">
              <img src={header4} alt="" />
              Awards
            </NavLink>
            <NavLink to="/">
              <img src={header5} alt="" />
              Careers
            </NavLink>
          </nav>
          <NavLink
            to="#"
            onClick={handleMainTwo}
            className={mainTwo ? style.border : ""}
          >
            Services
          </NavLink>
          <nav className={mainTwo ? style.openTwo : style.closed}>
            <NavLink to="/">
              <img src={header1} alt="" />
              Hotel Consulting
            </NavLink>
            <NavLink to="/">
              <img src={header2} alt="" />
              Project development
            </NavLink>
            <NavLink to="/">
              <img src={header3} alt="" />
              Revenue Management
            </NavLink>
            <NavLink to="/">
              <img src={header4} alt="" />
              Investment and Acquisition
            </NavLink>
            <NavLink to="/">
              <img src={header5} alt="" />
              Fund Raising
            </NavLink>
            <NavLink to="/">
              <img src={header6} alt="" />
              Food and Beverage Innovation
            </NavLink>
            <NavLink to="/">
              <img src={header7} alt="" />
              Contract Catering
            </NavLink>
            <NavLink to="/">
              <img src={header8} alt="" />
              Set up and Growth
            </NavLink>
            <NavLink to="/">
              <img src={header9} alt="" />
              Asset Enhancement
            </NavLink>
            <NavLink to="/">
              <img src={header10} alt="" />
              Franchising
            </NavLink>
            <NavLink to="/">
              <img src={header11} alt="" />
              Partnership Brokerage
            </NavLink>
            <NavLink to="/">
              <img src={header12} alt="" />
              Hospitality PPP
            </NavLink>
            <NavLink to="/">
              <img src={header13} alt="" />
              Training
            </NavLink>
            <NavLink to="/">
              <img src={header14} alt="" />
              Consultancy
            </NavLink>
            <NavLink to="/">
              <img src={header15} alt="" />
              Recruitment and Training
            </NavLink>
          </nav>

          <NavLink
            to="#"
            onClick={handleMainThree}
            className={mainThree ? style.border : ""}
          >
            Invest in Hospitality
          </NavLink>
          <nav className={mainThree ? style.openThree : style.closed}>
            <NavLink to="/">
              <img src={header1} alt="" />
              Hotel and Resort
            </NavLink>
            <NavLink to="/">
              <img src={header2} alt="" />
              Restaurant and Bar
            </NavLink>
            <NavLink to="/">
              <img src={header3} alt="" />
              Clubs/Casinos
            </NavLink>
            <NavLink to="/">
              <img src={header4} alt="" />
              Parks and Gardens
            </NavLink>
            <NavLink to="/">
              <img src={header5} alt="" />
              Cruise Line
            </NavLink>
            <NavLink to="/">
              <img src={header6} alt="" />
              Distinctive Event Centers
            </NavLink>
            <NavLink to="/">
              <img src={header7} alt="" />
              Health, Wellness and Spa
            </NavLink>
            <NavLink to="/">
              <img src={header8} alt="" />
              Residential Lifestyle
            </NavLink>
            <NavLink to="/">
              <img src={header9} alt="" />
              Short Lets
            </NavLink>
          </nav>
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
          <NavLink to="/" onClick={handleOne}>
            About
            <img src={one ? invert : arrow} alt="" />
          </NavLink>
          <NavLink to="/" className={one ? style.open : style.closed}>
            <img src={header1} alt="" />
            Teams
          </NavLink>
          <NavLink to="/" className={one ? style.open : style.closed}>
            <img src={header2} alt="" />
            Culture
          </NavLink>
          <NavLink to="/" className={one ? style.open : style.closed}>
            <img src={header3} alt="" />
            Brands
          </NavLink>
          <NavLink to="/" className={one ? style.open : style.closed}>
            <img src={header4} alt="" />
            Awards
          </NavLink>
          <NavLink to="/" className={one ? style.open : style.closed}>
            <img src={header5} alt="" />
            Careers
          </NavLink>

          <NavLink to="#" onClick={handleTwo}>
            Services
            <img src={two ? invert : arrow} alt="" />
          </NavLink>
          <NavLink to="/" className={two ? style.open : style.closed}>
            <img src={header1} alt="" />
            Hotel Consulting
          </NavLink>
          <NavLink to="/" className={two ? style.open : style.closed}>
            <img src={header2} alt="" />
            Project development
          </NavLink>
          <NavLink to="/" className={two ? style.open : style.closed}>
            <img src={header3} alt="" />
            Revenue Management
          </NavLink>
          <NavLink to="/" className={two ? style.open : style.closed}>
            <img src={header4} alt="" />
            Investment and Acquisition
          </NavLink>
          <NavLink to="/" className={two ? style.open : style.closed}>
            <img src={header5} alt="" />
            Fund Raising
          </NavLink>
          <NavLink to="/" className={two ? style.open : style.closed}>
            <img src={header6} alt="" />
            Food and Beverage Innovation
          </NavLink>
          <NavLink to="/" className={two ? style.open : style.closed}>
            <img src={header7} alt="" />
            Contract Catering
          </NavLink>
          <NavLink to="/" className={two ? style.open : style.closed}>
            <img src={header8} alt="" />
            Set up and Growth
          </NavLink>
          <NavLink to="/" className={two ? style.open : style.closed}>
            <img src={header9} alt="" />
            Asset Enhancement
          </NavLink>
          <NavLink to="/" className={two ? style.open : style.closed}>
            <img src={header10} alt="" />
            Franchising
          </NavLink>
          <NavLink to="/" className={two ? style.open : style.closed}>
            <img src={header11} alt="" />
            Partnership Brokerage
          </NavLink>
          <NavLink to="/" className={two ? style.open : style.closed}>
            <img src={header12} alt="" />
            Hospitality PPP
          </NavLink>
          <NavLink to="/" className={two ? style.open : style.closed}>
            <img src={header13} alt="" />
            Training
          </NavLink>
          <NavLink to="/" className={two ? style.open : style.closed}>
            <img src={header14} alt="" />
            Consultancy
          </NavLink>
          <NavLink to="/" className={two ? style.open : style.closed}>
            <img src={header15} alt="" />
            Recruitment and Training
          </NavLink>

          <NavLink to="#" onClick={handleThree}>
            Invest in Hospitality
            <img src={three ? invert : arrow} alt="" />
          </NavLink>
          <NavLink to="/" className={three ? style.open : style.closed}>
            <img src={header1} alt="" />
            Hotel and Resort
          </NavLink>
          <NavLink to="/" className={three ? style.open : style.closed}>
            <img src={header2} alt="" />
            Restaurant and Bar
          </NavLink>
          <NavLink to="/" className={three ? style.open : style.closed}>
            <img src={header3} alt="" />
            Clubs/Casinos
          </NavLink>
          <NavLink to="/" className={three ? style.open : style.closed}>
            <img src={header4} alt="" />
            Parks and Gardens
          </NavLink>
          <NavLink to="/" className={three ? style.open : style.closed}>
            <img src={header5} alt="" />
            Cruise Line
          </NavLink>
          <NavLink to="/" className={three ? style.open : style.closed}>
            <img src={header6} alt="" />
            Distinctive Event Centers
          </NavLink>
          <NavLink to="/" className={three ? style.open : style.closed}>
            <img src={header7} alt="" />
            Health, Wellness and Spa
          </NavLink>
          <NavLink to="/" className={three ? style.open : style.closed}>
            <img src={header8} alt="" />
            Residential Lifestyle
          </NavLink>
          <NavLink to="/" className={three ? style.open : style.closed}>
            <img src={header9} alt="" />
            Short Lets
          </NavLink>

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
