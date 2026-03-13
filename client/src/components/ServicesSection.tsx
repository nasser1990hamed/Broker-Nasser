/*
 * DESIGN: Corporate Luxury Services Section
 * Cards with images and gold accents on cream background
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, Briefcase, TrendingUp, Car, Gem, ShoppingBag, ArrowLeft, ArrowRight } from "lucide-react";

const REAL_ESTATE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663432182018/dzfmoWBkQaPgnH4zQD4ay7/services-real-estate_4432b925.jpg";
const BUSINESS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663432182018/dzfmoWBkQaPgnH4zQD4ay7/services-business_c62be61a.jpg";
const FINANCE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663432182018/dzfmoWBkQaPgnH4zQD4ay7/services-finance_92f68763.jpg";

export default function ServicesSection() {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: <Building2 size={32} />,
      title: t("الوساطة العقارية", "Real Estate Brokerage"),
      description: t(
        "نتخصص في بيع وشراء وتأجير العقارات السكنية والتجارية والصناعية. نضمن أفضل الأسعار وأسرع الإجراءات.",
        "We specialize in buying, selling, and renting residential, commercial, and industrial properties. We guarantee the best prices and fastest procedures."
      ),
      image: REAL_ESTATE_IMG,
      features: [
        t("عقارات سكنية", "Residential Properties"),
        t("عقارات تجارية", "Commercial Properties"),
        t("أراضي ومزارع", "Land & Farms"),
      ],
    },
    {
      icon: <Briefcase size={32} />,
      title: t("الوساطة التجارية", "Business Brokerage"),
      description: t(
        "نساعدك في بيع أو شراء الشركات والمشاريع التجارية بكل أنواعها، مع ضمان حقوق جميع الأطراف.",
        "We help you buy or sell businesses and commercial ventures of all types, ensuring the rights of all parties."
      ),
      image: BUSINESS_IMG,
      features: [
        t("بيع وشراء الشركات", "Buy & Sell Companies"),
        t("الشراكات التجارية", "Business Partnerships"),
        t("المشاريع الناشئة", "Startup Ventures"),
      ],
    },
    {
      icon: <TrendingUp size={32} />,
      title: t("الوساطة المالية", "Financial Brokerage"),
      description: t(
        "خدمات الوساطة في الاستثمارات والأوراق المالية والصفقات المالية الكبرى بأعلى معايير الأمان.",
        "Brokerage services in investments, securities, and major financial transactions with the highest safety standards."
      ),
      image: FINANCE_IMG,
      features: [
        t("الاستثمارات", "Investments"),
        t("الصفقات المالية", "Financial Deals"),
        t("التمويل والقروض", "Financing & Loans"),
      ],
    },
    {
      icon: <Car size={32} />,
      title: t("وساطة السيارات", "Vehicle Brokerage"),
      description: t(
        "وساطة متخصصة في بيع وشراء السيارات والمركبات الفاخرة والتجارية بأفضل الأسعار.",
        "Specialized brokerage in buying and selling luxury and commercial vehicles at the best prices."
      ),
      image: null,
      features: [
        t("سيارات فاخرة", "Luxury Cars"),
        t("مركبات تجارية", "Commercial Vehicles"),
        t("معارض السيارات", "Car Showrooms"),
      ],
    },
    {
      icon: <Gem size={32} />,
      title: t("وساطة المجوهرات والذهب", "Jewelry & Gold Brokerage"),
      description: t(
        "خدمات وساطة احترافية في مجال المجوهرات والذهب والمعادن الثمينة مع ضمان الأصالة.",
        "Professional brokerage services in jewelry, gold, and precious metals with authenticity guarantee."
      ),
      image: null,
      features: [
        t("الذهب والمعادن", "Gold & Metals"),
        t("المجوهرات الفاخرة", "Luxury Jewelry"),
        t("الأحجار الكريمة", "Precious Stones"),
      ],
    },
    {
      icon: <ShoppingBag size={32} />,
      title: t("الوساطة التجارية العامة", "General Trade Brokerage"),
      description: t(
        "نقدم خدمات الوساطة في جميع أنواع التجارة العامة والبضائع والسلع بكل أنواعها.",
        "We provide brokerage services in all types of general trade, goods, and commodities of all kinds."
      ),
      image: null,
      features: [
        t("البضائع والسلع", "Goods & Commodities"),
        t("العقود التجارية", "Commercial Contracts"),
        t("التجارة الدولية", "International Trade"),
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#f8f5ef]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isRTL ? "" : ""}`}>
          <div className="inline-block bg-[#c9a84c]/10 border border-[#c9a84c]/30 px-4 py-1.5 mb-6">
            <span className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase">
              {t("خدماتنا", "Our Services")}
            </span>
          </div>
          <h2
            className="section-title mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t("وساطة شاملة في", "Comprehensive Brokerage")}
            <br />
            <span className="section-title-gold">
              {t("كل المجالات", "Across All Sectors")}
            </span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto mb-6" />
          <p
            className="text-gray-500 max-w-2xl mx-auto text-lg"
            style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}
          >
            {t(
              "نقدم خدمات وساطة متكاملة تغطي جميع القطاعات لضمان أفضل النتائج لعملائنا",
              "We provide comprehensive brokerage services covering all sectors to ensure the best results for our clients"
            )}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-sm shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-[#c9a84c]/30"
            >
              {/* Image or Icon Header */}
              {service.image ? (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e5a]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-[#c9a84c]">{service.icon}</div>
                  </div>
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-[#1a2e5a] to-[#2a4a8a] flex items-center justify-center">
                  <div className="text-[#c9a84c] opacity-80 group-hover:opacity-100 transition-opacity">
                    {service.icon}
                  </div>
                </div>
              )}

              {/* Content */}
              <div className={`p-6 ${isRTL ? "text-right" : "text-left"}`}>
                <h3
                  className="text-xl font-bold text-[#1a2e5a] mb-3"
                  style={{ fontFamily: "'Playfair Display', 'Cairo', serif" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-gray-500 text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}
                >
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-1.5 mb-5">
                  {service.features.map((f, fi) => (
                    <div key={fi} className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0" />
                      <span className="text-gray-600 text-sm" style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className={`flex items-center gap-2 text-[#c9a84c] font-semibold text-sm hover:gap-3 transition-all ${isRTL ? "flex-row-reverse" : ""}`}
                  style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}
                >
                  {t("استفسر الآن", "Inquire Now")}
                  {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
