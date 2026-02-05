// app/components/sections/ImmuneProductsSection.tsx
"use client";

import Link from "next/link";
import { Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/hooks/useCart";
import ProductCard from "@/components/product/ProductCard";

export default function ImmuneProductsSection() {
  const { locale } = useLanguage();
  const { addItem } = useCart();

  const title = {
    ru: "Для укрепления иммунитета",
    uz: "Immunitetni mustahkamlash uchun",
    en: "To Strengthen Immunity",
  };

  const viewAllText = {
    ru: "Смотреть все →",
    uz: "Hammasini ko'rish →",
    en: "View All →",
  };

  // 4 ta immunitet mahsuloti
  const immuneProducts = [
    {
      id: "immune-complex-1",
      name: {
        ru: "Иммуно Комплекс Премиум",
        uz: "Immuno Kompleks Premium",
        en: "Immune Complex Premium",
      },
      description: {
        ru: "Усиленная формула для защиты организма",
        uz: "Organizmni himoya qilish uchun kuchaytirilgan formula",
        en: "Enhanced formula for body protection",
      },
      price: 250000,
      oldPrice: 320000,
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
      rating: 5,
      reviews: 342,
      badge: {
        ru: "Хит продаж",
        uz: "Ommabop",
        en: "Bestseller",
      },
      bgColor: "bg-gradient-to-br from-blue-500 to-cyan-500",
      features: {
        ru: ["Витамин C 1000мг", "Цинк 25мг", "Витамин D3 4000 IU"],
        uz: ["Vitamin C 1000mg", "Rux 25mg", "Vitamin D3 4000 IU"],
        en: ["Vitamin C 1000mg", "Zinc 25mg", "Vitamin D3 4000 IU"],
      },
      stock: {
        ru: "В наличии",
        uz: "Mavjud",
        en: "In Stock",
      },
      articleNumber: "IMM-001",
    },
    {
      id: "immune-complex-2",
      name: {
        ru: "Эхинацея Форте",
        uz: "Exinaseya Forte",
        en: "Echinacea Forte",
      },
      description: {
        ru: "Природная защита от простуды",
        uz: "Shamollashdan tabiiy himoya",
        en: "Natural cold protection",
      },
      price: 85000,
      image:
        "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80",
      rating: 4.8,
      reviews: 198,
      badge: {
        ru: "Новинка",
        uz: "Yangilik",
        en: "New",
      },
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-500",
      features: {
        ru: ["Экстракт эхинацеи", "Витамин C 500мг", "Селен 50мкг"],
        uz: ["Exinaseya ekstrakti", "Vitamin C 500mg", "Selen 50mkg"],
        en: ["Echinacea extract", "Vitamin C 500mg", "Selenium 50mcg"],
      },
      stock: {
        ru: "В наличии",
        uz: "Mavjud",
        en: "In Stock",
      },
      articleNumber: "IMM-002",
    },
    {
      id: "immune-complex-3",
      name: {
        ru: "Бета-Глюкан Плюс",
        uz: "Beta-Glyukan Plus",
        en: "Beta-Glucan Plus",
      },
      description: {
        ru: "Активатор иммунитета",
        uz: "Immunitet faollashtiruvchisi",
        en: "Immunity activator",
      },
      price: 180000,
      oldPrice: 220000,
      image:
        "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&q=80",
      rating: 4.9,
      reviews: 267,
      bgColor: "bg-gradient-to-br from-green-500 to-emerald-500",
      features: {
        ru: ["Бета-глюкан 250мг", "Витамин D3", "Пробиотики"],
        uz: ["Beta-glyukan 250mg", "Vitamin D3", "Probiotiklar"],
        en: ["Beta-glucan 250mg", "Vitamin D3", "Probiotics"],
      },
      stock: {
        ru: "В наличии",
        uz: "Mavjud",
        en: "In Stock",
      },
      articleNumber: "IMM-003",
    },
    {
      id: "immune-complex-4",
      name: {
        ru: "Мультивитамин Иммуно",
        uz: "Multivitamin Immuno",
        en: "Multivitamin Immune",
      },
      description: {
        ru: "Комплексная поддержка здоровья",
        uz: "Salomatlikni kompleks qo'llab-quvvatlash",
        en: "Comprehensive health support",
      },
      price: 120000,
      image:
        "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=800&q=80",
      rating: 4.7,
      reviews: 412,
      badge: {
        ru: "Акция",
        uz: "Aksiya",
        en: "Sale",
      },
      bgColor: "bg-gradient-to-br from-orange-500 to-amber-500",
      features: {
        ru: ["12 витаминов", "8 минералов", "Антиоксиданты"],
        uz: ["12 vitamin", "8 mineral", "Antioksidantlar"],
        en: ["12 vitamins", "8 minerals", "Antioxidants"],
      },
      stock: {
        ru: "В наличии",
        uz: "Mavjud",
        en: "In Stock",
      },
      articleNumber: "IMM-004",
    },
  ];

  const handleAddToCart = (product: (typeof immuneProducts)[0]) => {
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
          {/* Title with Shield Icon */}
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-black text-gray-900 md:text-2xl text-start">
              {title[locale]}
            </h2>
          </div>

          <Link
            href="/products?category=immunity"
            className="text-lg font-semibold text-[#E4A11B] transition-colors hover:text-[#C58916]"
          >
            {viewAllText[locale]}
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {immuneProducts.map((product) => (
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
