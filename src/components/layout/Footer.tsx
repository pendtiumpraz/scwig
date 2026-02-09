import Link from "next/link";
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Products", href: "/products" },
    { name: "Our Services", href: "/services" },
    { name: "Branch Locations", href: "/branches" },
    { name: "Contact", href: "/contact" },
];

const services = [
    { name: "Custom Wig Creation", href: "/services#custom" },
    { name: "Styling & Consultation", href: "/services#styling" },
    { name: "Wig Maintenance", href: "/services#maintenance" },
    { name: "Medical Wigs", href: "/services#medical" },
    { name: "Training Academy", href: "/services#training" },
];

const socialLinks = [
    { icon: FaInstagram, href: "https://instagram.com/scwig.official", label: "Instagram" },
    { icon: FaFacebookF, href: "https://facebook.com/scwig", label: "Facebook" },
    { icon: FaYoutube, href: "https://youtube.com/scwig", label: "YouTube" },
    { icon: FaTiktok, href: "https://tiktok.com/@scwig", label: "TikTok" },
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
                                <h2 className="text-2xl tracking-[0.3em] text-white" style={{ fontFamily: 'Cinzel, serif' }}>
                                    SCWIG
                                </h2>
                                <p className="text-[10px] tracking-[0.2em] text-[#A0A0A0] uppercase">
                                    Premium Wigs
                                </p>
                            </div>
                        </Link>
                        <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6">
                            Elegance Reimagined. Since 2009, we have been crafting premium wigs
                            that empower individuals to express their unique beauty and confidence.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg tracking-[0.2em] text-white mb-6 uppercase" style={{ fontFamily: 'Cinzel, serif' }}>
                            Quick Links
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
                        <h3 className="text-lg tracking-[0.2em] text-white mb-6 uppercase" style={{ fontFamily: 'Cinzel, serif' }}>
                            Services
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
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
                        <h3 className="text-lg tracking-[0.2em] text-white mb-6 uppercase" style={{ fontFamily: 'Cinzel, serif' }}>
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <HiLocationMarker className="text-[#D4AF37] text-lg mt-1 flex-shrink-0" />
                                <span className="text-[#A0A0A0] text-sm">
                                    Jl. Sudirman No. 123<br />
                                    Jakarta Pusat 10220<br />
                                    Indonesia
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <HiPhone className="text-[#D4AF37] text-lg flex-shrink-0" />
                                <a
                                    href="tel:+622112345678"
                                    className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors text-sm"
                                >
                                    +62 21 1234 5678
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaWhatsapp className="text-[#D4AF37] text-lg flex-shrink-0" />
                                <a
                                    href="https://wa.me/6281234567890"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors text-sm"
                                >
                                    +62 812 3456 7890
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <HiMail className="text-[#D4AF37] text-lg flex-shrink-0" />
                                <a
                                    href="mailto:info@scwig.com"
                                    className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors text-sm"
                                >
                                    info@scwig.com
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
                            © 2025 SCWIG. All Rights Reserved.
                        </p>
                        <div className="flex items-center gap-6 text-sm text-[#A0A0A0]">
                            <Link href="/privacy" className="hover:text-[#D4AF37] transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-[#D4AF37] transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
