/*
 * DESIGN: Corporate Luxury Contact Section
 * Split layout: info on navy side, form on white side
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const { t, isRTL } = useLanguage();
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      toast.error(t("يرجى ملء الحقول المطلوبة", "Please fill in required fields"));
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    toast.success(t("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً", "Your message sent successfully! We'll contact you soon"));
    setForm({ name: "", phone: "", email: "", service: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Phone size={22} />,
      label: t("اتصل بنا", "Call Us"),
      value: "+966 5X XXX XXXX",
      href: "tel:+966500000000",
    },
    {
      icon: <MessageCircle size={22} />,
      label: t("واتساب", "WhatsApp"),
      value: t("تواصل عبر واتساب", "Contact via WhatsApp"),
      href: "https://wa.me/966500000000",
    },
    {
      icon: <Mail size={22} />,
      label: t("البريد الإلكتروني", "Email"),
      value: "info@brokernasser.com",
      href: "mailto:info@brokernasser.com",
    },
    {
      icon: <MapPin size={22} />,
      label: t("الموقع", "Location"),
      value: t("المملكة العربية السعودية", "Saudi Arabia"),
      href: "#",
    },
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
    <section id="contact" className="py-0">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Left: Navy Info Side */}
        <div className={`bg-[#1a2e5a] p-12 lg:p-16 flex flex-col justify-center ${isRTL ? "text-right lg:order-2" : "text-left lg:order-1"}`}>
          <div className="inline-block bg-[#c9a84c]/10 border border-[#c9a84c]/30 px-4 py-1.5 mb-6 self-start">
            <span className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase">
              {t("تواصل معنا", "Contact Us")}
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t("هل لديك صفقة", "Have a Deal")}
            <br />
            <span className="text-[#c9a84c]">{t("في ذهنك؟", "in Mind?")}</span>
          </h2>

          <p
            className="text-white/60 text-lg mb-10"
            style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}
          >
            {t(
              "تواصل معنا الآن وسنساعدك في إتمام صفقتك بأفضل الشروط",
              "Contact us now and we'll help you complete your deal on the best terms"
            )}
          </p>

          <div className="space-y-5">
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`flex items-center gap-4 group ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <div className="w-12 h-12 bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c] group-hover:bg-[#c9a84c] group-hover:text-[#1a2e5a] transition-all duration-300 flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-wider" style={{ fontFamily: "'Lato', sans-serif" }}>
                    {info.label}
                  </div>
                  <div className="text-white font-medium" style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}>
                    {info.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Form Side */}
        <div className={`bg-[#f8f5ef] p-12 lg:p-16 flex flex-col justify-center ${isRTL ? "lg:order-1" : "lg:order-2"}`}>
          <h3
            className="text-2xl font-bold text-[#1a2e5a] mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t("أرسل لنا رسالة", "Send Us a Message")}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}>
                  {t("الاسم *", "Name *")}
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 bg-white px-4 py-3 text-gray-800 focus:outline-none focus:border-[#c9a84c] transition-colors"
                  placeholder={t("اسمك الكريم", "Your name")}
                  style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}
                  dir={isRTL ? "rtl" : "ltr"}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}>
                  {t("رقم الجوال *", "Phone *")}
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-200 bg-white px-4 py-3 text-gray-800 focus:outline-none focus:border-[#c9a84c] transition-colors"
                  placeholder="+966 5XX XXX XXX"
                  dir="ltr"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5" style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}>
                {t("البريد الإلكتروني", "Email")}
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-200 bg-white px-4 py-3 text-gray-800 focus:outline-none focus:border-[#c9a84c] transition-colors"
                placeholder="example@email.com"
                dir="ltr"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5" style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}>
                {t("نوع الخدمة", "Service Type")}
              </label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full border border-gray-200 bg-white px-4 py-3 text-gray-800 focus:outline-none focus:border-[#c9a84c] transition-colors"
                style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}
                dir={isRTL ? "rtl" : "ltr"}
              >
                <option value="">{t("اختر نوع الخدمة", "Select service type")}</option>
                {services.map((s, i) => (
                  <option key={i} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5" style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}>
                {t("رسالتك *", "Message *")}
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full border border-gray-200 bg-white px-4 py-3 text-gray-800 focus:outline-none focus:border-[#c9a84c] transition-colors resize-none"
                placeholder={t("اكتب تفاصيل طلبك هنا...", "Write your request details here...")}
                style={{ fontFamily: "'Cairo', 'Lato', sans-serif" }}
                dir={isRTL ? "rtl" : "ltr"}
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className={`w-full btn-gold flex items-center justify-center gap-3 ${sending ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {sending ? (
                <span className="animate-spin border-2 border-[#1a2e5a] border-t-transparent rounded-full w-5 h-5" />
              ) : (
                <Send size={18} />
              )}
              {sending ? t("جارٍ الإرسال...", "Sending...") : t("إرسال الرسالة", "Send Message")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
