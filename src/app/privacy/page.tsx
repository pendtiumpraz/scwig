"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function PrivacyPolicyPage() {
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".privacy-hero-content > *",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out" }
            );

            gsap.fromTo(
                ".privacy-content > *",
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

                <div className="privacy-hero-content relative z-10 text-center px-4">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                        <span className="text-[#D4AF37]">✦</span>
                        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
                    </div>
                    <h1 className="font-display text-4xl md:text-6xl text-white mb-4">Privacy Policy</h1>
                    <p className="font-elegant text-lg text-[#A0A0A0]">Last updated: February 2025</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 bg-[#1A1A1A]">
                <div className="max-w-[900px] mx-auto px-6">
                    <div className="privacy-content prose prose-invert max-w-none">
                        <div className="mb-10">
                            <h2 className="font-display text-2xl text-[#D4AF37] mb-4">1. Introduction</h2>
                            <p className="text-[#A0A0A0] leading-relaxed mb-4">
                                Welcome to SCWIG (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                            </p>
                            <p className="text-[#A0A0A0] leading-relaxed">
                                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-display text-2xl text-[#D4AF37] mb-4">2. Information We Collect</h2>
                            <p className="text-[#A0A0A0] leading-relaxed mb-4">
                                We collect information that you provide directly to us, including:
                            </p>
                            <ul className="list-none space-y-2 text-[#A0A0A0]">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#D4AF37]">✦</span>
                                    <span>Personal identification information (name, email address, phone number)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#D4AF37]">✦</span>
                                    <span>Shipping and billing address</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#D4AF37]">✦</span>
                                    <span>Payment information (processed securely by third-party providers)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#D4AF37]">✦</span>
                                    <span>Consultation preferences and style information</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#D4AF37]">✦</span>
                                    <span>Communication records and customer service interactions</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-display text-2xl text-[#D4AF37] mb-4">3. How We Use Your Information</h2>
                            <p className="text-[#A0A0A0] leading-relaxed mb-4">
                                We use the information we collect to:
                            </p>
                            <ul className="list-none space-y-2 text-[#A0A0A0]">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#D4AF37]">✦</span>
                                    <span>Process and fulfill your orders and consultations</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#D4AF37]">✦</span>
                                    <span>Communicate with you about orders, services, and promotions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#D4AF37]">✦</span>
                                    <span>Improve our website and services</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#D4AF37]">✦</span>
                                    <span>Personalize your experience</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#D4AF37]">✦</span>
                                    <span>Comply with legal obligations</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-display text-2xl text-[#D4AF37] mb-4">4. Information Sharing</h2>
                            <p className="text-[#A0A0A0] leading-relaxed">
                                We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners and trusted affiliates for the purposes outlined above.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-display text-2xl text-[#D4AF37] mb-4">5. Data Security</h2>
                            <p className="text-[#A0A0A0] leading-relaxed">
                                We implement appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our site.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-display text-2xl text-[#D4AF37] mb-4">6. Your Rights</h2>
                            <p className="text-[#A0A0A0] leading-relaxed mb-4">
                                You have the right to:
                            </p>
                            <ul className="list-none space-y-2 text-[#A0A0A0]">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#D4AF37]">✦</span>
                                    <span>Access and receive a copy of your personal data</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#D4AF37]">✦</span>
                                    <span>Request correction of inaccurate data</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#D4AF37]">✦</span>
                                    <span>Request deletion of your data</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#D4AF37]">✦</span>
                                    <span>Opt-out of marketing communications</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-display text-2xl text-[#D4AF37] mb-4">7. Contact Us</h2>
                            <p className="text-[#A0A0A0] leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <div className="mt-4 p-6 border border-[#D4AF37]/20 bg-[#0D0D0D]">
                                <p className="text-white font-display text-lg mb-2">SCWIG</p>
                                <p className="text-[#A0A0A0]">Jl. Jenderal Sudirman No. 123</p>
                                <p className="text-[#A0A0A0]">Jakarta Pusat 10220, Indonesia</p>
                                <p className="text-[#A0A0A0] mt-2">Email: privacy@scwig.com</p>
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
