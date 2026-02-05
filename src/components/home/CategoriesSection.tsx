"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Wind, Pill, Brain, HeartPulse, Users, Eye } from "lucide-react";

export default function CategoriesSection() {
  const { locale } = useLanguage();

  const categories = [
    {
      id: 1,
      name: {
        ru: "Простуда",
        uz: "Shamollash",
        en: "Cold",
      },
      icon: Wind,
      href: "/categories/cold",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      id: 2,
      name: {
        ru: "Аллергия",
        uz: "Allergiya",
        en: "Allergy",
      },
      icon: Pill,
      href: "/categories/allergy",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      id: 3,
      name: {
        ru: "Боль и спазмы",
        uz: "Og'riq va spazm",
        en: "Pain & Spasms",
      },
      icon: Brain,
      href: "/categories/pain",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      id: 4,
      name: {
        ru: "Нарушения пищеварения",
        uz: "Ovqat hazm qilish buzilishi",
        en: "Digestive Issues",
      },
      icon: HeartPulse,
      href: "/categories/digestive",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
    },
    {
      id: 5,
      name: {
        ru: "Женские заболевания",
        uz: "Ayollar kasalliklari",
        en: "Women's Health",
      },
      icon: Users,
      href: "/categories/womens-health",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600",
    },
    {
      id: 6,
      name: {
        ru: "Ухудшение зрения",
        uz: "Ko'rish pasayishi",
        en: "Vision Issues",
      },
      icon: Eye,
      href: "/categories/vision",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group flex flex-col items-center text-center transition-transform hover:scale-105"
            >
              {/* Icon Card */}
              <div
                className={`mb-3 flex h-24 w-24 items-center justify-center rounded-2xl ${category.bgColor} shadow-sm transition-shadow group-hover:shadow-lg`}
              >
                <category.icon
                  className={`h-12 w-12 ${category.iconColor}`}
                  strokeWidth={1.5}
                />
              </div>

              {/* Category Name */}
              <h3 className="text-sm font-medium text-gray-900">
                {category.name[locale]}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
