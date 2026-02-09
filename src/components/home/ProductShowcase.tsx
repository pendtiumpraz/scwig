"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const products = [
    {
        name: "Natural Hair Wigs",
        description: "100% human hair for ultimate realism",
        image: "/images/products/natural-wig.jpg",
    },
    {
        name: "Fashion Wigs",
        description: "Bold styles for the fashion-forward",
        image: "/images/products/fashion-wig.jpg",
    },
    {
        name: "Lace Front Wigs",
        description: "Seamless, natural-looking hairlines",
        image: "/images/products/lace-front.jpg",
    },
    {
        name: "Medical Wigs",
        description: "Gentle solutions for sensitive needs",
        image: "/images/products/natural-wig.jpg",
    },
    {
        name: "Synthetic Wigs",
        description: "Low maintenance, high style",
        image: "/images/products/fashion-wig.jpg",
    },
    {
        name: "Full Cap Wigs",
        description: "Complete coverage and comfort",
        image: "/images/products/lace-front.jpg",
    },
];

export default function ProductShowcase() {
    const sectionRef = useRef<HTMLElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
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
                    ".showcase-title",
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

                if (scrollContainerRef.current && window.innerWidth >= 1024) {
                    const scrollWidth =
                        scrollContainerRef.current.scrollWidth -
                        scrollContainerRef.current.offsetWidth;

                    gsap.to(scrollContainerRef.current, {
                        x: -scrollWidth,
                        ease: "none",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 20%",
                            end: `+=${scrollWidth}`,
                            scrub: 1,
                            // Removed pin to prevent hydration issues
                        },
                    });
                }

                gsap.fromTo(
                    ".product-card",
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        duration: 0.6,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".products-container",
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
        <section ref={sectionRef} className="section-padding bg-[#0D0D0D] overflow-hidden">
            <div className="container-custom">
                {/* Section Header */}
                <div className="showcase-title text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                        <span className="text-[#D4AF37]">✦</span>
                        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
                    </div>

                    <h2 className="section-title mb-4">Our Collection</h2>
                    <p className="section-subtitle max-w-2xl mx-auto">
                        Discover our extensive range of premium wigs, each crafted with
                        meticulous attention to detail and designed for every lifestyle.
                    </p>

                    <div className="divider-gold mt-8" />
                </div>
            </div>

            {/* Products Container */}
            <div className="products-container">
                {/* Desktop: Horizontal Scroll */}
                <div
                    ref={scrollContainerRef}
                    className="hidden lg:flex gap-8 pl-[calc((100vw-1400px)/2+24px)] pr-24"
                >
                    {products.map((product, index) => (
                        <div
                            key={product.name}
                            className="product-card flex-shrink-0 w-[350px] group cursor-pointer"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden mb-4">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-60" />

                                <div className="absolute inset-0 border-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="absolute top-4 left-4 w-10 h-10 bg-[#D4AF37] flex items-center justify-center">
                                    <span className="font-display text-[#0D0D0D] font-bold">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>
                            </div>

                            <h3 className="font-display text-xl text-white group-hover:text-[#D4AF37] transition-colors mb-2">
                                {product.name}
                            </h3>
                            <p className="text-[#A0A0A0] text-sm">{product.description}</p>
                        </div>
                    ))}
                </div>

                {/* Mobile: Grid */}
                <div className="lg:hidden container-custom grid grid-cols-2 gap-4">
                    {products.map((product, index) => (
                        <div
                            key={product.name}
                            className="product-card group cursor-pointer"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden mb-3">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-60" />

                                <div className="absolute top-2 left-2 w-8 h-8 bg-[#D4AF37] flex items-center justify-center">
                                    <span className="font-display text-[#0D0D0D] text-sm font-bold">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>
                            </div>

                            <h3 className="font-display text-sm text-white mb-1">
                                {product.name}
                            </h3>
                            <p className="text-[#A0A0A0] text-xs">{product.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
