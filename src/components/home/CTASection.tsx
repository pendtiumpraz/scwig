"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function CTASection() {
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
                    ".cta-content > *",
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        stagger: 0.15,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
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
        <section
            ref={sectionRef}
            className="relative py-24 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D]" />

            {/* Gold Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 via-transparent to-[#D4AF37]/10" />

            {/* Decorative Lines */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

            {/* Floating Gold Elements */}
            <div className="absolute top-12 left-12 text-[#D4AF37]/20 text-8xl font-display">✦</div>
            <div className="absolute bottom-12 right-12 text-[#D4AF37]/20 text-8xl font-display">✦</div>

            <div className="container-custom relative z-10">
                <div className="cta-content text-center max-w-3xl mx-auto">
                    {/* Decorative Element */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                        <span className="text-[#D4AF37] text-2xl">✦</span>
                        <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
                    </div>

                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                        Ready for Your <span className="text-gold-gradient">Transformation</span>?
                    </h2>

                    <p className="font-elegant text-xl text-[#A0A0A0] mb-10 max-w-xl mx-auto">
                        Book a complimentary consultation with our expert stylists and discover
                        the perfect wig that matches your unique style and personality.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-gold">
                            Schedule Consultation
                        </Link>
                        <Link href="/branches" className="btn-outline">
                            Find Nearest Branch
                        </Link>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-[#D4AF37]/20">
                        <div className="text-center">
                            <p className="text-[#D4AF37] font-display text-2xl mb-1">100%</p>
                            <p className="text-[#A0A0A0] text-xs uppercase tracking-wider">Satisfaction Guaranteed</p>
                        </div>
                        <div className="text-center">
                            <p className="text-[#D4AF37] font-display text-2xl mb-1">Free</p>
                            <p className="text-[#A0A0A0] text-xs uppercase tracking-wider">Initial Consultation</p>
                        </div>
                        <div className="text-center">
                            <p className="text-[#D4AF37] font-display text-2xl mb-1">Premium</p>
                            <p className="text-[#A0A0A0] text-xs uppercase tracking-wider">Quality Materials</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-8 left-8 w-24 h-24 border-l border-t border-[#D4AF37]/30" />
            <div className="absolute top-8 right-8 w-24 h-24 border-r border-t border-[#D4AF37]/30" />
            <div className="absolute bottom-8 left-8 w-24 h-24 border-l border-b border-[#D4AF37]/30" />
            <div className="absolute bottom-8 right-8 w-24 h-24 border-r border-b border-[#D4AF37]/30" />
        </section>
    );
}
