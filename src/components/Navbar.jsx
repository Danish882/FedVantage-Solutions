import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Shield,
  Menu,
  X,
  Home,
  Info,
  Briefcase,
  Building2,
  FileText,
  Users,
  Mail,
  Search,
} from "lucide-react";

const navLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: Info },
  { name: "Services", path: "/services", icon: Briefcase },
  { name: "Industries", path: "/industries", icon: Building2 },
  { name: "Case Studies", path: "/CaseStudies", icon: FileText },
  { name: "Careers", path: "/careers", icon: Users },
  { name: "Contact", path: "/contact", icon: Mail },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();
  const activePath = location.pathname;
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);
  const searchableContent = [
    {
      title: "Home",
      path: "/",
      keywords: [
        "home",
        "main",
        "landing",
        "fedvantage",
        "professional solutions",
      ],
      description: "Welcome to FedVantage Professional Solutions",
    },
    {
      title: "About Us",
      path: "/about",
      keywords: ["about", "company", "team", "mission", "vision", "who we are"],
      description: "Learn about our company, mission, and values",
    },
    {
      title: "Our Services",
      path: "/services",
      keywords: [
        "services",
        "solutions",
        "offerings",
        "what we do",
        "consulting",
      ],
      description: "Explore our professional services and solutions",
    },
    {
      title: "Industries",
      path: "/industries",
      keywords: ["industries", "sectors", "markets", "verticals", "domains"],
      description: "Industries we serve and expertise areas",
    },
    {
      title: "Case Studies",
      path: "/CaseStudies",
      keywords: [
        "case studies",
        "projects",
        "success stories",
        "portfolio",
        "work",
      ],
      description: "View our successful projects and client stories",
    },
    {
      title: "Careers",
      path: "/careers",
      keywords: [
        "careers",
        "jobs",
        "opportunities",
        "hiring",
        "join us",
        "work with us",
      ],
      description: "Explore career opportunities at FedVantage",
    },
    {
      title: "Contact",
      path: "/contact",
      keywords: [
        "contact",
        "reach us",
        "get in touch",
        "email",
        "phone",
        "address",
      ],
      description: "Get in touch with our team",
    },
  ];
  // 4. Add this search handler function
  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filtered = searchableContent.filter((item) => {
      const searchLower = query.toLowerCase();
      return (
        item.title.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower) ||
        item.keywords.some((keyword) => keyword.includes(searchLower))
      );
    });

    setSearchResults(filtered);
  };

  // 5. Add this effect to close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSearchOpen && !event.target.closest(".search-container")) {
        setIsSearchOpen(false);
        setSearchQuery("");
        setSearchResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchOpen]);
  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed z-50 transition-all duration-700 left-0 right-0 flex justify-center ${
          isScrolled ? "top-2" : "top-5"
        }`}
      >
        <div
          className={`
            relative flex items-center justify-between 
            transition-all duration-700 ease-out
            backdrop-blur-xl border
            ${
              isScrolled
                ? "w-[96%] max-w-7xl bg-gradient-to-r from-[#3A1078]/95 via-[#4E31AA]/95 to-[#3A1078]/95 border-[#FEA405]/30 shadow-2xl shadow-[#FEA405]/20 py-3 px-6 rounded-2xl"
                : "w-[92%] max-w-7xl bg-gradient-to-r from-[#3A1078]/90 via-[#4E31AA]/90 to-[#3A1078]/90 border-white/10 shadow-xl py-4 px-8 rounded-3xl"
            }
          `}
          style={{
            boxShadow: isScrolled
              ? "0 20px 60px -15px rgba(254, 164, 5, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)"
              : "0 10px 40px -10px rgba(58, 16, 120, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
          }}
        >
          {/* Animated gradient border effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FEA405]/0 via-[#FEA405]/30 to-[#FEA405]/0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-border-wave" />

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#FEA405]/30 rounded-full animate-particle-drift"
                style={{
                  left: `${10 + i * 12}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="relative flex items-center space-x-3 cursor-pointer group z-10"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#FEA405] rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-all duration-500 animate-glow-pulse" />
              <div className="relative w-11 h-11 bg-gradient-to-br from-[#FEA405] via-[#FEA405] to-[#4E31AA] rounded-xl flex items-center justify-center transform group-hover:rotate-[360deg] group-hover:scale-125 transition-all duration-700 shadow-lg animate-logo-float">
                <Shield
                  className="text-white w-6 h-6 animate-shield-pulse"
                  strokeWidth={2.5}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#FEA405] transition-colors duration-300">
                FED
                <span className="text-[#FEA405] group-hover:text-white transition-colors duration-300">
                  VANTAGE
                </span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/50 font-semibold group-hover:text-[#FEA405]/70 transition-colors duration-300">
                Professional Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  relative px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-500 overflow-hidden group
                  ${
                    activePath === link.path
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }
                `}
              >
                {/* Active background */}
                {activePath === link.path && (
                  <span className="absolute inset-0 bg-gradient-to-r from-[#FEA405] to-[#4E31AA] rounded-xl shadow-lg shadow-[#FEA405]/40 animate-active-glow" />
                )}

                {/* Hover background */}
                <span
                  className={`absolute inset-0 bg-white/10 rounded-xl transition-all duration-500 ${
                    hoveredIndex === index && activePath !== link.path
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90"
                  }`}
                />

                {/* Shimmer effect on hover */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-[#FEA405]/30 to-transparent" />

                {/* Animated border on hover */}
                <span
                  className={`absolute inset-0 rounded-xl border-2 border-[#FEA405]/0 group-hover:border-[#FEA405]/50 transition-all duration-500 ${
                    hoveredIndex === index ? "animate-border-spin" : ""
                  }`}
                />

                <span className="relative z-10 flex items-center space-x-2 group-hover:scale-105 transition-transform duration-300">
                  <span>{link.name}</span>
                </span>
              </Link>
            ))}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="relative p-2.5 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-[#FEA405]/20 hover:border-[#FEA405]/60 transition-all duration-500 group overflow-hidden"
              aria-label="Search"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FEA405]/0 to-[#FEA405]/0 group-hover:from-[#FEA405]/40 group-hover:to-[#4E31AA]/40 transition-all duration-500"></div>
              <Search
                size={20}
                className="relative text-white group-hover:text-[#FEA405] transition-colors duration-300"
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative p-2.5 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-[#FEA405]/20 hover:border-[#FEA405]/60 transition-all duration-500 group overflow-hidden"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FEA405]/0 to-[#FEA405]/0 group-hover:from-[#FEA405]/20 group-hover:to-[#4E31AA]/20 transition-all duration-500"></div>
            <div className="relative w-6 h-6">
              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                  isMobileMenuOpen
                    ? "rotate-180 opacity-0 scale-0"
                    : "rotate-0 opacity-100 scale-100"
                }`}
              >
                <Menu
                  size={24}
                  className="group-hover:text-[#FEA405] transition-colors duration-300"
                />
              </span>
              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                  isMobileMenuOpen
                    ? "rotate-0 opacity-100 scale-100"
                    : "-rotate-180 opacity-0 scale-0"
                }`}
              >
                <X size={24} className="text-[#FEA405]" />
              </span>
            </div>
          </button>
        </div>
      </nav>
      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl z-50 search-container">
          <div className="bg-[#3A1078]/97 backdrop-blur-2xl border-2 border-[#FEA405]/50 rounded-2xl shadow-2xl shadow-[#4E31AA]/50 overflow-hidden">
            <div className="p-4 border-b border-white/10">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FEA405] w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search pages, services, and more..."
                  autoFocus
                  className="w-full pl-12 pr-4 py-3 bg-white/20 border border-[#FEA405]/50 rounded-xl text-#FEA405 placeholder-#4E31AA/70 focus:outline-none focus:border-[#FEA405] focus:bg-white/25 transition-all duration-300"
                />
              </div>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {searchQuery.trim() !== "" && searchResults.length === 0 ? (
                <div className="p-8 text-center text-#4E31AA">
                  <p className="text-lg">
                    No results found for "{searchQuery}"
                  </p>
                  <p className="text-sm mt-2">Try different keywords</p>
                </div>
              ) : searchResults.length > 0 ? (
                <div className="p-2">
                  {searchResults.map((result, index) => (
                    <Link
                      key={result.path}
                      to={result.path}
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSearchQuery("");
                        setSearchResults([]);
                      }}
                      className="block p-4 mb-2 rounded-xl bg-white/10 hover:bg-[#FEA405]/20 border border-[#4E31AA]/30 hover:border-[#FEA405] transition-all duration-300 group"
                      style={{
                        animation: `fadeInUp 0.3s ease-out ${
                          index * 0.05
                        }s forwards`,
                        opacity: 0,
                      }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="p-2 rounded-lg bg-[#FEA405]/20 group-hover:bg-[#FEA405]/30 transition-all duration-300">
                          <Search size={18} className="text-[#FEA405]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-#4E31AA font-semibold group-hover:text-[#FEA405] transition-colors duration-300">
                            {result.title}
                          </h3>
                          <p className="text-#4E31AA text-sm mt-1">
                            {result.description}
                          </p>
                          <span className="text-[#FEA405]/60 text-xs mt-2 inline-block">
                            {result.path}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-orange-400">
                  <Search size={48} className="mx-auto mb-4 opacity-30" />
                  <p className="text-lg">Start typing to search...</p>
                  <p className="text-sm mt-2">
                    Search for pages, services, and more
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-700 ${
          isMobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-[#3A1078]/90 backdrop-blur-md transition-opacity duration-700 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-[#3A1078] via-[#4E31AA] to-[#3A1078] border-l border-[#FEA405]/30 shadow-2xl transition-transform duration-700 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FEA405]/10 rounded-full blur-3xl animate-blob-slow"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4E31AA]/20 rounded-full blur-3xl animate-blob-delayed"></div>
          </div>

          {/* Sidebar Header */}
          <div className="relative p-6 border-b border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FEA405] to-[#4E31AA] rounded-lg flex items-center justify-center shadow-lg shadow-[#FEA405]/40 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 animate-logo-bounce">
                  <Shield className="text-white w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold text-white group-hover:text-[#FEA405] transition-colors duration-300">
                    FEDVANTAGE
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-white/50">
                    Menu
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-[#FEA405]/20 text-white/70 hover:text-[#FEA405] transition-all duration-300 transform hover:rotate-90 hover:scale-110"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Sidebar Navigation */}
          <div className="relative p-4 space-y-2 overflow-y-auto h-[calc(100vh-120px)]">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive = activePath === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    group relative flex items-center space-x-4 px-5 py-4 rounded-xl transition-all duration-500 overflow-hidden
                    ${
                      isActive
                        ? "bg-gradient-to-r from-[#FEA405] to-[#4E31AA] text-white shadow-lg shadow-[#FEA405]/40"
                        : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                    }
                  `}
                  style={{
                    animation: isMobileMenuOpen
                      ? `slideInRight 0.5s ease-out ${index * 0.1}s forwards`
                      : "none",
                    opacity: isMobileMenuOpen ? 1 : 0,
                  }}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full shadow-lg shadow-white/50 animate-indicator-pulse" />
                  )}

                  {/* Icon */}
                  <div
                    className={`relative p-2 rounded-lg transition-all duration-500 ${
                      isActive
                        ? "bg-white/20 animate-icon-bounce"
                        : "bg-white/10 group-hover:bg-[#FEA405]/30 group-hover:scale-110 group-hover:rotate-6"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={
                        isActive
                          ? "text-white"
                          : "text-white/70 group-hover:text-[#FEA405]"
                      }
                    />
                  </div>

                  {/* Text */}
                  <span className="text-base font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    {link.name}
                  </span>

                  {/* Hover shimmer */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  {/* Particle effect */}
                  {!isActive && (
                    <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="w-1 h-1 bg-[#FEA405] rounded-full inline-block animate-particle-pop"></span>
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Sidebar Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="text-center text-xs text-white/50 animate-fade-in-up">
              <p className="font-semibold">© 2024 FedVantage</p>
              <p className="mt-1">Professional Solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes border-wave {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes particle-drift {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-40px) translateX(-10px);
            opacity: 0;
          }
        }

        @keyframes glow-pulse {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes logo-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes shield-pulse {
          0%,
          100% {
            filter: drop-shadow(0 0 2px rgba(254, 164, 5, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 8px rgba(254, 164, 5, 1));
          }
        }

        @keyframes active-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(254, 164, 5, 0.4);
          }
          50% {
            box-shadow: 0 0 30px rgba(254, 164, 5, 0.6);
          }
        }

        @keyframes border-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes blob-slow {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes blob-delayed {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-30px, 30px) scale(1.1);
          }
          66% {
            transform: translate(20px, -20px) scale(0.9);
          }
        }

        @keyframes logo-bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes indicator-pulse {
          0%,
          100% {
            opacity: 1;
            height: 2rem;
          }
          50% {
            opacity: 0.7;
            height: 2.5rem;
          }
        }

        @keyframes icon-bounce {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes particle-pop {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(2);
            opacity: 1;
          }
          100% {
            transform: scale(0);
            opacity: 0;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-border-wave {
          animation: border-wave 3s ease-in-out infinite;
        }
        .animate-particle-drift {
          animation: particle-drift linear infinite;
        }
        .animate-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }
        .animate-logo-float {
          animation: logo-float 3s ease-in-out infinite;
        }
        .animate-shield-pulse {
          animation: shield-pulse 2s ease-in-out infinite;
        }
        .animate-active-glow {
          animation: active-glow 2s ease-in-out infinite;
        }
        .animate-border-spin {
          animation: border-spin 8s linear infinite;
        }
        .animate-blob-slow {
          animation: blob-slow 8s ease-in-out infinite;
        }
        .animate-blob-delayed {
          animation: blob-delayed 10s ease-in-out infinite;
        }
        .animate-logo-bounce {
          animation: logo-bounce 2s ease-in-out infinite;
        }
        .animate-indicator-pulse {
          animation: indicator-pulse 2s ease-in-out infinite;
        }
        .animate-icon-bounce {
          animation: icon-bounce 2s ease-in-out infinite;
        }
        .animate-particle-pop {
          animation: particle-pop 1s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
