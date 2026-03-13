/*
 * DESIGN: Corporate Luxury Testimonials
 * Cards with stars and client quotes on white background
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

export default function TestimonialsSection() {
  const { t, isRTL } = useLanguage();
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      name: t("محمد العمري", "Mohammed Al-Omari"),
      role: t("مستثمر عقاري", "Real Estate Investor"),
      text: t(
        "تعاملت مع وسيط ناصر في بيع عقار تجاري وكانت التجربة استثنائية. أتم الصفقة في وقت قياسي وبأفضل سعر توقعته. أنصح به بشدة.",
        "I dealt with Broker Nasser in selling a commercial property and the experience was exceptional. He completed the deal in record time at the best price I expected. Highly recommended."
      ),
      stars: 5,
    },
    {
      name: t("سارة الشمري", "Sara Al-Shammari"),
      role: t("صاحبة مشروع", "Business Owner"),
      text: t(
        "ساعدني في بيع مشروعي التجاري بأفضل الشروط. الشفافية والأمانة التي يتعامل بها لا مثيل لها. شكراً جزيلاً.",
        "He helped me sell my business on the best terms. The transparency and integrity he deals with is unmatched. Thank you so much."
      ),
      stars: 5,
    },
    {
      name: t("عبدالله الغامدي", "Abdullah Al-Ghamdi"),
      role: t("مدير شركة", "Company Director"),
      text: t(
        "وجدت من خلاله شريكاً تجارياً مثالياً لمشروعي. شبكة علاقاته واسعة جداً وخبرته في السوق لا تضاهى.",
        "Through him I found the perfect business partner for my project. His network is very extensive and his market expertise is unmatched."
      ),
      stars: 5,
    },
    {
      name: t("فاطمة الزهراني", "Fatima Al-Zahrani"),
      role: t("مستثمرة", "Investor"),
      text: t(
        "تجربة رائعة في شراء عقار سكني. كان صادقاً في كل التفاصيل وساعدني في اتخاذ القرار الصحيح. سأتعامل معه دائماً.",
        "A wonderful experience in buying a residential property. He was honest in all the details and helped me make the right decision. I will always deal with him."
      ),
      stars: 5,
    },
    {
      name: t("خالد المالكي", "Khalid Al-Malki"),
      role: t("رجل أعمال", "Businessman"),
      text: t(
        "أفضل وسيط تعاملت معه في مسيرتي المهنية. يفهم احتياجاتك ويعمل بجد لتحقيق أهدافك. شكراً ناصر.",
        "The best broker I have dealt with in my professional career. He understands your needs and works hard to achieve your goals. Thank you Nasser."
      ),
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#c9a84c]/10 border border-[#c9a84c]/30 px-4 py-1.5 mb-6">
            <span className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase">
              {t("آراء العملاء", "Client Testimonials")}
            </span>
          </div>
          <h2
            className="section-title mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t("ماذا يقول", "What Our")}
            <br />
            <span className="section-title-gold">{t("عملاؤنا", "Clients Say")}</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto" />
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className={`bg-[#f8f5ef] border border-[#c9a84c]/20 p-10 relative ${isRTL ? "text-right" : "text-left"}`}>
            <Quote
              className="text-[#c9a84c]/20 absolute top-6 left-6"
              size={60}
              style={{ transform: isRTL ? "scaleX(-1)" : "none" }}
            />
            <div className="flex gap-1 mb-4 justify-center">
              {Array(testimonials[active].stars).fill(0).map((_, i) => (
                <Star key={i} className="text-[#c9a84c] fill-[#c9a84c]" size={20} />
              ))}
            </div>
            <p
              className="text-gray-700 text-lg leading-relaxed mb-6 text-center italic"
              style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}
            >
              "{testimonials[active].text}"
            </p>
            <div className="text-center">
              <div
                className="font-bold text-[#1a2e5a] text-lg"
                style={{ fontFamily: "'Playfair Display', 'Cairo', serif" }}
              >
                {testimonials[active].name}
              </div>
              <div className="text-[#c9a84c] text-sm" style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}>
                {testimonials[active].role}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Selector */}
        <div className="flex flex-wrap gap-4 justify-center">
          {testimonials.map((t_item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 border transition-all duration-200 text-sm font-medium ${
                active === i
                  ? "bg-[#1a2e5a] text-white border-[#1a2e5a]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#c9a84c] hover:text-[#c9a84c]"
              }`}
              style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}
            >
              {t_item.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
