"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
    { number: 15, suffix: "+", label: "Years Experience" },
    { number: 50, suffix: "K+", label: "Happy Clients" },
    { number: 200, suffix: "+", label: "Wig Styles" },
    { number: 10, suffix: "+", label: "Branches" },
];

export default function StatsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);
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
                numbersRef.current.forEach((el, index) => {
                    if (!el) return;

                    gsap.fromTo(
                        el,
                        { innerText: 0 },
                        {
                            innerText: stats[index].number,
                            duration: 2,
                            ease: "power2.out",
                            snap: { innerText: 1 },
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: "top 80%",
                                toggleActions: "play none none reverse",
                            },
                        }
                    );
                });

                gsap.fromTo(
                    ".stat-item",
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        stagger: 0.2,
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
            className="relative py-20 bg-[#1A1A1A] overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            {/* Gold Lines */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="stat-item text-center relative group"
                        >
                            {index < stats.length - 1 && (
                                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-[#D4AF37]/20" />
                            )}

                            <div className="flex items-baseline justify-center gap-1 mb-2">
                                <span
                                    ref={(el) => { numbersRef.current[index] = el }}
                                    className="font-display text-5xl lg:text-6xl text-[#D4AF37] group-hover:text-[#F4E4BC] transition-colors"
                                >
                                    0
                                </span>
                                <span className="font-display text-3xl lg:text-4xl text-[#D4AF37] group-hover:text-[#F4E4BC] transition-colors">
                                    {stat.suffix}
                                </span>
                            </div>
                            <p className="text-[#A0A0A0] text-sm uppercase tracking-[0.2em] font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
