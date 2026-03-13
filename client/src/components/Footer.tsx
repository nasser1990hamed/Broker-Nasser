/*
 * DESIGN: Corporate Luxury Footer
 * Dark navy with gold accents and comprehensive links
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663432182018/dzfmoWBkQaPgnH4zQD4ay7/logo_4ef4d57e.png";

export default function Footer() {
  const { t, isRTL } = useLanguage();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { href: "#home", label: t("الرئيسية", "Home") },
    { href: "#about", label: t("من نحن", "About Us") },
    { href: "#services", label: t("خدماتنا", "Our Services") },
    { href: "#why-us", label: t("لماذا ناصر", "Why Nasser") },
    { href: "#stats", label: t("إنجازاتنا", "Achievements") },
    { href: "#testimonials", label: t("آراء العملاء", "Testimonials") },
    { href: "#contact", label: t("تواصل معنا", "Contact Us") },
  ];

  const services = [
    t("الوساطة العقارية", "Real Estate Brokerage"),
    t("الوساطة التجارية", "Business Brokerage"),
    t("الوساطة المالية", "Financial Brokerage"),
    t("وساطة السيارات", "Vehicle Brokerage"),
    t("وساطة المجوهرات", "Jewelry Brokerage"),
    t("الوساطة العامة", "General Brokerage"),
  ];

  return (
    <footer className="bg-[#0f1e3d] text-white">
      {/* Top Gold Line */}
      <div className="gold-divider" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-10 ${isRTL ? "text-right" : "text-left"}`}>
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className={`flex items-center gap-3 mb-5 ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
              <img src={LOGO_URL} alt="Broker Nasser" className="h-14 w-14 object-contain" />
              <div>
                <div className="text-white font-bold text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {t("وسيط ناصر", "Broker Nasser")}
                </div>
                <div className="text-[#c9a84c] text-xs tracking-widest">
                  {t("وسيط شامل", "FULL BROKER")}
                </div>
              </div>
            </div>
            <p
              className="text-white/50 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}
            >
              {t(
                "وسيطك الموثوق في جميع المجالات. نربط البائعين بالمشترين بكل شفافية وأمانة.",
                "Your trusted broker in all fields. We connect sellers with buyers with full transparency and integrity."
              )}
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#1a2e5a] transition-all duration-300"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="tel:+966500000000"
                className="w-10 h-10 bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#1a2e5a] transition-all duration-300"
              >
                <Phone size={18} />
              </a>
              <a
                href="mailto:info@brokernasser.com"
                className="w-10 h-10 bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#1a2e5a] transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-[#c9a84c] font-semibold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              {t("روابط سريعة", "Quick Links")}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/50 hover:text-[#c9a84c] text-sm transition-colors"
                    style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-[#c9a84c] font-semibold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              {t("خدماتنا", "Our Services")}
            </h4>
            <ul className="space-y-2.5">
              {services.map((service, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-white/50 hover:text-[#c9a84c] text-sm transition-colors"
                    style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-[#c9a84c] font-semibold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              {t("تواصل معنا", "Contact Us")}
            </h4>
            <div className="space-y-4">
              {[
                { icon: <Phone size={16} />, text: "+966 5X XXX XXXX", href: "tel:+966500000000" },
                { icon: <MessageCircle size={16} />, text: t("واتساب متاح", "WhatsApp Available"), href: "https://wa.me/966500000000" },
                { icon: <Mail size={16} />, text: "info@brokernasser.com", href: "mailto:info@brokernasser.com" },
                { icon: <MapPin size={16} />, text: t("المملكة العربية السعودية", "Saudi Arabia"), href: "#" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-white/50 hover:text-[#c9a84c] transition-colors text-sm ${isRTL ? "flex-row-reverse" : ""}`}
                  style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}
                >
                  <span className="text-[#c9a84c]/60 flex-shrink-0">{item.icon}</span>
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5">
          <div className={`flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-sm ${isRTL ? "sm:flex-row-reverse" : ""}`}>
            <p style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}>
              {t(
                `© ${new Date().getFullYear()} وسيط ناصر. جميع الحقوق محفوظة.`,
                `© ${new Date().getFullYear()} Broker Nasser. All rights reserved.`
              )}
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif" }}>
              {t("وسيط شامل في كل المجالات", "Comprehensive Broker in All Fields")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
