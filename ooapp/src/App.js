import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/header';
import Home from './components/home/home';
import Courses from './components/pages/courses/courses';
import About from './components/pages/about/about';
import Team from './components/pages/team/team';
import Pricing from './components/pages/pricing/pricing';
import Journal from './components/pages/journal/journal';
import Contact from './components/pages/contact/contact';
import Footer from './components/common/footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/team" element={<Team />} />
          <Route path="/pricing" element={<Pricing />} /> 
          <Route path="/journal" element={<Journal />} />
             <Route path="/contact" element={<Contact />} />

        </Routes>
    
      </BrowserRouter>
          <Footer />
    </>
  );
}

export default App;