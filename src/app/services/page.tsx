"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCut, FaPalette, FaTools, FaHeart, FaGraduationCap, FaHandshake, FaCheck } from "react-icons/fa";

const services = [
    {
        id: "custom",
        icon: FaCut,
        title: "Custom Wig Creation",
        subtitle: "Your Dream Wig, Made Real",
        description: "Experience the luxury of a wig crafted exclusively for you. Our master craftsmen work with premium materials to create a wig that fits perfectly and looks naturally stunning.",
        image: "/images/services/custom-wig.jpg",
        features: [
            "Personal consultation & measurements",
            "Premium human hair or synthetic options",
            "Custom color matching to your preference",
            "Hand-tied craftsmanship for natural look",
            "Multiple fittings for perfect fit",
            "Lifetime adjustment guarantee",
        ],
        price: "Starting from Rp 5.000.000",
    },
    {
        id: "styling",
        icon: FaPalette,
        title: "Styling & Consultation",
        subtitle: "Find Your Perfect Look",
        description: "Our expert stylists help you discover the ideal wig style that complements your features. From face shape analysis to color consultation, we guide you every step of the way.",
        image: "/images/services/styling.jpg",
        features: [
            "Face shape & feature analysis",
            "Skin tone color matching",
            "Lifestyle consideration",
            "Try-before-you-buy experience",
            "Styling demonstration",
            "Care & maintenance education",
        ],
        price: "Free with purchase",
    },
    {
        id: "maintenance",
        icon: FaTools,
        title: "Maintenance & Repair",
        subtitle: "Keep Your Wig Flawless",
        description: "Extend the life and beauty of your investment with our professional maintenance services. From deep cleaning to complete restoration, we keep your wig looking brand new.",
        image: "/images/services/maintenance.jpg",
        features: [
            "Deep cleaning & conditioning",
            "Restyling & reshaping",
            "Color refresh & touch-up",
            "Cap repair & adjustment",
            "Strand replacement",
            "Complete restoration",
        ],
        price: "Starting from Rp 250.000",
    },
    {
        id: "medical",
        icon: FaHeart,
        title: "Medical Wigs",
        subtitle: "Compassionate Care",
        description: "We understand the sensitive nature of medical hair loss. Our dedicated team provides discreet, compassionate service with specialized wigs designed for comfort and confidence.",
        image: "/images/services/custom-wig.jpg",
        features: [
            "Private consultation rooms",
            "Sensitive scalp-friendly caps",
            "Lightweight & breathable designs",
            "Insurance documentation assistance",
            "Priority scheduling",
            "Ongoing support & care",
        ],
        price: "Personalized pricing",
    },
    {
        id: "training",
        icon: FaGraduationCap,
        title: "Training Academy",
        subtitle: "Learn from the Experts",
        description: "Join our professional training programs and learn the art of wig making and styling. Perfect for aspiring stylists or salon owners looking to expand their services.",
        image: "/images/services/styling.jpg",
        features: [
            "Professional certification program",
            "Hands-on workshop sessions",
            "Small class sizes",
            "Industry expert instructors",
            "Business development guidance",
            "Ongoing mentorship",
        ],
        price: "Contact for program details",
    },
    {
        id: "wholesale",
        icon: FaHandshake,
        title: "Wholesale Partnership",
        subtitle: "Grow Your Business",
        description: "Partner with SCWIG for wholesale wig supply. We offer competitive pricing, extensive variety, and dedicated support to help your business thrive.",
        image: "/images/services/maintenance.jpg",
        features: [
            "Competitive wholesale pricing",
            "Extensive product catalog",
            "Custom branding options",
            "Marketing material support",
            "Dedicated account manager",
            "Flexible payment terms",
        ],
        price: "Contact for partnership details",
    },
];

export default function ServicesPage() {
    const pageRef = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        let ctx: ReturnType<typeof import("gsap").gsap.context> | null = null;

        const initAnimations = async () => {
            const gsapModule = await import("gsap");
            const ScrollTriggerModule = await import("gsap/ScrollTrigger");

            const gsap = gsapModule.default;
            const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;

            gsap.registerPlugin(ScrollTrigger);

            ctx = gsap.context(() => {
                gsap.fromTo(
                    ".services-hero-content > *",
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power3.out" }
                );

                services.forEach((service) => {
                    gsap.fromTo(
                        `#${service.id} .service-image`,
                        { x: -80, opacity: 0 },
                        {
                            x: 0, opacity: 1, duration: 1, ease: "power3.out",
                            scrollTrigger: { trigger: `#${service.id}`, start: "top 70%" },
                        }
                    );

                    gsap.fromTo(
                        `#${service.id} .service-content > *`,
                        { x: 50, opacity: 0 },
                        {
                            x: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power3.out",
                            scrollTrigger: { trigger: `#${service.id}`, start: "top 70%" },
                        }
                    );
                });
            }, pageRef);
        };

        initAnimations();

        return () => {
            if (ctx) ctx.revert();
        };
    }, [isClient]);

    return (
        <div ref={pageRef}>
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[#0D0D0D]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent" />

                <div className="services-hero-content relative z-10 text-center px-4">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                        <span className="text-[#D4AF37]">✦</span>
                        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
                    </div>
                    <h1 className="font-display text-5xl md:text-7xl text-white mb-4">Our Services</h1>
                    <p className="font-elegant text-xl md:text-2xl text-[#F4E4BC]">Excellence in Every Strand</p>
                </div>
            </section>

            {/* Services Navigation */}
            <section className="sticky top-[72px] z-40 bg-[#1A1A1A] border-b border-[#D4AF37]/20">
                <div className="container-custom">
                    <div className="flex overflow-x-auto py-4 gap-4 scrollbar-hide">
                        {services.map((service) => (
                            <a
                                key={service.id}
                                href={`#${service.id}`}
                                className="flex-shrink-0 px-4 py-2 text-sm text-[#A0A0A0] hover:text-[#D4AF37] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all uppercase tracking-wider"
                            >
                                {service.title}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Sections */}
            {services.map((service, index) => (
                <section
                    key={service.id}
                    id={service.id}
                    className={`section-padding ${index % 2 === 0 ? "bg-[#0D0D0D]" : "bg-[#1A1A1A]"}`}
                >
                    <div className="container-custom">
                        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                            }`}>
                            {/* Image */}
                            <div className={`service-image relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-4 border border-[#D4AF37]/30" />
                                </div>

                                {/* Icon Badge */}
                                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#D4AF37] flex items-center justify-center">
                                    <service.icon className="text-[#0D0D0D] text-3xl" />
                                </div>

                                <div className="absolute -top-4 -left-4 w-12 h-12 border-l-2 border-t-2 border-[#D4AF37]" />
                            </div>

                            {/* Content */}
                            <div className={`service-content ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-[1px] bg-[#D4AF37]" />
                                    <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em]">
                                        {service.subtitle}
                                    </span>
                                </div>

                                <h2 className="section-title mb-4">{service.title}</h2>

                                <p className="text-[#A0A0A0] text-lg leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                                    {service.features.map((feature) => (
                                        <div key={feature} className="flex items-start gap-3">
                                            <FaCheck className="text-[#D4AF37] mt-1 flex-shrink-0" />
                                            <span className="text-white text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Price & CTA */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 border-t border-[#D4AF37]/20">
                                    <div>
                                        <p className="text-[#A0A0A0] text-xs uppercase tracking-wider mb-1">Investment</p>
                                        <p className="text-[#D4AF37] font-display text-xl">{service.price}</p>
                                    </div>
                                    <Link href="/contact" className="btn-gold sm:ml-auto">
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5" />

                <div className="container-custom relative z-10 text-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                        <span className="text-[#D4AF37] text-2xl">✦</span>
                        <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
                    </div>

                    <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
                        Not Sure Which Service You Need?
                    </h2>

                    <p className="font-elegant text-xl text-[#A0A0A0] mb-10 max-w-2xl mx-auto">
                        Our expert consultants are here to help you find the perfect solution
                        for your unique needs. Schedule a free consultation today.
                    </p>

                    <Link href="/contact" className="btn-gold">
                        Schedule Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
