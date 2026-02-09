"use client";

import { useEffect, useRef, useState } from "react";
import { HiLocationMarker, HiPhone, HiMail, HiClock, HiChevronDown, HiChevronUp } from "react-icons/hi";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";

const faqs = [
    {
        question: "How do I choose the right wig for my face shape?",
        answer: "Our expert stylists can help you find the perfect wig during a free consultation. We analyze your face shape, skin tone, and lifestyle preferences to recommend styles that will complement your natural features beautifully.",
    },
    {
        question: "What is the difference between human hair and synthetic wigs?",
        answer: "Human hair wigs offer the most natural look and can be styled with heat tools, while synthetic wigs are more affordable and require less maintenance. Both options have their advantages, and we can help you decide based on your needs and budget.",
    },
    {
        question: "How long does a custom wig take to create?",
        answer: "Custom wigs typically take 4-6 weeks to create, depending on the complexity of the design and materials chosen. Rush orders may be available for an additional fee.",
    },
    {
        question: "Do you offer wig maintenance services?",
        answer: "Yes! We offer comprehensive maintenance services including deep cleaning, conditioning, restyling, and repairs. Regular maintenance can significantly extend the life of your wig.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept cash, all major credit/debit cards, bank transfers, and various e-wallet options. For custom orders, we require a 50% deposit with the balance due upon completion.",
    },
    {
        question: "Is there a warranty on wigs?",
        answer: "Yes, all our wigs come with a quality guarantee. Custom wigs include a 6-month warranty covering manufacturing defects, and we offer lifetime fit adjustments for custom orders.",
    },
];

const contactInfo = {
    headquarters: {
        address: "Jl. Jenderal Sudirman No. 123",
        city: "Jakarta Pusat 10220",
        country: "Indonesia",
    },
    phone: "+62 21 1234 5678",
    whatsapp: "+62 812 3456 7890",
    email: "info@scwig.com",
    hours: {
        weekday: "Monday - Friday: 09:00 - 18:00",
        weekend: "Saturday: 09:00 - 15:00",
        closed: "Sunday: Closed",
    },
};

const socialLinks = [
    { icon: FaInstagram, href: "https://instagram.com/scwig.official", label: "Instagram" },
    { icon: FaFacebookF, href: "https://facebook.com/scwig", label: "Facebook" },
    { icon: FaYoutube, href: "https://youtube.com/scwig", label: "YouTube" },
    { icon: FaTiktok, href: "https://tiktok.com/@scwig", label: "TikTok" },
];

export default function ContactPage() {
    const pageRef = useRef<HTMLDivElement>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        let ctx: ReturnType<typeof import("gsap").gsap.context> | null = null;

        const initAnimations = async () => {
            const gsapModule = await import("gsap");
            const ScrollTriggerModule = await import("gsap/ScrollTrigger");

            const gsap = gsapModule.default;
            const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;

            gsap.registerPlugin(ScrollTrigger);

            ctx = gsap.context(() => {
                gsap.fromTo(
                    ".contact-hero-content > *",
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power3.out" }
                );

                gsap.fromTo(
                    ".contact-form-section",
                    { x: -50, opacity: 0 },
                    {
                        x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
                        scrollTrigger: { trigger: ".contact-section", start: "top 70%" },
                    }
                );

                gsap.fromTo(
                    ".contact-info-section",
                    { x: 50, opacity: 0 },
                    {
                        x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
                        scrollTrigger: { trigger: ".contact-section", start: "top 70%" },
                    }
                );

                gsap.fromTo(
                    ".faq-item",
                    { y: 30, opacity: 0 },
                    {
                        y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power3.out",
                        scrollTrigger: { trigger: ".faq-section", start: "top 70%" },
                    }
                );
            }, pageRef);
        };

        initAnimations();

        return () => {
            if (ctx) ctx.revert();
        };
    }, [isClient]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus("sending");

        await new Promise((resolve) => setTimeout(resolve, 1500));
        setFormStatus("success");

        setTimeout(() => {
            setFormStatus("idle");
            (e.target as HTMLFormElement).reset();
        }, 3000);
    };

    return (
        <div ref={pageRef}>
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[#0D0D0D]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent" />

                <div className="contact-hero-content relative z-10 text-center px-4">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                        <span className="text-[#D4AF37]">✦</span>
                        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
                    </div>
                    <h1 className="font-display text-5xl md:text-7xl text-white mb-4">Get In Touch</h1>
                    <p className="font-elegant text-xl md:text-2xl text-[#F4E4BC]">We&apos;d Love to Hear From You</p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section section-padding bg-[#1A1A1A]">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="contact-form-section">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-[1px] bg-[#D4AF37]" />
                                <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em]">Send a Message</span>
                            </div>

                            <h2 className="section-title mb-8">
                                Let&apos;s Start a <span className="text-gold-gradient">Conversation</span>
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-white text-sm mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="input-elegant"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-white text-sm mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="input-elegant"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-white text-sm mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="input-elegant"
                                            placeholder="+62 xxx xxxx xxxx"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-white text-sm mb-2">
                                            Subject *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            required
                                            className="input-elegant"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="consultation">Book Consultation</option>
                                            <option value="custom-wig">Custom Wig Inquiry</option>
                                            <option value="services">Service Information</option>
                                            <option value="wholesale">Wholesale Partnership</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-white text-sm mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        className="input-elegant resize-none"
                                        placeholder="Tell us how we can help you..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={formStatus === "sending"}
                                    className="btn-gold w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {formStatus === "sending" ? "Sending..." : formStatus === "success" ? "Message Sent! ✓" : "Send Message"}
                                </button>

                                {formStatus === "success" && (
                                    <p className="text-green-400 text-sm">
                                        Thank you for your message! We&apos;ll get back to you within 24 hours.
                                    </p>
                                )}
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info-section">
                            <div className="glass-gold p-8 lg:p-10 h-full">
                                <h3 className="font-display text-2xl text-white mb-8">Contact Information</h3>

                                {/* Headquarters */}
                                <div className="mb-8">
                                    <h4 className="text-[#D4AF37] text-sm uppercase tracking-wider mb-4">Headquarters</h4>
                                    <div className="flex items-start gap-4">
                                        <HiLocationMarker className="text-[#D4AF37] text-2xl mt-1" />
                                        <div>
                                            <p className="text-white">{contactInfo.headquarters.address}</p>
                                            <p className="text-[#A0A0A0]">{contactInfo.headquarters.city}</p>
                                            <p className="text-[#A0A0A0]">{contactInfo.headquarters.country}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Details */}
                                <div className="space-y-4 mb-8">
                                    <a
                                        href={`tel:${contactInfo.phone}`}
                                        className="flex items-center gap-4 text-white hover:text-[#D4AF37] transition-colors"
                                    >
                                        <HiPhone className="text-[#D4AF37] text-xl" />
                                        <span>{contactInfo.phone}</span>
                                    </a>

                                    <a
                                        href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 text-white hover:text-[#D4AF37] transition-colors"
                                    >
                                        <FaWhatsapp className="text-[#D4AF37] text-xl" />
                                        <span>{contactInfo.whatsapp}</span>
                                    </a>

                                    <a
                                        href={`mailto:${contactInfo.email}`}
                                        className="flex items-center gap-4 text-white hover:text-[#D4AF37] transition-colors"
                                    >
                                        <HiMail className="text-[#D4AF37] text-xl" />
                                        <span>{contactInfo.email}</span>
                                    </a>
                                </div>

                                {/* Business Hours */}
                                <div className="mb-8">
                                    <h4 className="text-[#D4AF37] text-sm uppercase tracking-wider mb-4">Business Hours</h4>
                                    <div className="flex items-start gap-4">
                                        <HiClock className="text-[#D4AF37] text-xl mt-1" />
                                        <div className="text-[#A0A0A0]">
                                            <p>{contactInfo.hours.weekday}</p>
                                            <p>{contactInfo.hours.weekend}</p>
                                            <p>{contactInfo.hours.closed}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div>
                                    <h4 className="text-[#D4AF37] text-sm uppercase tracking-wider mb-4">Follow Us</h4>
                                    <div className="flex gap-4">
                                        {socialLinks.map((social) => (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all"
                                                aria-label={social.label}
                                            >
                                                <social.icon size={20} />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section section-padding bg-[#0D0D0D]">
                <div className="container-custom max-w-4xl">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                            <span className="text-[#D4AF37]">✦</span>
                            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
                        </div>
                        <h2 className="section-title">Frequently Asked Questions</h2>
                        <p className="section-subtitle mt-4">Find quick answers to common questions</p>
                        <div className="divider-gold mt-6" />
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="faq-item border border-[#D4AF37]/20 overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#1A1A1A] transition-colors"
                                >
                                    <span className="font-display text-lg text-white pr-4">{faq.question}</span>
                                    {openFaq === index ? (
                                        <HiChevronUp className="text-[#D4AF37] text-2xl flex-shrink-0" />
                                    ) : (
                                        <HiChevronDown className="text-[#D4AF37] text-2xl flex-shrink-0" />
                                    )}
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-96" : "max-h-0"
                                        }`}
                                >
                                    <div className="p-6 pt-0 text-[#A0A0A0] leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section (Placeholder) */}
            <section className="h-[400px] bg-[#1A1A1A] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <HiLocationMarker className="text-[#D4AF37] text-6xl mx-auto mb-4" />
                        <p className="text-[#A0A0A0]">Interactive map would be embedded here</p>
                        <a
                            href="https://maps.google.com/?q=Jakarta+Sudirman"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 text-[#D4AF37] underline hover:text-[#F4E4BC]"
                        >
                            Open in Google Maps
                        </a>
                    </div>
                </div>
                <div className="absolute inset-0 border-t border-[#D4AF37]/20" />
            </section>
        </div>
    );
}
