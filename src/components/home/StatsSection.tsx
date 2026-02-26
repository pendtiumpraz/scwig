"use client";

import { useEffect, useRef, useState } from "react";
import { HiCog, HiBeaker, HiTemplate, HiShieldCheck } from "react-icons/hi";

const highlights = [
    {
        icon: HiCog,
        title: "Precision Cap Engineering",
        description: "Engineered cap structures with structural mapping and tension distribution analysis",
    },
    {
        icon: HiBeaker,
        title: "Material Science Expertise",
        description: "Advanced hair fiber testing — cuticle alignment, heat resistance, and texture memory control",
    },
    {
        icon: HiTemplate,
        title: "Structured Production System",
        description: "Flow-engineered manufacturing with workstation efficiency layout and capacity planning",
    },
    {
        icon: HiShieldCheck,
        title: "Quality Assurance Engineering",
        description: "Multi-gate QC system with durability simulation, fiber strength testing, and traceability",
    },
];

export default function StatsSection() {
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
                    ".highlight-item",
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
            className="relative py-24 bg-[#1A1A1A] overflow-hidden"
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
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] font-medium">
                        Engineering Highlights
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {highlights.map((item, index) => (
                        <div
                            key={item.title}
                            className="highlight-item text-center relative group p-6"
                        >
                            {index < highlights.length - 1 && (
                                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-[#D4AF37]/20" />
                            )}

                            {/* Icon */}
                            <div className="w-16 h-16 mx-auto mb-5 border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors duration-300">
                                <item.icon className="text-[#D4AF37] text-2xl group-hover:text-[#0D0D0D] transition-colors duration-300" />
                            </div>

                            {/* Title */}
                            <h3 className="font-display text-lg text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[#A0A0A0] text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
