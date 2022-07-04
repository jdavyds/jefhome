import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Careers from './components/Careers';
import Career from './components/Career';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Services from './components/Services';
import Service from './components/Service';
import Consultation from './components/Consultation';
import Brands from './components/Brands';
import Brand from './components/Brand';
import Deals from './components/Deals';
import Collections from './components/Collections';
import Collection from './components/Collection';
import Deal from './components/Deal';
import Trainings from './components/Trainings';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="careers" element={<Careers />} />
          <Route path="careers/:id" element={<Career />} />
          <Route path="awards" element={<Awards />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<Service />} />
          <Route path="request-consultation" element={<Consultation />} />
          <Route path="brands" element={<Brands />} />
          <Route path="brands/:id" element={<Brand />} />
          <Route path="deals" element={<Deals />} />
          <Route path="deals/:id" element={<Deal />} />
          <Route path="collections" element={<Collections />} />
          <Route path="collections/:id" element={<Collection />} />
          <Route path="trainings" element={<Trainings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
