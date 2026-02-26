"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiCheck, HiCog } from "react-icons/hi";

const products = [
    {
        id: "full-wig",
        name: "Full Wig",
        subtitle: "Max Coverage System",
        description: "Engineered for complete scalp coverage, featuring structured base design and weight balance control to eliminate localized tension. Built with multi-layer cap architecture for durability.",
        image: "/images/products/natural-wig.jpg",
        features: [
            "Structured base design",
            "Weight distribution balance control",
            "Multi-directional ventilation",
            "Reinforced perimeter tension zones"
        ]
    },
    {
        id: "lace-wig",
        name: "Lace Wig",
        subtitle: "Invisible Matrix",
        description: "Advanced lace base engineering (Lace Front / Full Lace) utilizing hairline transition technology. Focuses on structural mapping for a seamless, undetectable biomimetic scalp simulation.",
        image: "/images/products/lace-front.jpg",
        features: [
            "Hairline transition technology",
            "Structural lace mapping",
            "Variable density knotting",
            "Durable transparent mesh composite"
        ]
    },
    {
        id: "hand-tied",
        name: "Hand-Tied Wig",
        subtitle: "Precision Knotting",
        description: "A labor-intensive cap engineering feat where every fiber is manually knotted. Our system ensures precise tying torque to maximize fiber retention while maintaining completely natural multi-axis movement.",
        image: "/images/products/fashion-wig.jpg",
        features: [
            "Precision knotting torque system",
            "Multi-axis natural fiber movement",
            "High tensile strength retention",
            "Ultra-lightweight structural integrity"
        ]
    },
    {
        id: "topper",
        name: "Topper System",
        subtitle: "Targeted Coverage",
        description: "Partial coverage systems utilizing targeted density engineering. Calibrated specifically to sit flush against the client's existing bio-hair without bulk or harsh transition lines.",
        image: "/images/products/natural-wig.jpg",
        features: [
            "Targeted density mapping",
            "Flush transition edge engineering",
            "Scalp thermal dispersion tech",
            "Secure point adhesion integration"
        ]
    },
    {
        id: "toupee",
        name: "Men's Toupee",
        subtitle: "Durability Structure",
        description: "High-performance hair replacement systems engineered for active lifestyles. Focuses on base strength, adhesion compatibility, and structural endurance against UV and moisture.",
        image: "/images/products/lace-front.jpg",
        features: [
            "PU/Lace hybrid durability base",
            "Adhesion surface compatibility test",
            "Fade-resistant fiber calibration",
            "Water and sweat permeability"
        ]
    },
];

export default function ProductsPage() {
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
                gsap.fromTo(
                    ".products-hero-content > *",
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: "power3.out" }
                );

                gsap.fromTo(
                    ".product-card",
                    { y: 80, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        stagger: 0.2,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".products-section",
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
        <div ref={pageRef} className="bg-[#0D0D0D]">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/hero/hero-main.jpg"
                        alt="Manufacturing Portfolio"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#0D0D0D]/80 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D0D0D]/50 to-[#0D0D0D]" />
                </div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 z-10 opacity-30 bg-[linear-gradient(rgba(212,175,55,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

                <div className="products-hero-content relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-12 h-[1px] bg-[#D4AF37]" />
                        <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em]">Manufacturing Catalog</span>
                        <div className="w-12 h-[1px] bg-[#D4AF37]" />
                    </div>

                    <h1 className="font-display text-4xl md:text-6xl text-white mb-6">
                        Engineered <span className="text-gold-gradient">Product Portfolio</span>
                    </h1>

                    <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto leading-relaxed">
                        Explore our core manufacturing capabilities. Each product category represents an engineered solution
                        built on strict structural guidelines, precision material science, and rigorous quality limits.
                    </p>
                </div>
            </section>

            {/* Products Listing */}
            <section className="products-section section-padding">
                <div className="container-custom">
                    <div className="space-y-24">
                        {products.map((product, index) => (
                            <div
                                key={product.id}
                                id={product.id}
                                className={`product-card flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                    } gap-12 lg:gap-20 items-center`}
                            >
                                {/* Image Box */}
                                <div className="w-full lg:w-1/2">
                                    <div className="relative aspect-square md:aspect-[4/3] w-full overflow-hidden group">
                                        <div className="absolute inset-0 border border-[#D4AF37]/20 m-4 z-20 pointer-events-none transition-all duration-500 group-hover:m-6 group-hover:border-[#D4AF37]" />

                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        {/* Overlay Specifications Badge */}
                                        <div className="absolute top-8 left-8 bg-[#0D0D0D]/90 backdrop-blur border border-[#D4AF37]/50 px-4 py-2 z-30">
                                            <span className="text-[#D4AF37] font-display text-xs tracking-[0.2em] uppercase block">Platform</span>
                                            <span className="text-white font-mono text-sm tracking-widest">{product.id.toUpperCase()}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Details */}
                                <div className="w-full lg:w-1/2">
                                    <div className="flex items-center gap-3 mb-4 text-[#D4AF37]">
                                        <HiCog className="text-xl animate-[spin_10s_linear_infinite]" />
                                        <span className="text-xs tracking-[0.3em] font-medium uppercase">
                                            {product.subtitle}
                                        </span>
                                    </div>

                                    <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                                        {product.name}
                                    </h2>

                                    <p className="text-[#A0A0A0] text-base leading-relaxed mb-8">
                                        {product.description}
                                    </p>

                                    {/* Engineering Features */}
                                    <div className="bg-[#1A1A1A] p-6 lg:p-8 mb-8 border border-[#D4AF37]/10">
                                        <h3 className="font-display text-lg text-white mb-6 pb-4 border-b border-[#D4AF37]/20 uppercase tracking-widest">
                                            Technical Specifications
                                        </h3>

                                        <ul className="grid sm:grid-cols-2 gap-4">
                                            {product.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <HiCheck className="text-[#D4AF37] text-lg flex-shrink-0 mt-0.5" />
                                                    <span className="text-[#A0A0A0] text-sm leading-tight">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex gap-4">
                                        <Link href={`/contact?product=${product.id}`} className="btn-gold flex-1 text-center text-xs">
                                            Request Prototype
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
