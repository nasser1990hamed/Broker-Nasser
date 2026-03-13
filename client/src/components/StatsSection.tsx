/*
 * DESIGN: Corporate Luxury Stats Section
 * Gold accents on cream background with animated counters
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef, useState } from "react";

function CountUp({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const timer = setInterval(() => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress >= 1) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <div ref={ref}>{count}</div>;
}

export default function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    { num: 500, suffix: "+", label: t("صفقة ناجحة", "Successful Deals") },
    { num: 10, suffix: "+", label: t("سنوات خبرة", "Years Experience") },
    { num: 98, suffix: "%", label: t("رضا العملاء", "Client Satisfaction") },
    { num: 300, suffix: "+", label: t("عميل موثوق", "Trusted Clients") },
    { num: 6, suffix: "", label: t("قطاعات متخصصة", "Specialized Sectors") },
    { num: 50, suffix: "M+", label: t("قيمة الصفقات (ريال)", "Deal Value (SAR)") },
  ];

  return (
    <section id="stats" className="py-20 bg-[#f8f5ef] relative">
      {/* Top Gold Line */}
      <div className="gold-divider mb-0" />

      <div className="container mx-auto px-4 py-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#c9a84c]/10 border border-[#c9a84c]/30 px-4 py-1.5 mb-4">
            <span className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase">
              {t("إنجازاتنا", "Our Achievements")}
            </span>
          </div>
          <h2
            className="section-title"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t("أرقام تتحدث عن", "Numbers That Speak")}
            <br />
            <span className="section-title-gold">{t("نجاحنا", "Our Success")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 bg-white border border-gray-100 hover:border-[#c9a84c]/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div
                className="text-4xl font-bold text-[#1a2e5a] group-hover:text-[#c9a84c] transition-colors flex items-center justify-center gap-0.5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <CountUp target={stat.num} />
                <span>{stat.suffix}</span>
              </div>
              <div
                className="text-gray-500 text-sm mt-2"
                style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gold Line */}
      <div className="gold-divider mt-0" />
    </section>
  );
}
