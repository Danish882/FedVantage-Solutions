import React, { useState, useEffect, useRef } from "react";

import {
  Shield,
  Server,
  Users,
  Cloud,
  Lock,
  Cpu,
  ArrowRight,
  CheckCircle,
  Briefcase,
  ArrowUpRight,
  Zap,
  Globe,
  Layers,
  TrendingUp,
  Award,
  Target,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Star,
  Quote,
  Users2,
  Code,
  Database,
  BarChart3,
  Lightbulb,
  Brain,
  Handshake,
  Crown,
  Network,
  MessageSquare,
} from "lucide-react";

const Home = () => {
  const [activeCapability, setActiveCapability] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const consultancyRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToConsultancy = () => {
    consultancyRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const goToServices = () => {
    window.location.href = "/services";
  };

  const coreCapabilities = [
    {
      icon: Server,
      title: "Managed IT & Infrastructure",
      desc: "24/7 system monitoring and optimization for peak performance.",
    },
    {
      icon: Lock,
      title: "Cybersecurity & Compliance",
      desc: "Advanced threat detection with FISMA/NIST compliance.",
    },
    {
      icon: Cloud,
      title: "Cloud Transformation",
      desc: "Seamless AWS, Azure, and hybrid cloud migration.",
    },
    {
      icon: Cpu,
      title: "Software Development",
      desc: "Custom applications and legacy system modernization.",
    },
    {
      icon: Users,
      title: "IT Staffing Solutions",
      desc: "Top-tier professionals with security clearances.",
    },
    {
      icon: Briefcase,
      title: "Hardware Networking",
      desc: "Enterprise-grade equipment and secure provisioning.",
    },
  ];

  const whyFedVantage = [
    {
      title: "Government-Ready",
      icon: Shield,
      desc: "Deep federal compliance expertise",
    },
    { title: "Scalable", icon: Layers, desc: "Growth-focused infrastructure" },
    { title: "24/7 Support", icon: Zap, desc: "Always-on monitoring" },
    { title: "Innovation", icon: Globe, desc: "Cutting-edge technology" },
    { title: "Nationwide", icon: ArrowUpRight, desc: "Complete U.S. coverage" },
  ];

  const stats = [
    { value: "500+", label: "Clients" },
    { value: "99.9", label: "Uptime", suffix: "%" },
    { value: "24", label: "Support", suffix: "/7" },
  ];

  const testimonials = [
    {
      quote:
        "FedVantage transformed our legacy systems into a secure, scalable cloud environment. Their expertise in federal compliance was unmatched.",
      author: "Dr. Elena Vasquez",
      role: "CTO, Department of Defense",
      avatar: "E.V.",
    },
    {
      quote:
        "Their rapid response and 24/7 support have been game-changers for our mission-critical operations.",
      author: "Michael Chen",
      role: "IT Director, HHS",
      avatar: "M.C.",
    },
    {
      quote:
        "The staffing solutions provided cleared professionals who integrated seamlessly into our team.",
      author: "Sarah Rodriguez",
      role: "VP Operations, USAID",
      avatar: "S.R.",
    },
  ];

  const processSteps = [
    {
      icon: Target,
      title: "Discovery Planning",
      desc: "In-depth assessment and strategic roadmap development.",
    },
    {
      icon: Code,
      title: "Implementation",
      desc: "Seamless deployment with minimal disruption.",
    },
    {
      icon: Database,
      title: "Optimization",
      desc: "Performance tuning and continuous improvement.",
    },
    {
      icon: BarChart3,
      title: "Ongoing Support",
      desc: "24/7 monitoring and proactive maintenance.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden font-sans">
      {/* Dynamic Cursor Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-50 transition-transform duration-300"
        style={{
          background: `radial-gradient(700px at ${mousePosition.x}px ${mousePosition.y}px, rgba(254, 164, 5, 0.15), transparent 80%)`,
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#FEA405]/20 to-transparent rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-tr from-[#4E31AA]/20 to-transparent rounded-full blur-3xl animate-float-slow delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-[#3A1078]/10 to-[#FEA405]/10 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="relative z-10 text-center pt-2 max-w-5xl mx-auto">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#3A1078]/10 to-[#4E31AA]/10 border border-[#4E31AA]/30 mb-8 shadow-lg">
              <Shield className="w-5 h-5 text-[#FEA405]" />
              <span className="text-sm font-bold tracking-wider text-[#3A1078]">
                TRUSTED BY 500+ FEDERAL AGENCIES
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6 animate-fade-up animation-delay-200">
            <span className="block bg-gradient-to-r from-[#3A1078] via-[#4E31AA] to-[#3A1078] bg-clip-text text-transparent">
              Federal-Grade IT
            </span>
            <span className="block mt-2">
              <span className="bg-gradient-to-r from-[#FEA405] to-[#ffb022] bg-clip-text text-transparent drop-shadow-lg">
                Powered by Excellence
              </span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-up animation-delay-400">
            Mission-critical technology solutions with unwavering security,
            compliance, and innovation — built for America's most important
            institutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-up animation-delay-600">
            <button
              onClick={scrollToConsultancy}
              className="group relative px-10 py-5 bg-gradient-to-r from-[#3A1078] to-[#4E31AA] text-white font-bold rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-3">
                Request Consultation
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FEA405] to-[#ffb022] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>

            <button
              onClick={goToServices}
              className="px-10 py-5 border-2 border-[#4E31AA] text-[#3A1078] font-bold rounded-2xl hover:bg-[#4E31AA] hover:text-white transition-all duration-500"
            >
              Explore Services
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-24 animate-fade-up animation-delay-800">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-6xl font-black bg-gradient-to-b from-[#3A1078] to-[#4E31AA] bg-clip-text text-transparent">
                  {stat.value}
                  {stat.suffix || ""}
                </div>
                <div className="text-gray-600 font-medium mt-2 uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#FEA405] to-transparent mx-auto mt-3 transition-all duration-700 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-32 px-6 bg-gradient-to-b from-white via-[#f8f4ff] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-[#3A1078] to-[#4E31AA] bg-clip-text text-transparent">
                Core Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end solutions engineered for federal excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreCapabilities.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => setActiveCapability(i)}
                onMouseLeave={() => setActiveCapability(null)}
                className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:-translate-y-6 hover:shadow-2xl transition-all duration-700 border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#3A1078]/5 via-transparent to-[#FEA405]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="p-10 relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center shadow-lg transition-all duration-500 ${
                      activeCapability === i
                        ? "bg-gradient-to-br from-[#FEA405] to-[#ffb022] scale-110"
                        : "bg-gradient-to-br from-[#3A1078] to-[#4E31AA]"
                    }`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#3A1078] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-[#FEA405] font-bold group-hover:gap-4 transition-all">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FEA405] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            Why <span className="text-[#FEA405]">FedVantage</span> Stands Apart
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-16">
            {whyFedVantage.map((item, i) => (
              <div key={i} className="group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#3A1078] to-[#4E31AA] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-bold text-[#3A1078]">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#f8f4ff] to-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cg%20fill='none'%20fill-rule='evenodd'%3E%3Cg%20fill='%23FEA405'%20fill-opacity='0.03'%3E%3Ccircle%20cx='30'%20cy='30'%20r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-[#3A1078] to-[#4E31AA] bg-clip-text text-transparent">
                Voices of Trust
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What our federal partners say about working with FedVantage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`relative bg-white rounded-3xl p-8 shadow-xl transition-all duration-700 cursor-pointer ${
                  activeTestimonial === i
                    ? "scale-105 shadow-2xl border border-[#FEA405]/30"
                    : "hover:scale-105"
                }`}
              >
                <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-[#FEA405] to-[#ffb022] rounded-2xl flex items-center justify-center text-[#3A1078] font-bold text-xl">
                  {t.avatar}
                </div>
                <Quote className="w-12 h-12 text-[#FEA405] mb-6" />
                <p className="text-gray-600 leading-relaxed italic mb-8 text-lg">
                  "{t.quote}"
                </p>
                <div>
                  <h4 className="font-bold text-[#3A1078]">{t.author}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-[#3A1078] to-[#4E31AA] bg-clip-text text-transparent">
                Our Proven Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From vision to victory: How we deliver federal-grade results
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-32 w-1 bg-gradient-to-b from-[#FEA405] to-[#3A1078] h-96 opacity-20 hidden md:block" />

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <div key={i} className="relative group">
                  <div className="w-full p-8 rounded-3xl bg-gradient-to-b from-white to-[#f8f4ff] shadow-lg border border-[#4E31AA]/20 transition-all duration-700 group-hover:shadow-xl group-hover:-translate-y-4">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#3A1078] to-[#4E31AA] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#3A1078] mb-4 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center">{step.desc}</p>
                  </div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#FEA405] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Passion in Consultancy */}
      <section
        ref={consultancyRef}
        className="py-32 px-6 bg-gradient-to-b from-[#f8f9ff] to-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#4E31AA] font-bold text-sm tracking-widest mb-4">
              — A Better Tomorrow —
            </p>
            <h2 className="text-6xl md:text-7xl font-black mb-8">
              <span className="text-[#FEA405]">Passion</span>{" "}
              <span className="text-[#3A1078]">In Consultancy</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Seamlessly visualize quality intellectual capital without superior
              collaboration and idea-sharing. Holistically pontificate installed
              base portals after maintainable products.
            </p>
          </div>

          {/* First Row - 3 Cards */}
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {[
              {
                icon: Handshake,
                title: "People",
                desc: "Engage worldwide methodologies with web-enabled technology via process-centric outside the box thinking.",
                color: "from-[#3A1078] to-[#4E31AA]",
              },
              {
                icon: Crown,
                title: "Leadership",
                desc: "Seize scalable metrics proactive e-services and seamlessly empower fully researched growth strategies.",
                color: "from-[#4E31AA] to-[#6D28D9]",
              },
              {
                icon: Users2,
                title: "Team Building",
                desc: "Seamlessly empower fully researched growth strategies and interoperable internal or organic sources.",
                color: "from-[#6D28D9] to-[#7C3AED]",
              },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div
                  className={`w-28 h-28 mx-auto mb-8 rounded-3xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500`}
                >
                  <item.icon className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-3xl font-black text-[#3A1078] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed px-4">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Second Row - 2 Cards + Signature Card */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="text-center group">
              <div className="w-28 h-28 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-[#7C3AED] to-[#8B5CF6] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500">
                <Network className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-3xl font-black text-[#3A1078] mb-4">
                Networking
              </h3>
              <p className="text-gray-600 leading-relaxed px-4">
                Keeping your eye on the ball while performing a deep dive on the
                start-up mentality to derive convergence.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-28 h-28 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500">
                <MessageSquare className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-3xl font-black text-[#3A1078] mb-4">
                Communication
              </h3>
              <p className="text-gray-600 leading-relaxed px-4">
                Seamlessly underwhelm optimal testing procedures whereas
                bricks-and-clicks processes and enabled data.
              </p>
            </div>

            {/* Signature Card - NOW WITH HANDWRITTEN SVG SIGNATURE */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 border-t-8 border-[#FEA405] transform hover:scale-105 transition-all duration-700">
              <h3 className="text-2xl md:text-3xl font-black text-[#FEA405] mb-6 leading-tight">
                FEDVANTAGE specializes in delivering top-tier products and
                services,
              </h3>
              <p className="text-xl font-bold text-[#3A1078] mb-8">
                tailored to meet the highest standards and unique requirements
                of government
              </p>

              {/* BEAUTIFUL HANDWRITTEN SVG SIGNATURE */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FEA405]/20 to-transparent rounded-3xl blur-2xl" />
                <svg
                  viewBox="0 0 400 120"
                  className="w-full h-32 relative z-10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30 80 Q 50 40 Q 70 20, 100 50 T 150 60 Q 180 70, 210 50 T 260 70 Q 290 80, 320 60 T 370 80"
                    stroke="#3A1078"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M40 85 Q 80 45, 120 70 T 180 60 Q 220 55, 260 75 T 320 65 Q 350 60, 380 85"
                    stroke="#FEA405"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.9"
                  />
                  <text
                    x="60"
                    y="100"
                    fontSize="36"
                    fontWeight="bold"
                    fill="#3A1078"
                    fontFamily="cursive, 'Brush Script MT', 'Lucida Handwriting', sans-serif"
                    letterSpacing="2"
                  >
                    James Parker
                  </text>
                  <path
                    d="M60 105 Q 120 95, 180 110 T 300 100"
                    stroke="#FEA405"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <p className="text-gray-700 font-semibold mt-6">James Parker</p>
              <p className="text-gray-500">Chief Executive Officer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-gradient-to-r from-[#3A1078] to-[#4E31AA] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cg%20fill='none'%20fill-rule='evenodd'%3E%3Cg%20fill='%23FEA405'%20fill-opacity='0.05'%3E%3Ccircle%20cx='30'%20cy='30'%20r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Ready to Secure Tomorrow's Mission Today?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Partner with America's most trusted federal IT provider.
          </p>
          <button
            onClick={scrollToConsultancy}
            className="px-12 py-6 bg-[#FEA405] hover:bg-[#ffb022] text-[#3A1078] font-black text-xl rounded-2xl shadow-2xl transform hover:scale-110 hover:-translate-y-2 transition-all duration-500"
          >
            Schedule Your Free Consultation
          </button>
        </div>
      </section>

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(5deg);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        .animate-fade-up {
          animation: fade-up 1s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
