"use client";

import { useEffect, useRef, useState } from "react";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { FaLinkedinIn, FaGlobeAsia } from "react-icons/fa";

export default function ContactPage() {
    const pageRef = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

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
                // Header Animations
                gsap.fromTo(
                    ".contact-header > *",
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" }
                );

                // Content Grid Animations
                gsap.fromTo(
                    ".contact-info > *",
                    { x: -50, opacity: 0 },
                    {
                        x: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out",
                        scrollTrigger: { trigger: ".contact-grid", start: "top 80%" }
                    }
                );

                gsap.fromTo(
                    ".contact-form",
                    { x: 50, opacity: 0 },
                    {
                        x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
                        scrollTrigger: { trigger: ".contact-grid", start: "top 80%" }
                    }
                );

                // FAQ Animations
                gsap.fromTo(
                    ".faq-item",
                    { y: 30, opacity: 0 },
                    {
                        y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power3.out",
                        scrollTrigger: { trigger: ".faq-section", start: "top 80%" }
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus("submitting");

        // Simulate API call
        setTimeout(() => {
            setFormStatus("success");
            const form = e.target as HTMLFormElement;
            form.reset();

            // Reset status after 5 seconds
            setTimeout(() => {
                setFormStatus("idle");
            }, 5000);
        }, 1500);
    };

    return (
        <div ref={pageRef} className="bg-[#0D0D0D] pt-32 pb-24 min-h-screen">
            <div className="container-custom">
                {/* Header Section */}
                <div className="contact-header text-center mb-16 max-w-3xl mx-auto">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                        <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] font-medium">Technical Inquiry</span>
                        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
                    </div>

                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                        Engineer Your <span className="text-gold-gradient">Supply Chain</span>
                    </h1>

                    <p className="text-[#A0A0A0] text-lg leading-relaxed">
                        Initiate a technical consultation with our OEM engineering team.
                        Provide specifications regarding material preferences, target manufacturing
                        capacity, and product design prototypes to begin the development process.
                    </p>
                </div>

                <div className="contact-grid grid lg:grid-cols-5 gap-12 lg:gap-8">
                    {/* Contact Information (Left Column, col-span-2) */}
                    <div className="contact-info lg:col-span-2 space-y-10">
                        {/* Office Info */}
                        <div className="bg-[#1A1A1A] p-8 border border-[#D4AF37]/20">
                            <h2 className="font-display text-2xl text-white mb-6 border-b border-[#D4AF37]/20 pb-4">
                                Manufacturing Hub
                            </h2>

                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0 bg-[#0D0D0D]">
                                        <HiLocationMarker className="text-[#D4AF37] text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium mb-1">PT Novakor Indonesia</p>
                                        <p className="text-[#A0A0A0] text-sm leading-relaxed">
                                            Purbalingga Industrial Estate<br />
                                            Central Java, Indonesia<br />
                                            Manufacturing Zone 3
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0 bg-[#0D0D0D]">
                                        <HiPhone className="text-[#D4AF37] text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium mb-1">Technical Support</p>
                                        <a href="tel:+622811234567" className="text-[#A0A0A0] text-sm hover:text-[#D4AF37] transition-colors">
                                            +62 281 123 4567
                                        </a>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0 bg-[#0D0D0D]">
                                        <HiMail className="text-[#D4AF37] text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium mb-1">OEM Desk</p>
                                        <a href="mailto:inquiry@novakor.id" className="text-[#A0A0A0] text-sm hover:text-[#D4AF37] transition-colors">
                                            inquiry@novakor.id
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div className="bg-[#1A1A1A] p-8 border border-[#D4AF37]/20">
                            <h2 className="font-display text-xl text-white mb-6">Global Network</h2>
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 rounded-sm border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300">
                                    <FaLinkedinIn size={20} />
                                </a>
                                <a href="#" className="w-12 h-12 rounded-sm border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300">
                                    <FaGlobeAsia size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form (Right Column, col-span-3) */}
                    <div className="contact-form lg:col-span-3">
                        <div className="bg-[#1A1A1A] p-8 md:p-12 border border-[#D4AF37]/20 relative overflow-hidden text-sm">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl" />

                            <h2 className="font-display text-3xl text-white mb-2 relative z-10">OEM Project Brief</h2>
                            <p className="text-[#A0A0A0] mb-8 relative z-10">
                                Please provide detailed specifications to help our engineering team assign
                                the appropriate manufacturing protocol to your inquiry.
                            </p>

                            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-white font-medium tracking-wide uppercase text-xs">Company Name *</label>
                                        <input type="text" id="company" name="company" required className="input-elegant bg-[#0D0D0D]" placeholder="Enter entity name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-white font-medium tracking-wide uppercase text-xs">Corporate Email *</label>
                                        <input type="email" id="email" name="email" required className="input-elegant bg-[#0D0D0D]" placeholder="engineering@company.com" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="product" className="text-white font-medium tracking-wide uppercase text-xs">Product Platform *</label>
                                        <select id="product" name="product" required className="input-elegant bg-[#0D0D0D] appearance-none cursor-pointer">
                                            <option value="">Select Platform...</option>
                                            <option value="full-wig">Full Cap System</option>
                                            <option value="lace-wig">Lace Front / Full Lace</option>
                                            <option value="hand-tied">100% Hand-Tied</option>
                                            <option value="topper">Partial Coverage / Topper</option>
                                            <option value="toupee">Toupee / Hair System</option>
                                            <option value="custom">Custom Engineering</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="material" className="text-white font-medium tracking-wide uppercase text-xs">Material Preference *</label>
                                        <select id="material" name="material" required className="input-elegant bg-[#0D0D0D] appearance-none cursor-pointer">
                                            <option value="">Select Material...</option>
                                            <option value="human-remy">Premium Human Hair (Remy)</option>
                                            <option value="human-standard">Standard Human Hair</option>
                                            <option value="synthetic-heat">Heat-Resistant Synthetic</option>
                                            <option value="synthetic-kanekalon">Kanekalon / High-Grade Synthetic</option>
                                            <option value="hybrid">Human/Synthetic Blend</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="moq" className="text-white font-medium tracking-wide uppercase text-xs">Estimated Monthly Volume (MOQ) *</label>
                                        <select id="moq" name="moq" required className="input-elegant bg-[#0D0D0D] appearance-none cursor-pointer">
                                            <option value="">Select Volume...</option>
                                            <option value="prototype">Prototype / Sampling Only</option>
                                            <option value="tier1">100 - 500 units/month</option>
                                            <option value="tier2">500 - 2000 units/month</option>
                                            <option value="tier3">2000 - 10,000 units/month</option>
                                            <option value="tier4">10,000+ units/month</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="market" className="text-white font-medium tracking-wide uppercase text-xs">Target Market Sector</label>
                                        <input type="text" id="market" name="market" className="input-elegant bg-[#0D0D0D]" placeholder="e.g. EU Medical, US Fashion" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="notes" className="text-white font-medium tracking-wide uppercase text-xs">Technical Requirements & Notes *</label>
                                    <textarea
                                        id="notes"
                                        name="notes"
                                        rows={5}
                                        required
                                        className="input-elegant bg-[#0D0D0D] resize-none"
                                        placeholder="Please detail your specific cap structure requirements, durability needs, compliance standards, or any specific engineering challenges..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={formStatus === "submitting"}
                                    className={`btn-gold w-full flex justify-center py-4 ${formStatus === "submitting" ? "opacity-70 cursor-not-allowed" : ""
                                        }`}
                                >
                                    {formStatus === "idle" && "Submit Technical Inquiry"}
                                    {formStatus === "submitting" && "PROCESSING DATA..."}
                                    {formStatus === "success" && "TRANSMISSION SUCCESSFUL"}
                                    {formStatus === "error" && "TRANSMISSION FAILED"}
                                </button>

                                <p className="text-[#A0A0A0] text-xs text-center mt-4">
                                    All submitted technical specifications are protected under our standard Non-Disclosure Agreement (NDA).
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="faq-section mt-32 max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                            <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] font-medium">OEM Guidelines</span>
                            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
                        </div>
                        <h2 className="section-title">Standard Operating Procedures</h2>
                        <div className="divider-gold mt-6" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                q: "What is your prototyping lead time?",
                                a: "Standard cap structural prototyping requires 14-21 days depending on fiber availability and complexity. Rush engineering can be requested for established partners."
                            },
                            {
                                q: "Do you sign NDAs for custom cap designs?",
                                a: "Yes. All client blueprints, cap mappings, and material blends are strictly confidential and legally protected under international non-disclosure agreements."
                            },
                            {
                                q: "What are your QC compliance standards?",
                                a: "We operate under ISO-compliant multi-gate tracking. This includes raw material inspection, mid-line cap assembly verification, and final durability tests before dispatch."
                            },
                            {
                                q: "Can you source specific fibers?",
                                a: "Yes. Our material engineering team can import, test, and calibrate specific fibers (Remy human hair or specific synthetic variants) according to your project requirements."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="faq-item bg-[#1A1A1A] p-6 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-colors">
                                <h3 className="font-display text-lg text-white mb-3 flex items-start gap-2">
                                    <span className="text-[#D4AF37] font-mono mt-1">Q.</span>
                                    {faq.q}
                                </h3>
                                <p className="text-[#A0A0A0] text-sm leading-relaxed flex items-start gap-2">
                                    <span className="text-[#D4AF37] font-mono mt-1 opacity-50">A.</span>
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
