"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    const heroRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient || !heroRef.current) return;

        let ctx: ReturnType<typeof import("gsap").gsap.context> | null = null;
        let mounted = true;

        const initAnimations = async () => {
            if (!mounted || !heroRef.current) return;

            const gsapModule = await import("gsap");
            const ScrollTriggerModule = await import("gsap/ScrollTrigger");

            if (!mounted || !heroRef.current) return;

            const gsap = gsapModule.default;
            const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;

            gsap.registerPlugin(ScrollTrigger);

            ctx = gsap.context(() => {
                // Initial animation
                const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

                tl.fromTo(
                    titleRef.current,
                    { y: 100, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.2 }
                )
                    .fromTo(
                        subtitleRef.current,
                        { y: 50, opacity: 0 },
                        { y: 0, opacity: 1, duration: 1 },
                        "-=0.6"
                    )
                    .fromTo(
                        ctaRef.current,
                        { y: 30, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.8 },
                        "-=0.4"
                    )
                    .fromTo(
                        scrollIndicatorRef.current,
                        { opacity: 0 },
                        { opacity: 1, duration: 0.6 },
                        "-=0.2"
                    );

                // Parallax effect on scroll
                gsap.to(".hero-bg", {
                    yPercent: 30,
                    ease: "none",
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                });

                // Fade out content on scroll
                gsap.to(".hero-content", {
                    opacity: 0,
                    y: -50,
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: "center center",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            }, heroRef);
        };

        initAnimations();

        return () => {
            mounted = false;
            if (ctx) ctx.revert();
        };
    }, [isClient]);

    return (
        <section
            ref={heroRef}
            className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div className="hero-bg absolute inset-0 z-0">
                <Image
                    src="/images/hero/hero-main.jpg"
                    alt="SCWIG Premium Wigs"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
            </div>

            {/* Gold Particles Effect - Only render on client to avoid hydration mismatch */}
            {isClient && (
                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-[#D4AF37] rounded-full opacity-30 animate-float"
                            style={{
                                left: `${((i * 17) % 100)}%`,
                                top: `${((i * 23) % 100)}%`,
                                animationDelay: `${(i * 0.25) % 5}s`,
                                animationDuration: `${3 + (i % 4)}s`,
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Content */}
            <div className="hero-content relative z-20 text-center px-4 max-w-5xl mx-auto">
                {/* Decorative Element */}
                <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                    <span className="text-[#D4AF37] text-2xl">✦</span>
                    <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
                </div>

                <h1
                    ref={titleRef}
                    className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide"
                >
                    <span className="text-gold-gradient">Elegance</span> Reimagined
                </h1>

                <p
                    ref={subtitleRef}
                    className="font-elegant text-xl md:text-2xl lg:text-3xl text-[#F4E4BC] mb-10 tracking-wide"
                >
                    Premium Wigs for the Extraordinary You
                </p>

                <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/services" className="btn-gold">
                        Explore Collection
                    </Link>
                    <Link href="/contact" className="btn-outline">
                        Book Consultation
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                ref={scrollIndicatorRef}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-[#A0A0A0] text-xs uppercase tracking-[0.3em]">
                    Scroll
                </span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent relative">
                    <div className="absolute top-0 w-full h-4 bg-[#D4AF37] animate-bounce" />
                </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-24 left-8 w-20 h-20 border-l border-t border-[#D4AF37]/30 z-10" />
            <div className="absolute top-24 right-8 w-20 h-20 border-r border-t border-[#D4AF37]/30 z-10" />
            <div className="absolute bottom-24 left-8 w-20 h-20 border-l border-b border-[#D4AF37]/30 z-10" />
            <div className="absolute bottom-24 right-8 w-20 h-20 border-r border-b border-[#D4AF37]/30 z-10" />
        </section>
    );
}
