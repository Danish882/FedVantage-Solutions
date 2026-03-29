import React from "react";
import { Link } from "react-router-dom";
import { Shield, Globe, MapPin, Phone, Mail, ChevronRight } from "lucide-react";

/**
 * Enhanced Footer Component with Purple/Orange Theme
 */
const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#3A1078] via-[#4E31AA] to-[#3A1078] pt-10 pb-12 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FEA405]/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4E31AA]/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#3A1078]/20 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full animate-grid-slide"
          style={{
            backgroundImage:
              "linear-gradient(rgba(254,164,5,.15) 2px, transparent 2px), linear-gradient(90deg, rgba(254,164,5,.15) 2px, transparent 2px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#FEA405]/40 rounded-full animate-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-0 right-0 text-[#4E31AA]/20 opacity-30 font-bold text-[10rem] leading-none -mb-10 -mr-10 select-none pointer-events-none animate-pulse-slow">
        FED
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12">
          {/* Brand Column */}
          <div className="space-y-6 animate-fade-in-up animation-delay-200">
            <div className="flex items-center space-x-2 group">
              <div className="bg-[#FEA405]/20 p-2 rounded transform transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-[#FEA405]/50">
                <Shield className="text-[#FEA405] w-6 h-6 animate-icon-pulse" />
              </div>
              <span className="text-2xl font-bold text-white hover:text-[#FEA405] transition-colors duration-300">
                FED<span className="text-[#FEA405]">VANTAGE</span>
              </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed hover:text-white transition-colors duration-300">
              FedVantage Solutions delivers secure, reliable, and scalable IT
              services to government and enterprise clients. We specialize in
              managed IT, cybersecurity, cloud, staffing, and hardware solutions
              that drive mission success and digital transformation.
            </p>
            <div className="flex space-x-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FEA405] hover:text-white transition-all duration-500 cursor-pointer border border-white/20 hover:border-[#FEA405] transform hover:scale-125 hover:-translate-y-3 hover:rotate-12 hover:shadow-xl hover:shadow-[#FEA405]/50 animate-bounce-subtle"
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                  <Globe size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up animation-delay-400">
            <h3 className="text-white font-bold mb-6 text-lg border-l-4 border-[#FEA405] pl-3 hover:border-white transition-colors duration-300 animate-slide-in-left">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm text-white/80">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Careers", path: "/careers" },
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-[#FEA405] cursor-pointer transition-all duration-300 flex items-center group hover:translate-x-4 animate-slide-in-sequence"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <ChevronRight
                    size={14}
                    className="mr-2 group-hover:text-[#FEA405] transition-all duration-300 group-hover:translate-x-2 group-hover:scale-125"
                  />
                  <Link to={item.path} className="hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div className="animate-fade-in-up animation-delay-600">
            <h3 className="text-white font-bold mb-6 text-lg border-l-4 border-[#4E31AA] pl-3 hover:border-[#FEA405] transition-colors duration-300 animate-slide-in-left">
              Capabilities
            </h3>
            <ul className="space-y-4 text-sm text-white/80">
              {[
                "Managed IT Services",
                "Cybersecurity & Compliance",
                "Cloud Migration",
                "IT Staffing Solutions",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-white cursor-pointer transition-all duration-300 hover:translate-x-3 animate-slide-in-sequence"
                  style={{ animationDelay: `${i * 100 + 200}ms` }}
                >
                  <Link to="/services" className="hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in-up animation-delay-800">
            <h3 className="text-white font-bold mb-6 text-lg border-l-4 border-white pl-3 hover:border-[#FEA405] transition-colors duration-300 animate-slide-in-left">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start group hover:text-white transition-colors duration-300">
                <MapPin
                  size={18}
                  className="mr-3 mt-0.5 text-[#FEA405] flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-icon-bounce"
                />
                <span>
                  123 Federal Plaza, Suite 400
                  <br />
                  Washington, DC 20001
                </span>
              </li>
              <li className="flex items-center group hover:text-white transition-colors duration-300">
                <Phone
                  size={18}
                  className="mr-3 text-[#FEA405] flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-icon-bounce animation-delay-200"
                />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center group hover:text-white transition-colors duration-300">
                <Mail
                  size={18}
                  className="mr-3 text-[#FEA405] flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-icon-bounce animation-delay-400"
                />
                <span>info@fedvantage.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/60 font-medium animate-fade-in">
          <p>&copy; 2024 FedVantage Solutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map(
              (item, i) => (
                <span
                  key={i}
                  className="hover:text-white cursor-pointer transition-all duration-300 hover:scale-110 transform hover:-translate-y-1 animate-fade-in-scale"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        <div className="text-center mt-8 text-[10px] text-[#FEA405] uppercase tracking-widest animate-text-glow">
          Empowering Federal and Enterprise Success Through Smart IT Solutions
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(30px, -30px) scale(1.1);
          }
          50% {
            transform: translate(-30px, 30px) scale(0.9);
          }
          75% {
            transform: translate(30px, 30px) scale(1.05);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-25px, 25px) scale(1.08);
          }
          66% {
            transform: translate(25px, -20px) scale(0.95);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.05);
          }
        }

        @keyframes grid-slide {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(60px) translateX(60px);
          }
        }

        @keyframes particle-float {
          0% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(1);
            opacity: 0;
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-sequence {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes glow-pulse {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(254, 164, 5, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(254, 164, 5, 0.6);
          }
        }

        @keyframes icon-pulse {
          0%,
          100% {
            filter: drop-shadow(0 0 2px rgba(254, 164, 5, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 8px rgba(254, 164, 5, 1));
          }
        }

        @keyframes icon-bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes text-glow {
          0%,
          100% {
            text-shadow: 0 0 10px rgba(254, 164, 5, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(254, 164, 5, 0.8);
          }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 6s ease-in-out infinite;
        }
        .animate-grid-slide {
          animation: grid-slide 25s linear infinite;
        }
        .animate-particle-float {
          animation: particle-float linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }
        .animate-slide-in-sequence {
          animation: slide-in-sequence 0.6s ease-out forwards;
        }
        .animate-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }
        .animate-icon-pulse {
          animation: icon-pulse 2s ease-in-out infinite;
        }
        .animate-icon-bounce {
          animation: icon-bounce 2s ease-in-out infinite;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.6s ease-out forwards;
        }
        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        .animation-delay-800 {
          animation-delay: 800ms;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
