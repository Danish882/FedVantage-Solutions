import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

// Import Layout Components
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';

// Import Page Components
import Home from '../pages/home.jsx';
import About from '../pages/About.jsx';
import Services from '../pages/Services.jsx';
import Industries from '../pages/Industries.jsx';
import CaseStudy from '../pages/CaseStudies.jsx';
import Careers from '../pages/careers.jsx';
import Contact from '../pages/contact.jsx';

/**
 * Layout Component
 * Wraps all pages with the persistent Navbar and Footer.
 */
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        {/* The Outlet renders the current matching Route component */}
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

/**
 * Main Router Component
 * Defines all application routes.
 */
const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/CaseStudies" element={<CaseStudy />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Fallback 404 Route */}
        <Route path="*" element={<h1 className="pt-32 text-center text-4xl text-red-600">404 - Page Not Found</h1>} />
      </Route>
    </Routes>
  );
};

export default Router;