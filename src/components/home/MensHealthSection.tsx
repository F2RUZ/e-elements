// app/components/sections/MensHealthSection.tsx
"use client";

import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/hooks/useCart";
import ProductCard from "@/components/product/ProductCard";

export default function MensHealthSection() {
  const { locale } = useLanguage();
  const { addItem } = useCart();

  const title = {
    ru: "Для мужского здоровья",
    uz: "Erkaklar salomatligi uchun",
    en: "For Men's Health",
  };

  const viewAllText = {
    ru: "Смотреть все →",
    uz: "Hammasini ko'rish →",
    en: "View All →",
  };

  // 4 ta erkaklar uchun mahsulot
  const mensHealthProducts = [
    {
      id: "mens-health-1",
      name: {
        ru: "Тестостерон Буст Комплекс",
        uz: "Testosteron Boost Kompleks",
        en: "Testosterone Boost Complex",
      },
      description: {
        ru: "Натуральная поддержка мужского здоровья",
        uz: "Erkaklar salomatligini tabiiy qo'llab-quvvatlash",
        en: "Natural men's health support",
      },
      price: 285000,
      oldPrice: 340000,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      rating: 4.9,
      reviews: 412,
      badge: {
        ru: "Хит продаж",
        uz: "Ommabop",
        en: "Bestseller",
      },
      bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
      features: {
        ru: ["Трибулус 1000мг", "Цинк 25мг", "Витамин D3"],
        uz: ["Tribulus 1000mg", "Rux 25mg", "Vitamin D3"],
        en: ["Tribulus 1000mg", "Zinc 25mg", "Vitamin D3"],
      },
      stock: {
        ru: "В наличии",
        uz: "Mavjud",
        en: "In Stock",
      },
      articleNumber: "MEN-001",
    },
    {
      id: "mens-health-2",
      name: {
        ru: "Простата Форте Плюс",
        uz: "Prostata Forte Plus",
        en: "Prostate Forte Plus",
      },
      description: {
        ru: "Поддержка здоровья простаты",
        uz: "Prostata salomatligini qo'llab-quvvatlash",
        en: "Prostate health support",
      },
      price: 165000,
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
      rating: 4.8,
      reviews: 298,
      badge: {
        ru: "Рекомендуем",
        uz: "Tavsiya qilamiz",
        en: "Recommended",
      },
      bgColor: "bg-gradient-to-br from-gray-700 to-gray-900",
      features: {
        ru: ["Со пальметто", "Ликопин", "Селен 100мкг"],
        uz: ["So palmetto", "Likopin", "Selen 100mkg"],
        en: ["Saw palmetto", "Lycopene", "Selenium 100mcg"],
      },
      stock: {
        ru: "В наличии",
        uz: "Mavjud",
        en: "In Stock",
      },
      articleNumber: "MEN-002",
    },
    {
      id: "mens-health-3",
      name: {
        ru: "Энергия и Выносливость",
        uz: "Energiya va Chidamlilik",
        en: "Energy and Endurance",
      },
      description: {
        ru: "Для активного образа жизни",
        uz: "Faol turmush tarzi uchun",
        en: "For active lifestyle",
      },
      price: 135000,
      image:
        "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&q=80",
      rating: 4.7,
      reviews: 256,
      badge: {
        ru: "Новинка",
        uz: "Yangilik",
        en: "New",
      },
      bgColor: "bg-gradient-to-br from-zinc-700 to-zinc-900",
      features: {
        ru: ["BCAA аминокислоты", "Креатин", "L-карнитин"],
        uz: ["BCAA aminokislotalar", "Kreatin", "L-karnitin"],
        en: ["BCAA amino acids", "Creatine", "L-carnitine"],
      },
      stock: {
        ru: "В наличии",
        uz: "Mavjud",
        en: "In Stock",
      },
      articleNumber: "MEN-003",
    },
    {
      id: "mens-health-4",
      name: {
        ru: "Мультивитамин для Мужчин",
        uz: "Erkaklar uchun Multivitamin",
        en: "Men's Multivitamin",
      },
      description: {
        ru: "Ежедневная поддержка организма",
        uz: "Har kungi organizmni qo'llab-quvvatlash",
        en: "Daily body support",
      },
      price: 98000,
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      rating: 4.8,
      reviews: 387,
      badge: {
        ru: "Акция",
        uz: "Aksiya",
        en: "Sale",
      },
      bgColor: "bg-gradient-to-br from-stone-700 to-stone-900",
      features: {
        ru: ["15 витаминов", "10 минералов", "Антиоксиданты"],
        uz: ["15 vitamin", "10 mineral", "Antioksidantlar"],
        en: ["15 vitamins", "10 minerals", "Antioxidants"],
      },
      stock: {
        ru: "В наличии",
        uz: "Mavjud",
        en: "In Stock",
      },
      articleNumber: "MEN-004",
    },
  ];

  const handleAddToCart = (product: (typeof mensHealthProducts)[0]) => {
    addItem({
      id: product.id,
      name: product.name[locale],
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  };

  return (
    <section className="bg-white py-16">
      {/* Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          {/* Title with Dumbbell Icon */}
          <div className="flex items-center gap-3">
            <h2 className="text-start text-xl font-black text-gray-900 md:text-2xl">
              {title[locale]}
            </h2>
          </div>

          <Link
            href="/products?category=mens-health"
            className="text-lg font-semibold text-[#E4A11B] transition-colors hover:text-[#C58916]"
          >
            {viewAllText[locale]}
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {mensHealthProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              locale={locale}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
