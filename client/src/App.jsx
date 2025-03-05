// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Header from './components/Header';
import Home from './pages/Home';
import WhatWeDo from './pages/programs/WhatWeDo';
import TechnologyAndInnovation from './pages/programs/Technology'
import CreativesDepartment from './pages/programs/Creatives';
import GetInvolved from './pages/GetInvolved';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="what-we-do" element={<WhatWeDo />} />
          <Route path="/technology-and-innovation" element={<TechnologyAndInnovation />} />
          <Route path="/creatives-and-arts" element={<CreativesDepartment />} /> 
          <Route path="get-involved" element={<GetInvolved />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
