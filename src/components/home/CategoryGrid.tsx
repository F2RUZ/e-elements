"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  HeartPulse,
  Shield,
  Bone,
  Heart,
  Users,
  User,
  Scale,
  Pill,
} from "lucide-react";

export default function CategoryGrid() {
  const { locale } = useLanguage();

  const title = {
    ru: "Популярные категории",
    uz: "Mashhur toifalar",
    en: "Popular Categories",
  };

  const categories = [
    {
      id: "vitamins",
      icon: Pill,
      name: {
        ru: "Витамины и минералы",
        uz: "Vitaminlar va minerallar",
        en: "Vitamins & Minerals",
      },
      count: 24,
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
      slug: "vitamins-minerals",
    },
    {
      id: "immunity",
      icon: Shield,
      name: {
        ru: "Для иммунитета",
        uz: "Immunitet uchun",
        en: "For Immunity",
      },
      count: 18,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      slug: "immunity",
    },
    {
      id: "joints",
      icon: Bone,
      name: {
        ru: "Суставы и кости",
        uz: "Bo'g'imlar va suyaklar",
        en: "Joints & Bones",
      },
      count: 15,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      slug: "joints-bones",
    },
    {
      id: "heart",
      icon: Heart,
      name: {
        ru: "Сердце и сосуды",
        uz: "Yurak va qon tomirlari",
        en: "Heart & Vessels",
      },
      count: 12,
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
      slug: "heart-vessels",
    },
    {
      id: "women",
      icon: Users,
      name: {
        ru: "Женское здоровье",
        uz: "Ayollar salomatligi",
        en: "Women's Health",
      },
      count: 20,
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600",
      slug: "women-health",
    },
    {
      id: "men",
      icon: User,
      name: {
        ru: "Мужское здоровье",
        uz: "Erkaklar salomatligi",
        en: "Men's Health",
      },
      count: 16,
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
      slug: "men-health",
    },
    {
      id: "weight",
      icon: Scale,
      name: {
        ru: "Снижение веса",
        uz: "Vazn yo'qotish",
        en: "Weight Loss",
      },
      count: 14,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      slug: "weight-loss",
    },
    {
      id: "energy",
      icon: HeartPulse,
      name: {
        ru: "Энергия и тонус",
        uz: "Energiya va tonus",
        en: "Energy & Tone",
      },
      count: 10,
      bgColor: "bg-gray-100",
      iconColor: "text-gray-600",
      slug: "energy-tone",
    },
  ];

  return (
    <section className="bg-white py-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="mb-12 text-start">
          <h2 className="mb-4 text-2xl font-black text-gray-900">
            {title[locale]}
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 text-center transition-all duration-300 hover:scale-105 hover:border-gray-900 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex items-center justify-center">
                <div
                  className={`rounded-2xl ${category.bgColor} p-5 transition-transform group-hover:scale-110 group-hover:rotate-6`}
                >
                  <category.icon
                    className={`h-10 w-10 ${category.iconColor}`}
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Category Name */}
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {category.name[locale]}
              </h3>

              {/* Product Count */}
              <p className="text-sm text-gray-600">
                {category.count} {locale === "ru" && "товаров"}
                {locale === "uz" && "mahsulot"}
                {locale === "en" && "products"}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 -z-10 bg-gray-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
