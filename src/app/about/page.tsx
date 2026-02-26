"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HiCog, HiBeaker, HiLibrary, HiCheckCircle, HiLightBulb, HiShieldCheck } from "react-icons/hi";

const timeline = [
    { year: "2000", title: "Engineering Foundation", description: "Established as a specialized wig manufacturing engineering facility" },
    { year: "2005", title: "ISO Certification", description: "Achieved international quality management standards" },
    { year: "2010", title: "Material Innovation Labs", description: "Launched dedicated R&D facility for synthetic fiber analysis" },
    { year: "2015", title: "Automated Production", description: "Integrated semi-automated cap construction workflows" },
    { year: "2020", title: "Global OEM Expansion", description: "Expanded capacity to serve global top-tier wig brands" },
    { year: "2024", title: "Advanced Quality Gates", description: "Implemented multi-stage digital tracking and QA simulation" },
];

const values = [
    { icon: HiCog, title: "Precision", description: "Calculated accuracy in every construction step" },
    { icon: HiLibrary, title: "System Workflow", description: "Standardized processes ensuring absolute consistency" },
    { icon: HiShieldCheck, title: "Traceability", description: "Transparent tracking from raw material to finished product" },
    { icon: HiLightBulb, title: "Continuous Improvement", description: "Iterative upgrades to manufacturing efficiency" },
    { icon: HiCheckCircle, title: "Compliance", description: "Strict adherence to international manufacturing standards" },
];

const capabilities = [
    { name: "Cap Structural Engineering", metric: "99.8%", label: "Tolerance Accuracy" },
    { name: "Fiber Tensile Strength", metric: "ISO", label: "Certified Testing" },
    { name: "Production Capacity", metric: "500k", label: "Units Annually" },
    { name: "Quality Checkpoints", metric: "12-Gate", label: "Verification System" },
];

export default function AboutPage() {
    const pageRef = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient || !pageRef.current) return;

        let ctx: ReturnType<typeof import("gsap").gsap.context> | null = null;
        let mounted = true;

        const initAnimations = async () => {
            if (!mounted || !pageRef.current) return;

            const gsapModule = await import("gsap");
            const ScrollTriggerModule = await import("gsap/ScrollTrigger");

            if (!mounted || !pageRef.current) return;

            const gsap = gsapModule.default;
            const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;

            gsap.registerPlugin(ScrollTrigger);

            ctx = gsap.context(() => {
                // Hero animation
                gsap.fromTo(
                    ".about-hero-content > *",
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power3.out" }
                );

                // Story section
                gsap.fromTo(
                    ".story-image",
                    { x: -100, opacity: 0 },
                    {
                        x: 0, opacity: 1, duration: 1, ease: "power3.out",
                        scrollTrigger: { trigger: ".story-section", start: "top 70%" },
                    }
                );

                gsap.fromTo(
                    ".story-content > *",
                    { x: 50, opacity: 0 },
                    {
                        x: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out",
                        scrollTrigger: { trigger: ".story-section", start: "top 70%" },
                    }
                );

                // Vision Mission
                gsap.fromTo(
                    ".vision-card, .mission-card",
                    { y: 50, opacity: 0 },
                    {
                        y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: "power3.out",
                        scrollTrigger: { trigger: ".vision-section", start: "top 70%" },
                    }
                );

                // Values
                gsap.fromTo(
                    ".value-card",
                    { y: 50, opacity: 0 },
                    {
                        y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power3.out",
                        scrollTrigger: { trigger: ".values-section", start: "top 70%" },
                    }
                );

                // Timeline
                gsap.fromTo(
                    ".timeline-item",
                    { x: -50, opacity: 0 },
                    {
                        x: 0, opacity: 1, stagger: 0.15, duration: 0.6, ease: "power3.out",
                        scrollTrigger: { trigger: ".timeline-section", start: "top 70%" },
                    }
                );

                // Metrics
                gsap.fromTo(
                    ".metric-card",
                    { y: 50, opacity: 0 },
                    {
                        y: 0, opacity: 1, stagger: 0.15, duration: 0.6, ease: "power3.out",
                        scrollTrigger: { trigger: ".metrics-section", start: "top 70%" },
                    }
                );
            }, pageRef);
        };

        initAnimations();

        return () => {
            mounted = false;
            if (ctx) ctx.revert();
        };
    }, [isClient]);

    return (
        <div ref={pageRef}>
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[#0D0D0D]" />

                {/* Engineering Pattern */}
                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden opacity-5">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
                                linear-gradient(rgba(212,175,55,1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)
                            `,
                            backgroundSize: "40px 40px",
                        }}
                    />
                </div>

                <div className="about-hero-content relative z-20 text-center px-4">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                        <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em]">Engineering DNA</span>
                        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
                    </div>
                    <h1 className="font-display text-4xl md:text-6xl text-white mb-4">PT Novakor Indonesia</h1>
                    <p className="font-elegant text-xl md:text-2xl text-[#F4E4BC]">Engineered Precision. Scalable Production.</p>
                </div>
            </section>

            {/* Story Section */}
            <section className="story-section section-padding bg-[#0D0D0D]">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="story-image relative">
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <Image src="/images/about/about-story.jpg" alt="PT Novakor Engineering Facility" fill className="object-cover" />
                                <div className="absolute inset-4 border border-[#D4AF37]/30" />
                            </div>
                            <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-[#D4AF37]" />
                            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-[#D4AF37]" />
                        </div>

                        <div className="story-content">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-[1px] bg-[#D4AF37]" />
                                <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em]">Corporate Profile</span>
                            </div>

                            <h2 className="section-title mb-6">A Legacy of <span className="text-gold-gradient">Manufacturing Science</span></h2>

                            <p className="text-[#A0A0A0] text-lg leading-relaxed mb-6">
                                PT Novakor Indonesia is a specialized OEM manufacturer that approaches wig production
                                not merely as an art, but as a rigid engineering discipline.
                            </p>

                            <p className="text-[#A0A0A0] leading-relaxed mb-6">
                                We operate on system-based manufacturing principles. From raw fiber inspection
                                to final cap assembly, every process is governed by standardized workflows,
                                precise environmental controls, and measurable QA checkpoints. We don't guess;
                                we measure, simulate, and verify.
                            </p>

                            <p className="text-[#A0A0A0] leading-relaxed">
                                Our facility is trusted by global top-tier brands because we eliminate production
                                variance. Through continuous process improvement and comprehensive capacity modeling,
                                we ensure that unit 1 and unit 10,000 are identical in structure, balance, and durability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="vision-section section-padding bg-[#1A1A1A]">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                            <span className="text-[#D4AF37]">✦</span>
                            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
                        </div>
                        <h2 className="section-title">Corporate Directive</h2>
                        <div className="divider-gold mt-6" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Vision */}
                        <div className="vision-card glass-gold p-8 lg:p-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-[#D4AF37] flex items-center justify-center">
                                    <HiCog className="text-[#0D0D0D] text-3xl" />
                                </div>
                                <h3 className="font-display text-2xl text-white">Our Vision</h3>
                            </div>
                            <p className="text-[#A0A0A0] text-lg leading-relaxed">
                                To become a globally trusted engineering-based OEM partner in the hair industry,
                                setting the standard for precision, consistency, and technological integration
                                in wig manufacturing.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="mission-card glass-gold p-8 lg:p-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-[#D4AF37] flex items-center justify-center">
                                    <HiCheckCircle className="text-[#0D0D0D] text-3xl" />
                                </div>
                                <h3 className="font-display text-2xl text-white">Our Mission</h3>
                            </div>
                            <ul className="space-y-4 text-sm md:text-base">
                                <li className="flex items-start gap-3 text-[#A0A0A0]">
                                    <span className="text-[#D4AF37] mt-1">✦</span>
                                    <span>Develop engineered cap structures</span>
                                </li>
                                <li className="flex items-start gap-3 text-[#A0A0A0]">
                                    <span className="text-[#D4AF37] mt-1">✦</span>
                                    <span>Apply material innovation and science</span>
                                </li>
                                <li className="flex items-start gap-3 text-[#A0A0A0]">
                                    <span className="text-[#D4AF37] mt-1">✦</span>
                                    <span>Maintain production precision and system compliance</span>
                                </li>
                                <li className="flex items-start gap-3 text-[#A0A0A0]">
                                    <span className="text-[#D4AF37] mt-1">✦</span>
                                    <span>Deliver scalable, consistent OEM solutions globally</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="values-section section-padding bg-[#0D0D0D]">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                            <span className="text-[#D4AF37]">✦</span>
                            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
                        </div>
                        <h2 className="section-title">Engineering Ethics</h2>
                        <p className="section-subtitle mt-4">The principles that govern our factory floor</p>
                        <div className="divider-gold mt-6" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {values.map((value) => (
                            <div key={value.title} className="value-card card-elegant p-6 text-center group">
                                <div className="w-16 h-16 mx-auto mb-4 border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors">
                                    <value.icon className="text-[#D4AF37] text-3xl group-hover:text-[#0D0D0D] transition-colors" />
                                </div>
                                <h3 className="font-display text-lg text-white mb-2">{value.title}</h3>
                                <p className="text-[#A0A0A0] text-xs">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="timeline-section section-padding bg-[#1A1A1A]">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                            <span className="text-[#D4AF37]">✦</span>
                            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
                        </div>
                        <h2 className="section-title">System Evolution</h2>
                        <p className="section-subtitle mt-4">Development of our manufacturing capabilities</p>
                        <div className="divider-gold mt-6" />
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:-translate-x-1/2" />

                        {timeline.map((item, index) => (
                            <div
                                key={item.year}
                                className={`timeline-item relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Dot */}
                                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#D4AF37] rounded-full md:-translate-x-1/2 z-10" />

                                {/* Content */}
                                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                                    <span className="text-[#D4AF37] font-display text-2xl tracking-wider">{item.year}</span>
                                    <h3 className="font-display text-xl text-white mt-1">{item.title}</h3>
                                    <p className="text-[#A0A0A0] mt-2 text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Metrics */}
            <section className="metrics-section section-padding bg-[#0D0D0D]">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                            <span className="text-[#D4AF37]">✦</span>
                            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
                        </div>
                        <h2 className="section-title">Factory Capacity</h2>
                        <div className="divider-gold mt-6" />
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {capabilities.map((cap) => (
                            <div key={cap.name} className="metric-card text-center group border border-[#D4AF37]/20 p-8 glass">
                                <p className="font-display text-4xl lg:text-5xl text-[#D4AF37] mb-2">{cap.metric}</p>
                                <h3 className="font-display text-lg text-white uppercase tracking-widest">{cap.name}</h3>
                                <p className="text-[#A0A0A0] text-xs mt-2 uppercase tracking-wide">{cap.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
