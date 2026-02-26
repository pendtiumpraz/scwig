"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Engineering DNA", href: "/about" },
    { name: "Engineered Products", href: "/products" },
    { name: "Capabilities", href: "/services" },
    { name: "Technical Inquiry", href: "/contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-[#0D0D0D]/95 backdrop-blur-md py-4 shadow-lg shadow-black/20"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container-custom">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <span className="text-[#D4AF37] text-2xl">✦</span>
                        <div>
                            <h1 className="font-accent text-xl md:text-2xl tracking-[0.15em] text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                                PT NOVAKOR
                            </h1>
                            <p className="text-[10px] tracking-[0.3em] text-[#A0A0A0] uppercase font-medium">
                                Indonesia
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden xl:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`relative font-medium text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${pathname === link.href
                                        ? "text-[#D4AF37]"
                                        : "text-white/80 hover:text-[#D4AF37]"
                                        }`}
                                >
                                    {link.name}
                                    <span
                                        className={`absolute -bottom-1.5 left-0 h-[1px] bg-[#D4AF37] transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0"
                                            }`}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                        href="/contact"
                        className="hidden md:block btn-gold text-xs py-3 px-6"
                    >
                        Submit Inquiry
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="xl:hidden text-white text-3xl ml-4"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                <div
                    className={`xl:hidden fixed inset-0 top-[72px] bg-[#0D0D0D]/98 backdrop-blur-lg transition-all duration-500 ${isMobileMenuOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible pointer-events-none"
                        }`}
                >
                    <ul className="flex flex-col items-center justify-center h-full gap-8">
                        {navLinks.map((link, index) => (
                            <li
                                key={link.name}
                                className="overflow-hidden"
                                style={{
                                    animation: isMobileMenuOpen
                                        ? `fadeInUp 0.5s ease forwards ${index * 0.1}s`
                                        : "none",
                                    opacity: isMobileMenuOpen ? 1 : 0,
                                }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`font-display text-2xl tracking-wider transition-colors uppercase ${pathname === link.href
                                        ? "text-[#D4AF37]"
                                        : "text-white hover:text-[#D4AF37]"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}
