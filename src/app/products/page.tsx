"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiCheck, HiSparkles, HiHeart, HiShieldCheck } from "react-icons/hi";

const products = [
    {
        id: "natural-hair",
        name: "Natural Hair Wigs",
        tagline: "The Ultimate in Realism",
        description: "Crafted from 100% premium human hair, our natural hair wigs offer unparalleled realism and versatility. Style, color, and treat them just like your own hair.",
        image: "/images/products/natural-wig.jpg",
        features: [
            "100% Remy human hair",
            "Can be heat styled up to 180°C",
            "Dyeable and bleachable",
            "Natural movement and shine",
            "Lifespan 1-3 years with proper care",
        ],
        benefits: [
            { icon: HiSparkles, text: "Most natural look and feel" },
            { icon: HiHeart, text: "Breathable and comfortable" },
            { icon: HiShieldCheck, text: "Hypoallergenic options available" },
        ],
        priceRange: "Rp 3.500.000 - Rp 15.000.000",
        popular: true,
    },
    {
        id: "lace-front",
        name: "Lace Front Wigs",
        tagline: "Seamless Natural Hairline",
        description: "Our lace front wigs feature an invisible lace material at the front that blends seamlessly with your skin, creating the most natural-looking hairline possible.",
        image: "/images/products/lace-front.jpg",
        features: [
            "Swiss or French lace options",
            "Pre-plucked natural hairline",
            "Baby hairs for added realism",
            "Adjustable straps and combs",
            "Available in human hair or synthetic",
        ],
        benefits: [
            { icon: HiSparkles, text: "Undetectable hairline" },
            { icon: HiHeart, text: "Versatile styling options" },
            { icon: HiShieldCheck, text: "Secure and comfortable fit" },
        ],
        priceRange: "Rp 2.500.000 - Rp 12.000.000",
        popular: true,
    },
    {
        id: "full-lace",
        name: "Full Lace Wigs",
        tagline: "360° Styling Freedom",
        description: "Complete lace cap construction allows for unlimited styling possibilities. Part anywhere, wear high ponytails, or style in any direction with complete confidence.",
        image: "/images/products/fashion-wig.jpg",
        features: [
            "Full lace cap construction",
            "Part anywhere on the wig",
            "High ponytail and updos possible",
            "Most natural appearance from all angles",
            "Premium hand-tied knots",
        ],
        benefits: [
            { icon: HiSparkles, text: "Ultimate styling versatility" },
            { icon: HiHeart, text: "Lightweight and breathable" },
            { icon: HiShieldCheck, text: "Natural scalp appearance" },
        ],
        priceRange: "Rp 5.000.000 - Rp 20.000.000",
        popular: false,
    },
    {
        id: "medical",
        name: "Medical Wigs",
        tagline: "Gentle Care for Sensitive Needs",
        description: "Specially designed for those experiencing hair loss due to medical conditions. Our medical wigs prioritize comfort, gentle materials, and natural appearance.",
        image: "/images/products/natural-wig.jpg",
        features: [
            "Soft, hypoallergenic cap materials",
            "Extra gentle on sensitive scalps",
            "Lightweight construction",
            "Secure fit without adhesives",
            "Private fitting sessions available",
        ],
        benefits: [
            { icon: HiSparkles, text: "Designed for sensitive scalps" },
            { icon: HiHeart, text: "Compassionate service" },
            { icon: HiShieldCheck, text: "Insurance documentation support" },
        ],
        priceRange: "Rp 4.000.000 - Rp 18.000.000",
        popular: false,
    },
    {
        id: "synthetic",
        name: "Synthetic Wigs",
        tagline: "Style Without the Effort",
        description: "Our premium synthetic wigs maintain their style wash after wash. Perfect for those seeking low-maintenance beauty with consistent, stunning results.",
        image: "/images/products/fashion-wig.jpg",
        features: [
            "Pre-styled, ready to wear",
            "Heat-friendly options available",
            "Retains style after washing",
            "Lightweight and comfortable",
            "Wide variety of colors and styles",
        ],
        benefits: [
            { icon: HiSparkles, text: "Zero styling required" },
            { icon: HiHeart, text: "Budget-friendly option" },
            { icon: HiShieldCheck, text: "Color-fast and fade-resistant" },
        ],
        priceRange: "Rp 800.000 - Rp 3.500.000",
        popular: false,
    },
    {
        id: "closure",
        name: "Closure & Frontal Wigs",
        tagline: "Perfect Blend, Perfect Style",
        description: "Combining high-quality closures or frontals with premium bundles, these wigs offer a beautiful, natural part while protecting your natural hair underneath.",
        image: "/images/products/lace-front.jpg",
        features: [
            "4x4, 5x5, or 6x6 closure options",
            "13x4 or 13x6 frontal options",
            "HD lace for invisible blend",
            "Pre-plucked and pre-bleached knots",
            "Customizable density",
        ],
        benefits: [
            { icon: HiSparkles, text: "Natural part appearance" },
            { icon: HiHeart, text: "Protects natural hair" },
            { icon: HiShieldCheck, text: "Easy installation" },
        ],
        priceRange: "Rp 2.000.000 - Rp 10.000.000",
        popular: true,
    },
    {
        id: "toppers",
        name: "Hair Toppers",
        tagline: "Targeted Volume & Coverage",
        description: "Perfect solution for thinning hair or partial hair loss. Our toppers add volume and coverage exactly where you need it while blending with your natural hair.",
        image: "/images/products/natural-wig.jpg",
        features: [
            "Various base sizes available",
            "Clip-in or tape-in attachment",
            "Human hair and synthetic options",
            "Color matching service",
            "Custom orders available",
        ],
        benefits: [
            { icon: HiSparkles, text: "Instant volume boost" },
            { icon: HiHeart, text: "Blends with natural hair" },
            { icon: HiShieldCheck, text: "Non-damaging attachment" },
        ],
        priceRange: "Rp 1.500.000 - Rp 8.000.000",
        popular: false,
    },
    {
        id: "custom",
        name: "Custom Made Wigs",
        tagline: "Your Vision, Our Craft",
        description: "For those seeking perfection, our custom wigs are handcrafted to your exact specifications. From measurements to materials, every detail is tailored to you.",
        image: "/images/products/fashion-wig.jpg",
        features: [
            "Precise head measurements",
            "Choice of cap construction",
            "Select hair type, texture, and color",
            "Custom density and length",
            "Personal consultation included",
        ],
        benefits: [
            { icon: HiSparkles, text: "Perfect fit guaranteed" },
            { icon: HiHeart, text: "Unlimited customization" },
            { icon: HiShieldCheck, text: "Expert craftsmanship" },
        ],
        priceRange: "Rp 8.000.000 - Rp 35.000.000",
        popular: false,
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
                    { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power3.out" }
                );

                gsap.fromTo(
                    ".product-card",
                    { y: 80, opacity: 0 },
                    {
                        y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out",
                        scrollTrigger: { trigger: ".products-grid", start: "top 80%" },
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
        <div ref={pageRef}>
            {/* Hero Section */}
            <section className="relative py-32 bg-gradient-to-b from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D]">
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
                            backgroundSize: "60px 60px",
                        }}
                    />
                </div>

                <div className="container-custom relative z-10">
                    <div className="products-hero-content text-center max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                            <span className="text-[#D4AF37] text-2xl">✦</span>
                            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6">
                            Our <span className="text-gold-gradient">Collection</span>
                        </h1>

                        <p className="font-elegant text-xl text-[#A0A0A0] mb-8 max-w-2xl mx-auto">
                            Discover our extensive range of premium wigs, each crafted with meticulous
                            attention to detail and designed for every lifestyle and need.
                        </p>

                        <div className="divider-gold" />
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="section-padding bg-[#0D0D0D]">
                <div className="container-custom">
                    <div className="products-grid space-y-24">
                        {products.map((product, index) => (
                            <div
                                key={product.id}
                                id={product.id}
                                className={`product-card grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Image */}
                                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent" />

                                        {/* Popular Badge */}
                                        {product.popular && (
                                            <div className="absolute top-4 right-4 bg-[#D4AF37] px-4 py-2">
                                                <span className="text-[#0D0D0D] text-sm font-bold uppercase tracking-wider">
                                                    Popular
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Decorative Corner */}
                                    <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-[#D4AF37]" />
                                    <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-[#D4AF37]" />
                                </div>

                                {/* Content */}
                                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-[#D4AF37]">✦</span>
                                        <span className="text-[#D4AF37] text-sm uppercase tracking-[0.2em]">
                                            {product.tagline}
                                        </span>
                                    </div>

                                    <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                                        {product.name}
                                    </h2>

                                    <p className="text-[#A0A0A0] leading-relaxed mb-6">
                                        {product.description}
                                    </p>

                                    {/* Features */}
                                    <div className="mb-6">
                                        <h3 className="text-white font-medium mb-3 uppercase tracking-wider text-sm">
                                            Features
                                        </h3>
                                        <ul className="space-y-2">
                                            {product.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <HiCheck className="text-[#D4AF37] mt-1 flex-shrink-0" />
                                                    <span className="text-[#A0A0A0] text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Benefits */}
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        {product.benefits.map((benefit, idx) => (
                                            <div key={idx} className="text-center p-3 glass-dark rounded-lg">
                                                <benefit.icon className="text-[#D4AF37] text-2xl mx-auto mb-2" />
                                                <span className="text-white text-xs">{benefit.text}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Price Range */}
                                    <div className="flex items-center justify-between p-4 glass-gold rounded-lg">
                                        <div>
                                            <span className="text-[#A0A0A0] text-sm">Starting from</span>
                                            <p className="text-[#D4AF37] font-display text-xl">{product.priceRange}</p>
                                        </div>
                                        <Link
                                            href="/contact"
                                            className="btn-gold text-sm py-2 px-4"
                                        >
                                            Inquire Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-[#1A1A1A] relative">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

                <div className="container-custom text-center">
                    <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                        Not Sure Which Wig is Right for You?
                    </h2>
                    <p className="text-[#A0A0A0] max-w-2xl mx-auto mb-8">
                        Book a free consultation with our expert stylists. We&apos;ll help you find
                        the perfect wig that matches your style, budget, and lifestyle.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-gold">
                            Book Free Consultation
                        </Link>
                        <Link href="/branches" className="btn-outline">
                            Visit Our Branches
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
