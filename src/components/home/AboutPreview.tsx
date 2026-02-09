"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPreview() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Image reveal animation
            gsap.fromTo(
                ".about-image",
                { x: -100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Content reveal animation
            gsap.fromTo(
                ".about-content > *",
                { x: 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="section-padding bg-[#0D0D0D]">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Column */}
                    <div className="about-image relative">
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                                src="/images/about/about-story.jpg"
                                alt="SCWIG Workshop"
                                fill
                                className="object-cover"
                            />
                            {/* Gold Frame */}
                            <div className="absolute inset-4 border border-[#D4AF37]/30 pointer-events-none" />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 lg:bottom-8 lg:-right-8 bg-[#D4AF37] p-6 lg:p-8">
                            <p className="font-display text-4xl lg:text-5xl text-[#0D0D0D] font-bold">
                                15+
                            </p>
                            <p className="text-[#0D0D0D] text-sm uppercase tracking-wider font-medium">
                                Years of<br />Excellence
                            </p>
                        </div>

                        {/* Corner Decoration */}
                        <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-[#D4AF37]" />
                    </div>

                    {/* Content Column */}
                    <div className="about-content">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-[1px] bg-[#D4AF37]" />
                            <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] font-medium">
                                Our Story
                            </span>
                        </div>

                        <h2 className="section-title mb-6">
                            Crafting Beauty<br />
                            <span className="text-gold-gradient">Since 2009</span>
                        </h2>

                        <p className="text-[#A0A0A0] text-lg leading-relaxed mb-6">
                            Founded with a vision to redefine beauty and confidence, SCWIG has
                            grown from a small atelier to Indonesia&apos;s premier wig destination.
                            Our journey began with a simple belief: everyone deserves to feel
                            beautiful and confident.
                        </p>

                        <p className="text-[#A0A0A0] leading-relaxed mb-8">
                            Today, we pride ourselves on crafting premium wigs using the finest
                            materials, combined with expert craftsmanship that has been refined
                            over 15 years. Each wig tells a story of dedication, artistry, and
                            the pursuit of perfection.
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {[
                                "Premium Materials",
                                "Expert Craftsmanship",
                                "Personalized Service",
                                "Nationwide Reach",
                            ].map((feature) => (
                                <div key={feature} className="flex items-center gap-3">
                                    <span className="text-[#D4AF37]">✦</span>
                                    <span className="text-white text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/about"
                            className="inline-flex items-center gap-3 text-[#D4AF37] font-medium uppercase tracking-wider text-sm group"
                        >
                            <span>Discover Our Story</span>
                            <span className="group-hover:translate-x-2 transition-transform">
                                →
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
