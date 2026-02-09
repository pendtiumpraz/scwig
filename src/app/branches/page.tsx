"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiLocationMarker, HiPhone, HiClock, HiCheck, HiArrowRight } from "react-icons/hi";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const branches = [
    {
        id: "jakarta",
        name: "Jakarta Flagship",
        isFlagship: true,
        address: "Jl. Jenderal Sudirman No. 123, Karet Tengsin, Tanah Abang",
        city: "Jakarta Pusat 10220",
        phone: "+62 21 1234 5678",
        whatsapp: "6281234567890",
        hours: "09:00 - 21:00",
        daysOpen: "Monday - Sunday",
        image: "/images/branches/store-2.jpg",
        services: ["All Services", "VIP Room", "Private Consultation"],
        mapUrl: "https://maps.google.com/?q=Jakarta+Sudirman",
    },
    {
        id: "surabaya",
        name: "Surabaya",
        isFlagship: false,
        address: "Jl. Pemuda No. 45, Embong Kaliasin, Genteng",
        city: "Surabaya 60271",
        phone: "+62 31 9876 5432",
        whatsapp: "6281398765432",
        hours: "10:00 - 20:00",
        daysOpen: "Monday - Saturday",
        image: "/images/branches/store-2.jpg",
        services: ["Custom Wigs", "Styling", "Maintenance"],
        mapUrl: "https://maps.google.com/?q=Surabaya+Pemuda",
    },
    {
        id: "bandung",
        name: "Bandung",
        isFlagship: false,
        address: "Jl. Ir. H. Juanda No. 78, Dago",
        city: "Bandung 40132",
        phone: "+62 22 5555 1234",
        whatsapp: "6282255551234",
        hours: "10:00 - 20:00",
        daysOpen: "Monday - Saturday",
        image: "/images/branches/store-2.jpg",
        services: ["Custom Wigs", "Styling", "Maintenance"],
        mapUrl: "https://maps.google.com/?q=Bandung+Dago",
    },
    {
        id: "bali",
        name: "Bali",
        isFlagship: false,
        address: "Jl. Sunset Road No. 100, Seminyak",
        city: "Kuta, Bali 80361",
        phone: "+62 361 8888 9999",
        whatsapp: "6281388889999",
        hours: "09:00 - 21:00",
        daysOpen: "Monday - Sunday",
        image: "/images/branches/store-2.jpg",
        services: ["Custom Wigs", "Styling", "Fashion Wigs"],
        mapUrl: "https://maps.google.com/?q=Bali+Seminyak",
    },
    {
        id: "medan",
        name: "Medan",
        isFlagship: false,
        address: "Jl. Asia No. 55, Kesawan",
        city: "Medan 20111",
        phone: "+62 61 7777 8888",
        whatsapp: "6281377778888",
        hours: "10:00 - 20:00",
        daysOpen: "Monday - Saturday",
        image: "/images/branches/store-2.jpg",
        services: ["Custom Wigs", "Styling", "Maintenance"],
        mapUrl: "https://maps.google.com/?q=Medan+Asia",
    },
    {
        id: "yogyakarta",
        name: "Yogyakarta",
        isFlagship: false,
        address: "Jl. Malioboro No. 88",
        city: "Yogyakarta 55213",
        phone: "+62 274 5555 6666",
        whatsapp: "6281255556666",
        hours: "10:00 - 20:00",
        daysOpen: "Monday - Saturday",
        image: "/images/branches/store-2.jpg",
        services: ["Custom Wigs", "Styling", "Maintenance"],
        mapUrl: "https://maps.google.com/?q=Yogyakarta+Malioboro",
    },
];

export default function BranchesPage() {
    const pageRef = useRef<HTMLDivElement>(null);
    const [selectedBranch, setSelectedBranch] = useState(branches[0]);

    useEffect(() => {
        if (typeof window === "undefined") return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Hero animation
            gsap.fromTo(
                ".branches-hero-content > *",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power3.out" }
            );

            // Map section
            gsap.fromTo(
                ".map-sidebar",
                { x: -50, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
                    scrollTrigger: { trigger: ".map-section", start: "top 70%" },
                }
            );

            gsap.fromTo(
                ".map-content",
                { x: 50, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
                    scrollTrigger: { trigger: ".map-section", start: "top 70%" },
                }
            );

            // Branch cards
            gsap.fromTo(
                ".branch-card",
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power3.out",
                    scrollTrigger: { trigger: ".branches-grid", start: "top 80%" },
                }
            );
        }, pageRef);

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    return (
        <div ref={pageRef}>
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[#0D0D0D]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent" />

                <div className="branches-hero-content relative z-10 text-center px-4">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                        <span className="text-[#D4AF37]">✦</span>
                        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
                    </div>
                    <h1 className="font-display text-5xl md:text-7xl text-white mb-4">Our Locations</h1>
                    <p className="font-elegant text-xl md:text-2xl text-[#F4E4BC]">Visit SCWIG Near You</p>
                </div>
            </section>

            {/* Interactive Map Section */}
            <section className="map-section section-padding bg-[#1A1A1A]">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Sidebar - Branch List */}
                        <div className="map-sidebar lg:col-span-1">
                            <h2 className="font-display text-2xl text-white mb-6">Select a Location</h2>

                            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                                {branches.map((branch) => (
                                    <button
                                        key={branch.id}
                                        onClick={() => setSelectedBranch(branch)}
                                        className={`w-full text-left p-4 border transition-all ${selectedBranch.id === branch.id
                                            ? "border-[#D4AF37] bg-[#D4AF37]/10"
                                            : "border-[#D4AF37]/20 hover:border-[#D4AF37]/50"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <HiLocationMarker
                                                className={`text-xl ${selectedBranch.id === branch.id ? "text-[#D4AF37]" : "text-[#A0A0A0]"
                                                    }`}
                                            />
                                            <div>
                                                <h3 className={`font-display ${selectedBranch.id === branch.id ? "text-[#D4AF37]" : "text-white"
                                                    }`}>
                                                    {branch.name}
                                                    {branch.isFlagship && (
                                                        <span className="ml-2 text-xs bg-[#D4AF37] text-[#0D0D0D] px-2 py-0.5">
                                                            FLAGSHIP
                                                        </span>
                                                    )}
                                                </h3>
                                                <p className="text-[#A0A0A0] text-sm">{branch.city}</p>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Map Content - Selected Branch Details */}
                        <div className="map-content lg:col-span-2">
                            <div className="glass-gold p-8 h-full">
                                {/* Branch Image */}
                                <div className="relative h-64 mb-6 overflow-hidden">
                                    <Image
                                        src={selectedBranch.image}
                                        alt={selectedBranch.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-60" />
                                    <div className="absolute bottom-4 left-4">
                                        <h2 className="font-display text-3xl text-white">
                                            SCWIG {selectedBranch.name}
                                        </h2>
                                        {selectedBranch.isFlagship && (
                                            <span className="inline-block mt-2 text-sm bg-[#D4AF37] text-[#0D0D0D] px-3 py-1">
                                                FLAGSHIP STORE
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Branch Details */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <HiLocationMarker className="text-[#D4AF37] text-xl mt-1" />
                                            <div>
                                                <p className="text-white">{selectedBranch.address}</p>
                                                <p className="text-[#A0A0A0]">{selectedBranch.city}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <HiPhone className="text-[#D4AF37] text-xl" />
                                            <a href={`tel:${selectedBranch.phone}`} className="text-white hover:text-[#D4AF37]">
                                                {selectedBranch.phone}
                                            </a>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <HiClock className="text-[#D4AF37] text-xl" />
                                            <div>
                                                <p className="text-white">{selectedBranch.hours}</p>
                                                <p className="text-[#A0A0A0] text-sm">{selectedBranch.daysOpen}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-[#D4AF37] text-sm uppercase tracking-wider mb-3">
                                            Available Services
                                        </h4>
                                        <div className="space-y-2">
                                            {selectedBranch.services.map((service) => (
                                                <div key={service} className="flex items-center gap-2">
                                                    <HiCheck className="text-[#D4AF37]" />
                                                    <span className="text-[#A0A0A0]">{service}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-[#D4AF37]/20">
                                    <a
                                        href={selectedBranch.mapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-gold flex items-center gap-2"
                                    >
                                        <FaMapMarkerAlt />
                                        Get Directions
                                    </a>
                                    <a
                                        href={`https://wa.me/${selectedBranch.whatsapp}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-outline flex items-center gap-2"
                                    >
                                        <FaWhatsapp />
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* All Branches Grid */}
            <section className="section-padding bg-[#0D0D0D]">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                            <span className="text-[#D4AF37]">✦</span>
                            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
                        </div>
                        <h2 className="section-title">All Branches</h2>
                        <p className="section-subtitle mt-4">Find a SCWIG location near you</p>
                        <div className="divider-gold mt-6" />
                    </div>

                    <div className="branches-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {branches.map((branch) => (
                            <div key={branch.id} className="branch-card card-elegant overflow-hidden group">
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={branch.image}
                                        alt={branch.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />

                                    {branch.isFlagship && (
                                        <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#0D0D0D] text-xs px-2 py-1 font-medium">
                                            FLAGSHIP
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="font-display text-xl text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                                        SCWIG {branch.name}
                                    </h3>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-start gap-2 text-sm">
                                            <HiLocationMarker className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                                            <span className="text-[#A0A0A0]">{branch.address}, {branch.city}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <HiClock className="text-[#D4AF37] flex-shrink-0" />
                                            <span className="text-[#A0A0A0]">{branch.hours}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <a
                                            href={branch.mapUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center py-2 border border-[#D4AF37]/30 text-[#D4AF37] text-sm hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all"
                                        >
                                            Directions
                                        </a>
                                        <a
                                            href={`https://wa.me/${branch.whatsapp}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center py-2 bg-[#D4AF37] text-[#0D0D0D] text-sm hover:bg-[#F4E4BC] transition-colors"
                                        >
                                            Contact
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-[#1A1A1A]">
                <div className="container-custom text-center">
                    <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                        Can&apos;t Visit In Person?
                    </h2>
                    <p className="text-[#A0A0A0] mb-8 max-w-xl mx-auto">
                        We offer virtual consultations for customers who prefer the convenience
                        of connecting from home.
                    </p>
                    <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                        Book Virtual Consultation
                        <HiArrowRight />
                    </Link>
                </div>
            </section>
        </div>
    );
}
