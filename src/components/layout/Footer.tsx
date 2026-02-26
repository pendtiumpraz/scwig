import Link from "next/link";
import { FaLinkedinIn, FaGlobeAsia } from "react-icons/fa";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Engineering DNA", href: "/about" },
    { name: "Engineered Products", href: "/products" },
    { name: "Capabilities", href: "/services" },
    { name: "Technical Inquiry", href: "/contact" },
];

const capabilities = [
    { name: "Cap Engineering Technology", href: "/services#cap-engineering" },
    { name: "Material Engineering", href: "/services#material-engineering" },
    { name: "Manufacturing System", href: "/services#manufacturing" },
    { name: "Quality Engineering", href: "/services#quality" },
    { name: "OEM Solutions", href: "/services#oem" },
];

const socialLinks = [
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaGlobeAsia, href: "#", label: "Global Network" },
];

export default function Footer() {
    return (
        <footer className="bg-[#0D0D0D] border-t border-[#D4AF37]/20 mt-auto">
            {/* Main Footer */}
            <div className="max-w-[1400px] mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="inline-flex items-center gap-3 mb-6">
                            <span className="text-[#D4AF37] text-2xl">✦</span>
                            <div>
                                <h2 className="text-xl tracking-[0.2em] text-white" style={{ fontFamily: 'Cinzel, serif' }}>
                                    PT NOVAKOR<br />INDONESIA
                                </h2>
                            </div>
                        </Link>
                        <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6 font-medium">
                            <span className="text-[#D4AF37]">Engineering-Based</span><br />
                            OEM Wig Manufacturer
                        </p>
                        <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6 italic">
                            Designed with precision.<br />
                            Manufactured with system.<br />
                            Delivered with consistency.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-sm border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm tracking-[0.2em] text-white mb-6 uppercase" style={{ fontFamily: 'Cinzel, serif' }}>
                            Navigation
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-sm tracking-[0.2em] text-white mb-6 uppercase" style={{ fontFamily: 'Cinzel, serif' }}>
                            Capabilities
                        </h3>
                        <ul className="space-y-3">
                            {capabilities.map((service) => (
                                <li key={service.name}>
                                    <Link
                                        href={service.href}
                                        className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors text-sm"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm tracking-[0.2em] text-white mb-6 uppercase" style={{ fontFamily: 'Cinzel, serif' }}>
                            Technical Inquiry
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <HiLocationMarker className="text-[#D4AF37] text-lg mt-1 flex-shrink-0" />
                                <span className="text-[#A0A0A0] text-sm">
                                    Head Office & Manufacturing<br />
                                    Purbalingga, Central Java<br />
                                    Indonesia
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <HiPhone className="text-[#D4AF37] text-lg flex-shrink-0" />
                                <a
                                    href="tel:+622811234567"
                                    className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors text-sm"
                                >
                                    +62 281 123 4567
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <HiMail className="text-[#D4AF37] text-lg flex-shrink-0" />
                                <a
                                    href="mailto:inquiry@novakor.id"
                                    className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors text-sm"
                                >
                                    inquiry@novakor.id
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#D4AF37]/10">
                <div className="max-w-[1400px] mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-[#A0A0A0] text-sm text-center md:text-left">
                            © {new Date().getFullYear()} PT Novakor Indonesia. Engineering-Based OEM. All Rights Reserved.
                        </p>
                        <div className="flex items-center gap-6 text-sm text-[#A0A0A0]">
                            <Link href="/privacy" className="hover:text-[#D4AF37] transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-[#D4AF37] transition-colors">
                                NDA & Compliance
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
