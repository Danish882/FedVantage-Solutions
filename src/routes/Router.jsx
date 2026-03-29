import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

// Import Layout Components
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

// Import Page Components
import Home from "../pages/home.jsx";
import About from "../pages/about.jsx";
import Careers from "../pages/careers.jsx";
import Contact from "../pages/contact.jsx";
import Industries from "../pages/industries.jsx";
import Services from "../pages/Services.jsx";
import CaseStudies from "../pages/CaseStudies.jsx";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/casestudies" element={<CaseStudies />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="*"
          element={
            <h1 className="pt-32 text-center text-4xl text-red-600">
              404 - Page Not Found
            </h1>
          }
        />
      </Route>
    </Routes>
  );
};

export default Router;
