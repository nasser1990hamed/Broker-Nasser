/*
 * DESIGN: Corporate Luxury About Section
 * Asymmetric layout with image on one side and text on the other
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle } from "lucide-react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663432182018/dzfmoWBkQaPgnH4zQD4ay7/about-image_c60dd619.jpg";

export default function AboutSection() {
  const { t, isRTL } = useLanguage();

  const highlights = [
    t("خبرة تتجاوز 10 سنوات في مجال الوساطة", "Over 10 years of brokerage experience"),
    t("شبكة واسعة من العلاقات التجارية والعقارية", "Extensive network of business and real estate connections"),
    t("التزام تام بالشفافية والأمانة في كل صفقة", "Full commitment to transparency and integrity in every deal"),
    t("فريق متخصص يعمل على مدار الساعة", "Specialized team working around the clock"),
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${isRTL ? "lg:flex-row-reverse" : ""}`}>
          {/* Image Side */}
          <div className={`relative ${isRTL ? "lg:order-2" : "lg:order-1"}`}>
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#c9a84c]/30 rounded-sm" />
              <img
                src={ABOUT_IMG}
                alt={t("وسيط ناصر", "Broker Nasser")}
                className="relative z-10 w-full h-[500px] object-cover rounded-sm shadow-2xl"
              />
              {/* Experience Badge */}
              <div className="absolute -bottom-6 left-8 z-20 bg-[#1a2e5a] text-white p-6 shadow-xl">
                <div
                  className="text-4xl font-bold text-[#c9a84c]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  10+
                </div>
                <div className="text-sm text-white/80 mt-1" style={{ fontFamily: "'Cairo', sans-serif" }}>
                  {t("سنوات من الخبرة", "Years of Experience")}
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className={`${isRTL ? "lg:order-1 text-right" : "lg:order-2 text-left"}`}>
            <div className="inline-block bg-[#c9a84c]/10 border border-[#c9a84c]/30 px-4 py-1.5 mb-6">
              <span className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase">
                {t("من نحن", "About Us")}
              </span>
            </div>

            <h2
              className="section-title mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t("وسيطك الموثوق", "Your Trusted")}
              <br />
              <span className="section-title-gold">
                {t("في كل صفقة", "Broker in Every Deal")}
              </span>
            </h2>

            <p
              className="text-gray-600 text-lg leading-relaxed mb-6"
              style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}
            >
              {t(
                "وسيط ناصر هو وسيطك الشامل الذي يجمع بين الخبرة العميقة والشبكة الواسعة من العلاقات لتحقيق أفضل الصفقات في مجالات العقارات والأعمال والمال. نؤمن بأن كل صفقة ناجحة تبدأ بثقة حقيقية.",
                "Broker Nasser is your comprehensive broker combining deep expertise and an extensive network of relationships to achieve the best deals in real estate, business, and finance. We believe every successful deal starts with genuine trust."
              )}
            </p>

            <p
              className="text-gray-500 text-base leading-relaxed mb-8"
              style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}
            >
              {t(
                "منذ أكثر من عقد من الزمن، نعمل على ربط البائعين بالمشترين وتسهيل الصفقات بكل شفافية واحترافية، مع ضمان حقوق جميع الأطراف.",
                "For over a decade, we have been connecting sellers with buyers and facilitating deals with full transparency and professionalism, ensuring the rights of all parties."
              )}
            </p>

            <div className="space-y-3 mb-8">
              {highlights.map((item, i) => (
                <div key={i} className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <CheckCircle className="text-[#c9a84c] flex-shrink-0" size={20} />
                  <span
                    className="text-gray-700"
                    style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-gold"
            >
              {t("تواصل معنا", "Contact Us")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
