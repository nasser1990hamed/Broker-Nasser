/*
 * DESIGN: Corporate Luxury Hero
 * Full-screen hero with dark overlay on city background
 * White text on dark background - high contrast
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663432182018/dzfmoWBkQaPgnH4zQD4ay7/hero-bg_3981cdd4.jpg";

export default function HeroSection() {
  const { t, isRTL } = useLanguage();

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e5a]/85 via-[#1a2e5a]/70 to-[#1a2e5a]/90" />

      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 text-center ${isRTL ? "font-cairo" : ""}`}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#c9a84c]/20 border border-[#c9a84c]/40 rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
          <span className="text-[#c9a84c] text-sm font-semibold tracking-wider">
            {t("وسيط موثوق ومعتمد", "Trusted & Certified Broker")}
          </span>
        </div>

        {/* Main Title */}
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {t("وسيط ناصر", "Broker Nasser")}
        </h1>

        {/* Subtitle */}
        <div className="gold-divider max-w-xs mx-auto mb-6" />
        <p
          className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto"
          style={{ fontFamily: "'Cairo', 'Lato', sans-serif", fontWeight: 300 }}
        >
          {t(
            "وسيطك الشامل في العقارات والأعمال والمال",
            "Your Comprehensive Broker in Real Estate, Business & Finance"
          )}
        </p>
        <p
          className="text-base md:text-lg text-white/70 mb-10 max-w-2xl mx-auto"
          style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}
        >
          {t(
            "نربط البائعين بالمشترين ونضمن أفضل الصفقات بكل شفافية واحترافية",
            "We connect sellers with buyers and ensure the best deals with full transparency and professionalism"
          )}
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isRTL ? "sm:flex-row-reverse" : ""}`}>
          <button onClick={scrollToContact} className="btn-gold text-base px-8 py-4 min-w-[200px]">
            {t("ابدأ الآن", "Get Started")}
          </button>
          <button
            onClick={scrollToServices}
            className="border-2 border-white/50 text-white hover:border-[#c9a84c] hover:text-[#c9a84c] px-8 py-4 min-w-[200px] font-semibold transition-all duration-300 rounded-sm"
            style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}
          >
            {t("اكتشف خدماتنا", "Explore Services")}
          </button>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { num: "500+", label: t("صفقة ناجحة", "Successful Deals") },
            { num: "10+", label: t("سنوات خبرة", "Years Experience") },
            { num: "98%", label: t("رضا العملاء", "Client Satisfaction") },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold text-[#c9a84c]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.num}
              </div>
              <div className="text-white/70 text-sm mt-1" style={{ fontFamily: "'Cairo', sans-serif" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-[#c9a84c]" size={32} />
      </div>
    </section>
  );
}
