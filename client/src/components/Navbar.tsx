/*
 * DESIGN: Corporate Luxury Navbar
 * Navy background with gold accents, bilingual support
 */
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, Globe } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663432182018/dzfmoWBkQaPgnH4zQD4ay7/logo_4ef4d57e.png";

export default function Navbar() {
  const { language, toggleLanguage, t, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: t("الرئيسية", "Home") },
    { href: "#about", label: t("من نحن", "About") },
    { href: "#services", label: t("الخدمات", "Services") },
    { href: "#why-us", label: t("لماذا ناصر", "Why Nasser") },
    { href: "#stats", label: t("إنجازاتنا", "Achievements") },
    { href: "#testimonials", label: t("آراء العملاء", "Testimonials") },
    { href: "#contact", label: t("تواصل معنا", "Contact") },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1a2e5a] shadow-2xl py-2"
          : "bg-[#1a2e5a]/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("#home")}>
          <img src={LOGO_URL} alt="Broker Nasser Logo" className="h-12 w-12 object-contain" />
          <div className={isRTL ? "text-right" : "text-left"}>
            <div className="text-white font-bold text-lg leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t("وسيط ناصر", "Broker Nasser")}
            </div>
            <div className="text-[#c9a84c] text-xs font-light tracking-widest">
              {t("وسيط شامل", "FULL BROKER")}
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-white/80 hover:text-[#c9a84c] px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              style={{ fontFamily: "'Cairo', sans-serif" }}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </button>
          ))}
        </div>

        {/* Language Toggle + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-white/70 hover:text-[#c9a84c] transition-colors text-sm"
          >
            <Globe size={16} />
            <span>{language === "ar" ? "EN" : "عر"}</span>
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-gold text-sm px-5 py-2.5"
          >
            {t("تواصل معنا", "Contact Us")}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
          <button onClick={toggleLanguage} className="text-white/70 hover:text-[#c9a84c]">
            <Globe size={18} />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#1a2e5a] border-t border-[#c9a84c]/20 py-4">
          <div className="container mx-auto px-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-white/80 hover:text-[#c9a84c] py-3 text-base font-medium transition-colors border-b border-white/10 last:border-0 text-start"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-gold mt-3 text-center"
            >
              {t("تواصل معنا", "Contact Us")}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
