// app/components/sections/WomensHealthSection.tsx
"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/hooks/useCart";
import ProductCard from "@/components/product/ProductCard";

export default function WomensHealthSection() {
  const { locale } = useLanguage();
  const { addItem } = useCart();

  const title = {
    ru: "Для женского здоровья",
    uz: "Ayollar salomatligi uchun",
    en: "For Women's Health",
  };

  const viewAllText = {
    ru: "Смотреть все →",
    uz: "Hammasini ko'rish →",
    en: "View All →",
  };

  // 4 ta ayollar uchun mahsulot
  const womensHealthProducts = [
    {
      id: "womens-health-1",
      name: {
        ru: "Женский Баланс Премиум",
        uz: "Ayollar Balansi Premium",
        en: "Women's Balance Premium",
      },
      description: {
        ru: "Гормональная поддержка для женщин",
        uz: "Ayollar uchun gormonal qo'llab-quvvatlash",
        en: "Hormonal support for women",
      },
      price: 245000,
      oldPrice: 295000,
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
      rating: 5,
      reviews: 524,
      badge: {
        ru: "Хит продаж",
        uz: "Ommabop",
        en: "Bestseller",
      },
      bgColor: "bg-gradient-to-br from-pink-500 to-rose-500",
      features: {
        ru: ["Витекс экстракт", "Железо 14мг", "Фолиевая кислота"],
        uz: ["Viteks ekstrakti", "Temir 14mg", "Foliy kislota"],
        en: ["Vitex extract", "Iron 14mg", "Folic acid"],
      },
      stock: {
        ru: "В наличии",
        uz: "Mavjud",
        en: "In Stock",
      },
      articleNumber: "WOM-001",
    },
    {
      id: "womens-health-2",
      name: {
        ru: "Красота и Молодость",
        uz: "Go'zallik va Yoshlik",
        en: "Beauty and Youth",
      },
      description: {
        ru: "Коллаген + Гиалуроновая кислота",
        uz: "Kollagen + Gialuron kislota",
        en: "Collagen + Hyaluronic acid",
      },
      price: 198000,
      image:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
      rating: 4.9,
      reviews: 687,
      badge: {
        ru: "Рекомендуем",
        uz: "Tavsiya qilamiz",
        en: "Recommended",
      },
      bgColor: "bg-gradient-to-br from-rose-500 to-pink-600",
      features: {
        ru: ["Коллаген тип I, III", "Гиалуроновая к-та", "Биотин"],
        uz: ["Kollagen tip I, III", "Gialuron kislota", "Biotin"],
        en: ["Collagen type I, III", "Hyaluronic acid", "Biotin"],
      },
      stock: {
        ru: "В наличии",
        uz: "Mavjud",
        en: "In Stock",
      },
      articleNumber: "WOM-002",
    },
    {
      id: "womens-health-3",
      name: {
        ru: "Фемибаланс Форте",
        uz: "Femibalans Forte",
        en: "Femibalance Forte",
      },
      description: {
        ru: "При менопаузе и климаксе",
        uz: "Menopauza va klimaks davrida",
        en: "For menopause and climax",
      },
      price: 175000,
      image:
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
      rating: 4.8,
      reviews: 341,
      badge: {
        ru: "Новинка",
        uz: "Yangilik",
        en: "New",
      },
      bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-500",
      features: {
        ru: ["Изофлавоны сои", "Кальций 500мг", "Витамин K2"],
        uz: ["Soya izoflavonlari", "Kaltsiy 500mg", "Vitamin K2"],
        en: ["Soy isoflavones", "Calcium 500mg", "Vitamin K2"],
      },
      stock: {
        ru: "В наличии",
        uz: "Mavjud",
        en: "In Stock",
      },
      articleNumber: "WOM-003",
    },
    {
      id: "womens-health-4",
      name: {
        ru: "Витамины для Беременных",
        uz: "Homilador ayollar uchun vitaminlar",
        en: "Prenatal Vitamins",
      },
      description: {
        ru: "Полный комплекс для будущих мам",
        uz: "Bo'lajak onalar uchun to'liq kompleks",
        en: "Complete complex for expectant mothers",
      },
      price: 155000,
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
      rating: 5,
      reviews: 892,
      badge: {
        ru: "Акция",
        uz: "Aksiya",
        en: "Sale",
      },
      bgColor: "bg-gradient-to-br from-pink-400 to-rose-500",
      features: {
        ru: ["Фолиевая к-та 800мкг", "Железо + Йод", "Омега-3 DHA"],
        uz: ["Foliy kislota 800mkg", "Temir + Yod", "Omega-3 DHA"],
        en: ["Folic acid 800mcg", "Iron + Iodine", "Omega-3 DHA"],
      },
      stock: {
        ru: "В наличии",
        uz: "Mavjud",
        en: "In Stock",
      },
      articleNumber: "WOM-004",
    },
  ];

  const handleAddToCart = (product: (typeof womensHealthProducts)[0]) => {
    addItem({
      id: product.id,
      name: product.name[locale],
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  };

  return (
    <section className="bg-gray-50 py-16">
      {/* Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          {/* Title with Sparkles Icon */}
          <div className="flex items-center gap-3">
            <h2 className="text-start text-xl font-black text-gray-900 md:text-2xl">
              {title[locale]}
            </h2>
          </div>

          <Link
            href="/products?category=womens-health"
            className="text-lg font-semibold text-[#E4A11B] transition-colors hover:text-[#C58916]"
          >
            {viewAllText[locale]}
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {womensHealthProducts.map((product) => (
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
