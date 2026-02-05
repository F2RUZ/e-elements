"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle, Percent, MapPin } from "lucide-react";

export default function BenefitsBanner() {
  const { locale } = useLanguage();

  const benefits = [
    {
      id: 1,
      icon: CheckCircle,
      title: {
        ru: "ПРОВЕРЕНО",
        uz: "TEKSHIRILGAN",
        en: "VERIFIED",
      },
      description: {
        ru: "Только сертифицированная продукция",
        uz: "Faqat sertifikatlangan mahsulotlar",
        en: "Only certified products",
      },
      bgColor: "bg-gradient-to-br from-lime-400 to-green-500",
      emoji: "✓",
    },
    {
      id: 2,
      icon: Percent,
      title: {
        ru: "ВЫГОДНО",
        uz: "FOYDALI",
        en: "PROFITABLE",
      },
      description: {
        ru: "Верным до 5% бонусными баллами 1 балл = 1 рубль",
        uz: "Sodiq mijozlarga 5% bonus ball 1 ball = 1 so'm",
        en: "Up to 5% bonus points 1 point = 1 currency",
      },
      bgColor: "bg-gradient-to-br from-lime-400 to-green-500",
      emoji: "%",
    },
    {
      id: 3,
      icon: MapPin,
      title: {
        ru: "БЫСТРО",
        uz: "TEZ",
        en: "FAST",
      },
      description: {
        ru: "Быстрая и бесплатная доставка от 999 ₽",
        uz: "Tez va bepul yetkazib berish 999 so'mdan",
        en: "Fast and free delivery from 999",
      },
      bgColor: "bg-gradient-to-br from-lime-400 to-green-500",
      emoji: "📍",
    },
  ];

  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className={`group relative overflow-hidden rounded-2xl ${benefit.bgColor} p-6 transition-transform hover:scale-105`}
            >
              {/* Icon/Emoji - Top Right */}
              <div className="absolute right-4 top-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <benefit.icon
                    className="h-6 w-6 text-white"
                    strokeWidth={2.5}
                  />
                </div>
              </div>

              {/* 3D Illustration Placeholder - Right Side */}
              <div className="absolute -right-4 bottom-0 text-6xl opacity-30">
                {benefit.id === 1 && "💊"}
                {benefit.id === 2 && "📦"}
                {benefit.id === 3 && "🎁"}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="mb-2 text-2xl font-black text-white">
                  {benefit.title[locale]}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-white/90">
                  {benefit.description[locale]}
                </p>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
