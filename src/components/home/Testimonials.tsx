"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        name: "Sarah Wijaya",
        role: "Fashion Influencer",
        location: "Jakarta",
        image: "/images/testimonials/customer-1.jpg",
        rating: 5,
        text: "SCWIG completely transformed my confidence. The quality is unmatched, and the styling team understood exactly what I wanted. I've never felt more beautiful!",
    },
    {
        id: 2,
        name: "Ayu Lestari",
        role: "Business Executive",
        location: "Surabaya",
        image: "/images/testimonials/customer-2.jpg",
        rating: 5,
        text: "As someone who values professionalism, SCWIG's attention to detail is impressive. My custom wig looks incredibly natural and has boosted my confidence in meetings.",
    },
    {
        id: 3,
        name: "Dewi Andini",
        role: "Cancer Survivor",
        location: "Bandung",
        image: "/images/testimonials/customer-3.jpg",
        rating: 5,
        text: "During my treatment, SCWIG was there for me with their medical wig service. The compassion and privacy they provided made a difficult time much easier.",
    },
    {
        id: 4,
        name: "Rina Susanti",
        role: "Makeup Artist",
        location: "Bali",
        image: "/images/testimonials/customer-1.jpg",
        rating: 5,
        text: "I recommend SCWIG to all my clients. Their variety of styles and the quality of their wigs are perfect for photoshoots and special occasions.",
    },
    {
        id: 5,
        name: "Maya Kartika",
        role: "Entrepreneur",
        location: "Medan",
        image: "/images/testimonials/customer-2.jpg",
        rating: 5,
        text: "The maintenance service at SCWIG keeps my wigs looking brand new. Their team is knowledgeable and always provides excellent care tips.",
    },
];

export default function Testimonials() {
    const sectionRef = useRef<HTMLElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
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
                    ".testimonial-content",
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
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
        };

        initAnimations();

        return () => {
            mounted = false;
            if (ctx) ctx.revert();
        };
    }, [isClient]);

    // Auto-slide timer
    useEffect(() => {
        const timer = setInterval(() => {
            if (!isAnimating) {
                nextSlide();
            }
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex, isAnimating]);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section ref={sectionRef} className="section-padding bg-[#1A1A1A] relative overflow-hidden">
            {/* Background Quote */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <FaQuoteLeft className="text-[300px] text-[#D4AF37]/5" />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="testimonial-content text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                        <span className="text-[#D4AF37]">✦</span>
                        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
                    </div>

                    <h2 className="section-title mb-4">What Our Clients Say</h2>
                    <p className="section-subtitle max-w-2xl mx-auto">
                        Real stories from real people who have experienced the SCWIG difference.
                    </p>

                    <div className="divider-gold mt-8" />
                </div>

                {/* Testimonial Slider */}
                <div className="testimonial-content max-w-4xl mx-auto">
                    <div className="relative glass-gold rounded-lg p-8 md:p-12">
                        {/* Quote Icon */}
                        <div className="absolute -top-6 left-8 w-12 h-12 bg-[#D4AF37] flex items-center justify-center rounded-full">
                            <FaQuoteLeft className="text-[#0D0D0D] text-lg" />
                        </div>

                        {/* Content */}
                        <div
                            key={currentTestimonial.id}
                            className="transition-opacity duration-500"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-6 justify-center">
                                {[...Array(currentTestimonial.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-[#D4AF37] text-lg" />
                                ))}
                            </div>

                            {/* Quote Text */}
                            <p className="font-elegant text-xl md:text-2xl text-white text-center leading-relaxed mb-8">
                                &ldquo;{currentTestimonial.text}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex flex-col items-center">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-[#D4AF37]">
                                    <Image
                                        src={currentTestimonial.image}
                                        alt={currentTestimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h4 className="font-display text-lg text-[#D4AF37]">
                                    {currentTestimonial.name}
                                </h4>
                                <p className="text-[#A0A0A0] text-sm">
                                    {currentTestimonial.role} • {currentTestimonial.location}
                                </p>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300 hidden md:flex"
                            aria-label="Previous testimonial"
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300 hidden md:flex"
                            aria-label="Next testimonial"
                        >
                            <FaChevronRight />
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (!isAnimating) {
                                        setIsAnimating(true);
                                        setCurrentIndex(index);
                                        setTimeout(() => setIsAnimating(false), 500);
                                    }
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? "w-8 bg-[#D4AF37]"
                                    : "bg-[#D4AF37]/30 hover:bg-[#D4AF37]/50"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
