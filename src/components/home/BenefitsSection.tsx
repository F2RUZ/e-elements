// app/components/sections/BenefitsSection.tsx
"use client";

import {
  ShieldCheck,
  DollarSign,
  HeadphonesIcon,
  Truck,
  Award,
  Clock,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function BenefitsSection() {
  const { locale } = useLanguage();

  const content = {
    title: {
      ru: "Почему выбирают нас",
      uz: "Nima uchun bizni tanlashadi",
      en: "Why Choose Us",
    },
    subtitle: {
      ru: "Преимущества работы с нами",
      uz: "Biz bilan ishlashning afzalliklari",
      en: "Benefits of working with us",
    },
    benefits: [
      {
        icon: ShieldCheck,
        title: {
          ru: "Сертифицированная продукция",
          uz: "Sertifikatlangan mahsulotlar",
          en: "Certified Products",
        },
        description: {
          ru: "Все товары имеют необходимые сертификаты качества и безопасности",
          uz: "Barcha mahsulotlar kerakli sifat va xavfsizlik sertifikatlariga ega",
          en: "All products have the necessary quality and safety certificates",
        },
        color: "from-green-400 to-emerald-500",
        bgColor: "bg-green-500/10",
      },
      {
        icon: DollarSign,
        title: {
          ru: "Выгодные цены",
          uz: "Qulay narxlar",
          en: "Competitive Prices",
        },
        description: {
          ru: "Конкурентные цены, регулярные акции и специальные предложения",
          uz: "Raqobatbardosh narxlar, muntazam aksiyalar va maxsus takliflar",
          en: "Competitive prices, regular promotions and special offers",
        },
        color: "from-amber-400 to-orange-500",
        bgColor: "bg-amber-500/10",
      },
      {
        icon: HeadphonesIcon,
        title: {
          ru: "Консультация специалистов",
          uz: "Mutaxassislar maslahati",
          en: "Expert Consultation",
        },
        description: {
          ru: "Профессиональная помощь в подборе оптимального комплекса БАД",
          uz: "Optimal BFQ kompleksini tanlashda professional yordam",
          en: "Professional help in selecting the optimal supplement complex",
        },
        color: "from-blue-400 to-cyan-500",
        bgColor: "bg-blue-500/10",
      },
      {
        icon: Truck,
        title: {
          ru: "Быстрая доставка",
          uz: "Tez yetkazib berish",
          en: "Fast Delivery",
        },
        description: {
          ru: "Доставка по всему Узбекистану в кратчайшие сроки",
          uz: "O'zbekiston bo'ylab eng qisqa muddatda yetkazib berish",
          en: "Delivery across Uzbekistan in the shortest time",
        },
        color: "from-purple-400 to-pink-500",
        bgColor: "bg-purple-500/10",
      },
      {
        icon: Award,
        title: {
          ru: "Гарантия качества",
          uz: "Sifat kafolati",
          en: "Quality Guarantee",
        },
        description: {
          ru: "100% гарантия подлинности и качества всех товаров",
          uz: "Barcha mahsulotlarning asl va sifati uchun 100% kafolat",
          en: "100% guarantee of authenticity and quality of all products",
        },
        color: "from-rose-400 to-red-500",
        bgColor: "bg-rose-500/10",
      },
      {
        icon: Clock,
        title: {
          ru: "Работаем 24/7",
          uz: "24/7 ishlaymiz",
          en: "24/7 Service",
        },
        description: {
          ru: "Круглосуточная поддержка и прием заказов онлайн",
          uz: "Onlayn qo'llab-quvvatlash va buyurtmalarni 24/7 qabul qilish",
          en: "24/7 support and online order acceptance",
        },
        color: "from-indigo-400 to-violet-500",
        bgColor: "bg-indigo-500/10",
      },
    ],
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">
            <span className="gradient-text">{content.title[locale]}</span>
          </h2>
          <p className="text-xl text-gray-600">{content.subtitle[locale]}</p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:border-primary/30 hover:shadow-2xl"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${benefit.bgColor} transition-all duration-300 group-hover:scale-110`}
                >
                  <div
                    className={`flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.color} bg-clip-text text-transparent`}
                  >
                    <benefit.icon
                      className="h-8 w-8"
                      style={{ color: "currentColor" }}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {benefit.title[locale]}
                </h3>

                {/* Description */}
                <p className="leading-relaxed text-gray-600">
                  {benefit.description[locale]}
                </p>
              </div>

              {/* Decorative corner element */}
              <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 grid gap-8 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-amber-500/5 p-8 md:grid-cols-4"
        >
          {[
            {
              value: "10K+",
              label: {
                ru: "Довольных клиентов",
                uz: "Mamnun mijozlar",
                en: "Happy Clients",
              },
            },
            {
              value: "500+",
              label: {
                ru: "Товаров в каталоге",
                uz: "Katalogdagi mahsulotlar",
                en: "Products",
              },
            },
            {
              value: "99%",
              label: {
                ru: "Положительных отзывов",
                uz: "Ijobiy sharhlar",
                en: "Positive Reviews",
              },
            },
            {
              value: "24/7",
              label: {
                ru: "Поддержка клиентов",
                uz: "Mijozlarni qo'llab-quvvatlash",
                en: "Customer Support",
              },
            },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="gradient-text mb-2 text-4xl font-black">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-gray-600">
                {stat.label[locale]}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
