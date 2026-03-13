/*
 * DESIGN: Corporate Luxury Why Us Section
 * Dark navy background with gold accents
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Clock, Users, Award, Handshake, Globe } from "lucide-react";

export default function WhyUsSection() {
  const { t, isRTL } = useLanguage();

  const reasons = [
    {
      icon: <Shield size={36} />,
      title: t("الأمان والموثوقية", "Safety & Reliability"),
      description: t(
        "نضمن حقوق جميع الأطراف ونوفر بيئة آمنة لإتمام الصفقات",
        "We guarantee the rights of all parties and provide a safe environment for completing deals"
      ),
    },
    {
      icon: <Clock size={36} />,
      title: t("السرعة والكفاءة", "Speed & Efficiency"),
      description: t(
        "نوفر أسرع الإجراءات وأقل الوقت الممكن لإتمام صفقتك بنجاح",
        "We provide the fastest procedures and minimum time possible to complete your deal successfully"
      ),
    },
    {
      icon: <Users size={36} />,
      title: t("شبكة علاقات واسعة", "Extensive Network"),
      description: t(
        "نمتلك شبكة واسعة من المشترين والبائعين والمستثمرين في مختلف القطاعات",
        "We have an extensive network of buyers, sellers, and investors across various sectors"
      ),
    },
    {
      icon: <Award size={36} />,
      title: t("خبرة عشر سنوات", "Ten Years of Experience"),
      description: t(
        "أكثر من عقد من الخبرة في مجال الوساطة يمنحنا فهماً عميقاً للسوق",
        "More than a decade of brokerage experience gives us a deep understanding of the market"
      ),
    },
    {
      icon: <Handshake size={36} />,
      title: t("الشفافية التامة", "Full Transparency"),
      description: t(
        "نلتزم بالشفافية الكاملة في جميع مراحل الصفقة دون أي رسوم خفية",
        "We commit to full transparency in all stages of the deal with no hidden fees"
      ),
    },
    {
      icon: <Globe size={36} />,
      title: t("تغطية شاملة", "Comprehensive Coverage"),
      description: t(
        "نغطي جميع القطاعات والمناطق لنكون وسيطك الشامل في كل مكان",
        "We cover all sectors and regions to be your comprehensive broker everywhere"
      ),
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#1a2e5a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #c9a84c 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#c9a84c]/10 border border-[#c9a84c]/30 px-4 py-1.5 mb-6">
            <span className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase">
              {t("لماذا تختارنا", "Why Choose Us")}
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t("لماذا وسيط ناصر؟", "Why Broker Nasser?")}
          </h2>
          <div className="gold-divider max-w-xs mx-auto mb-6" />
          <p
            className="text-white/60 max-w-2xl mx-auto text-lg"
            style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}
          >
            {t(
              "نقدم ما يميزنا عن غيرنا من الوسطاء بخبرة وثقة لا مثيل لها",
              "We offer what sets us apart from other brokers with unmatched experience and trust"
            )}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`group p-8 border border-white/10 hover:border-[#c9a84c]/50 transition-all duration-300 hover:bg-white/5 ${isRTL ? "text-right" : "text-left"}`}
            >
              <div className="text-[#c9a84c] mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                {reason.icon}
              </div>
              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: "'Playfair Display', 'Cairo', serif" }}
              >
                {reason.title}
              </h3>
              <p
                className="text-white/60 text-sm leading-relaxed"
                style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}
              >
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
