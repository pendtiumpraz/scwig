"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function TermsOfServicePage() {
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".terms-hero-content > *",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out" }
            );

            gsap.fromTo(
                ".terms-content > *",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.05, duration: 0.5, ease: "power3.out", delay: 0.3 }
            );
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={pageRef}>
            {/* Hero Section */}
            <section className="relative py-32 flex items-center justify-center overflow-hidden bg-[#0D0D0D]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent" />

                <div className="terms-hero-content relative z-10 text-center px-4">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                        <span className="text-[#D4AF37]">✦</span>
                        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
                    </div>
                    <h1 className="font-display text-4xl md:text-6xl text-white mb-4">Terms of Service</h1>
                    <p className="font-elegant text-lg text-[#A0A0A0]">Last updated: February 2025</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 bg-[#1A1A1A]">
                <div className="max-w-[900px] mx-auto px-6">
                    <div className="terms-content prose prose-invert max-w-none">
                        <div className="mb-10">
                            <h2 className="font-display text-2xl text-[#D4AF37] mb-4">1. Agreement to Terms</h2>
                            <p className="text-[#A0A0A0] leading-relaxed">
                                By accessing or using the SCWIG website and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-display text-2xl text-[#D4AF37] mb-4">2. Products and Services</h2>
                            <p className="text-[#A0A0A0] leading-relaxed mb-4">
                                SCWIG provides premium wig products and related services including:
                            </p>
                            <ul className="list-none space-y-2 text-[#A0A0A0]">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#D4AF37]">✦</span>
                                    <span>Custom wig creation and fitting</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#D4AF37]">✦</span>
                                    <span>Styling and consultation services</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#D4AF37]">✦</span>
                                    <span>Wig maintenance and repair</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#D4AF37]">✦</span>
                                    <span>Training and educational programs</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-display text-2xl text-[#D4AF37] mb-4">3. Orders and Payments</h2>
                            <p className="text-[#A0A0A0] leading-relaxed mb-4">
                                <strong className="text-white">Custom Orders:</strong> Custom wig orders require a 50% deposit at the time of order, with the remaining balance due upon completion. Custom orders are non-refundable once production has begun.
                            </p>
                            <p className="text-[#A0A0A0] leading-relaxed mb-4">
                                <strong className="text-white">Ready-Made Products:</strong> Ready-made wigs may be returned within 7 days of purchase in original condition with tags attached. Returns are subject to a 15% restocking fee.
                            </p>
                            <p className="text-[#A0A0A0] leading-relaxed">
                                <strong className="text-white">Payment Methods:</strong> We accept cash, credit/debit cards, bank transfers, and major e-wallet platforms.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-display text-2xl text-[#D4AF37] mb-4">4. Warranty and Guarantees</h2>
                            <p className="text-[#A0A0A0] leading-relaxed mb-4">
                                All SCWIG products come with the following guarantees:
                            </p>
                            <ul className="list-none space-y-2 text-[#A0A0A0]">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#D4AF37]">✦</span>
                                    <span>6-month warranty on manufacturing defects for custom wigs</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#D4AF37]">✦</span>
                                    <span>30-day warranty on ready-made products</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#D4AF37]">✦</span>
                                    <span>Lifetime fit adjustments for custom orders (labor only)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#D4AF37]">✦</span>
                                    <span>100% satisfaction guarantee on consultations</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-display text-2xl text-[#D4AF37] mb-4">5. Care and Maintenance</h2>
                            <p className="text-[#A0A0A0] leading-relaxed">
                                Proper care is essential for maintaining the quality and longevity of your wig. SCWIG is not responsible for damage caused by improper care, use of unsuitable products, or failure to follow care instructions provided at the time of purchase. We offer professional maintenance services to help you keep your wig in optimal condition.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-display text-2xl text-[#D4AF37] mb-4">6. Appointment Cancellation</h2>
                            <p className="text-[#A0A0A0] leading-relaxed">
                                We kindly request at least 24 hours notice for appointment cancellations or rescheduling. Repeated no-shows may result in requiring a deposit for future appointments. Same-day cancellations may be subject to a cancellation fee.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-display text-2xl text-[#D4AF37] mb-4">7. Intellectual Property</h2>
                            <p className="text-[#A0A0A0] leading-relaxed">
                                All content on the SCWIG website, including but not limited to text, graphics, logos, images, and software, is the property of SCWIG and is protected by Indonesian and international copyright laws. You may not reproduce, distribute, or create derivative works without our express written consent.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-display text-2xl text-[#D4AF37] mb-4">8. Limitation of Liability</h2>
                            <p className="text-[#A0A0A0] leading-relaxed">
                                SCWIG shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our products or services. Our maximum liability shall not exceed the amount paid for the specific product or service in question.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-display text-2xl text-[#D4AF37] mb-4">9. Governing Law</h2>
                            <p className="text-[#A0A0A0] leading-relaxed">
                                These Terms shall be governed by and construed in accordance with the laws of the Republic of Indonesia. Any disputes arising from these terms shall be resolved in the courts of Jakarta, Indonesia.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-display text-2xl text-[#D4AF37] mb-4">10. Changes to Terms</h2>
                            <p className="text-[#A0A0A0] leading-relaxed">
                                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on the website. Your continued use of our services after any changes constitutes acceptance of the new terms.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-display text-2xl text-[#D4AF37] mb-4">11. Contact Information</h2>
                            <p className="text-[#A0A0A0] leading-relaxed">
                                For questions about these Terms of Service, please contact us:
                            </p>
                            <div className="mt-4 p-6 border border-[#D4AF37]/20 bg-[#0D0D0D]">
                                <p className="text-white font-display text-lg mb-2">SCWIG Legal Department</p>
                                <p className="text-[#A0A0A0]">Jl. Jenderal Sudirman No. 123</p>
                                <p className="text-[#A0A0A0]">Jakarta Pusat 10220, Indonesia</p>
                                <p className="text-[#A0A0A0] mt-2">Email: legal@scwig.com</p>
                                <p className="text-[#A0A0A0]">Phone: +62 21 1234 5678</p>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-[#D4AF37]/20">
                            <Link href="/" className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F4E4BC] transition-colors">
                                ← Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
