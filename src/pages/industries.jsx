import React, { useState, useEffect } from "react";
import {
  Shield,
  Users,
  Heart,
  GraduationCap,
  DollarSign,
  Building2,
  Check,
  ArrowRight,
  Lock,
  Cloud,
  Zap,
} from "lucide-react";

const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const industries = [
    {
      icon: Shield,
      title: "Federal & Local Government",
      description:
        "Delivering secure, compliant, and mission-ready IT infrastructure aligned with federal standards such as NIST, FISMA, and DFARS.",
      features: [
        "NIST Compliant",
        "FISMA Aligned",
        "DFARS Ready",
        "Mission-Critical Support",
      ],
      color: "purple",
      gradient: "from-purple-500/20 to-indigo-500/20",
      details:
        "Our Federal & Local Government solutions are designed to meet the most stringent compliance requirements. We specialize in implementing NIST frameworks, FISMA standards, and DFARS protocols to ensure your infrastructure meets all federal mandates. With 24/7 mission-critical support, we keep your government operations running smoothly.",
    },
    {
      icon: Users,
      title: "Veterans & Small Business",
      description:
        "Helping veteran-owned and small enterprises modernize their IT capabilities and compete in today's digital marketplace.",
      features: [
        "IT Modernization",
        "Competitive Edge",
        "Scalable Solutions",
        "Growth Support",
      ],
      color: "orange",
      gradient: "from-orange-500/20 to-amber-500/20",
      details:
        "We empower veteran-owned and small businesses with cutting-edge IT solutions that level the playing field. Our services include cloud migration, cybersecurity implementation, and scalable infrastructure that grows with your business. Get the competitive advantage you need to succeed.",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description:
        "Ensuring patient data protection, HIPAA compliance, and reliable IT infrastructure for healthcare organizations.",
      features: [
        "HIPAA Compliant",
        "Data Protection",
        "Reliable Infrastructure",
        "Patient Privacy",
      ],
      color: "purple",
      gradient: "from-purple-600/20 to-pink-500/20",
      details:
        "Healthcare requires unwavering reliability and compliance. Our solutions ensure HIPAA compliance, secure patient data handling, and 99.9% uptime. We understand the critical nature of healthcare IT and provide infrastructure that you can trust with sensitive patient information.",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "Building smart, secure IT environments that enhance digital learning, research, and collaboration.",
      features: [
        "Digital Learning",
        "Research Support",
        "Collaboration Tools",
        "Secure Networks",
      ],
      color: "indigo",
      gradient: "from-indigo-500/20 to-purple-500/20",
      details:
        "Transform your educational institution with modern IT infrastructure. We support digital learning platforms, research initiatives, and collaborative tools that enhance the academic experience. Our secure networks protect student data while enabling seamless connectivity across campuses.",
    },
    {
      icon: DollarSign,
      title: "Finance",
      description:
        "Implementing high-performance, secure systems that protect data and support complex financial operations.",
      features: [
        "High Performance",
        "Data Security",
        "Compliance Ready",
        "Risk Management",
      ],
      color: "orange",
      gradient: "from-orange-400/20 to-yellow-500/20",
      details:
        "Financial institutions demand the highest levels of security and performance. Our solutions provide enterprise-grade encryption, PCI compliance, and high-availability systems that can handle complex financial operations. Protect your assets and maintain regulatory compliance with confidence.",
    },
  ];

  const stats = [
    { value: "100+", label: "Government Projects", icon: Building2 },
    { value: "99.9%", label: "Uptime Guarantee", icon: Zap },
    { value: "24/7", label: "Support Available", icon: Shield },
    { value: "500+", label: "Clients Served", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Modal for Industry Details */}
      {selectedIndustry !== null && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in-modal">
          <div className="bg-white rounded-3xl border-2 border-purple-200 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-bounce-in">
            <div className="relative">
              <button
                onClick={() => setSelectedIndustry(null)}
                className="absolute top-6 right-6 text-slate-500 hover:text-purple-600 transition-all duration-300 z-10 bg-purple-50 hover:bg-purple-100 rounded-full p-2 hover:rotate-90"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  {React.createElement(industries[selectedIndustry].icon, {
                    className: `w-12 h-12 text-${industries[selectedIndustry].color}-600 flex-shrink-0 animate-bounce-gentle`,
                  })}
                  <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent mb-2">
                      {industries[selectedIndustry].title}
                    </h2>
                    <p className="text-slate-600">
                      {industries[selectedIndustry].description}
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 mb-6 border border-purple-200 shadow-lg">
                  <h3 className="text-lg font-semibold text-purple-700 mb-3">
                    Detailed Overview
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-sm">
                    {industries[selectedIndustry].details}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-purple-700 mb-4">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {industries[selectedIndustry].features.map(
                      (feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200 hover:border-orange-400 hover:shadow-md transition-all duration-300 hover:scale-105"
                        >
                          <Check className="w-5 h-5 text-orange-500 flex-shrink-0 animate-check-pop" />
                          <span className="text-sm text-slate-700">
                            {feature}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedIndustry(null)}
                  className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-100 via-white to-orange-50"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl animate-float-slow-reverse"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-indigo-100 border-2 border-purple-300 rounded-full px-4 py-2 mb-6 animate-wiggle text-sm shadow-lg">
              <Shield className="w-4 h-4 text-purple-600 animate-pulse-scale" />
              <span className="text-sm text-purple-800 font-semibold">
                Trusted Across Industries
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent animate-slide-in-up">
              Industries We Serve
            </h1>

            <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed animate-slide-in-up delay-200">
              FedVantage Solutions delivers IT, cybersecurity, and cloud
              services for government, veterans, small business, healthcare,
              education, and finance sectors.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-200 hover:border-orange-400 transition-all duration-500 hover:scale-110 hover:-translate-y-2 animate-slide-in-up shadow-lg hover:shadow-2xl overflow-hidden"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100/0 to-orange-100/0 group-hover:from-purple-100/80 group-hover:to-orange-100/80 rounded-2xl transition-all duration-500"></div>

                  {/* Rotating border effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 via-orange-400 to-purple-400 animate-spin-slow opacity-50 blur-sm"></div>
                  </div>

                  {/* Sparkle effects */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div
                      className="absolute w-2 h-2 bg-purple-400 rounded-full animate-sparkle-1"
                      style={{ top: "20%", left: "20%" }}
                    ></div>
                    <div
                      className="absolute w-2 h-2 bg-orange-400 rounded-full animate-sparkle-2"
                      style={{ top: "70%", left: "70%" }}
                    ></div>
                    <div
                      className="absolute w-1.5 h-1.5 bg-indigo-400 rounded-full animate-sparkle-3"
                      style={{ top: "40%", left: "80%" }}
                    ></div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex flex-col items-center mb-3">
                      <Icon className="w-8 h-8 text-purple-600 group-hover:text-orange-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-pulse-scale mb-3" />
                      <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-orange-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-sm text-slate-600 group-hover:text-slate-800 font-medium transition-colors duration-300 text-center">
                      {stat.label}
                    </div>
                  </div>

                  {/* Bottom accent wave */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-wave"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4 relative bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => {
              const Icon = industry.icon;
              return (
                <div
                  key={idx}
                  id={`industry-${idx}`}
                  data-animate
                  className={`group relative bg-white backdrop-blur-sm rounded-3xl p-8 border-2 border-purple-200 hover:border-orange-400 transition-all duration-700 hover:scale-105 hover:-translate-y-3 cursor-pointer shadow-xl hover:shadow-2xl ${
                    isVisible[`industry-${idx}`]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }`}
                  style={{
                    transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transitionDelay: `${idx * 150}ms`,
                  }}
                  onMouseEnter={() => setActiveIndustry(idx)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 border-2 border-purple-300 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
                      >
                        <Icon
                          className={`w-8 h-8 text-${industry.color}-600 group-hover:animate-bounce-gentle`}
                        />
                      </div>
                      <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-orange-500 group-hover:translate-x-2 transition-all duration-300 animate-pulse-gentle" />
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-purple-700 transition-colors duration-300">
                      {industry.title}
                    </h3>

                    <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                      {industry.description}
                    </p>

                    <div className="space-y-3">
                      {industry.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-3 group/feature"
                        >
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 border-2 border-orange-300 flex items-center justify-center group-hover/feature:scale-110 group-hover/feature:rotate-12 transition-all duration-300 shadow-sm">
                            <Check className="w-3.5 h-3.5 text-orange-600" />
                          </div>
                          <span className="text-sm text-slate-700 group-hover/feature:text-slate-900 font-medium transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t-2 border-purple-100">
                      <button
                        onClick={() => setSelectedIndustry(idx)}
                        className="text-purple-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all duration-300 hover:text-orange-500 cursor-pointer"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 animate-pulse-gentle" />
                      </button>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-3xl shadow-xl shadow-purple-500/0 group-hover:shadow-purple-500/30 transition-shadow duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative bg-gradient-to-br from-purple-50 via-white to-orange-50">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-100/30 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div
            id="cta-section"
            data-animate
            className={`bg-white backdrop-blur-xl rounded-3xl p-12 border-2 border-purple-200 hover:border-orange-400 transition-all duration-700 shadow-2xl hover:shadow-3xl ${
              isVisible["cta-section"]
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-orange-100 border-2 border-purple-300 rounded-full px-4 py-2 mb-6 animate-wiggle text-sm shadow-lg">
              <Lock className="w-4 h-4 text-purple-600 animate-pulse-scale" />
              <span className="text-sm text-purple-800 font-semibold">
                Secure & Compliant
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent">
              Ready to Transform Your Industry?
            </h2>

            <p className="text-lg text-slate-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              Partner with FedVantage Solutions for secure, compliant, and
              innovative IT solutions tailored to your sector's unique needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => (window.location.href = "/contact")}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-bold text-lg overflow-hidden hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 animate-pulse-gentle" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in-modal {
          from { 
            opacity: 0;
          }
          to { 
            opacity: 1;
          }
        }
        
        @keyframes scale-bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.97);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: translateX(0) rotate(0deg);
          }
          25% {
            transform: translateX(-5px) rotate(-3deg);
          }
          75% {
            transform: translateX(5px) rotate(3deg);
          }
        }

        @keyframes pulse-scale {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -30px) scale(1.1);
          }
        }

        @keyframes float-slow-reverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-30px, 30px) scale(1.1);
          }
        }

        @keyframes sparkle-1 {
          0%, 100% {
            transform: translate(0, 0) scale(0);
            opacity: 0;
          }
          25% {
            transform: translate(20px, -20px) scale(1.5);
            opacity: 1;
          }
          50% {
            transform: translate(0, -40px) scale(1);
            opacity: 0.6;
          }
          75% {
            transform: translate(-20px, -20px) scale(1.3);
            opacity: 0.8;
          }
        }

        @keyframes sparkle-2 {
          0%, 100% {
            transform: translate(0, 0) scale(0);
            opacity: 0;
          }
          33% {
            transform: translate(-25px, 25px) scale(1.4);
            opacity: 1;
          }
          66% {
            transform: translate(25px, 15px) scale(1.1);
            opacity: 0.7;
          }
        }

        @keyframes sparkle-3 {
          0%, 100% {
            transform: translate(0, 0) scale(0);
            opacity: 0;
          }
          50% {
            transform: translate(-30px, -15px) scale(1.6);
            opacity: 1;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: scaleX(0) translateX(-100%);
          }
          50% {
            transform: scaleX(1) translateX(0);
          }
        }

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-gentle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes check-pop {
          0% {
            transform: scale(0) rotate(-180deg);
          }
          50% {
            transform: scale(1.2) rotate(10deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }
        
        .animate-fade-in-modal {
          animation: fade-in-modal 0.3s ease-out forwards;
        }

        .animate-scale-bounce-in {
          animation: scale-bounce-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-slide-in-up {
          animation: slide-in-up 1s ease-out forwards;
        }

        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }

        .animate-pulse-scale {
          animation: pulse-scale 2s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-slow-reverse {
          animation: float-slow-reverse 8s ease-in-out infinite;
        }

        .animate-sparkle-1 {
          animation: sparkle-1 3s ease-in-out infinite;
        }

        .animate-sparkle-2 {
          animation: sparkle-2 2.5s ease-in-out infinite;
        }

        .animate-sparkle-3 {
          animation: sparkle-3 3.5s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 1.5s ease-in-out infinite;
        }

        .animate-pulse-gentle {
          animation: pulse-gentle 2s ease-in-out infinite;
        }

        .animate-check-pop {
          animation: check-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  );
};

export default Industries;
