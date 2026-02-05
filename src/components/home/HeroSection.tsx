"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  HeadphonesIcon,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { locale } = useLanguage();

  const content = {
    title: {
      ru: "Ваше здоровье - наш приоритет",
      uz: "Sizning salomatingiz - bizning ustuvorligimiz",
      en: "Your Health is Our Priority",
    },
    subtitle: {
      ru: "Качественные биологически активные добавки для вашего здоровья и благополучия",
      uz: "Salomatlik va farovonligingiz uchun sifatli biologik faol qo'shimchalar",
      en: "Quality dietary supplements for your health and well-being",
    },
    cta: {
      ru: "Перейти в каталог",
      uz: "Katalogga o'tish",
      en: "Go to Catalog",
    },
    features: [
      {
        icon: ShieldCheck,
        title: {
          ru: "100% Качество",
          uz: "100% Sifat",
          en: "100% Quality",
        },
        description: {
          ru: "Только сертифицированная продукция",
          uz: "Faqat sertifikatlangan mahsulotlar",
          en: "Only certified products",
        },
      },
      {
        icon: Truck,
        title: {
          ru: "Быстрая доставка",
          uz: "Tez yetkazib berish",
          en: "Fast Delivery",
        },
        description: {
          ru: "Доставка по всему Узбекистану",
          uz: "O'zbekiston bo'ylab yetkazib berish",
          en: "Delivery across Uzbekistan",
        },
      },
      {
        icon: HeadphonesIcon,
        title: {
          ru: "Поддержка 24/7",
          uz: "24/7 qo'llab-quvvatlash",
          en: "24/7 Support",
        },
        description: {
          ru: "Всегда готовы помочь",
          uz: "Har doim yordam berishga tayyormiz",
          en: "Always ready to help",
        },
      },
    ],
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-0 h-72 w-72 animate-pulse rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-4 top-1/2 h-72 w-72 animate-pulse rounded-full bg-yellow-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 animate-pulse rounded-full bg-amber-300/10 blur-3xl" />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              <span>
                {locale === "ru" && "Лучший выбор для вашего здоровья"}
                {locale === "uz" && "Salomatingiz uchun eng yaxshi tanlov"}
                {locale === "en" && "Best choice for your health"}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
              <span className="gradient-text">{content.title[locale]}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 md:text-2xl">
              {content.subtitle[locale]}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-primary via-yellow-500 to-amber-500 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-primary/50 transition-all hover:scale-105 hover:shadow-primary/60"
              >
                {content.cta[locale]}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-primary/20 bg-white/80 px-8 py-4 text-lg font-bold text-primary backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/5"
              >
                {locale === "ru" && "О нас"}
                {locale === "uz" && "Biz haqimizda"}
                {locale === "en" && "About Us"}
              </Link>
            </div>

            {/* Features Grid */}
            <div className="grid gap-6 pt-8 sm:grid-cols-3">
              {content.features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-start gap-3 rounded-2xl border border-gray-200/50 bg-white/50 p-4 backdrop-blur-sm transition-all hover:scale-105 hover:border-primary/30 hover:bg-white hover:shadow-lg"
                >
                  <div className="rounded-xl bg-gradient-to-br from-primary/20 to-yellow-300/20 p-3 transition-transform group-hover:scale-110">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">
                      {feature.title[locale]}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description[locale]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="relative h-full w-full animate-fade-in">
              {/* Main Image Container */}
              <div className="relative flex h-full min-h-[600px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-yellow-100/50 to-amber-100/30 p-12 shadow-2xl">
                {/* 3D Pills Illustration */}
                <div className="relative">
                  <div className="absolute -left-12 -top-12 h-32 w-32 animate-pulse rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 opacity-70 blur-2xl" />
                  <div className="absolute -bottom-12 -right-12 h-40 w-40 animate-pulse rounded-full bg-gradient-to-br from-primary to-yellow-400 opacity-70 blur-2xl" />

                  <div className="relative space-y-8 text-center">
                    <div className="text-9xl animate-bounce">💊</div>
                    <div className="flex items-center justify-center gap-4">
                      <div className="text-6xl animate-pulse">🌿</div>
                      <div className="text-6xl animate-pulse delay-100">💪</div>
                      <div className="text-6xl animate-pulse delay-200">❤️</div>
                    </div>
                    <h3 className="text-3xl font-bold gradient-text">
                      {locale === "ru" && "БАД для здоровья"}
                      {locale === "uz" && "Salomatlik uchun BFQ"}
                      {locale === "en" && "Supplements for Health"}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -right-6 top-1/4 h-24 w-24 animate-pulse rounded-2xl bg-gradient-to-br from-primary to-yellow-400 opacity-20 blur-2xl" />
              <div className="absolute -left-6 bottom-1/4 h-32 w-32 animate-pulse rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-300 opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
