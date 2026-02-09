"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
    {
        title: "Custom Wig Creation",
        description:
            "Personalized wigs crafted to your exact specifications. From material selection to perfect fit, we create your dream wig.",
        image: "/images/services/custom-wig.jpg",
        href: "/services#custom",
    },
    {
        title: "Styling & Consultation",
        description:
            "Expert stylists help you find the perfect look. We analyze your face shape, skin tone, and lifestyle for the ideal match.",
        image: "/images/services/styling.jpg",
        href: "/services#styling",
    },
    {
        title: "Maintenance & Care",
        description:
            "Professional wig care services to keep your investment looking flawless. Deep cleaning, conditioning, and restoration.",
        image: "/images/services/maintenance.jpg",
        href: "/services#maintenance",
    },
];

export default function ServicesPreview() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient || !sectionRef.current) return;

        let ctx: ReturnType<typeof import("gsap").gsap.context> | null = null;
        let mounted = true;

        const initAnimations = async () => {
            if (!mounted || !sectionRef.current) return;

            const gsapModule = await import("gsap");
            const ScrollTriggerModule = await import("gsap/ScrollTrigger");

            if (!mounted || !sectionRef.current) return;

            const gsap = gsapModule.default;
            const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;

            gsap.registerPlugin(ScrollTrigger);

            ctx = gsap.context(() => {
                gsap.fromTo(
                    ".services-title",
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );

                gsap.fromTo(
                    ".service-card",
                    { y: 80, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        stagger: 0.2,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".services-grid",
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }, sectionRef);
        };

        initAnimations();

        return () => {
            mounted = false;
            if (ctx) ctx.revert();
        };
    }, [isClient]);

    return (
        <section ref={sectionRef} className="section-padding bg-[#1A1A1A]">
            <div className="container-custom">
                {/* Section Header */}
                <div className="services-title text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                        <span className="text-[#D4AF37]">✦</span>
                        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
                    </div>

                    <h2 className="section-title mb-4">Our Services</h2>
                    <p className="section-subtitle max-w-2xl mx-auto">
                        Excellence in every strand. Discover our comprehensive range of
                        premium wig services designed for your unique needs.
                    </p>

                    <div className="divider-gold mt-8" />
                </div>

                {/* Services Grid */}
                <div className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            href={service.href}
                            className="service-card card-elegant group overflow-hidden"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />

                                {/* Gold Overlay on Hover */}
                                <div className="absolute inset-0 bg-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-[#D4AF37]">✦</span>
                                    <h3 className="font-display text-xl text-white group-hover:text-[#D4AF37] transition-colors">
                                        {service.title}
                                    </h3>
                                </div>

                                <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4">
                                    {service.description}
                                </p>

                                <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-medium uppercase tracking-wider">
                                    <span>Learn More</span>
                                    <span className="group-hover:translate-x-2 transition-transform">
                                        →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <Link href="/services" className="btn-outline">
                        View All Services
                    </Link>
                </div>
            </div>
        </section>
    );
}
