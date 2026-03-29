import React, { useState, useEffect } from "react";
import {
  Rocket,
  Users,
  TrendingUp,
  Globe,
  Award,
  Heart,
  Briefcase,
  GraduationCap,
  Clock,
  Target,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Code,
  Shield,
  Cloud,
  Zap,
  ChevronRight,
  X,
  Upload,
  Mail,
  Phone,
  Link,
  FileText,
  User,
} from "lucide-react";

const Careers = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    coverLetter: "",
    resume: null,
  });

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

  const openApplicationModal = (role) => {
    setSelectedRole(role);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRole(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      linkedin: "",
      coverLetter: "",
      resume: null,
    });
    document.body.style.overflow = "unset";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, resume: file }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Application submitted for ${selectedRole.title}!\nWe'll get back to you soon.`
    );
    closeModal();
  };

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage",
      color: "purple",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Professional development and advancement opportunities",
      color: "indigo",
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible schedules and remote work options",
      color: "orange",
    },
    {
      icon: Award,
      title: "Competitive Pay",
      description: "Market-leading salary and performance bonuses",
      color: "purple",
    },
  ];

  const stats = [
    { value: "50+", label: "Team Members", icon: Users },
    { value: "4.8/5", label: "Employee Rating", icon: Award },
    { value: "95%", label: "Retention Rate", icon: TrendingUp },
    { value: "Remote", label: "Work Options", icon: Globe },
  ];

  const values = [
    {
      icon: Sparkles,
      title: "Innovation First",
      description: "We encourage creativity and embrace new technologies",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Success comes from working together toward common goals",
    },
    {
      icon: Target,
      title: "Mission Driven",
      description: "Our work supports critical government and enterprise needs",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Invest in your skills with training and certifications",
    },
  ];

  const roles = [
    {
      title: "Senior Cloud Engineer",
      department: "Engineering",
      location: "Remote / Washington, DC",
      type: "Full-time",
      icon: Cloud,
      tags: ["AWS", "Azure", "Security"],
    },
    {
      title: "Cybersecurity Analyst",
      department: "Security",
      location: "Hybrid / Virginia",
      type: "Full-time",
      icon: Shield,
      tags: ["NIST", "Compliance", "FedRAMP"],
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      icon: Code,
      tags: ["CI/CD", "Kubernetes", "Automation"],
    },
    {
      title: "IT Project Manager",
      department: "Management",
      location: "Washington, DC",
      type: "Full-time",
      icon: Target,
      tags: ["Agile", "Federal Contracts", "Leadership"],
    },
    {
      title: "Solutions Architect",
      department: "Engineering",
      location: "Remote / On-site",
      type: "Full-time",
      icon: Zap,
      tags: ["System Design", "Cloud", "Enterprise"],
    },
    {
      title: "Junior Software Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      icon: Code,
      tags: ["React", "Node.js", "Entry Level"],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-orange-100"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl animate-float-slow-reverse"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-orange-100 border-2 border-purple-300 rounded-full px-4 py-2 mb-6 animate-wiggle text-sm shadow-lg">
              <Rocket className="w-4 h-4 text-purple-600 animate-pulse-scale" />
              <span className="text-sm text-purple-800 font-semibold">
                Join Our Team
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent animate-slide-in-up">
              Build Your Career with Us
            </h1>

            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed animate-slide-in-up delay-200">
              Join a team of innovators delivering cutting-edge IT solutions for
              government and enterprise clients
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
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100/0 to-orange-100/0 group-hover:from-purple-100/80 group-hover:to-orange-100/80 rounded-2xl transition-all duration-500"></div>

                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div
                      className="absolute w-2 h-2 bg-purple-400 rounded-full animate-sparkle-1"
                      style={{ top: "20%", left: "20%" }}
                    ></div>
                    <div
                      className="absolute w-2 h-2 bg-orange-400 rounded-full animate-sparkle-2"
                      style={{ top: "70%", left: "70%" }}
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

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-wave"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 relative bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent">
              Why Work With Us?
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              We invest in our people with benefits designed to support your
              success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  id={`benefit-${idx}`}
                  data-animate
                  onMouseEnter={() => setHoveredBenefit(idx)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                  className={`group relative bg-white rounded-3xl p-8 border-2 border-purple-200 hover:border-orange-400 transition-all duration-700 hover:scale-105 hover:-translate-y-3 cursor-pointer shadow-xl hover:shadow-2xl ${
                    isVisible[`benefit-${idx}`]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-${benefit.color}-100/0 to-orange-100/0 group-hover:from-${benefit.color}-100/80 group-hover:to-orange-100/80 rounded-3xl transition-all duration-500`}
                  ></div>

                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 border-2 border-purple-300 inline-block group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                        <Icon className="w-8 h-8 text-purple-600 group-hover:animate-bounce-gentle" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-purple-700 transition-colors">
                      {benefit.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {hoveredBenefit === idx && (
                    <div className="absolute -top-2 -right-2">
                      <Sparkles className="w-6 h-6 text-orange-500 animate-spin-slow" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 relative bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  id={`value-${idx}`}
                  data-animate
                  className={`group relative bg-white rounded-3xl p-8 border-2 border-purple-200 hover:border-orange-400 transition-all duration-700 hover:scale-105 shadow-xl hover:shadow-2xl ${
                    isVisible[`value-${idx}`]
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-20"
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100/0 to-orange-100/0 group-hover:from-purple-100/60 group-hover:to-orange-100/60 rounded-3xl transition-all duration-500"></div>

                  <div className="relative z-10 flex items-start gap-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 border-2 border-purple-300 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg flex-shrink-0">
                      <Icon className="w-8 h-8 text-purple-600" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-purple-700 transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-24 px-4 relative bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent">
              Open Positions
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Find your next career opportunity with FedVantage Solutions
            </p>
          </div>

          <div className="space-y-6">
            {roles.map((role, idx) => {
              const Icon = role.icon;
              return (
                <div
                  key={idx}
                  id={`role-${idx}`}
                  data-animate
                  className={`group relative bg-white backdrop-blur-sm rounded-3xl p-8 border-2 border-purple-200 hover:border-orange-400 transition-all duration-700 hover:scale-102 cursor-pointer shadow-xl hover:shadow-2xl ${
                    isVisible[`role-${idx}`]
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100/0 to-orange-100/0 group-hover:from-purple-100/50 group-hover:to-orange-100/50 rounded-3xl transition-all duration-500"></div>

                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-start gap-6 flex-1">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 border-2 border-purple-300 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                        <Icon className="w-8 h-8 text-purple-600" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-700 transition-colors">
                          {role.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-4">
                          <span className="flex items-center gap-2 font-medium">
                            <Briefcase className="w-4 h-4 text-purple-600" />
                            {role.department}
                          </span>
                          <span className="flex items-center gap-2 font-medium">
                            <Globe className="w-4 h-4 text-purple-600" />
                            {role.location}
                          </span>
                          <span className="flex items-center gap-2 font-medium">
                            <Clock className="w-4 h-4 text-purple-600" />
                            {role.type}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {role.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-4 py-2 bg-orange-100 border-2 border-orange-300 rounded-full text-sm text-orange-700 font-medium hover:bg-orange-200 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => openApplicationModal(role)}
                      className="group/btn px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-bold transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50"
                    >
                      Apply Now
                      <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform animate-pulse-gentle" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative bg-gradient-to-br from-purple-100 via-white to-orange-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white backdrop-blur-xl rounded-3xl p-12 border-2 border-purple-200 hover:border-orange-400 transition-all duration-700 shadow-2xl hover:shadow-3xl">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-orange-100 border-2 border-purple-300 rounded-full px-4 py-2 mb-6 animate-wiggle text-sm shadow-lg">
              <Sparkles className="w-4 h-4 text-purple-600 animate-pulse-scale" />
              <span className="text-sm text-purple-800 font-semibold">
                Start Your Journey
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent">
              Don't See Your Role?
            </h2>

            <p className="text-lg text-slate-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume
              and let's talk about future opportunities.
            </p>

            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3">
              Contact Us
              <ArrowRight className="w-5 h-5 animate-pulse-gentle" />
            </button>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {isModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 transition-opacity duration-300 animate-fade-in-modal"
            onClick={closeModal}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div
              className="relative bg-white backdrop-blur-xl rounded-3xl border-2 border-purple-300 shadow-2xl w-full max-w-2xl max-h-screen overflow-y-auto animate-scale-bounce-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 p-3 rounded-xl bg-purple-100 hover:bg-purple-200 transition-all duration-300 hover:rotate-90 z-10"
              >
                <X className="w-6 h-6 text-purple-700" />
              </button>

              <div className="p-8 md:p-10">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    Apply for {selectedRole?.title}
                  </h2>
                  <p className="text-slate-600 font-medium">
                    {selectedRole?.department} • {selectedRole?.location}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-bold text-purple-700 mb-2">
                        <User className="w-4 h-4" /> Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-purple-50 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all text-slate-900"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-bold text-purple-700 mb-2">
                        <Mail className="w-4 h-4" /> Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-purple-50 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all text-slate-900"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-bold text-purple-700 mb-2">
                        <Phone className="w-4 h-4" /> Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-purple-50 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all text-slate-900"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-bold text-purple-700 mb-2">
                        <Link className="w-4 h-4" /> LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-purple-50 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all text-slate-900"
                        placeholder="https://linkedin.com/in/johndoe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-purple-700 mb-2">
                      <Upload className="w-4 h-4" /> Resume / CV *
                    </label>
                    <label className="block">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required
                        onChange={handleFileChange}
                        className="block w-full text-sm text-slate-700 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:bg-gradient-to-r file:from-purple-600 file:to-indigo-600 file:text-white file:font-bold hover:file:from-purple-500 hover:file:to-indigo-500 cursor-pointer file:shadow-lg hover:file:shadow-xl file:transition-all"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-purple-700 mb-2">
                      <FileText className="w-4 h-4" /> Cover Letter / Message
                    </label>
                    <textarea
                      name="coverLetter"
                      rows="5"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-purple-50 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all resize-none text-slate-900"
                      placeholder="Tell us why you're excited about this role and how your experience aligns..."
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Submit Application
                      <ArrowRight className="w-5 h-5" />
                    </button>

                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-8 py-4 bg-purple-100 border-2 border-purple-300 text-purple-700 rounded-xl font-bold hover:bg-purple-200 transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Your existing custom styles */}
      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .hover\\:scale-102:hover { transform: scale(1.02); }
      `}</style>
    </div>
  );
};

export default Careers;
