// app/components/sections/ReferralBanner.tsx
"use client";

import Link from "next/link";
import { Gift, Users, Percent, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function ReferralBanner() {
  const { locale } = useLanguage();

  const content = {
    badge: {
      ru: "Реферальная программа",
      uz: "Referal dastur",
      en: "Referral Program",
    },
    title: {
      ru: "Приглашайте друзей и получайте скидки!",
      uz: "Do'stlaringizni taklif qiling va chegirmalar oling!",
      en: "Invite friends and get discounts!",
    },
    subtitle: {
      ru: "Пригласите 10 друзей и получите промокод на 15% скидку",
      uz: "10 ta do'stingizni taklif qiling va 15% chegirma promokodini oling",
      en: "Invite 10 friends and get a 15% discount promo code",
    },
    button: {
      ru: "Узнать подробнее",
      uz: "Batafsil ma'lumot",
      en: "Learn More",
    },
    features: [
      {
        icon: Users,
        title: {
          ru: "Приглашайте друзей",
          uz: "Do'stlarni taklif qiling",
          en: "Invite friends",
        },
        description: {
          ru: "Делитесь уникальной ссылкой",
          uz: "Noyob havolani ulashing",
          en: "Share your unique link",
        },
      },
      {
        icon: Gift,
        title: {
          ru: "Получайте бонусы",
          uz: "Bonuslar oling",
          en: "Get bonuses",
        },
        description: {
          ru: "За каждого приведенного друга",
          uz: "Har bir do'st uchun",
          en: "For each referred friend",
        },
      },
      {
        icon: Percent,
        title: {
          ru: "Используйте скидки",
          uz: "Chegirmalardan foydalaning",
          en: "Use discounts",
        },
        description: {
          ru: "До 15% на все товары",
          uz: "Barcha mahsulotlarga 15% gacha",
          en: "Up to 15% on all products",
        },
      },
    ],
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-primary to-orange-500 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/20 px-6 py-2 text-sm font-bold text-white backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              {content.badge[locale]}
            </div>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <h2 className="mb-6 text-4xl font-black text-white md:text-5xl lg:text-6xl">
              {content.title[locale]}
            </h2>
            <p className="mb-10 text-xl text-white/90 md:text-2xl">
              {content.subtitle[locale]}
            </p>

            {/* Features grid */}
            <div className="mb-10 grid gap-6 md:grid-cols-3">
              {content.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group rounded-2xl border-2 border-white/30 bg-white/10 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:border-white/50 hover:bg-white/20"
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-white transition-transform group-hover:scale-110">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">
                    {feature.title[locale]}
                  </h3>
                  <p className="text-sm text-white/80">
                    {feature.description[locale]}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href="/account/referral"
                className="group inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 text-lg font-bold text-primary shadow-2xl transition-all hover:scale-105 hover:shadow-white/20"
              >
                {content.button[locale]}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
    </section>
  );
}
