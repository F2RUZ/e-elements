// app/components/sections/CardiovascularProductsSection.tsx
"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/hooks/useCart";
import ProductCard from "@/components/product/ProductCard";

export default function CardiovascularProductsSection() {
  const { locale } = useLanguage();
  const { addItem } = useCart();

  const title = {
    ru: "Для сердца и сосудов",
    uz: "Yurak va qon tomirlari uchun",
    en: "For Heart and Vessels",
  };

  const viewAllText = {
    ru: "Смотреть все →",
    uz: "Hammasini ko'rish →",
    en: "View All →",
  };

  // 4 ta yurak-qon tomirlari mahsuloti
  const cardiovascularProducts = [
    {
      id: "cardio-complex-1",
      name: {
        ru: "Кардио Комплекс Омега-3",
        uz: "Kardio Kompleks Omega-3",
        en: "Cardio Complex Omega-3",
      },
      description: {
        ru: "Для здоровья сердца и сосудов",
        uz: "Yurak va qon tomirlar salomatligi uchun",
        en: "For heart and vessel health",
      },
      price: 195000,
      oldPrice: 240000,
      image:
        "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&q=80",
      rating: 5,
      reviews: 289,
      badge: {
        ru: "Рекомендуем",
        uz: "Tavsiya qilamiz",
        en: "Recommended",
      },
      bgColor: "bg-gradient-to-br from-red-500 to-rose-500",
      features: {
        ru: ["Омега-3 EPA/DHA", "Коэнзим Q10", "Витамин E"],
        uz: ["Omega-3 EPA/DHA", "Koenzim Q10", "Vitamin E"],
        en: ["Omega-3 EPA/DHA", "Coenzyme Q10", "Vitamin E"],
      },
      stock: {
        ru: "В наличии",
        uz: "Mavjud",
        en: "In Stock",
      },
      articleNumber: "CAR-001",
    },
    {
      id: "cardio-complex-2",
      name: {
        ru: "Магний + Калий Кардио",
        uz: "Magniy + Kaliy Kardio",
        en: "Magnesium + Potassium Cardio",
      },
      description: {
        ru: "Поддержка сердечного ритма",
        uz: "Yurak ritmini qo'llab-quvvatlash",
        en: "Heart rhythm support",
      },
      price: 98000,
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
      rating: 4.9,
      reviews: 324,
      badge: {
        ru: "Хит продаж",
        uz: "Ommabop",
        en: "Bestseller",
      },
      bgColor: "bg-gradient-to-br from-pink-500 to-red-400",
      features: {
        ru: ["Магний цитрат 400мг", "Калий 300мг", "Витамин B6"],
        uz: ["Magniy tsitrat 400mg", "Kaliy 300mg", "Vitamin B6"],
        en: ["Magnesium citrate 400mg", "Potassium 300mg", "Vitamin B6"],
      },
      stock: {
        ru: "В наличии",
        uz: "Mavjud",
        en: "In Stock",
      },
      articleNumber: "CAR-002",
    },
    {
      id: "cardio-complex-3",
      name: {
        ru: "L-Аргинин Кардио",
        uz: "L-Arginin Kardio",
        en: "L-Arginine Cardio",
      },
      description: {
        ru: "Для нормализации давления",
        uz: "Bosimni normallashtirish uchun",
        en: "For blood pressure normalization",
      },
      price: 145000,
      image:
        "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80",
      rating: 4.8,
      reviews: 217,
      badge: {
        ru: "Новинка",
        uz: "Yangilik",
        en: "New",
      },
      bgColor: "bg-gradient-to-br from-rose-500 to-pink-600",
      features: {
        ru: ["L-Аргинин 3000мг", "Витамин C", "Экстракт боярышника"],
        uz: ["L-Arginin 3000mg", "Vitamin C", "Do'lana ekstrakti"],
        en: ["L-Arginine 3000mg", "Vitamin C", "Hawthorn extract"],
      },
      stock: {
        ru: "В наличии",
        uz: "Mavjud",
        en: "In Stock",
      },
      articleNumber: "CAR-003",
    },
    {
      id: "cardio-complex-4",
      name: {
        ru: "Боярышник Форте Плюс",
        uz: "Do'lana Forte Plus",
        en: "Hawthorn Forte Plus",
      },
      description: {
        ru: "Натуральная поддержка сердца",
        uz: "Yurakni tabiiy qo'llab-quvvatlash",
        en: "Natural heart support",
      },
      price: 78000,
      image:
        "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=800&q=80",
      rating: 4.7,
      reviews: 186,
      badge: {
        ru: "Акция",
        uz: "Aksiya",
        en: "Sale",
      },
      bgColor: "bg-gradient-to-br from-red-400 to-rose-500",
      features: {
        ru: ["Экстракт боярышника", "Коэнзим Q10", "Витамины группы B"],
        uz: ["Do'lana ekstrakti", "Koenzim Q10", "B guruh vitaminlar"],
        en: ["Hawthorn extract", "Coenzyme Q10", "B-group vitamins"],
      },
      stock: {
        ru: "В наличии",
        uz: "Mavjud",
        en: "In Stock",
      },
      articleNumber: "CAR-004",
    },
  ];

  const handleAddToCart = (product: (typeof cardiovascularProducts)[0]) => {
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
          {/* Title with Heart Icon */}
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-black text-gray-900 md:text-2xl text-start">
              {title[locale]}
            </h2>
          </div>

          <Link
            href="/products?category=cardiovascular"
            className="text-lg font-semibold text-[#E4A11B] transition-colors hover:text-[#C58916]"
          >
            {viewAllText[locale]}
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cardiovascularProducts.map((product) => (
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
