// app/components/sections/BlogSection.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, User } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

interface BlogPost {
  id: string;
  title: {
    ru: string;
    uz: string;
    en: string;
  };
  excerpt: {
    ru: string;
    uz: string;
    en: string;
  };
  image: string;
  bgColor: string;
  category: {
    ru: string;
    uz: string;
    en: string;
  };
  readTime: number;
  author: {
    ru: string;
    uz: string;
    en: string;
  };
  date: string;
}

const categories = [
  { id: "health", ru: "здоровье", uz: "salomatlik", en: "health" },
  { id: "beauty", ru: "красота", uz: "go'zallik", en: "beauty" },
  { id: "collagen", ru: "коллаген", uz: "kollagen", en: "collagen" },
  { id: "amino", ru: "аминокислоты", uz: "aminokislotalar", en: "amino acids" },
  { id: "omega", ru: "омега", uz: "omega", en: "omega" },
  { id: "brain", ru: "мозг", uz: "miya", en: "brain" },
  { id: "sleep", ru: "сон", uz: "uyqu", en: "sleep" },
  {
    id: "vitamins",
    ru: "витамины для детей",
    uz: "bolalar uchun vitaminlar",
    en: "vitamins for kids",
  },
];

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: {
      ru: "Какие витамины нужно принимать, если вы простудились?",
      uz: "Shamollasangiz qanday vitaminlar qabul qilish kerak?",
      en: "What vitamins should you take if you have a cold?",
    },
    excerpt: {
      ru: "Узнайте, какие витамины помогут быстрее справиться с простудой",
      uz: "Shamollashga qarshi qaysi vitaminlar yordam berishini bilib oling",
      en: "Learn which vitamins will help you recover from a cold faster",
    },
    image:
      "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=800&q=80",
    bgColor: "from-orange-400 to-amber-500",
    category: { ru: "здоровье", uz: "salomatlik", en: "health" },
    readTime: 5,
    author: { ru: "Др. Иванов", uz: "Dr. Ivanov", en: "Dr. Ivanov" },
    date: "2024-02-01",
  },
  {
    id: "2",
    title: {
      ru: "Омега-3: как выбрать? Обзор БАД от эксперта",
      uz: "Omega-3: qanday tanlash kerak? Mutaxassis sharhi",
      en: "Omega-3: how to choose? Expert review of supplements",
    },
    excerpt: {
      ru: "Полное руководство по выбору качественной Омега-3",
      uz: "Sifatli Omega-3 tanlash bo'yicha to'liq qo'llanma",
      en: "Complete guide to choosing quality Omega-3",
    },
    image:
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&q=80",
    bgColor: "from-cyan-400 to-blue-500",
    category: { ru: "омега", uz: "omega", en: "omega" },
    readTime: 8,
    author: { ru: "Др. Петрова", uz: "Dr. Petrova", en: "Dr. Petrova" },
    date: "2024-01-28",
  },
  {
    id: "3",
    title: {
      ru: "Берберин для похудения: как применять?",
      uz: "Ozish uchun berberin: qanday qabul qilish?",
      en: "Berberine for weight loss: how to use?",
    },
    excerpt: {
      ru: "Эффективное использование берберина для снижения веса",
      uz: "Vaznni kamaytirish uchun berberindan samarali foydalanish",
      en: "Effective use of berberine for weight loss",
    },
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    bgColor: "from-pink-400 to-rose-500",
    category: { ru: "красота", uz: "go'zallik", en: "beauty" },
    readTime: 6,
    author: { ru: "Др. Соколова", uz: "Dr. Sokolova", en: "Dr. Sokolova" },
    date: "2024-01-25",
  },
  {
    id: "4",
    title: {
      ru: "Коллаген: лайфхаки от нутрициолога",
      uz: "Kollagen: nutrisiologdan maslahatlar",
      en: "Collagen: tips from a nutritionist",
    },
    excerpt: {
      ru: "Секреты эффективного применения коллагена",
      uz: "Kollagendan samarali foydalanish sirlari",
      en: "Secrets of effective collagen use",
    },
    image:
      "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=800&q=80",
    bgColor: "from-pink-300 to-purple-400",
    category: { ru: "коллаген", uz: "kollagen", en: "collagen" },
    readTime: 7,
    author: { ru: "Др. Кузнецова", uz: "Dr. Kuznetsova", en: "Dr. Kuznetsova" },
    date: "2024-01-22",
  },
  {
    id: "5",
    title: {
      ru: "Как улучшить память и перестать все забывать?",
      uz: "Xotirani qanday yaxshilash va hamma narsani unutmaslik?",
      en: "How to improve memory and stop forgetting everything?",
    },
    excerpt: {
      ru: "Проверенные методы улучшения когнитивных функций",
      uz: "Kognitiv funktsiyalarni yaxshilashning isbotlangan usullari",
      en: "Proven methods to improve cognitive functions",
    },
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    bgColor: "from-blue-400 to-cyan-500",
    category: { ru: "мозг", uz: "miya", en: "brain" },
    readTime: 9,
    author: { ru: "Др. Волков", uz: "Dr. Volkov", en: "Dr. Volkov" },
    date: "2024-01-20",
  },
  {
    id: "6",
    title: {
      ru: "Правильный уход за кожей лица после 40 лет",
      uz: "40 yoshdan keyin yuzga to'g'ri parvarish",
      en: "Proper facial care after 40",
    },
    excerpt: {
      ru: "Комплексный подход к уходу за зрелой кожей",
      uz: "Yetuk teriga parvarish qilishning kompleks yondashuvi",
      en: "Comprehensive approach to mature skin care",
    },
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
    bgColor: "from-purple-400 to-pink-500",
    category: { ru: "красота", uz: "go'zallik", en: "beauty" },
    readTime: 10,
    author: { ru: "Др. Смирнова", uz: "Dr. Smirnova", en: "Dr. Smirnova" },
    date: "2024-01-18",
  },
];

export default function BlogSection() {
  const { locale } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const content = {
    title: {
      ru: "ФИТОБЛОГ",
      uz: "FITOBLOG",
      en: "FITOBLOG",
    },
    subtitle: {
      ru: "Полезные статьи о здоровье и красоте",
      uz: "Salomatlik va go'zallik haqida foydali maqolalar",
      en: "Useful articles about health and beauty",
    },
    viewAll: {
      ru: "Все статьи",
      uz: "Barcha maqolalar",
      en: "All articles",
    },
    allCategories: {
      ru: "все",
      uz: "hammasi",
      en: "all",
    },
    readMore: {
      ru: "Читать далее",
      uz: "Davomini o'qish",
      en: "Read more",
    },
    minRead: {
      ru: "мин чтения",
      uz: "daqiqa",
      en: "min read",
    },
  };

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts.slice(0, 6)
      : blogPosts
          .filter(
            (post) =>
              post.category[locale] ===
              categories.find((c) => c.id === selectedCategory)?.[locale],
          )
          .slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 py-3">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-20 h-72 w-72 animate-pulse rounded-full bg-green-300/20 blur-3xl" />
        <div className="absolute -right-10 bottom-20 h-72 w-72 animate-pulse rounded-full bg-blue-300/20 blur-3xl" />
      </div>

      {/* Container - max-w-7xl qo'shildi */}
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="mb-2 text-start text-xl font-black text-gray-900 md:text-2xl">
            <span className="gradient-text">{content.title[locale]}</span>
            <span className="ml-3 inline-block h-3 w-3 animate-pulse rounded-full bg-green-500" />
          </h2>
          <p className="text-start text-xs text-gray-600">
            {content.subtitle[locale]}
          </p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 flex flex-wrap items-center justify-start gap-3"
        >
          <button
            onClick={() => setSelectedCategory("all")}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
              selectedCategory === "all"
                ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            • {content.allCategories[locale]}
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                selectedCategory === category.id
                  ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              • {category[locale]}
            </button>
          ))}
        </motion.div>

        {/* Grid Layout - 2 qator, 3 ta card */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.id}`}>
                <div className="group relative flex h-[200px] overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
                  {/* Image with gradient overlay */}
                  <div
                    className={`relative w-2/5 overflow-hidden bg-gradient-to-br ${post.bgColor}`}
                  >
                    <Image
                      src={post.image}
                      alt={post.title[locale]}
                      fill
                      className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40" />

                    {/* Category badge */}
                    <div className="absolute left-3 top-3 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                      • {post.category[locale]}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex w-3/5 flex-col justify-between p-5">
                    <div>
                      <h3 className="mb-2 line-clamp-3 text-base font-bold leading-tight text-gray-900 transition-colors group-hover:text-green-600">
                        {post.title[locale]}
                      </h3>

                      <p className="mb-3 line-clamp-2 text-xs text-gray-600">
                        {post.excerpt[locale]}
                      </p>
                    </div>

                    <div>
                      {/* Meta info */}
                      <div className="mb-3 flex items-center gap-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span className="truncate">
                            {post.author[locale]}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>
                            {post.readTime} {content.minRead[locale]}
                          </span>
                        </div>
                      </div>

                      {/* Read more link */}
                      <div className="flex items-center gap-2 text-sm font-semibold text-green-600 transition-all group-hover:gap-3">
                        <span>{content.readMore[locale]}</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-green-500/30 transition-all hover:scale-105 hover:shadow-green-500/40"
          >
            {content.viewAll[locale]}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
