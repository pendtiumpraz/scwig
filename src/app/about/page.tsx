"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaEye, FaBullseye, FaHeart, FaStar, FaGem, FaLightbulb } from "react-icons/fa";

const timeline = [
    { year: "2009", title: "Company Founded", description: "Started as a small atelier with a passion for beauty" },
    { year: "2012", title: "First Flagship Store", description: "Opened our first premium showroom in Jakarta" },
    { year: "2015", title: "Custom Wig Line", description: "Launched our signature custom wig creation service" },
    { year: "2018", title: "5 Branches", description: "Expanded to 5 locations across major cities" },
    { year: "2020", title: "Online Launch", description: "Introduced virtual consultations and online ordering" },
    { year: "2023", title: "10+ Branches", description: "Now serving customers from 10+ locations nationwide" },
    { year: "2024", title: "International", description: "Partnered with global wig material suppliers" },
];

const values = [
    { icon: FaStar, title: "Excellence", description: "Uncompromising quality in every product we create" },
    { icon: FaHeart, title: "Integrity", description: "Honest and transparent practices in all we do" },
    { icon: FaLightbulb, title: "Innovation", description: "Continuous improvement and creative solutions" },
    { icon: FaGem, title: "Empathy", description: "Understanding and caring for customer needs" },
    { icon: FaEye, title: "Elegance", description: "Beauty and sophistication in every detail" },
];

const team = [
    { name: "Diana Kusuma", role: "Founder & CEO", image: "/images/testimonials/customer-1.jpg" },
    { name: "Reza Pratama", role: "Head of Design", image: "/images/testimonials/customer-3.jpg" },
    { name: "Linda Hartono", role: "Master Stylist", image: "/images/testimonials/customer-2.jpg" },
    { name: "Budi Santoso", role: "Operations Director", image: "/images/testimonials/customer-3.jpg" },
];

export default function AboutPage() {
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
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

            // Team
            gsap.fromTo(
                ".team-card",
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, stagger: 0.15, duration: 0.6, ease: "power3.out",
                    scrollTrigger: { trigger: ".team-section", start: "top 70%" },
                }
            );
        }, pageRef);

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    return (
        <div ref={pageRef}>
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[#0D0D0D]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent" />

                <div className="about-hero-content relative z-10 text-center px-4">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                        <span className="text-[#D4AF37]">✦</span>
                        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
                    </div>
                    <h1 className="font-display text-5xl md:text-7xl text-white mb-4">About SCWIG</h1>
                    <p className="font-elegant text-xl md:text-2xl text-[#F4E4BC]">Crafting Beauty Since 2009</p>
                </div>
            </section>

            {/* Story Section */}
            <section className="story-section section-padding bg-[#0D0D0D]">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="story-image relative">
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <Image src="/images/about/about-story.jpg" alt="Our Story" fill className="object-cover" />
                                <div className="absolute inset-4 border border-[#D4AF37]/30" />
                            </div>
                            <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-[#D4AF37]" />
                            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-[#D4AF37]" />
                        </div>

                        <div className="story-content">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-[1px] bg-[#D4AF37]" />
                                <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em]">Our Story</span>
                            </div>

                            <h2 className="section-title mb-6">A Journey of <span className="text-gold-gradient">Passion</span></h2>

                            <p className="text-[#A0A0A0] text-lg leading-relaxed mb-6">
                                SCWIG was born from a simple yet powerful belief: every person deserves to feel confident
                                and beautiful. In 2009, our founder Diana Kusuma started this journey from a small atelier
                                in Jakarta, driven by her passion for helping others rediscover their confidence.
                            </p>

                            <p className="text-[#A0A0A0] leading-relaxed mb-6">
                                What began as a one-woman operation has grown into Indonesia&apos;s most trusted premium wig
                                provider. Today, we serve thousands of clients across the nation, each with their unique
                                story and needs. From cancer patients seeking comfort to fashion enthusiasts exploring
                                new looks, we are honored to be part of their transformation journey.
                            </p>

                            <p className="text-[#A0A0A0] leading-relaxed">
                                Our commitment remains unchanged: to provide the highest quality wigs with personalized
                                service that makes every client feel special. We believe in the transformative power of
                                confidence, and we are dedicated to helping you discover yours.
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
                        <h2 className="section-title">Our Purpose</h2>
                        <div className="divider-gold mt-6" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Vision */}
                        <div className="vision-card glass-gold p-8 lg:p-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-[#D4AF37] flex items-center justify-center">
                                    <FaEye className="text-[#0D0D0D] text-2xl" />
                                </div>
                                <h3 className="font-display text-2xl text-white">Our Vision</h3>
                            </div>
                            <p className="text-[#A0A0A0] text-lg leading-relaxed">
                                To become Indonesia&apos;s most trusted premium wig provider, empowering individuals
                                to express their unique beauty and confidence through exceptional quality wigs
                                and personalized service.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="mission-card glass-gold p-8 lg:p-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-[#D4AF37] flex items-center justify-center">
                                    <FaBullseye className="text-[#0D0D0D] text-2xl" />
                                </div>
                                <h3 className="font-display text-2xl text-white">Our Mission</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Provide highest quality wigs using premium materials",
                                    "Deliver personalized consultation and styling services",
                                    "Create inclusive beauty solutions for all needs",
                                    "Train and develop skilled wig professionals",
                                    "Build lasting relationships with our customers",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[#A0A0A0]">
                                        <span className="text-[#D4AF37] mt-1">✦</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
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
                        <h2 className="section-title">Our Core Values</h2>
                        <p className="section-subtitle mt-4">The principles that guide everything we do</p>
                        <div className="divider-gold mt-6" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {values.map((value) => (
                            <div key={value.title} className="value-card card-elegant p-6 text-center group">
                                <div className="w-16 h-16 mx-auto mb-4 border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors">
                                    <value.icon className="text-[#D4AF37] text-2xl group-hover:text-[#0D0D0D] transition-colors" />
                                </div>
                                <h3 className="font-display text-lg text-white mb-2">{value.title}</h3>
                                <p className="text-[#A0A0A0] text-sm">{value.description}</p>
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
                        <h2 className="section-title">Our Journey</h2>
                        <p className="section-subtitle mt-4">Milestones that shaped who we are</p>
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
                                    <span className="text-[#D4AF37] font-display text-2xl">{item.year}</span>
                                    <h3 className="font-display text-xl text-white mt-1">{item.title}</h3>
                                    <p className="text-[#A0A0A0] mt-2">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="team-section section-padding bg-[#0D0D0D]">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                            <span className="text-[#D4AF37]">✦</span>
                            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
                        </div>
                        <h2 className="section-title">Meet Our Team</h2>
                        <p className="section-subtitle mt-4">The experts behind your transformation</p>
                        <div className="divider-gold mt-6" />
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member) => (
                            <div key={member.name} className="team-card text-center group">
                                <div className="relative aspect-square mb-6 overflow-hidden">
                                    <Image src={member.image} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                    <div className="absolute inset-0 border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors" />
                                </div>
                                <h3 className="font-display text-xl text-white group-hover:text-[#D4AF37] transition-colors">{member.name}</h3>
                                <p className="text-[#A0A0A0] text-sm mt-1">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
