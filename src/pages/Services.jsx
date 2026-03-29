import React, { useState, useEffect } from "react";
import {
  Server,
  Cloud,
  Shield,
  Code,
  Users,
  HardDrive,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Globe,
  Target,
  Zap,
  Award,
  TrendingUp,
  Lock as LockIcon,
} from "lucide-react";

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Safe Tailwind color mapping (fixes the error)
  const colorClasses = {
    "#3A1078": "bg-[#3A1078]",
    "#4E31AA": "bg-[#4E31AA]",
    "#FEA405": "bg-[#FEA405]",
  };

  const services = [
    {
      icon: Server,
      title: "Managed IT Services",
      description:
        "We take full responsibility for your IT environment — from daily operations to strategic optimization.",
      capabilities: [
        "24/7 system monitoring & maintenance",
        "Helpdesk & technical support",
        "Patch management & security updates",
        "Network & performance optimization",
        "SLA-based service delivery",
      ],
      benefits: [
        "Reduced downtime",
        "Predictable costs",
        "Improved system reliability",
      ],
      gradient: "from-[#3A1078] to-[#4E31AA]",
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      description:
        "Secure, scalable, and optimized infrastructure built for the modern enterprise.",
      capabilities: [
        "Cloud migration (AWS, Azure, GCP)",
        "Hybrid & on-premises environments",
        "Disaster recovery & backup solutions",
        "Infrastructure-as-Code & automation",
        "Cost optimization & governance",
      ],
      benefits: ["Scalability", "Resilience", "Cloud cost efficiency"],
      gradient: "from-[#4E31AA] to-[#FEA405]",
    },
    {
      icon: Shield,
      title: "Cybersecurity & Compliance",
      description:
        "Protecting your systems, data, and reputation with proactive security and compliance-first strategy.",
      capabilities: [
        "Risk & vulnerability assessment",
        "Network and endpoint protection",
        "Identity & access management",
        "Compliance audits (FISMA, NIST, HIPAA)",
        "Incident response & remediation",
      ],
      benefits: [
        "Regulatory compliance",
        "Risk reduction",
        "Operational continuity",
      ],
      gradient: "from-[#3A1078] to-[#FEA405]",
    },
    {
      icon: Code,
      title: "Software Development & Integration",
      description:
        "Modern, customized software that aligns with your goals and integrates seamlessly with existing systems.",
      capabilities: [
        "Custom web & mobile app development",
        "API & system integration",
        "Legacy modernization",
        "Automation & workflow optimization",
        "DevOps & continuous delivery",
      ],
      benefits: [
        "Seamless integration",
        "Process automation",
        "Modern technology stack",
      ],
      gradient: "from-[#4E31AA] to-[#3A1078]",
    },
    {
      icon: Users,
      title: "IT Staffing & Resource Augmentation",
      description:
        "Flexible workforce solutions that help you access top-tier IT professionals for short- or long-term projects.",
      capabilities: [
        "IT staff augmentation (contract, contract-to-hire, permanent)",
        "Project-based staffing",
        "Federal and private contracting support",
        "Certified, cleared technical professionals",
      ],
      benefits: [
        "Cost efficiency",
        "Workforce flexibility",
        "Reduced hiring time",
      ],
      gradient: "from-[#FEA405] to-[#3A1078]",
    },
    {
      icon: HardDrive,
      title: "IT Hardware & Networking Equipment",
      description:
        "We provide a complete range of high-quality hardware and networking solutions for secure, reliable infrastructure.",
      capabilities: [
        "Servers, storage devices, and data centers",
        "Routers, switches, and firewalls",
        "Network cabling and accessories",
        "End-user computing equipment (PCs, laptops, monitors)",
        "Printers, scanners, and peripherals",
      ],
      benefits: [
        "Enterprise-grade quality",
        "Competitive pricing",
        "Full support & warranty",
      ],
      gradient: "from-[#3A1078] to-[#4E31AA]",
    },
  ];

  const handleReadMore = (title, fullDesc) => {
    setModalContent({ title, description: fullDesc });
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative pt-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3A1078]/5 via-[#4E31AA]/5 to-[#FEA405]/5 animate-wave-morph-smooth"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(58,16,120,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(78,49,170,0.08),transparent_50%)]"></div>

        <div
          className={`relative max-w-7xl mx-auto px-6 py-24 transition-all duration-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="text-center space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#3A1078] via-[#4E31AA] to-[#FEA405] bg-clip-text text-transparent animate-gradient-shimmer-smooth">
              IT Services & Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-expand-smooth">
              Trusted by government agencies and enterprises nationwide —
              delivering secure, compliant, and future-ready IT solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-gray-50/80 to-white backdrop-blur-sm rounded-3xl p-10 border border-gray-200/60 shadow-xl hover:shadow-2xl transition-all duration-700">
          <p className="text-xl text-center text-gray-700 leading-relaxed font-medium">
            At{" "}
            <span className="text-[#3A1078] font-bold">
              FedVantage Solutions
            </span>
            , we combine deep federal compliance expertise with commercial
            agility to deliver transformative IT outcomes.
          </p>
        </div>
      </div>

      {/* What Makes Us Different */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 animate-slide-in-bounce-smooth">
            What Makes Us Different
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: Globe,
              title: "Commitment",
              items: [
                "Strong dedication",
                "Unwavering focus",
                "Consistent reliability",
              ],
              color: "#3A1078",
            },
            {
              icon: LockIcon,
              title: "Integrity",
              items: [
                "Ethical conduct",
                "Transparency in actions",
                "Honesty and accountability",
              ],
              color: "#4E31AA",
            },
            {
              icon: Target,
              title: "Service",
              items: [
                "Customer-centric approach",
                "Timely and efficient delivery",
                "High-quality support",
              ],
              color: "#FEA405",
            },
            {
              icon: Zap,
              title: "Excellence",
              items: [
                "Superior quality",
                "Continuous improvement",
                "Exceptional performance",
              ],
              color: "#3A1078",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            const bgClass = colorClasses[item.color] || "bg-[#3A1078]";

            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 border border-gray-200/70 hover:border-[#3A1078]/60 hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:-translate-y-3 animate-stagger-fade-in-smooth"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div
                  className={`w-16 h-16 rounded-2xl ${bgClass} p-4 mb-6 mx-auto shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 animate-float-bob-smooth`}
                >
                  <Icon className="w-full h-full text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 group-hover:text-[#3A1078] transition-colors duration-400">
                  {item.title}
                </h3>

                <ul className="space-y-4">
                  {item.items.map((text, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-center gap-3 text-gray-600 animate-slide-in-left-smooth"
                      style={{ animationDelay: `${i * 80}ms` }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#3A1078] flex-shrink-0 animate-pulse-glow-smooth" />
                      <span className="text-sm font-medium">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bespoke Services */}
      <div className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-b from-[#4E31AA]/5 via-transparent to-[#FEA405]/5">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#3A1078] to-[#FEA405] bg-clip-text text-transparent animate-gradient-shimmer-smooth">
            Bespoke Services & Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored IT solutions crafted with precision for your
            mission-critical needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Solution Provider",
              desc: "Our specialists integrate technology into your department to boost efficiency, counter digital threats, protect taxpayers, and enable secure, seamless operations.",
              fullDesc:
                "We deliver end-to-end technology integration that aligns with your mission — from strategy to execution with full compliance and security.",
            },
            {
              title: "Infrastructure",
              desc: "As an IT infrastructure services provider, we focus on planning, designing, and reselling products specifically crafted to meet organizational needs efficiently.",
              fullDesc:
                "Enterprise-grade infrastructure design, procurement, and deployment — optimized for performance, scalability, and long-term reliability.",
            },
            {
              title: "Consultancy",
              desc: "We provide professional technical consultancy services, supporting projects from small businesses to advanced, innovative initiatives.",
              fullDesc:
                "Expert guidance from certified professionals — helping you navigate complex IT decisions with confidence and clarity.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200/70 hover:border-[#3A1078]/60 hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 animate-stagger-fade-in-smooth"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <div className="p-8 text-center">
                <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-8 border-white shadow-2xl group-hover:shadow-[#3A1078]/40 transition-all duration-700">
                  <div className="bg-gradient-to-br from-[#3A1078]/20 to-[#FEA405]/20 w-full h-full flex items-center justify-center">
                    <Globe className="w-24 h-24 text-[#3A1078]/40 animate-spin-slow-gentle-smooth" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#3A1078] transition-colors duration-400">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <button
                  onClick={() =>
                    handleReadMore(service.title, service.fullDesc)
                  }
                  className="px-8 py-4 bg-gradient-to-r from-[#FEA405] to-[#3A1078] text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-110 transition-all duration-400 animate-pulse-glow-button-smooth"
                >
                  Read More{" "}
                  <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeService === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveService(index)}
                className={`group relative bg-white backdrop-blur-sm rounded-3xl p-8 border-2 transition-all duration-700 cursor-pointer transform hover:scale-105 hover:shadow-2xl animate-stagger-fade-in-smooth ${
                  isActive
                    ? "border-[#3A1078] shadow-2xl shadow-[#3A1078]/30"
                    : "border-gray-200 hover:border-[#3A1078]/50"
                }`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-700`}
                ></div>

                <div
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} p-4 mb-6 shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 animate-float-bob-smooth`}
                >
                  <Icon className="w-full h-full text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#3A1078] transition-colors duration-400">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-[#3A1078]">
                    Key Capabilities:
                  </h4>
                  {service.capabilities.slice(0, 3).map((cap, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-600 animate-slide-in-left-smooth"
                      style={{ animationDelay: `${i * 80}ms` }}
                    >
                      <ChevronRight className="w-5 h-5 text-[#3A1078] mt-0.5 flex-shrink-0 animate-pulse-glow-smooth" />
                      <span>{cap}</span>
                    </div>
                  ))}
                  {service.capabilities.length > 3 && (
                    <p className="text-xs text-gray-500 italic pt-2">
                      + {service.capabilities.length - 3} more capabilities
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-3">
                  {service.benefits.map((b, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-[#3A1078]/10 to-[#FEA405]/10 text-[#3A1078] rounded-full text-xs font-medium animate-bounce-subtle-smooth"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Active Service */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 border border-gray-200 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${services[activeService].gradient} p-5 mb-6 animate-spin-slow-gentle-smooth shadow-xl`}
              >
                {React.createElement(services[activeService].icon, {
                  className: "w-full h-full text-white",
                })}
              </div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#3A1078] to-[#4E31AA] bg-clip-text text-transparent">
                {services[activeService].title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {services[activeService].description}
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Key Benefits
                </h3>
                {services[activeService].benefits.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 text-gray-700 animate-fade-in-up-smooth"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#3A1078] flex-shrink-0 animate-bounce-gentle-smooth" />
                    <span className="font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-900">
                Complete Capabilities
              </h3>
              <div className="space-y-4">
                {services[activeService].capabilities.map((cap, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 animate-slide-in-right-smooth"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <ChevronRight className="w-6 h-6 text-[#3A1078] mt-1 flex-shrink-0 animate-pulse-glow-smooth" />
                    <span className="text-gray-700">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#3A1078] to-[#4E31AA] rounded-3xl p-16 text-white text-center shadow-2xl animate-wave-ripple-smooth">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold animate-slide-in-bounce-smooth">
              Ready to Transform Your IT?
            </h2>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-fade-in-expand-delayed-smooth">
              Partner with a proven leader in secure, compliant, and innovative
              IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <button className="group px-10 py-5 bg-white text-[#3A1078] rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-400 flex items-center justify-center gap-3 animate-pulse-glow-button-smooth">
                Request a Consultation
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-10 py-5 border-2 border-white/50 backdrop-blur-sm rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-400">
                Download Capabilities Statement
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in-smooth"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-3xl p-10 max-w-2xl w-full shadow-2xl transform animate-bounce-in-smooth"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#3A1078]">
              {modalContent.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {modalContent.description}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-8 py-4 bg-gradient-to-r from-[#FEA405] to-[#3A1078] text-white rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes wave-morph-smooth {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.05) rotate(2deg);
          }
        }
        @keyframes gradient-shimmer-smooth {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes fade-in-expand-smooth {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes stagger-fade-in-smooth {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float-bob-smooth {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        @keyframes slide-in-left-smooth {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes pulse-glow-smooth {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        @keyframes spin-slow-gentle-smooth {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes bounce-in-smooth {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          60% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes wave-ripple-smooth {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        .animate-wave-morph-smooth {
          animation: wave-morph-smooth 20s ease-in-out infinite;
        }
        .animate-gradient-shimmer-smooth {
          background-size: 200% 200%;
          animation: gradient-shimmer-smooth 8s ease infinite;
        }
        .animate-fade-in-expand-smooth {
          animation: fade-in-expand-smooth 1.4s ease-out forwards;
        }
        .animate-stagger-fade-in-smooth {
          animation: stagger-fade-in-smooth 0.8s ease-out forwards;
        }
        .animate-float-bob-smooth {
          animation: float-bob-smooth 6s ease-in-out infinite;
        }
        .animate-slide-in-left-smooth {
          animation: slide-in-left-smooth 0.7s ease-out forwards;
        }
        .animate-pulse-glow-smooth {
          animation: pulse-glow-smooth 2s ease-in-out infinite;
        }
        .animate-spin-slow-gentle-smooth {
          animation: spin-slow-gentle-smooth 30s linear infinite;
        }
        .animate-bounce-in-smooth {
          animation: bounce-in-smooth 0.6s ease-out forwards;
        }
        .animate-wave-ripple-smooth {
          animation: wave-ripple-smooth 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Services;
