import React, { useState } from "react";
import resumePDF from "../assets/resume.pdf";
import {
  FileText,
  Download,
  BookOpen,
  TrendingUp,
  Shield,
  Zap,
  ChevronRight,
  ExternalLink,
  Calendar,
  Clock,
  ArrowRight,
} from "lucide-react";

const CaseStudies = () => {
  const [activeTab, setActiveTab] = useState("case-studies");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedInsight, setSelectedInsight] = useState(null);

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const caseStudies = [
    {
      id: 1,
      title: "Federal Agency Cloud Migration",
      category: "Cloud Infrastructure",
      industry: "Government",
      challenge: "Legacy systems preventing digital transformation",
      solution: "Comprehensive AWS migration with zero downtime",
      results: ["60% cost reduction", "99.99% uptime", "3x faster deployment"],
      image: "linear-gradient(135deg, #3A1078 0%, #4E31AA 100%)",
      readTime: "8 min read",
      link: "/case-studies/federal-agency-cloud-migration",
      fullDescription:
        "This federal agency was struggling with outdated legacy systems that were preventing their digital transformation initiatives. They needed a modern, scalable cloud infrastructure that could handle their mission-critical workloads while maintaining strict compliance with federal standards.",
      approach:
        "We conducted a comprehensive assessment of their existing infrastructure and developed a phased migration strategy. Using AWS services tailored for federal compliance, we executed a zero-downtime migration that preserved all existing data and services while modernizing their platform.",
      benefits:
        "The migration resulted in a 60% reduction in operational costs, achieved 99.99% uptime across all services, and enabled 3x faster deployment cycles. The agency now has the agility to respond quickly to changing mission requirements.",
      metrics: [
        { label: "Cost Reduction", value: "60%" },
        { label: "System Uptime", value: "99.99%" },
        { label: "Deployment Speed", value: "3x Faster" },
        { label: "Implementation Time", value: "6 months" },
      ],
    },
    {
      id: 2,
      title: "Enterprise Cybersecurity Overhaul",
      category: "Cybersecurity",
      industry: "Financial Services",
      challenge: "Increasing security threats and compliance gaps",
      solution: "Zero-trust architecture with AI-powered monitoring",
      results: [
        "100% threat detection",
        "SOC 2 compliance",
        "40% faster response",
      ],
      image: "linear-gradient(135deg, #FEA405 0%, #4E31AA 100%)",
      readTime: "10 min read",
      link: "/case-studies/enterprise-cybersecurity-overhaul",
      fullDescription:
        "A leading financial services organization faced increasing security threats and had multiple compliance gaps that put them at risk. Their traditional perimeter-based security model was no longer adequate for their distributed workforce and cloud-based operations.",
      approach:
        "We implemented a comprehensive zero-trust security architecture that requires verification for every access request, regardless of source. Combined with AI-powered threat detection and response systems, we created a modern security posture that protects against advanced threats while enabling business agility.",
      benefits:
        "The organization achieved 100% threat detection rates, reached SOC 2 compliance, and reduced security incident response time by 40%. Their security team can now respond to threats in seconds instead of hours.",
      metrics: [
        { label: "Threat Detection", value: "100%" },
        { label: "Compliance Achieved", value: "SOC 2" },
        { label: "Response Time", value: "40% Faster" },
        { label: "False Positives", value: "95% Reduction" },
      ],
    },
    {
      id: 3,
      title: "Digital Transformation Initiative",
      category: "IT Modernization",
      industry: "Healthcare",
      challenge: "Siloed systems affecting patient care efficiency",
      solution: "Integrated platform with real-time data access",
      results: [
        "50% process efficiency",
        "24/7 accessibility",
        "Enhanced security",
      ],
      image: "linear-gradient(135deg, #4E31AA 0%, #3A1078 100%)",
      readTime: "12 min read",
      link: "/case-studies/digital-transformation-initiative",
      fullDescription:
        "A large healthcare network operated with siloed systems that prevented real-time information sharing between departments, affecting patient care efficiency and increasing operational costs. They needed an integrated platform that could connect all their systems while maintaining HIPAA compliance.",
      approach:
        "We designed and implemented an integrated healthcare platform that unified disparate systems into a single, cohesive ecosystem. The solution included real-time data synchronization, secure APIs, and a modern user interface that improved staff efficiency and patient outcomes.",
      benefits:
        "The healthcare network achieved 50% improvement in process efficiency, enabled 24/7 accessibility to patient data, and enhanced overall security through centralized compliance management. Staff can now make faster, better-informed decisions that directly improve patient care.",
      metrics: [
        { label: "Process Efficiency", value: "+50%" },
        { label: "Data Accessibility", value: "24/7" },
        { label: "HIPAA Compliance", value: "100%" },
        { label: "Patient Satisfaction", value: "+35%" },
      ],
    },
  ];

  const insights = [
    {
      id: 1,
      title: "The Future of Federal IT: Trends to Watch in 2025",
      category: "Technology Trends",
      date: "Nov 28, 2024",
      excerpt:
        "Exploring emerging technologies shaping government IT infrastructure and digital services.",
      readTime: "6 min read",
      author: "Tech Strategy Team",
      fullContent: `As we approach 2025, federal IT leaders face both unprecedented opportunities and complex challenges. Emerging technologies like AI, quantum computing, and edge processing are poised to transform government operations, but their adoption requires careful planning and strategic investment.

Key trends include the continued expansion of zero-trust architectures, with 85% of federal agencies planning full implementation by 2026. Cloud-native applications will dominate, with hybrid multi-cloud strategies becoming the norm for balancing cost, compliance, and performance.

AI integration will accelerate, particularly in predictive analytics for cybersecurity and resource allocation. However, ethical AI frameworks and bias mitigation will be critical success factors. Federal IT budgets are expected to grow by 12%, with significant allocations toward cybersecurity (up 18%) and digital services modernization.

Don't miss our webinar on December 10th where industry experts will dive deeper into these trends and share actionable strategies for your organization.`,
    },
    {
      id: 2,
      title: "Zero Trust Architecture: A Practical Implementation Guide",
      category: "Cybersecurity",
      date: "Nov 15, 2024",
      excerpt:
        "Step-by-step approach to implementing zero trust security frameworks in enterprise environments.",
      readTime: "9 min read",
      author: "Security Division",
      fullContent: `Zero Trust Architecture (ZTA) has evolved from a theoretical concept to a mandatory security framework for modern organizations. This comprehensive guide provides a practical roadmap for implementing zero trust principles across your enterprise.

The implementation journey begins with comprehensive asset inventory and segmentation planning. Identify your critical assets, map data flows, and establish micro-segmentation boundaries to create least-privilege access policies. Our recommended approach uses a phased rollout: start with high-value assets, expand to critical applications, then extend to user access management.

Integration with existing tools is crucial. Leverage your current SIEM, IAM, and endpoint solutions while layering in zero trust capabilities. API gateways, service meshes, and software-defined perimeter solutions form the technical foundation.

Success metrics include reduced lateral movement (target: 90% reduction), improved threat detection (aim for 40% faster MTTD), and enhanced compliance posture. Regular maturity assessments using frameworks like NIST SP 800-207 will guide continuous improvement.

This guide includes detailed implementation checklists, vendor comparison matrices, and ROI calculation templates to accelerate your zero trust journey.`,
    },
    {
      id: 3,
      title: "Cloud Cost Optimization: Strategies That Actually Work",
      category: "Cloud Solutions",
      date: "Nov 5, 2024",
      excerpt:
        "Proven tactics to reduce cloud spending without compromising performance or security.",
      readTime: "7 min read",
      author: "Cloud Architecture Team",
      fullContent: `Cloud cost overruns remain a top concern for 68% of organizations, yet effective optimization strategies can yield 30-50% savings without sacrificing performance. This article outlines seven proven tactics that deliver measurable results.

Start with rightsizing: analyze utilization patterns and downsize over-provisioned resources. Our analysis shows 35% of EC2 instances run at under 10% utilization during business hours. Implement auto-scaling policies tied to actual demand rather than static thresholds.

Leverage spot instances and reserved capacity strategically. For non-critical workloads, spot instances can reduce costs by up to 90%. Combine with savings plans for predictable workloads to maximize discounts while maintaining flexibility.

Implement FinOps practices with cross-functional teams that include finance, engineering, and operations. Establish cost allocation tags and budgeting guardrails to drive accountability. Automated tagging enforcement ensures accurate cost attribution.

Advanced strategies include container optimization with Kubernetes cost monitoring tools and serverless architecture refactoring. Migrate batch processing to event-driven models to eliminate idle resource costs.

Real-world case studies demonstrate 42% average savings within the first six months, with sustained optimization yielding compound benefits over time. Download our Cloud Cost Optimization Toolkit to jumpstart your initiative.`,
    },
  ];

  const resources = [
    {
      id: 1,
      title: "Federal IT Modernization Checklist",
      type: "Checklist",
      description:
        "Complete guide for planning and executing government IT transformation projects",
      icon: FileText,
      downloads: "2.3K",
      format: "PDF",
    },
    {
      id: 2,
      title: "Cybersecurity Assessment Framework",
      type: "Whitepaper",
      description:
        "Comprehensive framework for evaluating and improving organizational security posture",
      icon: Shield,
      downloads: "1.8K",
      format: "PDF",
    },
    {
      id: 3,
      title: "Cloud Migration Roadmap Template",
      type: "Template",
      description:
        "Step-by-step template for planning successful cloud migration initiatives",
      icon: Zap,
      downloads: "3.1K",
      format: "XLSX",
    },
    {
      id: 4,
      title: "IT Compliance Guide 2025",
      type: "Guide",
      description:
        "Navigate federal compliance requirements including FedRAMP, FISMA, and NIST",
      icon: BookOpen,
      downloads: "1.5K",
      format: "PDF",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Modal for Case Study Details */}
      {selectedCase !== null && (
        <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-morph-fade-in overflow-y-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-[#3A1078]/30 max-w-4xl w-full my-8 animate-scale-bounce">
            <div className="relative">
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 text-gray-500 hover:text-[#3A1078] transition-colors z-10 bg-gray-100/80 rounded-full p-2 hover:bg-gray-200"
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

              {/* Header with gradient background */}
              <div
                className="h-40 relative overflow-hidden"
                style={{ background: caseStudies[selectedCase].image }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="flex gap-2 mb-2">
                    <span className="px-3 py-1 bg-gray-100/80 backdrop-blur-sm rounded-full text-xs font-medium text-[#3A1078] border border-[#3A1078]/30">
                      {caseStudies[selectedCase].category}
                    </span>
                    <span className="px-3 py-1 bg-gray-100/80 backdrop-blur-sm rounded-full text-xs font-medium text-gray-600 border border-gray-300/30">
                      {caseStudies[selectedCase].industry}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    {caseStudies[selectedCase].title}
                  </h2>
                </div>
              </div>

              <div className="p-8 space-y-6">
                {/* Overview */}
                <div>
                  <h3 className="text-xl font-semibold text-[#3A1078] mb-3">
                    Overview
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {caseStudies[selectedCase].fullDescription}
                  </p>
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50/50 rounded-lg p-4 border border-gray-200/50">
                    <h4 className="text-[#3A1078] font-semibold mb-2">
                      Challenge
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {caseStudies[selectedCase].challenge}
                    </p>
                  </div>
                  <div className="bg-gray-50/50 rounded-lg p-4 border border-gray-200/50">
                    <h4 className="text-[#4E31AA] font-semibold mb-2">
                      Solution
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {caseStudies[selectedCase].solution}
                    </p>
                  </div>
                </div>

                {/* Approach */}
                <div>
                  <h3 className="text-xl font-semibold text-[#FEA405] mb-3">
                    Our Approach
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {caseStudies[selectedCase].approach}
                  </p>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-semibold text-[#4E31AA] mb-3">
                    Key Benefits
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {caseStudies[selectedCase].benefits}
                  </p>
                </div>

                {/* Metrics */}
                <div>
                  <h3 className="text-xl font-semibold text-[#3A1078] mb-4">
                    Key Metrics
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {caseStudies[selectedCase].metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="bg-gradient-to-br from-[#3A1078]/10 to-[#4E31AA]/10 rounded-lg p-4 border border-[#3A1078]/20"
                      >
                        <div className="text-2xl font-bold bg-gradient-to-r from-[#3A1078] to-[#4E31AA] bg-clip-text text-transparent mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-500">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-xl font-semibold text-[#FEA405] mb-3">
                    Results Achieved
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudies[selectedCase].results.map((result, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-[#3A1078]/20 to-[#4E31AA]/20 rounded-lg text-sm font-medium text-gray-700 border border-[#3A1078]/30 flex items-center gap-2"
                      >
                        <svg
                          className="w-4 h-4 text-[#3A1078]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {result}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedCase(null)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#3A1078] to-[#4E31AA] rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#3A1078]/50 hover:scale-105"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Insight Details */}
      {selectedInsight !== null && (
        <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-morph-fade-in overflow-y-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-[#3A1078]/30 max-w-4xl w-full my-8 animate-scale-bounce">
            <div className="relative">
              <button
                onClick={() => setSelectedInsight(null)}
                className="absolute top-6 right-6 text-gray-500 hover:text-[#3A1078] transition-colors z-10 bg-gray-100/80 rounded-full p-2 hover:bg-gray-200"
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

              {/* Header */}
              <div className="bg-gradient-to-r from-[#3A1078]/10 to-[#4E31AA]/10 border-b border-[#3A1078]/20 p-8">
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-gray-100/80 backdrop-blur-sm rounded-full text-xs font-medium text-[#3A1078] border border-[#3A1078]/30">
                    {insights[selectedInsight].category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    {insights[selectedInsight].date}
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {insights[selectedInsight].title}
                </h2>
                <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3A1078] to-[#4E31AA] flex items-center justify-center text-xs font-bold text-white">
                      {insights[selectedInsight].author
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-700">
                        {insights[selectedInsight].author}
                      </p>
                      <p className="text-xs">
                        {insights[selectedInsight].readTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6 prose prose-gray-900 max-w-none">
                <div className="bg-gray-50/50 rounded-lg p-6 border border-gray-200/50">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {insights[selectedInsight].fullContent}
                  </p>
                </div>

                {/* CTA Section in Modal */}
                <div className="bg-gradient-to-r from-[#3A1078]/10 to-[#4E31AA]/10 rounded-lg p-6 border border-[#3A1078]/20">
                  <h4 className="text-lg font-semibold text-[#3A1078] mb-3">
                    Ready to Apply These Insights?
                  </h4>
                  <p className="text-gray-500 mb-4 text-sm">
                    Schedule a consultation with our experts to discuss how
                    these strategies can be tailored to your organization.
                  </p>
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#3A1078] to-[#4E31AA] rounded-lg font-semibold text-white text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#3A1078]/50 hover:scale-105">
                    Schedule Consultation
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Close Button */}
              <div className="p-8 border-t border-gray-200/50">
                <button
                  onClick={() => setSelectedInsight(null)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#3A1078] to-[#4E31AA] rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#3A1078]/50 hover:scale-105"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3A1078]/5 via-[#4E31AA]/5 to-[#FEA405]/5 animate-wave-morph"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#3A1078]/10 rounded-full blur-3xl animate-float-morph"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#4E31AA]/10 rounded-full blur-3xl animate-float-morph-delayed"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3A1078]/10 to-[#4E31AA]/10 border border-[#3A1078]/30 rounded-full text-[#3A1078] text-sm font-medium backdrop-blur-sm animate-shimmer-fade-in">
                <TrendingUp className="w-4 h-4" />
                Real Results, Real Impact
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight animate-slide-up-bounce">
              <span className="bg-gradient-to-r from-[#3A1078] via-[#4E31AA] to-[#FEA405] bg-clip-text text-transparent">
                Case Studies & Insights
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed animate-fade-in-expand">
              Explore our proven track record of IT excellence through
              real-world projects, expert insights, and comprehensive resources
              for your digital transformation journey.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide">
            {[
              { id: "case-studies", label: "Case Studies", icon: FileText },
              { id: "insights", label: "Insights & Blog", icon: BookOpen },
              { id: "resources", label: "Resources", icon: Download },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap transition-all duration-300 relative ${
                  activeTab === tab.id
                    ? "text-[#3A1078]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3A1078] to-[#4E31AA] animate-expand-shimmer"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      {activeTab === "case-studies" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12 animate-shimmer-fade-in">
            <h2 className="text-3xl font-bold mb-4">
              Highlighting Real-World Results
            </h2>
            <p className="text-gray-600 text-lg">
              Discover how we've helped organizations transform their IT
              infrastructure and achieve measurable success.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                onMouseEnter={() => setHoveredCard(study.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative bg-gradient-to-br from-gray-50/50 to-white/50 rounded-xl border border-gray-200/50 overflow-hidden transition-all duration-500 hover:border-[#3A1078]/60 hover:shadow-2xl hover:shadow-[#3A1078]/20 animate-stagger-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Background */}
                <div
                  className="h-32 relative overflow-hidden"
                  style={{ background: study.image }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2 py-0.5 bg-gray-100/80 backdrop-blur-sm rounded-full text-xs font-medium text-[#3A1078] border border-[#3A1078]/30">
                      {study.category}
                    </span>
                    <span className="px-2 py-0.5 bg-gray-100/80 backdrop-blur-sm rounded-full text-xs font-medium text-gray-600 border border-gray-300/30">
                      {study.industry}
                    </span>
                  </div>
                  <div className="absolute bottom-2 right-3 flex items-center gap-2 text-xs text-gray-600">
                    <Clock className="w-3 h-3" />
                    {study.readTime}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-bold group-hover:text-[#3A1078] transition-colors duration-300">
                    {study.title}
                  </h3>

                  <div className="space-y-2">
                    <div>
                      <p className="text-xs font-semibold text-[#3A1078] mb-0.5">
                        Challenge
                      </p>
                      <p className="text-gray-600 text-xs">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#4E31AA] mb-0.5">
                        Solution
                      </p>
                      <p className="text-gray-600 text-xs">{study.solution}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-[#FEA405] mb-2">
                      Key Results
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {study.results.map((result, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-gradient-to-r from-gray-100/50 to-gray-200/50 rounded text-xs font-medium text-gray-700 border border-gray-300/30"
                        >
                          ✓ {result}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    onClick={() => setSelectedCase(index)}
                    className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3A1078] to-[#4E31AA] rounded font-semibold text-white text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#3A1078]/50 hover:-translate-y-0.5 group cursor-pointer"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300 animate-bounce-arrow" />
                  </a>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-[#3A1078]/0 via-[#3A1078]/5 to-[#4E31AA]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                ></div>
              </div>
            ))}
          </div>

          <section className="relative py-32 px-6 bg-gradient-to-b from-[#f8f9ff] to-white overflow-hidden">
            <div className="relative py-24 overflow-hidden bg-gray-50">
              {/* Subtle world map background (same as the screenshot) */}
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1200"><path fill="%239CA3AF" d="M0 0h2000v1200H0z"/><path fill="%23E5E7EB" d="M1000 200c-200 0-400 100-500 300-50 100 50 250 200 300 150 50 350-50 450-200 100-150 150-300 50-400zM300 600c100 100 300 200 500 100 200-100 300-300 200-400-100-100-300 0-400 100-100 100-200 200-300 200zM1600 800c-100-100-300-200-500-100-200 100-300 300-200 400 100 100 300 0 400-100 100-100 200-200 300-200z"/></svg>')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Red dot on the map (North America – you can move it if you want) */}
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-4 h-4 bg-red-600 rounded-full animate-ping"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-red-600 rounded-full"></div>
                </div>
              </div>

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left side – people image (you can replace with your own) */}
                  <div className="hidden lg:block">
                    <img
                      src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop"
                      alt="Professional thinking"
                      className="rounded-2xl shadow-2xl object-cover w-full h-full"
                    />
                  </div>

                  {/* Right side – cards */}
                  <div className="space-y-8">
                    {/* Card 1 – We have an IT department */}
                    <div className="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-[#3A1078]/50 hover:-translate-y-1">
                      <div className="p-8 lg:p-10">
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">
                              We have an IT department
                            </h3>
                            <p className="mt-2 text-gray-600">
                              Partner with us for IT management services to grow
                              your existing IT infrastructure
                            </p>
                          </div>
                          <div className="flex-shrink-0 ml-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                              <svg
                                className="w-10 h-10 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 – We don’t have an IT department */}
                    <div className="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-[#3A1078]/50 hover:-translate-y-1">
                      <div className="p-8 lg:p-10">
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">
                              We don’t have an IT department
                            </h3>
                            <p className="mt-2 text-gray-600">
                              Work with us as your one-stop shop for IT
                              management and solutions
                            </p>
                          </div>
                          <div className="flex-shrink-0 ml-6">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                              <svg
                                className="w-10 h-10 text-red-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA at the bottom */}
                    <div className="text-center pt-8">
                      <p className="text-lg text-gray-600 mb-6">
                        Discover how we can help your business with managed IT
                        services.
                      </p>
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#3A1078] to-[#4E31AA] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                      >
                        Discover now
                        <ChevronRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Insights & Blog Section */}
      {activeTab === "insights" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12 animate-shimmer-fade-in">
            <h2 className="text-3xl font-bold mb-4">
              Expert Perspectives & Insights
            </h2>
            <p className="text-gray-600 text-lg">
              Stay informed with the latest technology trends, cybersecurity
              insights, and digital transformation strategies.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {insights.map((post, index) => (
              <div
                key={post.id}
                className="group bg-gradient-to-br from-gray-50/50 to-white/50 rounded-xl border border-gray-200/50 overflow-hidden transition-all duration-500 hover:border-[#3A1078]/60 hover:shadow-xl hover:shadow-[#3A1078]/20 hover:-translate-y-1 animate-stagger-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-gradient-to-r from-[#3A1078]/10 to-[#4E31AA]/10 rounded-full text-xs font-medium text-[#3A1078] border border-[#3A1078]/30">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold group-hover:text-[#3A1078] transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 border-t border-gray-200/50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3A1078] to-[#4E31AA] flex items-center justify-center text-xs font-bold text-white">
                        {post.author
                          .split(" ")
                          .map((w) => w[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-700">
                          {post.author}
                        </p>
                        <p className="text-xs text-gray-500">{post.readTime}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedInsight(index)}
                      className="flex items-center gap-1 text-[#3A1078] hover:text-[#4E31AA] transition-colors duration-300 group cursor-pointer"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300 animate-shake-horizontal" />
                    </button>
                  </div>
                </div>

                <div className="h-1 bg-gradient-to-r from-[#3A1078]/0 via-[#3A1078]/50 to-[#4E31AA]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 animate-gradient-flow"></div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 animate-shimmer-fade-in">
            <div className="relative overflow-hidden bg-gradient-to-br from-[#3A1078]/5 via-[#4E31AA]/5 to-[#FEA405]/5 rounded-2xl border border-[#3A1078]/30 p-8 lg:p-12 animate-wave-ripple">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#3A1078]/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="text-gray-600 mb-6">
                  Subscribe to our newsletter for the latest insights, industry
                  trends, and expert analysis delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-50/50 border border-gray-200/50 rounded-lg focus:outline-none focus:border-[#3A1078]/60 text-gray-900 placeholder-gray-500 backdrop-blur-sm"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-[#3A1078] to-[#4E31AA] rounded-lg font-semibold text-white whitespace-nowrap transition-all duration-300 hover:shadow-lg hover:shadow-[#3A1078]/50">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Resources Section */}
      {activeTab === "resources" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12 animate-shimmer-fade-in">
            <h2 className="text-3xl font-bold mb-4">Downloadable Resources</h2>
            <p className="text-gray-600 text-lg">
              Access whitepapers, guides, and checklists to help you plan,
              secure, and optimize your IT operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div
                key={resource.id}
                className="group relative bg-gradient-to-br from-gray-50/50 to-white/50 rounded-xl border border-gray-200/50 p-6 transition-all duration-500 hover:border-[#3A1078]/60 hover:shadow-xl hover:shadow-[#3A1078]/20 animate-stagger-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3A1078]/10 to-[#4E31AA]/10 border border-[#3A1078]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                      <resource.icon className="w-7 h-7 text-[#3A1078]" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-lg font-bold group-hover:text-[#3A1078] transition-colors duration-300">
                        {resource.title}
                      </h3>
                      <span className="flex-shrink-0 px-2 py-1 bg-gray-100/50 rounded text-xs font-medium text-gray-700">
                        {resource.format}
                      </span>
                    </div>

                    <span className="inline-block px-2 py-1 bg-[#FEA405]/20 border border-[#FEA405]/30 rounded text-xs font-medium text-[#FEA405] mb-3">
                      {resource.type}
                    </span>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {resource.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {resource.downloads} downloads
                      </span>
                      <button
                        onClick={downloadPDF}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3A1078] to-[#4E31AA] rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#3A1078]/50 group-hover:-translate-y-0.5"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#3A1078]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-rotate-gentle"></div>
              </div>
            ))}
          </div>

          {/* Custom Resource Request */}
          <div className="mt-16 animate-shimmer-fade-in">
            <div className="bg-gradient-to-r from-gray-50/50 to-white/50 rounded-2xl border border-gray-200/50 p-8 lg:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#3A1078]/10 to-[#4E31AA]/10 border border-[#3A1078]/30 flex items-center justify-center animate-pulse-glow">
                  <BookOpen className="w-8 h-8 text-[#3A1078]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Need a Custom Resource?
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Can't find what you're looking for? Our team can create
                  tailored resources specific to your industry, compliance
                  requirements, or technical challenges.
                </p>
                <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#3A1078] to-[#4E31AA] rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#3A1078]/50 hover:-translate-y-0.5">
                  Request Custom Resource
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
        @keyframes expand-shimmer {
          0% {
            transform: scaleX(0);
            background-position: 0% 50%;
          }
          50% {
            transform: scaleX(1.1);
            background-position: 100% 50%;
          }
          100% {
            transform: scaleX(1);
            background-position: 0% 50%;
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
        @keyframes bounce-arrow {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(3px);
          }
        }
        @keyframes shake-horizontal {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-2px);
          }
          75% {
            transform: translateX(2px);
          }
        }
        @keyframes gradient-flow {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
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
        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(58, 16, 120, 0.4);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(58, 16, 120, 0);
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
        @keyframes morph-fade-in {
          0% {
            opacity: 0;
            transform: scale(0.9) blur(5px);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05) blur(2px);
          }
          100% {
            opacity: 1;
            transform: scale(1) blur(0);
          }
        }
        @keyframes scale-bounce {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
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
        .animate-expand-shimmer {
          background-size: 200% 200%;
          animation: expand-shimmer 0.6s ease-out forwards;
        }
        .animate-stagger-slide-up {
          animation: stagger-slide-up 0.8s ease-out forwards;
        }
        .animate-bounce-arrow {
          animation: bounce-arrow 1.5s ease-in-out infinite;
        }
        .animate-shake-horizontal {
          animation: shake-horizontal 0.5s ease-in-out;
        }
        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradient-flow 3s ease infinite;
        }
        .animate-wave-ripple {
          animation: wave-ripple 4s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s linear infinite;
        }
        .animate-rotate-gentle {
          animation: rotate-gentle 20s linear infinite;
        }
        .animate-morph-fade-in {
          animation: morph-fade-in 0.8s ease-out forwards;
        }
        .animate-scale-bounce {
          animation: scale-bounce 0.6s ease-out forwards;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .prose {
          color: #6b7280;
        }
        .prose h4 {
          color: #3a1078;
          font-weight: 600;
        }
        .prose p {
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
};

export default CaseStudies;
