import React, {useEffect, useState} from 'react'
import style from './../styles/home.module.css'
import Header from './Header'
import Footer from './Footer'
import hero from './../assets/homebg.png'
import vid from './../assets/Group 2.png'
import redsonbet from './../assets/images (35) 1.png'
import connecthub from "./../assets/Connect Hub.jpg";
import abt from './../assets/know.png'
import exp from './../assets/export.png'
import icon1 from './../assets/icon1.png'
import icon2 from './../assets/icon2.png'
import icon3 from './../assets/icon3.png'
import icon4 from "./../assets/icon4.png";
import icon5 from "./../assets/icon5.png";
import icon6 from "./../assets/icon6.png";
import icon7 from "./../assets/icon7.png";
import icon8 from "./../assets/icon8.png";
import arrow from './../assets/Vector.png'
import invert from './../assets/invert.png'
import stars from './../assets/stars.png'
import j1 from "./../assets/dezeen-magazine-logo-vector.png";
import j2 from "./../assets/space-logo.png";
import heineken from "./../assets/Heineken-Logo.png";
import j4 from "./../assets/lifestyle.png";
import j5 from "./../assets/ukh.png";
import j6 from "./../assets/hen.png";
import j11 from "./../assets/jp 1.png";
import j12 from "./../assets/images (7).png";
import redson_lounge from "./../assets/Redson Lounge.jpg";
import fruity from "./../assets/Vita Fruity.jpg";
import eagle from "./../assets/Eagle Plaza.jpg";
import rebar from "./../assets/Rebar.jpg";
import { Link } from "react-router-dom";
import heavens from "./../assets/Heavens.jpg";
import playground from "./../assets/Playground.jpg";
import playground1 from "./../assets/playground1.jpg";
import playground2 from "./../assets/playground2.jpg";
import playground3 from "./../assets/playground3.jpg";
import playground4 from "./../assets/playground4.jpg";
import heaven1 from "./../assets/heaven1.jpg";
import heaven2 from "./../assets/heaven2.jpg";
import heaven3 from "./../assets/heaven3.jpg";
import heaven4 from "./../assets/heaven4.jpg";
import rebar1 from "./../assets/rebar1.png";
import rebar2 from "./../assets/rebar2.png";
import rebar3 from "./../assets/rebar3.png";
import rebar4 from "./../assets/rebar4.png";
import redson1 from "./../assets/redson1.jpg";
import redson2 from "./../assets/redson2.jpg";
import redson3 from "./../assets/redson3.jpg";
import redson4 from "./../assets/redson4.jpg";


export default function Home() {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);


  function handleOne() {
      setOne(true);
      setTwo(false);
      setThree(false);
      setFour(false);
  }
  function handleTwo() {
      setTwo(true);
      setOne(false);
      setThree(false);
      setFour(false);
  }
  function handleThree() {
      setThree(true);
      setOne(false);
      setTwo(false);
      setFour(false);
  }
  function handleFour() {
      setFour(true);
      setOne(false);
      setTwo(false);
      setThree(false);
  }
   const [count, setCount] = useState(1);

   useEffect(() => {
     if(window.innerWidth > 768) {
       setTimeout(() => {
         if(count === 1) {
           handleTwo();
           setCount(2);
         }
         if(count === 2) {
            handleThree();
            setCount(3);
         }
          if(count === 3) {
            handleFour();
            setCount(4);
          }
          if(count === 4) {
            handleOne();
            setCount(1);
          }
       }, 9000);
     }
   }, [count]);
  return (
    <main>
      <Header />
      <section className={style.hero}>
        <div className={style.hero_left}>
          <img src={hero} alt="" className={style.big} />
        </div>
        <div className={style.hero_right}>
          <h2>
            We Upscale <b>Hospitality</b> <br /> Services
          </h2>
          <p>
            Dominate the Hospitality Industry with us. Build your hospitality
            business with us and truly live the dream of excellence and class
            you want to be famous for.
          </p>
          <p>Over 100+ businesses have confidence in our expertise.</p>
          <nav>
            <button className={style.hero_btn}>Request Consultation</button>
            <button className={style.hero_vid}>
              <img src={vid} alt="" /> Watch Video
            </button>
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
        <h2>GET TO KNOW WHAT WE DO</h2>
        <div className={style.abt}>
          <div className={style.abt_img}>
            <img src={abt} alt="" />
          </div>
          <div className={style.abt_info}>
            <p>
              Every business entering or growing in the hospitality industry
              desperately needs one thing: Thorough guidance from businesses who
              have already walked that path.
            </p>
            <p>
              At Jefferson Hospitality, we have created a clear path to success
              through time-tested strategies and progressive innovations. We are
              an innovative hospitality investment, management and development
              company with a focus on mid to upscale hotels, restaurants,
              nightlife venues, and resorts. We have also designed an immersive
              user experience that will ensure that you are professionally able
              to endear your customers to your brand. We hold a strong belief
              that business and pleasure can be found in one place-and that is
              your establishment.
            </p>
            <Link to="/">
              Learn More <img src={exp} alt="" />{" "}
            </Link>
            <nav>
              <span>
                <b>10+</b> <br /> Years of Experience
              </span>
              <span>
                <b>100+</b> <br /> Happy Customers
              </span>
            </nav>
          </div>
        </div>
      </section>
      <section className={style.expertise}>
        <h2>OUR SERVICES</h2>
        <div>
          <nav>
            <figure style={{ background: "#DDFBF8" }}>
              <img src={icon1} alt="" />
            </figure>
            <h4>HOTEL CONSULTING</h4>
            <p>
              Get expert advice from professionals with over 10 years of
              experience in risk management, branding and strategy, operations
              and many other areas of the hospitality industry.
            </p>
          </nav>
          <nav>
            <figure style={{ background: "#EFD9F8" }}>
              <img src={icon2} alt="" />
            </figure>
            <h4>FOOD & BEVERAGE INNOVATION</h4>
            <p>
              Leverage your local surroundings and unique offerings to create
              new and exciting meal and drink experiences that your patrons
              cannot get enough of.
            </p>
          </nav>
          <nav>
            <figure style={{ background: "#FFEDE6" }}>
              <img src={icon3} alt="" />
            </figure>
            <h4>SETUP & GROWTH</h4>
            <p>
              Get your establishment set up and running with our development and
              construction services that cater to your building, procurement,
              staffing and personnel training offerings.
            </p>
          </nav>
          <nav>
            <figure style={{ background: "#f8a9114d" }}>
              <img src={icon4} alt="" />
            </figure>
            <h4>ASSET ENHANCEMENT</h4>
            <p>
              Weaponize your assets to attract a new set of patrons with
              attractive, cutting-edge redesigns and redecorations guaranteed to
              rejuvenate your asset to life.
            </p>
          </nav>
          <nav>
            <figure style={{ background: "#FFE1E9" }}>
              <img src={icon5} alt="" />
            </figure>
            <h4>REVENUE MANAGEMENT</h4>
            <p>
              Do more with your business revenue with in-depth insights into
              your competitors and customers with our thorough analytics and
              performance data gathering techniques.
            </p>
          </nav>
          <nav>
            <figure style={{ background: "#DBEDFF" }}>
              <img src={icon6} alt="" />
            </figure>
            <h4>HOSPITALITY PPP</h4>
            <p>
              Easily access PPP loans with our loan filling and management
              services designed to maximize your loans.
            </p>
          </nav>
          <nav>
            <figure style={{ background: "#DBF9ED" }}>
              <img src={icon7} alt="" />
            </figure>
            <h4>PROJECT FUNDRAISING</h4>
            <p>
              Access thousands of donors and with simple and powerful campaigns
              that are guaranteed to help raise adequate funding to get your
              business up and running.
            </p>
          </nav>
          <nav>
            <figure style={{ background: "#FFFAD9" }}>
              <img src={icon8} alt="" />
            </figure>
            <h4>INVESTMENT & ACQUISITION</h4>
            <p>
              Crisis-proof your business with profitable investments and
              acquisitions that ease your set up processes and help you stay
              afloat in these times.
            </p>
          </nav>
        </div>
        <button>
          See more services <img src={exp} alt="" />{" "}
        </button>
      </section>
      <section className={style.success}>
        <h2>OUR SUCCESS STORIES</h2>
        <div>
          <div className={style.projects}>
            <nav onClick={handleOne} className={one ? style.pactive : ""}>
              <img src={heavens} alt="" />
              <span>
                <b>Heavens Bar</b>
                <img src={stars} alt="" />
              </span>
              <img src={one ? invert : arrow} alt="" />
            </nav>
            <p className={one ? style.show : ""}>
              Heavens is a bar and lounge experience for nightlifers in Abuja.
              It offers exotic drink and high-quality VIP service.
            </p>
            <figure className={one ? style.resShow : style.resHide}>
              <img src={heaven1} alt="" />
              <img src={heaven2} alt="" />
              <img src={heaven3} alt="" />
              <img src={heaven4} alt="" />
            </figure>
            <nav onClick={handleTwo} className={two ? style.pactive : ""}>
              <img src={playground} alt="" />
              <span>
                <b>The Playground</b>
                <img src={stars} alt="" />
              </span>
              <img src={two ? invert : arrow} alt="" />
            </nav>
            <p className={two ? style.show : ""}>
              The Playground is a classy relaxation centre with a rich dining
              experience and beach club relaxation centre
            </p>
            <figure className={two ? style.resShow : style.resHide}>
              <img src={playground1} alt="" />
              <img src={playground2} alt="" />
              <img src={playground3} alt="" />
              <img src={playground4} alt="" />
            </figure>
            <nav onClick={handleThree} className={three ? style.pactive : ""}>
              <img src={rebar} alt="" />
              <span>
                <b>Rebar</b>
                <img src={stars} alt="" />
              </span>
              <img src={three ? invert : arrow} alt="" />
            </nav>
            <p className={three ? style.show : ""}>
              Rebar is a restaurant and nightclub that provides outdoor
              relaxation with indoor gaming experience
            </p>
            <figure className={three ? style.resShow : style.resHide}>
              <img src={rebar1} alt="" />
              <img src={rebar2} alt="" />
              <img src={rebar3} alt="" />
              <img src={rebar4} alt="" />
            </figure>
            <nav onClick={handleFour} className={four ? style.pactive : ""}>
              <img src={redson_lounge} alt="" />
              <span>
                <b>Redson Lounge</b>
                <img src={stars} alt="" />
              </span>
              <img src={four ? invert : arrow} alt="" />
            </nav>
            <p className={four ? style.show : ""}>
              The Redson Lounge is a sports themed bar and betting centre with
              gaming ports and social centres
            </p>
            <figure className={four ? style.resShow : style.resHide}>
              <img src={redson1} alt="" />
              <img src={redson2} alt="" />
              <img src={rebar3} alt="" />
              <img src={redson4} alt="" />
            </figure>
            <button>
              See more projects <img src={exp} alt="" />
            </button>
          </div>
          <figure className={one ? style.projMain : style.projHide}>
            <img src={heaven1} alt="" />
            <img src={heaven2} alt="" />
            <img src={heaven3} alt="" />
            <img src={heaven4} alt="" />
          </figure>
          <figure className={two ? style.projMain : style.projHide}>
            <img src={playground1} alt="" />
            <img src={playground2} alt="" />
            <img src={playground3} alt="" />
            <img src={playground4} alt="" />
          </figure>
          <figure className={three ? style.projMain : style.projHide}>
            <img src={rebar1} alt="" />
            <img src={rebar2} alt="" />
            <img src={rebar3} alt="" />
            <img src={rebar4} alt="" />
          </figure>
          <figure className={four ? style.projMain : style.projHide}>
            <img src={redson1} alt="" />
            <img src={redson2} alt="" />
            <img src={redson3} alt="" />
            <img src={redson4} alt="" />
          </figure>
        </div>
      </section>
      <section className={style.feedbacks}>
        <h2>WHAT OUR CLIENTS THINK ABOUT OUR SERVICES</h2>
        <div className={style.feedback}>
          <nav>
            <div>
              <figure>
                <img src={heavens} alt="" />
              </figure>
              <span>
                <b>Heavens</b>
                <img src={stars} alt="" />
              </span>
            </div>
            <p>
              Their team worked patiently with us, paying attention to every
              little detail of our design project. They were always available to
              answer our enquiries and the job was beautifully executed. We
              still refer to them years later for resources, advice and strategy
              with anything that comes up.
            </p>
          </nav>
          <nav>
            <div>
              <figure>
                <img src={playground} alt="" />
              </figure>
              <span>
                <b>The Playground</b>
                <img src={stars} alt="" />
              </span>
            </div>
            <p>
              We had access to their vast network of professionals and
              contractors that helped our market research with useful
              information that helped us launch and attract new customers almost
              immediately.
            </p>
          </nav>
          <nav>
            <div>
              <figure>
                <img src={fruity} alt="" />
              </figure>
              <span>
                <b>Vital Fruity</b>
                <img src={stars} alt="" />
              </span>
            </div>
            <p>
              Our fruit bar was so functionally designed by Jefferson. We were
              worried about how to make such a concept work but they were able
              to get it done and collaborate with us without stress
            </p>
          </nav>
          <nav>
            <div>
              <figure>
                <img src={rebar} alt="" />
              </figure>
              <span>
                <b>Rebar</b>
                <img src={stars} alt="" />
              </span>
            </div>
            <p>
              The building of our lounge would have gone sideways if we did not
              have Jefferson Hospitality’s project management team to keep our
              workers and contractors in line. We were able to complete our
              project in record time!
            </p>
          </nav>
          <nav>
            <div>
              <figure>
                <img src={redson_lounge} alt="" />
              </figure>
              <span>
                <b>Redson Lounge</b>
                <img src={stars} alt="" />
              </span>
            </div>
            <p>
              Our franchise needed expert advice on how to expand and Jefferson
              gave us that advice plus the resources to do it. With the advice
              on franchising and the network of professionals we had access to,
              expanding was easy.
            </p>
          </nav>
          <nav>
            <div>
              <figure>
                <img src={eagle} alt="" />
              </figure>
              <span>
                <b>Eagle Plaza</b>
                <img src={stars} alt="" />
              </span>
            </div>
            <p>
              Our plaza needed a facelift and we got just that with the
              sophisticated designs to our plaza. It definitely attracted much
              attention from passersby.
            </p>
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
    </main>
  );
}


