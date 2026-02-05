// src/components/product/ProductGrid.tsx
"use client";

import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import { useLanguage } from "@/context/LanguageContext";

interface ProductGridProps {
  products: Product[];
  onAddToCart?: (product: Product) => void;
  onAddToWishlist?: (product: Product) => void;
}

// Category-based background colors
const categoryColors: { [key: string]: string } = {
  "pain-relievers": "bg-purple-500",
  vitamins: "bg-emerald-500",
  cardiovascular: "bg-red-500",
  digestive: "bg-amber-500",
  "cold-flu": "bg-violet-500",
  beauty: "bg-pink-500",
  "mother-baby": "bg-cyan-500",
  "medical-devices": "bg-teal-500",
  allergy: "bg-purple-500",
  immunity: "bg-green-500",
};

export default function ProductGrid({
  products,
  onAddToCart,
  onAddToWishlist,
}: ProductGridProps) {
  const { locale } = useLanguage();

  if (products.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-12 text-center">
        <div className="mb-4 text-6xl">🔍</div>
        <h3 className="mb-2 text-xl font-bold text-gray-900">
          {locale === "uz"
            ? "Mahsulot topilmadi"
            : locale === "ru"
              ? "Товары не найдены"
              : "No products found"}
        </h3>
        <p className="text-gray-600">
          {locale === "uz"
            ? "Boshqa kategoriyani tanlang yoki filtrni o'zgartiring"
            : locale === "ru"
              ? "Выберите другую категорию или измените фильтр"
              : "Try selecting a different category or adjusting filters"}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onAddToWishlist={onAddToWishlist}
          bgColor={categoryColors[product.categorySlug] || "bg-purple-500"}
        />
      ))}
    </div>
  );
}
