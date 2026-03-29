import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Target,
  Eye,
  Award,
  Users,
  Zap,
  Lock,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Globe,
  Cpu,
  Layers,
  Star,
  Briefcase,
} from "lucide-react";

const About = () => {
  const [activeValue, setActiveValue] = useState(null);

  // Framer Motion Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { y: 80, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  const float = {
    animate: {
      y: [0, -30, 0],
      rotate: [0, 8, 0],
      transition: { duration: 12, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const glowPulse = {
    animate: {
      boxShadow: [
        "0 0 30px rgba(254,164,5,0.15)",
        "0 0 80px rgba(254,164,5,0.35)",
        "0 0 30px rgba(254,164,5,0.15)",
      ],
      transition: { duration: 5, repeat: Infinity },
    },
  };

  const coreValues = [
    {
      title: "Integrity",
      icon: Shield,
      desc: "We uphold the highest ethical standards in every decision.",
    },
    {
      title: "Innovation",
      icon: Zap,
      desc: "We embrace cutting-edge technology to deliver forward-thinking solutions.",
    },
    {
      title: "Security",
      icon: Lock,
      desc: "Protection at every layer — data, infrastructure, operations.",
    },
    {
      title: "Accountability",
      icon: CheckCircle,
      desc: "We take ownership and deliver on every commitment.",
    },
    {
      title: "Partnership",
      icon: Users,
      desc: "Building lasting relationships based on trust and mutual success.",
    },
  ];

  const expertise = [
    { title: "Federal IT Compliance", icon: Shield, count: "25+" },
    { title: "Cybersecurity Projects", icon: Lock, count: "500+" },
    { title: "Network Infrastructure", icon: Globe, count: "1000+" },
    { title: "Cloud Migrations", icon: Cpu, count: "300+" },
    { title: "IT Professionals Placed", icon: Users, count: "2000+" },
    { title: "Years of Experience", icon: Star, count: "15+" },
  ];

  const timeline = [
    {
      year: "2009",
      title: "Foundation",
      desc: "FedVantage Solutions established to serve federal agencies",
    },
    {
      year: "2012",
      title: "FISMA Certified",
      desc: "Achieved FISMA compliance & expanded cybersecurity services",
    },
    {
      year: "2015",
      title: "Cloud Excellence",
      desc: "Became AWS and Azure certified government partner",
    },
    {
      year: "2018",
      title: "National Expansion",
      desc: "Expanded to all 50 states with 24/7 support",
    },
    {
      year: "2021",
      title: "Innovation Leader",
      desc: "Launched AI-powered SOC and zero-trust framework",
    },
    {
      year: "2024",
      title: "Trusted Partner",
      desc: "Serving 500+ clients with 99.9% uptime SLA",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          animate={{ x: [-200, 200, -200], y: [-100, 100, -100] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-[#3A1078]/20 to-[#FEA405]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [200, -200, 200], y: [100, -100, 100] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-tl from-[#4E31AA]/30 to-[#FEA405]/20 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl font-black text-[#3A1078] mb-6 leading-tight">
            Where Technology
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E31AA] via-[#FEA405] to-[#3A1078]">
              Meets Trust
            </span>
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="h-2 bg-gradient-to-r from-[#FEA405] via-[#4E31AA] to-[#3A1078] rounded-full w-64 mx-auto mb-8"
          />
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            FedVantage Solutions is a veteran-owned IT services leader
            delivering secure, compliant, and innovative technology solutions to
            federal agencies and enterprises nationwide.
          </p>
        </motion.div>
      </section>

      {/* Who We Are */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <span className="inline-flex items-center gap-2 text-[#FEA405] font-bold uppercase text-sm bg-[#FEA405]/10 px-5 py-2 rounded-full mb-8">
              <Sparkles size={16} /> Who We Are
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-[#3A1078] mb-8">
              Delivering Integrated IT Solutions
              <br />
              <span className="text-[#4E31AA]">for Modern Operations</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We provide end-to-end technology services — from cybersecurity and
              cloud to staffing and hardware — designed to meet the rigorous
              demands of federal missions and enterprise growth.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team combines deep technical expertise with federal compliance
              knowledge to deliver reliable, secure, and scalable solutions that
              drive mission success.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            {[
              {
                icon: Shield,
                label: "FISMA Compliant",
                color: "from-[#3A1078] to-[#4E31AA]",
              },
              {
                icon: Award,
                label: "ISO Certified",
                color: "from-[#4E31AA] to-[#FEA405]",
              },
              {
                icon: Star,
                label: "Veteran Owned",
                color: "from-[#FEA405] to-[#3A1078]",
              },
              {
                icon: TrendingUp,
                label: "Industry Leader",
                color: "from-[#3A1078] to-[#FEA405]",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -12, scale: 1.08 }}
                className="group bg-white border border-purple-100 rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:shadow-[#FEA405]/20 transition-all duration-500 cursor-pointer"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg`}
                >
                  <item.icon size={36} />
                </div>
                <p className="font-bold text-[#3A1078] group-hover:text-[#FEA405] transition-colors">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 px-6 bg-gradient-to-b from-purple-50 to-orange-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 shadow-2xl border border-purple-100"
          >
            <div className="flex items-center gap-6 mb-8">
              <motion.div
                variants={float}
                animate="animate"
                className="w-20 h-20 bg-gradient-to-br from-[#3A1078] to-[#4E31AA] rounded-2xl flex items-center justify-center text-white"
              >
                <Target size={40} />
              </motion.div>
              <h3 className="text-4xl font-black text-[#3A1078]">
                Our Mission
              </h3>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              To empower organizations with secure, intelligent, and adaptable
              technology solutions that enhance performance and ensure mission
              success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-12 shadow-2xl border border-orange-100"
          >
            <div className="flex items-center gap-6 mb-8">
              <motion.div
                variants={float}
                animate="animate"
                className="w-20 h-20 bg-gradient-to-br from-[#FEA405] to-[#4E31AA] rounded-2xl flex items-center justify-center text-white"
              >
                <Eye size={40} />
              </motion.div>
              <h3 className="text-4xl font-black text-[#3A1078]">Our Vision</h3>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              To be the nation's most trusted partner for government and
              enterprise IT modernization — delivering innovation, compliance,
              and measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 text-[#FEA405] font-bold uppercase text-sm bg-[#FEA405]/10 px-6 py-3 rounded-full mb-6">
            <Award size={18} /> Core Values
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-[#3A1078] mb-6">
            Principles That <span className="text-[#4E31AA]">Guide Us</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto"
        >
          {coreValues.map((value, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -20, scale: 1.08 }}
              onMouseEnter={() => setActiveValue(i)}
              onMouseLeave={() => setActiveValue(null)}
              className="group bg-white rounded-3xl p-10 shadow-xl border border-purple-100 hover:border-[#FEA405] transition-all duration-500 cursor-pointer relative overflow-hidden"
            >
              <motion.div
                animate={{ rotate: activeValue === i ? 360 : 0 }}
                transition={{ duration: 0.8 }}
                className="w-20 h-20 bg-gradient-to-br from-[#3A1078] to-[#FEA405] rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg"
              >
                <value.icon size={36} />
              </motion.div>
              <h3 className="text-2xl font-bold text-[#3A1078] mb-3 group-hover:text-[#FEA405] transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.desc}
              </p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: activeValue === i ? "100%" : "0%" }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#FEA405] to-[#4E31AA] rounded-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Expertise Stats */}
      <section className="py-32 px-6 bg-gradient-to-r from-purple-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-black text-[#3A1078] mb-4">
              Decades of Combined Experience
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10"
          >
            {expertise.map((exp, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-3xl p-10 text-center shadow-xl border border-purple-100"
              >
                <exp.icon size={48} className="text-[#FEA405] mx-auto mb-6" />
                <div className="text-5xl font-black text-[#3A1078] mb-2">
                  {exp.count}
                </div>
                <p className="text-gray-700 font-semibold">{exp.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <h2 className="text-5xl font-black text-[#3A1078]">
            A Legacy of <span className="text-[#FEA405]">Excellence</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {timeline.map((milestone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`flex items-center gap-10 mb-16 ${
                i % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 text-right">
                <div className="text-6xl font-black text-[#FEA405]">
                  {milestone.year}
                </div>
              </div>
              <div className="relative">
                <motion.div
                  variants={glowPulse}
                  animate="animate"
                  className="w-6 h-6 bg-[#FEA405] rounded-full shadow-lg"
                />
                <div className="absolute top-8 left-3 w-0.5 h-32 bg-gradient-to-b from-[#FEA405] to-[#4E31AA]" />
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-1 bg-white rounded-3xl p-8 shadow-xl border border-purple-100"
              >
                <h3 className="text-2xl font-bold text-[#3A1078] mb-3">
                  {milestone.title}
                </h3>
                <p className="text-gray-700">{milestone.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-gradient-to-br from-[#3A1078] to-[#4E31AA] text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            Ready to Transform Your Mission?
          </h2>
          <p className="text-xl mb-12 text-white/90">
            Partner with FedVantage — Where Technology Meets Trust
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 bg-[#FEA405] text-[#3A1078] font-black text-xl rounded-full shadow-2xl flex items-center gap-4 mx-auto"
          >
            Start Your Journey <ArrowRight size={28} />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
