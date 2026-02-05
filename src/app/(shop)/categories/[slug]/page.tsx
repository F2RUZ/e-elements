// src/app/(shop)/categories/[slug]/page.tsx
"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { mockProducts } from "@/lib/mockData/products";
import { mockCategories } from "@/lib/mockData/categories";
import ProductGrid from "@/components/product/ProductGrid";
import { useState } from "react";
import { SortOption } from "@/types/product";

export default function CategoryPage() {
  const params = useParams();
  const { locale } = useLanguage();
  const categorySlug = params.slug as string;
  const [sortBy, setSortBy] = useState<SortOption>("popular");

  const category = mockCategories.find((c) => c.slug === categorySlug);
  const categoryProducts = mockProducts.filter(
    (p) => p.categorySlug === categorySlug,
  );

  // Sort products
  const sortedProducts = [...categoryProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      default:
        return b.reviewCount - a.reviewCount;
    }
  });

  if (!category) {
    return (
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-4 text-6xl">😕</div>
          <h1 className="mb-2 text-2xl font-bold">
            {locale === "uz"
              ? "Kategoriya topilmadi"
              : locale === "ru"
                ? "Категория не найдена"
                : "Category not found"}
          </h1>
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            {locale === "uz"
              ? "Bosh sahifaga qaytish"
              : locale === "ru"
                ? "Вернуться на главную"
                : "Back to home"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="mb-6 flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">
            {locale === "uz"
              ? "Bosh sahifa"
              : locale === "ru"
                ? "Главная"
                : "Home"}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/categories" className="hover:text-blue-600">
            {locale === "uz"
              ? "Kategoriyalar"
              : locale === "ru"
                ? "Категории"
                : "Categories"}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-semibold text-gray-900">
            {category.name[locale]}
          </span>
        </div>

        {/* Category Header */}
        <div
          className="mb-8 overflow-hidden rounded-3xl p-12"
          style={{
            background: `linear-gradient(135deg, ${category.color}20 0%, ${category.color}40 100%)`,
          }}
        >
          <div className="flex items-center gap-6">
            <div className="text-7xl">{category.icon}</div>
            <div>
              <h1 className="mb-2 text-4xl font-black text-gray-900">
                {category.name[locale]}
              </h1>
              <p className="mb-4 text-lg text-gray-700">
                {category.description[locale]}
              </p>
              <p className="font-semibold" style={{ color: category.color }}>
                {category.productCount}{" "}
                {locale === "uz"
                  ? "mahsulot"
                  : locale === "ru"
                    ? "товаров"
                    : "products"}
              </p>
            </div>
          </div>
        </div>

        {/* Sort */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-600">
            {locale === "uz"
              ? `${sortedProducts.length} ta mahsulot`
              : locale === "ru"
                ? `${sortedProducts.length} товаров`
                : `${sortedProducts.length} products`}
          </p>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="rounded-xl border-2 border-gray-200 bg-white px-6 py-3 font-semibold text-gray-700 focus:border-blue-500 focus:outline-none"
          >
            <option value="popular">
              {locale === "uz"
                ? "Mashhur"
                : locale === "ru"
                  ? "Популярные"
                  : "Popular"}
            </option>
            <option value="price-asc">
              {locale === "uz"
                ? "Arzon"
                : locale === "ru"
                  ? "Дешевле"
                  : "Price: Low to High"}
            </option>
            <option value="price-desc">
              {locale === "uz"
                ? "Qimmat"
                : locale === "ru"
                  ? "Дороже"
                  : "Price: High to Low"}
            </option>
            <option value="rating">
              {locale === "uz"
                ? "Reyting"
                : locale === "ru"
                  ? "Рейтинг"
                  : "Rating"}
            </option>
            <option value="newest">
              {locale === "uz"
                ? "Yangi"
                : locale === "ru"
                  ? "Новинки"
                  : "Newest"}
            </option>
          </select>
        </div>

        {/* Products Grid */}
        <ProductGrid
          products={sortedProducts}
          onAddToCart={(product) => {
            alert(
              locale === "uz"
                ? "Savatga qo'shildi!"
                : locale === "ru"
                  ? "Добавлено в корзину!"
                  : "Added to cart!",
            );
          }}
          onAddToWishlist={(product) => {
            alert(
              locale === "uz"
                ? "Sevimlilarga qo'shildi!"
                : locale === "ru"
                  ? "Добавлено в избранное!"
                  : "Added to wishlist!",
            );
          }}
        />

        {/* Related Categories */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-black text-gray-900">
            {locale === "uz"
              ? "Boshqa kategoriyalar"
              : locale === "ru"
                ? "Другие категории"
                : "Other Categories"}
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {mockCategories
              .filter((c) => c.slug !== categorySlug && c.featured)
              .slice(0, 4)
              .map((cat) => (
                <Link
                  key={cat.id}
                  href={`/categories/${cat.slug}`}
                  className="group block overflow-hidden rounded-2xl p-6 transition-all hover:scale-105 hover:shadow-xl"
                  style={{
                    background: `linear-gradient(135deg, ${cat.color}15 0%, ${cat.color}30 100%)`,
                  }}
                >
                  <div className="mb-3 text-4xl transition-transform duration-300 group-hover:scale-110">
                    {cat.icon}
                  </div>
                  <h3 className="mb-1 font-bold text-gray-900">
                    {cat.name[locale]}
                  </h3>
                  <p className="text-sm font-medium text-gray-600">
                    {cat.productCount}{" "}
                    {locale === "uz"
                      ? "mahsulot"
                      : locale === "ru"
                        ? "товаров"
                        : "products"}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
