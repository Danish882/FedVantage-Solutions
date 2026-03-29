import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Calendar,
  Users,
  Shield,
  Zap,
  Building2,
  ArrowRight,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    "Managed IT Services",
    "Cybersecurity Solutions",
    "Cloud Infrastructure",
    "IT Staffing & Recruiting",
    "Hardware & Procurement",
    "Digital Transformation",
    "Compliance & Risk Management",
    "Other / Consultation",
  ];

  const contactMethods = [
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "Washington, DC Metro Area",
      subdetail: "Serving clients nationwide",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      subdetail: "Mon-Fri, 9 AM - 6 PM EST",
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "info@fedvantage.com",
      subdetail: "We respond within 24 hours",
    },
    {
      icon: Clock,
      title: "Business Hours",
      detail: "Monday – Friday",
      subdetail: "9:00 AM – 6:00 PM EST",
    },
  ];
  const reasons = [
    {
      icon: Shield,
      title: "Proven Security",
      description:
        "FedRAMP & NIST compliant solutions for federal and enterprise clients",
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description:
        "Fast turnaround on proposals and immediate expert consultation",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Certified professionals with deep government and enterprise experience",
    },
    {
      icon: Building2,
      title: "Trusted Partner",
      description:
        "Supporting critical missions with reliable, scalable IT infrastructure",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3A1078]/5 via-[#4E31AA]/5 to-[#FEA405]/5 animate-wave-morph"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#3A1078]/10 rounded-full blur-3xl animate-float-morph"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#4E31AA]/10 rounded-full blur-3xl animate-float-morph-delayed"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#FEA405]/10 rounded-full blur-3xl animate-pulse-glow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center space-y-6">
            <div className="inline-block animate-shimmer-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3A1078]/10 to-[#4E31AA]/10 border border-[#3A1078]/30 rounded-full text-[#3A1078] text-sm font-medium backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                We're Ready to Help
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight animate-slide-up-bounce">
              <span className="bg-gradient-to-r from-[#3A1078] via-[#4E31AA] to-[#FEA405] bg-clip-text text-transparent">
                Let's Build Your Success Together
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed animate-fade-in-expand">
              Whether you need a custom IT solution, secure infrastructure
              upgrade, or qualified technical staff, our team of experts is
              ready to transform your vision into reality.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border border-gray-200/80 p-8 transition-all duration-500 hover:border-[#FEA405]/50 hover:shadow-2xl hover:shadow-[#FEA405]/20 hover:-translate-y-2 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon Container with Hover Color Change */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-[#FEA405]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3A1078]/10 to-[#4E31AA]/10 flex items-center justify-center transition-all duration-500 group-hover:from-[#FEA405]/20 group-hover:to-orange-300/20 group-hover:scale-110">
                    <Icon
                      className="w-8 h-8 transition-all duration-500 text-[#3A1078] group-hover:text-[#FEA405] drop-shadow-md"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#3A1078] transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-lg font-semibold text-gray-800 mb-1">
                  {method.detail}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {method.subdetail}
                </p>

                {/* Subtle corner accent on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FEA405]/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-shimmer-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Request a Proposal</h2>
              <p className="text-gray-600 text-lg">
                Share your requirements and our team will respond with a
                customized solution within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200/50 rounded-lg focus:outline-none focus:border-[#3A1078]/60 focus:ring-2 focus:ring-[#3A1078]/20 text-gray-900 placeholder-gray-500 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200/50 rounded-lg focus:outline-none focus:border-[#3A1078]/60 focus:ring-2 focus:ring-[#3A1078]/20 text-gray-900 placeholder-gray-500 transition-all duration-300"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200/50 rounded-lg focus:outline-none focus:border-[#3A1078]/60 focus:ring-2 focus:ring-[#3A1078]/20 text-gray-900 placeholder-gray-500 transition-all duration-300"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200/50 rounded-lg focus:outline-none focus:border-[#3A1078]/60 focus:ring-2 focus:ring-[#3A1078]/20 text-gray-900 placeholder-gray-500 transition-all duration-300"
                    placeholder="Your Organization"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Needed *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200/50 rounded-lg focus:outline-none focus:border-[#3A1078]/60 focus:ring-2 focus:ring-[#3A1078]/20 text-gray-900 transition-all duration-300"
                >
                  <option value="">Select a service...</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message / Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200/50 rounded-lg focus:outline-none focus:border-[#3A1078]/60 focus:ring-2 focus:ring-[#3A1078]/20 text-gray-900 placeholder-gray-500 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project, timeline, and specific requirements..."
                ></textarea>
              </div>

              {submitted ? (
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#3A1078]/10 to-[#4E31AA]/10 border border-[#3A1078]/30 rounded-lg animate-fade-in-expand">
                  <CheckCircle className="w-6 h-6 text-[#3A1078] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#3A1078]">
                      Thank you for reaching out!
                    </p>
                    <p className="text-sm text-gray-600">
                      Our team will respond within 24 hours.
                    </p>
                  </div>
                </div>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#3A1078] to-[#4E31AA] rounded-lg font-semibold text-white text-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#3A1078]/50 hover:-translate-y-0.5 group animate-pulse-glow-button"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 animate-bounce-arrow" />
                </button>
              )}

              <p className="text-sm text-gray-500 text-center">
                By submitting this message, you agree to our privacy policy and
                terms of service.
              </p>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="space-y-8">
            {/* Why Choose Us */}
            <div className="animate-shimmer-fade-in">
              <h3 className="text-2xl font-bold mb-6">Why Partner With Us?</h3>
              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-gray-50/50 to-white/50 rounded-xl border border-gray-200/50 p-5 transition-all duration-300 hover:border-[#3A1078]/60 hover:shadow-lg hover:shadow-[#3A1078]/20 animate-slide-in-left"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#3A1078]/10 to-[#4E31AA]/10 border border-[#3A1078]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-spin-slow-gentle">
                          <reason.icon className="w-6 h-6 text-[#3A1078]" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1 group-hover:text-[#3A1078] transition-colors duration-300">
                          {reason.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4 animate-shimmer-fade-in">
              <h3 className="text-2xl font-bold">Need Immediate Assistance?</h3>

              <div className="bg-gradient-to-br from-gray-50/50 to-white/50 rounded-xl border border-gray-200/50 p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FEA405]/10 to-[#3A1078]/10 border border-[#FEA405]/30 flex items-center justify-center animate-pulse-glow">
                    <Calendar className="w-6 h-6 text-[#FEA405]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2">
                      Schedule a Consultation
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Book a 30-minute call with one of our IT experts to
                      discuss your specific needs.
                    </p>
                    <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#FEA405] to-[#3A1078] rounded-lg font-semibold text-gray-900 text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#FEA405]/50 hover:-translate-y-0.5 group animate-shimmer-button">
                      Book Now
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 animate-bounce-arrow" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50/50 to-white/50 rounded-xl border border-gray-200/50 p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#3A1078]/10 to-[#4E31AA]/10 border border-[#3A1078]/30 flex items-center justify-center animate-pulse-glow">
                    <MessageSquare className="w-6 h-6 text-[#3A1078]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2">
                      Talk to an Expert
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Get immediate answers to your technical questions from our
                      certified professionals.
                    </p>
                    <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#3A1078] to-[#4E31AA] rounded-lg font-semibold text-gray-900 text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#3A1078]/50 hover:-translate-y-0.5 group animate-shimmer-button">
                      Start Chat
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 animate-bounce-arrow" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tagline Box */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#3A1078]/5 via-[#4E31AA]/5 to-[#FEA405]/5 rounded-xl border border-[#3A1078]/30 p-6 animate-wave-ripple">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3A1078]/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <h4 className="font-bold text-lg mb-3 text-[#3A1078]">
                  Empowering Federal and Enterprise Success
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  FedVantage Solutions delivers secure, reliable, and scalable
                  IT services to government and enterprise clients. We
                  specialize in managed IT, cybersecurity, cloud, staffing, and
                  hardware solutions that drive mission success and digital
                  transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Placeholder Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative h-96 bg-gradient-to-br from-gray-50/50 to-white/50 rounded-2xl border border-gray-200/50 overflow-hidden group animate-shimmer-fade-in">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#3A1078]/10 to-[#4E31AA]/10 border border-[#3A1078]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                <MapPin className="w-10 h-10 text-[#3A1078]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Serving Clients Nationwide
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Headquartered in the Washington, DC Metro Area, delivering
                  excellence across all 50 states
                </p>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#3A1078 1px, transparent 1px), linear-gradient(90deg, #3A1078 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="relative overflow-hidden bg-gradient-to-r from-gray-50/50 to-white/50 rounded-2xl border border-gray-200/50 p-8 lg:p-12 animate-wave-ripple">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3A1078]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4E31AA]/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4 animate-slide-in-bounce">
                Ready to Transform Your IT Infrastructure?
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed animate-fade-in-expand-delayed">
                Join hundreds of government agencies and enterprises that trust
                FedVantage Solutions for their critical IT needs. Let's discuss
                how we can support your mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#3A1078] to-[#4E31AA] rounded-lg font-semibold text-white text-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#3A1078]/50 hover:-translate-y-0.5 group animate-pulse-glow-button">
                  Request a Proposal
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 animate-bounce-arrow" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-50 border border-gray-300 rounded-lg font-semibold text-lg transition-all duration-300 hover:border-[#3A1078]/60 hover:bg-gray-100 animate-shimmer-button">
                  View Case Studies
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave-morph {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.5;
          }
          25% {
            transform: scale(1.1) rotate(5deg);
            opacity: 0.3;
          }
          50% {
            transform: scale(0.9) rotate(-3deg);
            opacity: 0.6;
          }
          75% {
            transform: scale(1.05) rotate(2deg);
            opacity: 0.4;
          }
        }
        @keyframes float-morph {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            border-radius: 50%;
          }
          33% {
            transform: translateY(-15px) scale(1.05);
            border-radius: 40%;
          }
          66% {
            transform: translateY(10px) scale(0.95);
            border-radius: 60%;
          }
        }
        @keyframes float-morph-delayed {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            border-radius: 50%;
          }
          33% {
            transform: translateY(15px) scale(1.05);
            border-radius: 60%;
          }
          66% {
            transform: translateY(-10px) scale(0.95);
            border-radius: 40%;
          }
        }
        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(58, 16, 120, 0.4);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(58, 16, 120, 0);
          }
        }
        @keyframes shimmer-fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
            filter: brightness(0.8);
          }
          50% {
            opacity: 0.5;
            transform: translateY(-5px);
            filter: brightness(1.1);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: brightness(1);
          }
        }
        @keyframes slide-up-bounce {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          60% {
            opacity: 1;
            transform: translateY(-5px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes fade-in-expand {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.02);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes stagger-slide-up {
          0% {
            opacity: 0;
            transform: translateY(40px) rotateX(10deg);
          }
          60% {
            opacity: 1;
            transform: translateY(-10px) rotateX(-5deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }
        @keyframes spin-slow-gentle {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes slide-in-left {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes rotate-gentle {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes wave-ripple {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.02);
            opacity: 0.95;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes slide-in-bounce {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          60% {
            opacity: 1;
            transform: translateY(-5px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes fade-in-expand-delayed {
          0% {
            opacity: 0;
            transform: scale(0.98);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.01);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes pulse-glow-button {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(58, 16, 120, 0.4);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(58, 16, 120, 0);
          }
        }
        @keyframes shimmer-button {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        @keyframes bounce-arrow {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(3px);
          }
        }
        .animate-wave-morph {
          animation: wave-morph 6s ease-in-out infinite;
        }
        .animate-float-morph {
          animation: float-morph 8s ease-in-out infinite;
        }
        .animate-float-morph-delayed {
          animation: float-morph-delayed 10s ease-in-out infinite reverse;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s linear infinite;
        }
        .animate-shimmer-fade-in {
          animation: shimmer-fade-in 1.2s ease-out forwards;
        }
        .animate-slide-up-bounce {
          animation: slide-up-bounce 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)
            forwards;
        }
        .animate-fade-in-expand {
          animation: fade-in-expand 1.2s ease-out forwards;
        }
        .animate-stagger-slide-up {
          animation: stagger-slide-up 0.8s ease-out forwards;
        }
        .animate-spin-slow-gentle {
          animation: spin-slow-gentle 15s linear infinite;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }
        .animate-rotate-gentle {
          animation: rotate-gentle 20s linear infinite;
        }
        .animate-wave-ripple {
          animation: wave-ripple 4s ease-in-out infinite;
        }
        .animate-slide-in-bounce {
          animation: slide-in-bounce 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)
            forwards;
        }
        .animate-fade-in-expand-delayed {
          animation: fade-in-expand 1.5s ease-out forwards;
        }
        .animate-pulse-glow-button {
          animation: pulse-glow-button 2s linear infinite;
        }
        .animate-shimmer-button {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(254, 164, 5, 0.1),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer-button 2s infinite;
        }
        .animate-bounce-arrow {
          animation: bounce-arrow 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
