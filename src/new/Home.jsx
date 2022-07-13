import React, { useState } from "react";
import style from "./../styles/newhome.module.css";
import Footer from "./Footer";
import Header from "./Header";
import vid from "./../assets/newvid.png";
import hero1 from "./../assets/hero-nav1.png";
import hero2 from "./../assets/hero-nav2.png";
import redson_lounge from "./../assets/Redson Lounge.jpg";
import fruity from "./../assets/Vita Fruity.jpg";
import eagle from "./../assets/Eagle Plaza.jpg";
import rebar from "./../assets/Rebar.jpg";
import redsonbet from "./../assets/images (35) 1.png";
import connecthub from "./../assets/Connect Hub.jpg";
import heavens from "./../assets/Heavens.jpg";
import playground from "./../assets/Playground.jpg";
import abt from "./../assets/newabt.png";
import exp from "./../assets/export-yellow.png";
import { Link } from "react-router-dom";
import service1 from "./../assets/service1.png";
import service2 from "./../assets/service2.png";
import service3 from "./../assets/service3.png";
import service4 from "./../assets/service4.png";
import service5 from "./../assets/service5.png";
import invest1 from "./../assets/invest1.png";
import invest2 from "./../assets/invest2.png";
import invest3 from "./../assets/invest3.png";
import left from "./../assets/left.png";
import right from "./../assets/right.png";
import dot1 from "./../assets/newdot.png";
import dot2 from "./../assets/newdot2.png";
import start from "./../assets/start.png";
import training from "./../assets/training.png";
import training1 from "./../assets/training1.png";
import training2 from "./../assets/training2.png";
import training3 from "./../assets/training3.png";
import deal from "./../assets/deals.png";
import study1 from "./../assets/redson1.jpg";
import study2 from "./../assets/rebar1.png";
import study3 from "./../assets/playground1.jpg";
import study4 from "./../assets/newhero2.jpg";
import testi from "./../assets/test.png";
import j1 from "./../assets/dezeen-magazine-logo-vector.png";
import j2 from "./../assets/space-logo.png";
import heineken from "./../assets/Heineken-Logo.png";
import j4 from "./../assets/lifestyle.png";
import j5 from "./../assets/ukh.png";
import j6 from "./../assets/hen.png";
import j11 from "./../assets/jp 1.png";
import j12 from "./../assets/images (7).png";
import quote1 from "./../assets/quote1.png";
import quote2 from "./../assets/quote2.png";
import herobg1 from "./../assets/newhero1.png";
import herobg2 from "./../assets/newhero2.jpg";
import herobg3 from "./../assets/newhero3.jpg";
import herobg4 from "./../assets/newhero4.png";
import herobg5 from "./../assets/newhero5.jpg";

export default function Home() {
  const [trans, setTrans] = useState(0);
  const [invest, setInvest] = useState(0);
  const [study, setStudy] = useState(0);
  const [test, setTest] = useState(0)
  const [bg, setbg] = useState(herobg1);
  function heroOne() {
    setTrans(0);
    setbg(herobg1);
  }
  function heroTwo() {
    setTrans(-100);
    setbg(herobg2);
  }
  function heroThree() {
    setTrans(-200);
    setbg(herobg3);
  }
  function heroFour() {
    setTrans(-300);
    setbg(herobg4);
  }
  function heroFive() {
    setTrans(-400);
    setbg(herobg5);
  }
  let hero_change = {
    transform: "translateX(" + trans + "% )",
  };

  function investOne() {
    setInvest(0);
  }
  function investTwo() {
    setInvest(-100);
  }
  function investThree() {
    setInvest(-200);
  }
  function investFour() {
    setInvest(-300);
  }
  function investFive() {
    setInvest(-400);
  }
  function investSix() {
    setInvest(-500);
  }
  function investNext() {
    if (invest === 0) {
      setInvest(-100);
    }
    if (invest === -100) {
      setInvest(-200);
    }
    if (invest === -200) {
      setInvest(-300);
    }
    if (invest === -300) {
      setInvest(-400);
    }
    if (invest === -400) {
      setInvest(-500);
    }
    if (invest === -500) {
      return;
    }
  }
  function investPrev() {
    if (invest === -500) {
      setInvest(-400);
    }
    if (invest === -400) {
      setInvest(-300);
    }
    if (invest === -300) {
      setInvest(-200);
    }
    if (invest === -200) {
      setInvest(-100);
    }
    if (invest === -100) {
      setInvest(0);
    }
    if (invest === 0) {
      return;
    }
  }
  let invest_style = {
    transform: "translateX(" + invest + "% )",
  };

  function studyOne() {
    setStudy(0);
  }
  function studyTwo() {
    setStudy(-100);
  }
  function studyThree() {
    setStudy(-200);
  }
  function studyFour() {
    setStudy(-300);
  }
  function studyFive() {
    setStudy(-400);
  }
  function studySix() {
    setStudy(-500);
  }
  function studyNext() {
    if (study === 0) {
      setStudy(-100);
    }
    if (study === -100) {
      setStudy(-200);
    }
    if (study === -200) {
      setStudy(-300);
    }
    if (study === -300) {
      setStudy(-400);
    }
    if (study === -400) {
      setStudy(-500);
    }
    if (study === -500) {
      return;
    }
  }
  function studyPrev() {
    if (study === -500) {
      setStudy(-400);
    }
    if (study === -400) {
      setStudy(-300);
    }
    if (study === -300) {
      setStudy(-200);
    }
    if (study === -200) {
      setStudy(-100);
    }
    if (study === -100) {
      setStudy(0);
    }
    if (study === 0) {
      return;
    }
  }
  let study_style = {
    transform: "translateX(" + study + "% )",
  };

  function testOne() {
    setTest(0);
  }
  function testTwo() {
    setTest(-100);
  }
  function testThree() {
    setTest(-200);
  }
  function testFour() {
    setTest(-300);
  }
  function testFive() {
    setTest(-400);
  }
  function testSix() {
    setTest(-500);
  }
  function testNext() {
    if (test === 0) {
      setTest(-100);
    }
    if (test === -100) {
      setTest(-200);
    }
    if (test === -200) {
      setTest(-300);
    }
    if (test === -300) {
      setTest(-400);
    }
    if (test === -400) {
      setTest(-500);
    }
    if (test === -500) {
      return;
    }
  }
  function testPrev() {
    if (test === -500) {
      setTest(-400);
    }
    if (test === -400) {
      setTest(-300);
    }
    if (test === -300) {
      setTest(-200);
    }
    if (test === -200) {
      setTest(-100);
    }
    if (test === -100) {
      setTest(0);
    }
    if (test === 0) {
      return;
    }
  }
  let test_style = {
    transform: "translateX(" + test + "% )",
  };
  return (
    <div>
      <Header />
      <section className={style.hero} style={{ backgroundImage: `url(${bg})` }}>
        <div className={style.heroDiv} style={hero_change}>
          <h1>
            We build successful <br /> <b>Hospitality</b> businesses
          </h1>
          <p>
            Build your hospitality business with us and achieve <br />{" "}
            excellence in a shorter time.
          </p>
          <nav>
            <button className={style.hero_btn}>Request Consultation</button>
            <button className={style.hero_vid}>
              <img src={vid} alt="" /> Watch Video
            </button>
          </nav>
          <nav>
            <img src={hero1} alt="" onClick={heroOne} />
            <img src={hero2} alt="" onClick={heroTwo} />
            <img src={hero2} alt="" onClick={heroThree} />
            <img src={hero2} alt="" onClick={heroFour} />
            <img src={hero2} alt="" onClick={heroFive} />
          </nav>
        </div>
        <div className={style.heroDiv} style={hero_change}>
          <h1>
            We build successful <br /> <b>Hospitality</b> businesses
          </h1>
          <p>
            Build your hospitality business with us and achieve <br />{" "}
            excellence in a shorter time.
          </p>
          <nav>
            <button className={style.hero_btn}>Request Consultation</button>
            <button className={style.hero_vid}>
              <img src={vid} alt="" /> Watch Video
            </button>
          </nav>
          <nav>
            <img src={hero2} alt="" onClick={heroOne} />
            <img src={hero1} alt="" onClick={heroTwo} />
            <img src={hero2} alt="" onClick={heroThree} />
            <img src={hero2} alt="" onClick={heroFour} />
            <img src={hero2} alt="" onClick={heroFive} />
          </nav>
        </div>
        <div className={style.heroDiv} style={hero_change}>
          <h1>
            We build successful <br /> <b>Hospitality</b> businesses
          </h1>
          <p>
            Build your hospitality business with us and achieve <br />{" "}
            excellence in a shorter time.
          </p>
          <nav>
            <button className={style.hero_btn}>Request Consultation</button>
            <button className={style.hero_vid}>
              <img src={vid} alt="" /> Watch Video
            </button>
          </nav>
          <nav>
            <img src={hero2} alt="" onClick={heroOne} />
            <img src={hero2} alt="" onClick={heroTwo} />
            <img src={hero1} alt="" onClick={heroThree} />
            <img src={hero2} alt="" onClick={heroFour} />
            <img src={hero2} alt="" onClick={heroFive} />
          </nav>
        </div>
        <div className={style.heroDiv} style={hero_change}>
          <h1>
            We build successful <br /> <b>Hospitality</b> businesses
          </h1>
          <p>
            Build your hospitality business with us and achieve <br />{" "}
            excellence in a shorter time.
          </p>
          <nav>
            <button className={style.hero_btn}>Request Consultation</button>
            <button className={style.hero_vid}>
              <img src={vid} alt="" /> Watch Video
            </button>
          </nav>
          <nav>
            <img src={hero2} alt="" onClick={heroOne} />
            <img src={hero2} alt="" onClick={heroTwo} />
            <img src={hero2} alt="" onClick={heroThree} />
            <img src={hero1} alt="" onClick={heroFour} />
            <img src={hero2} alt="" onClick={heroFive} />
          </nav>
        </div>
        <div className={style.heroDiv} style={hero_change}>
          <h1>
            We build successful <br /> <b>Hospitality</b> businesses
          </h1>
          <p>
            Build your hospitality business with us and achieve <br />{" "}
            excellence in a shorter time.
          </p>
          <nav>
            <button className={style.hero_btn}>Request Consultation</button>
            <button className={style.hero_vid}>
              <img src={vid} alt="" /> Watch Video
            </button>
          </nav>
          <nav>
            <img src={hero2} alt="" onClick={heroOne} />
            <img src={hero2} alt="" onClick={heroTwo} />
            <img src={hero2} alt="" onClick={heroThree} />
            <img src={hero2} alt="" onClick={heroFour} />
            <img src={hero1} alt="" onClick={heroFive} />
          </nav>
        </div>
      </section>
      <section className={style.partners}>
        <small>Over 100+ businesses growing with Jefferson Hospitality</small>
        <figure>
          <img src={heavens} alt="" />
          <img src={playground} alt="" />
          <img src={fruity} alt="" />
          <img src={rebar} alt="" />
          <img src={redson_lounge} alt="" />
          <img src={eagle} alt="" />
          <img src={connecthub} alt="" />
          <img src={redsonbet} alt="" />
        </figure>
      </section>
      <section className={style.about}>
        <h3>About Us</h3>
        <div>
          <nav>
            <img src={abt} alt="" />
            <nav>
              <span>
                <b>10+</b> <br /> Years of Experience
              </span>
              <span>
                <b>№ 1</b> <br /> Hospitality company
              </span>
              <span>
                <b>100+</b> <br /> Happy Customers
              </span>
              <span>
                <b>5.0</b> <br /> 5 star ratings
              </span>
            </nav>
          </nav>
          <nav>
            <p>
              Every business entering or growing in the hospitality industry
              needs one thing: Thorough guidance from professionals who have
              already walked that path.
            </p>
            <p>
              At Jefferson, we cut a clear path to success with time-tested
              strategies and progressive innovations. We are an innovative
              hospitality investment, management and development company. We
              partner with hotels, restaurants, nightlife venues, and resorts as
              they move through growth stages.
            </p>
            <p>
              We deliver outstanding branding; design and the; project
              management; procurement and interior decoration; recruitment;
              training and consultancy to new and established brands in the
              hospitality industry.
            </p>
            <p>
              We aim to distinguish your business from the herd with your
              exceptional service, design and refreshing experience. We are
              there at all stages of your business, supplying you with all the
              basics you need to keep your reputation flying high.
            </p>
            <Link to="/">
              Learn More <img src={exp} alt="" />{" "}
            </Link>
          </nav>
        </div>
      </section>
      <section className={style.services}>
        <h3>Our team excels in</h3>
        <div>
          <nav>
            <img src={service1} alt="" />
            <h4>HOTEL CONSULTING</h4>
            <p>
              Get expert advice from professionals with over 10 years of
              experience in risk management, branding and strategy, operations
              and many other areas of the hospitality industry. Get expert
              advice from professionals with over 10 years of experience in risk
              management, branding and strategy, operations and many other areas
              of the hospitality industry.Get expert advice from professionals
              with over 10 years of experience in risk management, branding and
              strategy, operations and many other areas of the hospitality
              industry.
            </p>
            <Link to="/">
              Read More <img src={exp} alt="" />{" "}
            </Link>
          </nav>
          <div className={style.serviceGrid}>
            <nav>
              <img src={service2} alt="" />
              <h4>SETUP AND GROWTH</h4>
              <p>
                Get your establishment set up and running with our development
                and construction services that cater to your building,
                procurement, staffing and personnel training offerings.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={service3} alt="" />
              <h4>PROJECT FUNDING</h4>
              <p>
                You can access thousands of donors with simple and powerful
                campaigns to help raise adequate funding to get your business up
                and running.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={service4} alt="" />
              <h4>ASSET ENHANCEMENT</h4>
              <p>
                Weaponize your assets to attract a new set of patrons with
                attractive, cutting-edge redesigns and redecorations guaranteed
                to rejuvenate your asset to life.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={service5} alt="" />
              <h4>REVENUE MANAGEMENT</h4>
              <p>
                Do more with your business revenue with in-depth insights into
                your competitors and customers with our thorough analytics and
                performance data gathering techniques.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
          </div>
        </div>
        <button>
          See more services <img src={exp} alt="" />{" "}
        </button>
      </section>
      <section className={style.invest}>
        <h3>Invest in hospitality</h3>
        <section>
          <div className={style.investDiv} style={invest_style}>
            <nav>
              <img src={invest1} alt="" />
              <h4>Hotels and Resort</h4>
              <p>
                Weaponize your assets to attract a new set of patrons with
                attractive, cutting-edge redesigns and redecorations guaranteed
                to rejuvenate your asset to life.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={invest2} alt="" />
              <h4>Event Centers</h4>
              <p>
                Weaponize your assets to attract a new set of patrons with
                attractive, cutting-edge redesigns and redecorations guaranteed
                to rejuvenate your asset to life.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={invest3} alt="" />
              <h4>Cruise Line</h4>
              <p>
                Weaponize your assets to attract a new set of patrons with
                attractive, cutting-edge redesigns and redecorations guaranteed
                to rejuvenate your asset to life.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={invest1} alt="" />
              <h4>Health, Wellness and Spa</h4>
              <p>
                Weaponize your assets to attract a new set of patrons with
                attractive, cutting-edge redesigns and redecorations guaranteed
                to rejuvenate your asset to life.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
          </div>
          <div className={style.investDiv} style={invest_style}>
            <nav>
              <img src={invest1} alt="" />
              <h4>Hotels and Resort</h4>
              <p>
                Weaponize your assets to attract a new set of patrons with
                attractive, cutting-edge redesigns and redecorations guaranteed
                to rejuvenate your asset to life.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={invest2} alt="" />
              <h4>Event Centers</h4>
              <p>
                Weaponize your assets to attract a new set of patrons with
                attractive, cutting-edge redesigns and redecorations guaranteed
                to rejuvenate your asset to life.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={invest3} alt="" />
              <h4>Cruise Line</h4>
              <p>
                Weaponize your assets to attract a new set of patrons with
                attractive, cutting-edge redesigns and redecorations guaranteed
                to rejuvenate your asset to life.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={invest1} alt="" />
              <h4>Health, Wellness and Spa</h4>
              <p>
                Weaponize your assets to attract a new set of patrons with
                attractive, cutting-edge redesigns and redecorations guaranteed
                to rejuvenate your asset to life.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
          </div>
          <div className={style.investDiv} style={invest_style}>
            <nav>
              <img src={invest1} alt="" />
              <h4>Hotels and Resort</h4>
              <p>
                Weaponize your assets to attract a new set of patrons with
                attractive, cutting-edge redesigns and redecorations guaranteed
                to rejuvenate your asset to life.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={invest2} alt="" />
              <h4>Event Centers</h4>
              <p>
                Weaponize your assets to attract a new set of patrons with
                attractive, cutting-edge redesigns and redecorations guaranteed
                to rejuvenate your asset to life.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={invest3} alt="" />
              <h4>Cruise Line</h4>
              <p>
                Weaponize your assets to attract a new set of patrons with
                attractive, cutting-edge redesigns and redecorations guaranteed
                to rejuvenate your asset to life.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={invest1} alt="" />
              <h4>Health, Wellness and Spa</h4>
              <p>
                Weaponize your assets to attract a new set of patrons with
                attractive, cutting-edge redesigns and redecorations guaranteed
                to rejuvenate your asset to life.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
          </div>
          <div className={style.investDiv} style={invest_style}>
            <nav>
              <img src={invest1} alt="" />
              <h4>Hotels and Resort</h4>
              <p>
                Weaponize your assets to attract a new set of patrons with
                attractive, cutting-edge redesigns and redecorations guaranteed
                to rejuvenate your asset to life.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={invest2} alt="" />
              <h4>Event Centers</h4>
              <p>
                Weaponize your assets to attract a new set of patrons with
                attractive, cutting-edge redesigns and redecorations guaranteed
                to rejuvenate your asset to life.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={invest3} alt="" />
              <h4>Cruise Line</h4>
              <p>
                Weaponize your assets to attract a new set of patrons with
                attractive, cutting-edge redesigns and redecorations guaranteed
                to rejuvenate your asset to life.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={invest1} alt="" />
              <h4>Health, Wellness and Spa</h4>
              <p>
                Weaponize your assets to attract a new set of patrons with
                attractive, cutting-edge redesigns and redecorations guaranteed
                to rejuvenate your asset to life.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
          </div>
          <div className={style.investDiv} style={invest_style}>
            <nav>
              <img src={invest1} alt="" />
              <h4>Hotels and Resort</h4>
              <p>
                Weaponize your assets to attract a new set of patrons with
                attractive, cutting-edge redesigns and redecorations guaranteed
                to rejuvenate your asset to life.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={invest2} alt="" />
              <h4>Event Centers</h4>
              <p>
                Weaponize your assets to attract a new set of patrons with
                attractive, cutting-edge redesigns and redecorations guaranteed
                to rejuvenate your asset to life.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={invest3} alt="" />
              <h4>Cruise Line</h4>
              <p>
                Weaponize your assets to attract a new set of patrons with
                attractive, cutting-edge redesigns and redecorations guaranteed
                to rejuvenate your asset to life.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={invest1} alt="" />
              <h4>Health, Wellness and Spa</h4>
              <p>
                Weaponize your assets to attract a new set of patrons with
                attractive, cutting-edge redesigns and redecorations guaranteed
                to rejuvenate your asset to life.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
          </div>
          <div className={style.investDiv} style={invest_style}>
            <nav>
              <img src={invest1} alt="" />
              <h4>Hotels and Resort</h4>
              <p>
                Weaponize your assets to attract a new set of patrons with
                attractive, cutting-edge redesigns and redecorations guaranteed
                to rejuvenate your asset to life.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={invest2} alt="" />
              <h4>Event Centers</h4>
              <p>
                Weaponize your assets to attract a new set of patrons with
                attractive, cutting-edge redesigns and redecorations guaranteed
                to rejuvenate your asset to life.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={invest3} alt="" />
              <h4>Cruise Line</h4>
              <p>
                Weaponize your assets to attract a new set of patrons with
                attractive, cutting-edge redesigns and redecorations guaranteed
                to rejuvenate your asset to life.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={invest1} alt="" />
              <h4>Health, Wellness and Spa</h4>
              <p>
                Weaponize your assets to attract a new set of patrons with
                attractive, cutting-edge redesigns and redecorations guaranteed
                to rejuvenate your asset to life.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
          </div>
        </section>
        <nav>
          <button>
            <img src={left} alt="" onClick={investPrev} />
          </button>
          <button>
            <img src={invest === 0 ? dot1 : dot2} alt="" onClick={investOne} />
          </button>
          <button>
            <img
              src={invest === -100 ? dot1 : dot2}
              alt=""
              onClick={investTwo}
            />
          </button>
          <button>
            <img
              src={invest === -200 ? dot1 : dot2}
              alt=""
              onClick={investThree}
            />
          </button>
          <button>
            <img
              src={invest === -300 ? dot1 : dot2}
              alt=""
              onClick={investFour}
            />
          </button>
          <button>
            <img
              src={invest === -400 ? dot1 : dot2}
              alt=""
              onClick={investFive}
            />
          </button>
          <button>
            <img
              src={invest === -500 ? dot1 : dot2}
              alt=""
              onClick={investSix}
            />
          </button>
          <button>
            <img src={right} alt="" onClick={investNext} />
          </button>
        </nav>
      </section>
      <section className={style.start}>
        <h3>First Start By Jefferson Life</h3>
        <div>
          <nav>
            <p>
              First Start is a package created for our first starters as
              Jefferson Life members that makes the onboarding process easier.
              You get hand-held advice and resources that helps you make
              <b>profitable investments</b> We believe in making sure that your
              first investment is successful, and the stepping stone to bigger
              investments.
            </p>
            <p>
              We give you access to a greater network of projects and business
              all over Africa, helping you to invest in new and
              <b>potentially successful businesses</b> upcoming businesses.
            </p>
            <Link to="/">
              Read More <img src={exp} alt="" />{" "}
            </Link>
          </nav>
          <figure>
            <img src={start} alt="" />
          </figure>
        </div>
      </section>
      <section className={style.training}>
        <h3>Trainings</h3>
        <div>
          <nav>
            <p>
              We provide training in areas of the hospitality business, from top
              to bottom. From training service staff to supervisors and
              managers, to sales and marketing personnel.{" "}
            </p>
            <b>
              We offer the following team training to players in various sectors
              of the industry:
            </b>
          </nav>
          <figure>
            <img src={training} alt="" />
          </figure>
        </div>
        <div>
          <nav>
            <img src={training1} alt="" />
            <h4>Hospitality Trainig & Coaching</h4>
            <p>
              Get into our on-going leadership training and in-depth coaching
              for hospitality business in Nigeria & West Africa
            </p>
            <Link to="/">
              Read More <img src={exp} alt="" />{" "}
            </Link>
          </nav>
          <nav>
            <img src={training2} alt="" />
            <h4>Culinary Management/Training</h4>
            <p>
              By bringing in top talents with eclectic culinary backgrounds,
              Jefferson Hospitality looks at current trends and strives to
              create new ones.
            </p>
            <Link to="/">
              Read More <img src={exp} alt="" />{" "}
            </Link>
          </nav>
          <nav>
            <img src={training3} alt="" />
            <h4>Leadership Coaching</h4>
            <p>
              Management in the hospitality industry includes a huge range of
              responsibilities, from managing and motivating individuals and
              teams, to creating long-term strategies and policies.
            </p>
            <Link to="/">
              Read More <img src={exp} alt="" />{" "}
            </Link>
          </nav>
        </div>
      </section>
      <section className={style.deals}>
        <h3>Deals</h3>
        <div>
          <figure>
            <img src={deal} alt="" />
          </figure>
          <nav>
            <h4>Sales</h4>
            <p>
              Temple Grills is offering 20% off on all steaks delivered from the
              22nd -30th of June, 2022. Click here for details
            </p>
            <div className={style.dealNav}>
              <nav>
                <button>
                  <img src={left} alt="" />
                </button>
                <button>
                  <img src={dot1} alt="" />
                </button>
                <button>
                  <img src={dot2} alt="" />
                </button>
                <button>
                  <img src={dot2} alt="" />
                </button>
                <button>
                  <img src={dot2} alt="" />
                </button>
                <button>
                  <img src={dot2} alt="" />
                </button>
                <button>
                  <img src={dot2} alt="" />
                </button>
                <button>
                  <img src={right} alt="" />
                </button>
              </nav>
              <Link to="/">
                Learn More <img src={exp} alt="" />{" "}
              </Link>
            </div>
          </nav>
        </div>
      </section>
      <section className={style.case}>
        <h3>Case Study</h3>
        <section>
          <div style={study_style}>
            <nav>
              <img src={study1} alt="" />
              <h4>Redson Lounge</h4>
              <p>
                The Redson Lounge is a sports themed bar and betting centre with
                gaming ports and social centres
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={study2} alt="" />
              <h4>Rebar</h4>
              <p>
                Rebar is a restaurant and nightclub that provides outdoor
                relaxation with indoor gaming experience
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={study3} alt="" />
              <h4>The Playground</h4>
              <p>
                The Playground is a classy relaxation centre with a rich dining
                experience and beach club relaxation centre
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={study4} alt="" />
              <h4>Heavens Bar</h4>
              <p>
                Heavens is a bar and lounge experience for nightlifers in Abuja.
                It offers exotic drink and high-quality VIP service.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
          </div>
          <div style={study_style}>
            <nav>
              <img src={study1} alt="" />
              <h4>Redson Lounge</h4>
              <p>
                The Redson Lounge is a sports themed bar and betting centre with
                gaming ports and social centres
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={study2} alt="" />
              <h4>Rebar</h4>
              <p>
                Rebar is a restaurant and nightclub that provides outdoor
                relaxation with indoor gaming experience
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={study3} alt="" />
              <h4>The Playground</h4>
              <p>
                The Playground is a classy relaxation centre with a rich dining
                experience and beach club relaxation centre
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={study4} alt="" />
              <h4>Heavens Bar</h4>
              <p>
                Heavens is a bar and lounge experience for nightlifers in Abuja.
                It offers exotic drink and high-quality VIP service.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
          </div>
          <div style={study_style}>
            <nav>
              <img src={study1} alt="" />
              <h4>Redson Lounge</h4>
              <p>
                The Redson Lounge is a sports themed bar and betting centre with
                gaming ports and social centres
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={study2} alt="" />
              <h4>Rebar</h4>
              <p>
                Rebar is a restaurant and nightclub that provides outdoor
                relaxation with indoor gaming experience
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={study3} alt="" />
              <h4>The Playground</h4>
              <p>
                The Playground is a classy relaxation centre with a rich dining
                experience and beach club relaxation centre
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={study4} alt="" />
              <h4>Heavens Bar</h4>
              <p>
                Heavens is a bar and lounge experience for nightlifers in Abuja.
                It offers exotic drink and high-quality VIP service.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
          </div>
          <div style={study_style}>
            <nav>
              <img src={study1} alt="" />
              <h4>Redson Lounge</h4>
              <p>
                The Redson Lounge is a sports themed bar and betting centre with
                gaming ports and social centres
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={study2} alt="" />
              <h4>Rebar</h4>
              <p>
                Rebar is a restaurant and nightclub that provides outdoor
                relaxation with indoor gaming experience
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={study3} alt="" />
              <h4>The Playground</h4>
              <p>
                The Playground is a classy relaxation centre with a rich dining
                experience and beach club relaxation centre
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={study4} alt="" />
              <h4>Heavens Bar</h4>
              <p>
                Heavens is a bar and lounge experience for nightlifers in Abuja.
                It offers exotic drink and high-quality VIP service.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
          </div>
          <div style={study_style}>
            <nav>
              <img src={study1} alt="" />
              <h4>Redson Lounge</h4>
              <p>
                The Redson Lounge is a sports themed bar and betting centre with
                gaming ports and social centres
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={study2} alt="" />
              <h4>Rebar</h4>
              <p>
                Rebar is a restaurant and nightclub that provides outdoor
                relaxation with indoor gaming experience
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={study3} alt="" />
              <h4>The Playground</h4>
              <p>
                The Playground is a classy relaxation centre with a rich dining
                experience and beach club relaxation centre
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={study4} alt="" />
              <h4>Heavens Bar</h4>
              <p>
                Heavens is a bar and lounge experience for nightlifers in Abuja.
                It offers exotic drink and high-quality VIP service.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
          </div>
          <div style={study_style}>
            <nav>
              <img src={study1} alt="" />
              <h4>Redson Lounge</h4>
              <p>
                The Redson Lounge is a sports themed bar and betting centre with
                gaming ports and social centres
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={study2} alt="" />
              <h4>Rebar</h4>
              <p>
                Rebar is a restaurant and nightclub that provides outdoor
                relaxation with indoor gaming experience
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={study3} alt="" />
              <h4>The Playground</h4>
              <p>
                The Playground is a classy relaxation centre with a rich dining
                experience and beach club relaxation centre
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
            <nav>
              <img src={study4} alt="" />
              <h4>Heavens Bar</h4>
              <p>
                Heavens is a bar and lounge experience for nightlifers in Abuja.
                It offers exotic drink and high-quality VIP service.
              </p>
              <Link to="/">
                Read More <img src={exp} alt="" />{" "}
              </Link>
            </nav>
          </div>
        </section>
        <nav>
          <button>
            <img src={left} alt="" onClick={studyPrev} />
          </button>
          <button>
            <img src={study === 0 ? dot1 : dot2} alt="" onClick={studyOne} />
          </button>
          <button>
            <img src={study === -100 ? dot1 : dot2} alt="" onClick={studyTwo} />
          </button>
          <button>
            <img
              src={study === -200 ? dot1 : dot2}
              alt=""
              onClick={studyThree}
            />
          </button>
          <button>
            <img
              src={study === -300 ? dot1 : dot2}
              alt=""
              onClick={studyFour}
            />
          </button>
          <button>
            <img
              src={study === -400 ? dot1 : dot2}
              alt=""
              onClick={studyFive}
            />
          </button>
          <button>
            <img src={study === -500 ? dot1 : dot2} alt="" onClick={studySix} />
          </button>
          <button>
            <img src={right} alt="" onClick={studyNext} />
          </button>
        </nav>
        <Link to="/">
          See more case study <img src={exp} alt="" />{" "}
        </Link>
      </section>
      <section className={style.testimony}>
        <h3>Testimonials</h3>
        <div>
          <nav>
            <p>Successful hospitality businesses we’ve built</p>
            <span>5 star rating</span>
          </nav>
          <nav>
            <section>
              <div style={test_style}>
                <blockquote>
                  <img src={quote1} className={style.quote} alt="" /> Our plaza
                  needed a facelift and we <br /> got just that with the
                  sophisticated <br /> designs to our plaza. It definitely{" "}
                  <br /> attracted much attention from passersby.{" "}
                  <img src={quote2} className={style.quote} alt="" />
                </blockquote>
                <p>
                  <img src={testi} alt="" />
                  <span>
                    Eagle Plaza <br />
                    MR. Johnson Andrew
                  </span>
                </p>
              </div>
              <div style={test_style}>
                <blockquote>
                  <img src={quote1} className={style.quote} alt="" /> Our plaza
                  needed a facelift and we <br /> got just that with the
                  sophisticated <br /> designs to our plaza. It definitely{" "}
                  <br /> attracted much attention from passersby.{" "}
                  <img src={quote2} className={style.quote} alt="" />
                </blockquote>
                <p>
                  <img src={testi} alt="" />
                  <span>
                    Eagle Plaza <br />
                    MR. Johnson Andrew
                  </span>
                </p>
              </div>
              <div style={test_style}>
                <blockquote>
                  <img src={quote1} className={style.quote} alt="" /> Our plaza
                  needed a facelift and we <br /> got just that with the
                  sophisticated <br /> designs to our plaza. It definitely{" "}
                  <br /> attracted much attention from passersby.{" "}
                  <img src={quote2} className={style.quote} alt="" />
                </blockquote>
                <p>
                  <img src={testi} alt="" />
                  <span>
                    Eagle Plaza <br />
                    MR. Johnson Andrew
                  </span>
                </p>
              </div>
              <div style={test_style}>
                <blockquote>
                  <img src={quote1} className={style.quote} alt="" /> Our plaza
                  needed a facelift and we <br /> got just that with the
                  sophisticated <br /> designs to our plaza. It definitely{" "}
                  <br /> attracted much attention from passersby.{" "}
                  <img src={quote2} className={style.quote} alt="" />
                </blockquote>
                <p>
                  <img src={testi} alt="" />
                  <span>
                    Eagle Plaza <br />
                    MR. Johnson Andrew
                  </span>
                </p>
              </div>
              <div style={test_style}>
                <blockquote>
                  <img src={quote1} className={style.quote} alt="" /> Our plaza
                  needed a facelift and we <br /> got just that with the
                  sophisticated <br /> designs to our plaza. It definitely{" "}
                  <br /> attracted much attention from passersby.{" "}
                  <img src={quote2} className={style.quote} alt="" />
                </blockquote>
                <p>
                  <img src={testi} alt="" />
                  <span>
                    Eagle Plaza <br />
                    MR. Johnson Andrew
                  </span>
                </p>
              </div>
              <div style={test_style}>
                <blockquote>
                  <img src={quote1} className={style.quote} alt="" /> Our plaza
                  needed a facelift and we <br /> got just that with the
                  sophisticated <br /> designs to our plaza. It definitely{" "}
                  <br /> attracted much attention from passersby.{" "}
                  <img src={quote2} className={style.quote} alt="" />
                </blockquote>
                <p>
                  <img src={testi} alt="" />
                  <span>
                    Eagle Plaza <br />
                    MR. Johnson Andrew
                  </span>
                </p>
              </div>
            </section>
            <nav>
              <button>
                <img src={left} alt="" onClick={testPrev} />
              </button>
              <button>
                <img src={test === 0 ? dot1 : dot2} alt="" onClick={testOne} />
              </button>
              <button>
                <img
                  src={test === -100 ? dot1 : dot2}
                  alt=""
                  onClick={testTwo}
                />
              </button>
              <button>
                <img
                  src={test === -200 ? dot1 : dot2}
                  alt=""
                  onClick={testThree}
                />
              </button>
              <button>
                <img
                  src={test === -300 ? dot1 : dot2}
                  alt=""
                  onClick={testFour}
                />
              </button>
              <button>
                <img
                  src={test === -400 ? dot1 : dot2}
                  alt=""
                  onClick={testFive}
                />
              </button>
              <button>
                <img
                  src={test === -500 ? dot1 : dot2}
                  alt=""
                  onClick={testSix}
                />
              </button>
              <button>
                <img src={right} alt="" onClick={testNext} />
              </button>
            </nav>
          </nav>
        </div>
      </section>
      <section className={style.jpart}>
        <div>
          <span></span>
          <img src={j11} alt="" />
          <span></span>
        </div>
        <div>
          <img src={j1} alt="" />
          <img src={j12} alt="" />
          <img src={j2} alt="" />
          <img src={heineken} alt="" />
          <img src={j4} alt="" />
          <img src={j5} alt="" />
          <img src={j6} alt="" />
        </div>
      </section>
      <section className={style.subscribe}>
        <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
        <p>
          Our focus is on mid to upscale hotels, restaurants,nightlife venues,
          and resorts intelligently designed with user experience
        </p>
        <label>
          <input type="email" placeholder="Enter your Email Address" />
          <button>Subscribe</button>
        </label>
      </section>
      <Footer />
    </div>
  );
}
