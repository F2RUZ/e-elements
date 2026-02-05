"use client";

import Link from "next/link";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: {
    ru: string;
    uz: string;
    en: string;
  };
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: {
    ru: string;
    uz: string;
    en: string;
  };
  description?: {
    ru: string;
    uz: string;
    en: string;
  };
  features?: {
    ru: string[];
    uz: string[];
    en: string[];
  };
  bgColor?: string;
  stock?: {
    ru: string;
    uz: string;
    en: string;
  };
  articleNumber?: string;
  onAddToCart: () => void;
  locale: "ru" | "uz" | "en";
}

export default function ProductCard({
  id,
  name,
  price,
  oldPrice,
  image,
  rating,
  reviews,
  badge,
  description,
  features,
  bgColor = "bg-purple-500",
  stock,
  articleNumber,
  onAddToCart,
  locale,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " сум";
  };

  const cartButtonText = {
    ru: "В корзину",
    uz: "Savatga",
    en: "Add to Cart",
  };

  // Features ni maksimal 3 ta ko'rsatish
  const displayFeatures = features?.[locale]?.slice(0, 3) || [];

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    // Bu yerda wishlist API call qilishingiz mumkin
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl">
      {/* Badge */}
      {badge && (
        <div className="absolute left-4 top-4 z-10 rounded-lg bg-green-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
          {badge[locale]}
        </div>
      )}

      {/* Main Content Section with Colored Background */}
      <Link href={`/products/${id}`}>
        <div className={`relative ${bgColor} p-5 min-h-[220px]`}>
          <div className="flex items-start justify-between gap-3 h-full">
            {/* Left Side - Features List */}
            <div className="flex-1 space-y-2 pt-6">
              {displayFeatures.length > 0 && (
                <>
                  {displayFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 text-white"
                    >
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-white/40 bg-white/20 backdrop-blur-sm">
                        <svg
                          className="h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-xs font-semibold leading-tight drop-shadow-lg line-clamp-2">
                        {feature}
                      </span>
                    </div>
                  ))}
                </>
              )}
            </div>

            {/* Right Side - Product Image */}
            <div className="w-24 flex-shrink-0 sm:w-28">
              <img
                src={image}
                alt={name[locale]}
                className="h-full w-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </Link>

      {/* Bottom Section - White Background */}
      <div className="flex flex-col gap-2 bg-white p-4">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${
                i < Math.floor(rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
        </div>

        {/* Product Name */}
        <Link
          href={`/products/${id}`}
          className="text-sm font-bold leading-tight text-gray-900 transition-colors hover:text-amber-600 line-clamp-2 min-h-[2.25rem]"
        >
          {name[locale]}
        </Link>

        {/* Description */}
        {description && (
          <p className="text-xs leading-snug text-gray-600 line-clamp-1">
            {description[locale]}
          </p>
        )}

        {/* Additional Info */}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          {stock && (
            <span className="font-medium text-green-600">
              • {stock[locale]}
            </span>
          )}
          {articleNumber && <span>Арт.: {articleNumber}</span>}
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-base font-black text-gray-900">
            {formatPrice(price)}
          </span>
          {oldPrice && (
            <span className="text-xs text-gray-400 line-through">
              {formatPrice(oldPrice)}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {/* Wishlist Button */}
          <button
            onClick={toggleFavorite}
            className="group/wishlist relative flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border-2 border-gray-200 bg-white transition-all hover:border-red-500"
          >
            {/* Water fill effect for wishlist */}
            <span className="absolute inset-0 -translate-y-full bg-gradient-to-t from-red-50 to-red-100 transition-transform duration-500 ease-out group-hover/wishlist:translate-y-0" />

            <Heart
              className={`relative z-10 h-5 w-5 transition-all ${
                isFavorite
                  ? "fill-red-500 text-red-500"
                  : "text-gray-600 group-hover/wishlist:text-red-500"
              }`}
            />
          </button>

          {/* Add to Cart Button with Water Fill Animation */}
          <button
            onClick={onAddToCart}
            className="group/cart relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-[#E4A11B] bg-white px-4 py-2.5 text-sm font-bold text-[#E4A11B] shadow-lg transition-all duration-200 hover:shadow-xl active:scale-95"
          >
            {/* Water fill effect - pastdan yuqoriga */}
            <span className="absolute inset-0 -translate-y-full bg-gradient-to-t from-[#E4A11B] to-[#C58916] transition-transform duration-500 ease-out group-hover/cart:translate-y-0" />

            {/* Icon va text - relative qilib z-index beramiz */}
            <ShoppingCart className="relative z-10 h-4 w-4 transition-colors group-hover/cart:text-black" />
            <span className="relative z-10 transition-colors group-hover/cart:text-black">
              {cartButtonText[locale]}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
