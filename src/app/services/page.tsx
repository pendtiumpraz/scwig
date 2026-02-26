"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiCog, HiBeaker, HiLibrary, HiShieldCheck, HiOutlinePuzzle } from "react-icons/hi";

const services = [
    {
        id: "cap-engineering",
        icon: HiCog,
        title: "Cap Engineering Technology",
        subtitle: "Structural Mapping & Design",
        description: "Our core engineering department focuses on cap structural mapping. Using monofilament scalp simulation and full lace tension distribution analysis, we develop caps that maintain structural integrity without compromising weight or breathability. We support full custom cap engineering based on specific client demographic head sizing and lifestyle requirements.",
        image: "/images/services/custom-wig.jpg",
        features: [
            "Lace front structural mapping",
            "Monofilament scalp simulation",
            "PU base adhesion optimization",
            "Hybrid combination (Lace+PU+Mono)",
            "Density mapping development"
        ]
    },
    {
        id: "material-engineering",
        icon: HiBeaker,
        title: "Material Engineering",
        subtitle: "Fiber & Cuticle Control",
        description: "Materials are tested and controlled at the microscopic level. For human hair, we implement strict cuticle alignment protocols to prevent inversion tangling. For synthetic fibers, we perform extensive heat resistance testing, shine level calibration, and texture memory engineering to ensure longevity and natural appearance under stress.",
        image: "/images/services/styling.jpg",
        features: [
            "Human hair cuticle alignment (Remy)",
            "Synthetic heat resistance testing",
            "Shine level scale calibration",
            "Chemical processing stress tests",
            "Fade-resistance UV exposure"
        ]
    },
    {
        id: "manufacturing",
        icon: HiLibrary,
        title: "Manufacturing System",
        subtitle: "Standardized Flow Engineering",
        description: "The factory floor at PT Novakor is designed for peak operational efficiency. By utilizing production flow engineering and workstation efficiency layouts, we minimize handling time and reduce the margin of human error. Our capacity planning models guarantee timely delivery regardless of order volume scale.",
        image: "/images/services/maintenance.jpg",
        features: [
            "Inline production flow optimization",
            "Ergonomic workstation layouts",
            "Digital process tracking",
            "Yield rate capacity planning",
            "Climate-controlled assembly zones"
        ]
    },
    {
        id: "quality",
        icon: HiShieldCheck,
        title: "Quality Engineering & Testing",
        subtitle: "Gate System Verification",
        description: "Quality is not an afterthought; it is engineered into the system. Our Quality Control Gate System ensures that zero defects pass to the next workstation. Final products undergo rigorous durability simulations including UV degradation, humidity exposure testing, and fiber strength tests to meet international compliance standards.",
        image: "/images/services/custom-wig.jpg",
        features: [
            "Multi-gate inline QC system",
            "Durability simulation (Washing/UV)",
            "Fiber tensile strength testing",
            "Root color consistency metrics",
            "End-to-end unit traceability"
        ]
    },
    {
        id: "oem",
        icon: HiOutlinePuzzle,
        title: "OEM Engineering Solutions",
        subtitle: "End-to-End Technical Partnership",
        description: "PT Novakor serves as an extension of your brand's technical team. Beyond just manufacturing, we provide comprehensive OEM solutions starting from initial technical requirement analysis, through prototype engineering, scaling up to mass production, and long-term continuous improvement partnerships.",
        image: "/images/services/styling.jpg",
        features: [
            "Material selection consultation",
            "Prototype & sampling engineering",
            "White-label technical documentation",
            "Scalable MOQ ramp-up planning",
            "Long-term R&D partnership"
        ]
    }
];

export default function ServicesPage() {
    const pageRef = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        const handleScroll = () => {
            const sections = services.map((s) => document.getElementById(s.id));
            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isClient]);

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
                gsap.fromTo(
                    ".services-hero-content > *",
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: "power3.out" }
                );

                gsap.fromTo(
                    ".service-block",
                    { y: 80, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        stagger: 0.2,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".services-list",
                            start: "top 80%",
                        },
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
        <div ref={pageRef} className="bg-[#0D0D0D] relative">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/services/maintenance.jpg"
                        alt="Engineering Services"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#0D0D0D]/90 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D0D0D]/70 to-[#0D0D0D]" />
                </div>

                <div className="services-hero-content relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-12 h-[1px] bg-[#D4AF37]" />
                        <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em]">Engineering Capabilities</span>
                        <div className="w-12 h-[1px] bg-[#D4AF37]" />
                    </div>

                    <h1 className="font-display text-4xl md:text-6xl text-white mb-6">
                        Systematic <span className="text-gold-gradient">Production Services</span>
                    </h1>

                    <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto leading-relaxed">
                        From material science configuration to multigate quality control tracking, our facility offers
                        complete end-to-end OEM engineering scaling capabilities.
                    </p>
                </div>
            </section>

            {/* Sticky Navigation */}
            <nav className="sticky top-[72px] lg:top-[88px] z-40 bg-[#1A1A1A]/95 backdrop-blur-md border-y border-[#D4AF37]/20 py-4 hidden md:block">
                <div className="container-custom">
                    <ul className="flex justify-between items-center max-w-5xl mx-auto text-xs uppercase tracking-widest font-mono">
                        {services.map((service) => (
                            <li key={service.id}>
                                <a
                                    href={`#${service.id}`}
                                    className={`transition-colors flex items-center gap-2 ${activeSection === service.id
                                        ? "text-[#D4AF37]"
                                        : "text-[#A0A0A0] hover:text-white"
                                        }`}
                                >
                                    <service.icon className={`text-lg ${activeSection === service.id ? 'animate-pulse' : ''}`} />
                                    <span>{service.title.split(" ")[0]}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Services List */}
            <section className="services-list py-24">
                <div className="container-custom">
                    <div className="space-y-32">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                id={service.id}
                                className={`service-block scroll-mt-32 md:scroll-mt-48 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center`}
                            >
                                {/* Media Content */}
                                <div className={`relative ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                                    <div className="relative aspect-[4/3] w-full border border-[#D4AF37]/30 p-2 overflow-hidden bg-[#1A1A1A]">
                                        <div className="absolute inset-0 z-10 opacity-20 bg-[linear-gradient(rgba(212,175,55,1)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,1)_1px,transparent_1px)] bg-[size:20px_20px]" />

                                        <div className="relative h-full w-full">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                            />
                                        </div>
                                    </div>

                                    {/* Tech Data Box Overlay */}
                                    <div className={`absolute -bottom-8 ${index % 2 !== 0 ? "-left-8 shadow-[-10px_10px_30px_rgba(0,0,0,0.5)]" : "-right-8 shadow-[10px_10px_30px_rgba(0,0,0,0.5)]"} bg-[#0D0D0D] p-6 border border-[#D4AF37]/50 max-w-[250px] z-20 hidden md:block`}>
                                        <div className="flex items-center gap-3 mb-2 text-[#D4AF37]">
                                            <service.icon className="text-2xl" />
                                            <p className="font-mono text-xs uppercase tracking-widest">
                                                System ID: {String(index + 1).padStart(2, '0')}
                                            </p>
                                        </div>
                                        <p className="text-[#A0A0A0] text-xs uppercase tracking-wider">{service.title}</p>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className={`${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-[1px] bg-[#D4AF37]" />
                                        <span className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-medium">
                                            {service.subtitle}
                                        </span>
                                    </div>

                                    <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                                        {service.title}
                                    </h2>

                                    <p className="text-[#A0A0A0] text-base leading-relaxed mb-8">
                                        {service.description}
                                    </p>

                                    {/* Capabilities List */}
                                    <div className="bg-[#1A1A1A]/50 p-6 border border-[#D4AF37]/20 rounded-sm">
                                        <h3 className="font-mono text-sm text-[#D4AF37] mb-4 uppercase tracking-[0.2em] flex items-center gap-2">
                                            <HiCog className="text-lg" /> Implementation Capabilities
                                        </h3>

                                        <ul className="space-y-3">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2" />
                                                    <span className="text-[#A0A0A0] text-sm">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-8">
                                        <Link href="/contact" className="btn-outline text-xs inline-flex items-center gap-2">
                                            Consult {service.title} <span className="text-lg">→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
