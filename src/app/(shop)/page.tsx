// src/app/(shop)/cart/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  Star,
  Heart,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CartItem } from "@/types/cart";
import { mockProducts } from "@/lib/mockData/products";
import ProductCard from "@/components/product/ProductCard";

// Mock cart data with more realistic items
const mockCartItems: CartItem[] = [
  {
    id: "1",
    productId: "1",
    name: {
      uz: "Paracetamol 500mg",
      ru: "Парацетамол 500мг",
      en: "Paracetamol 500mg",
    },
    price: 15000,
    originalPrice: 20000,
    quantity: 2,
    image: "/images/products/paracetamol-1.jpg",
    inStock: true,
    maxQuantity: 150,
    prescription: false,
  },
  {
    id: "2",
    productId: "2",
    name: {
      uz: "Vitamin D3 2000 IU",
      ru: "Витамин D3 2000 МЕ",
      en: "Vitamin D3 2000 IU",
    },
    price: 45000,
    quantity: 1,
    image: "/images/products/vitamin-d3-1.jpg",
    inStock: true,
    maxQuantity: 80,
    prescription: false,
  },
  {
    id: "3",
    productId: "4",
    name: {
      uz: "Omega-3 1000mg",
      ru: "Омега-3 1000мг",
      en: "Omega-3 1000mg",
    },
    price: 85000,
    originalPrice: 95000,
    quantity: 1,
    image: "/images/products/omega3-1.jpg",
    inStock: true,
    maxQuantity: 45,
    prescription: false,
  },
];

// Category colors for recommended products
const categoryColors: { [key: string]: string } = {
  "pain-relievers": "bg-purple-500",
  vitamins: "bg-emerald-500",
  cardiovascular: "bg-red-500",
  digestive: "bg-amber-500",
  "cold-flu": "bg-violet-500",
  beauty: "bg-pink-500",
  "mother-baby": "bg-cyan-500",
};

export default function CartPage() {
  const { locale } = useLanguage();
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<{
    code: string;
    discount: number;
  } | null>(null);

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, Math.min(newQuantity, item.maxQuantity)),
            }
          : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode === "SALE10") {
      setAppliedPromo({ code: promoCode, discount: 10 });
      alert(
        locale === "uz"
          ? "Promo kod qo'llandi!"
          : locale === "ru"
            ? "Промокод применён!"
            : "Promo code applied!",
      );
    } else {
      alert(
        locale === "uz"
          ? "Noto'g'ri promo kod"
          : locale === "ru"
            ? "Неверный промокод"
            : "Invalid promo code",
      );
    }
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const promoDiscount = appliedPromo
    ? (subtotal * appliedPromo.discount) / 100
    : 0;
  const deliveryFee = subtotal >= 100000 ? 0 : 15000;
  const total = subtotal - promoDiscount + deliveryFee;

  // Get recommended products (exclude items already in cart)
  const cartProductIds = cartItems.map((item) => item.productId);
  const recommendedProducts = mockProducts
    .filter((p) => !cartProductIds.includes(p.id) && p.featured)
    .slice(0, 8);

  const emptyCartText = {
    uz: "Savatchada mahsulot yo'q",
    ru: "Корзина пуста",
    en: "Cart is empty",
  };

  const emptyCartDesc = {
    uz: "Mahsulot qo'shishni boshlang",
    ru: "Начните добавлять товары",
    en: "Start adding products",
  };

  const startShoppingText = {
    uz: "Xarid qilish",
    ru: "За покупками",
    en: "Start Shopping",
  };

  const cartTitleText = {
    uz: "Savatcha",
    ru: "Корзина",
    en: "Shopping Cart",
  };

  const itemsText = {
    uz: "ta mahsulot",
    ru: "товара(ов)",
    en: "item(s)",
  };

  const promoCodeText = {
    uz: "Promo kod",
    ru: "Промокод",
    en: "Promo code",
  };

  const applyText = {
    uz: "Qo'llash",
    ru: "Применить",
    en: "Apply",
  };

  const productsText = {
    uz: "Mahsulotlar",
    ru: "Товары",
    en: "Subtotal",
  };

  const discountText = {
    uz: "Chegirma",
    ru: "Скидка",
    en: "Discount",
  };

  const deliveryText = {
    uz: "Yetkazib berish",
    ru: "Доставка",
    en: "Delivery",
  };

  const freeText = {
    uz: "Bepul",
    ru: "Бесплатно",
    en: "Free",
  };

  const totalText = {
    uz: "Jami",
    ru: "Итого",
    en: "Total",
  };

  const checkoutText = {
    uz: "Rasmiylashtirish",
    ru: "Оформить заказ",
    en: "Proceed to Checkout",
  };

  const recommendedText = {
    uz: "Tavsiya etiladigan mahsulotlar",
    ru: "Рекомендуемые товары",
    en: "Recommended Products",
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 lg:px-16">
          <div className="flex min-h-[600px] flex-col items-center justify-center rounded-3xl bg-white p-12 text-center shadow-lg">
            <div className="mb-6 text-9xl">🛒</div>
            <h2 className="mb-4 text-3xl font-black text-gray-900">
              {emptyCartText[locale]}
            </h2>
            <p className="mb-8 text-gray-600">{emptyCartDesc[locale]}</p>
            <Link
              href="/products"
              className="group/shop relative flex items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-[#E4A11B] bg-white px-8 py-4 font-bold text-[#E4A11B] shadow-lg transition-all hover:shadow-xl"
            >
              <span className="absolute inset-0 -translate-y-full bg-gradient-to-t from-[#E4A11B] to-[#C58916] transition-transform duration-500 ease-out group-hover/shop:translate-y-0" />
              <ShoppingBag className="relative z-10 h-5 w-5 transition-colors group-hover/shop:text-black" />
              <span className="relative z-10 transition-colors group-hover/shop:text-black">
                {startShoppingText[locale]}
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-start text-xl font-black text-gray-900 md:text-2xl">
            {cartTitleText[locale]}
          </h1>
          <p className="mt-2 text-gray-600">
            {cartItems.length} {itemsText[locale]}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Cart Items - 2 columns */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 rounded-3xl bg-white p-6 shadow-md transition-all hover:shadow-lg"
              >
                {/* Product Image */}
                <Link
                  href={`/products/${item.productId}`}
                  className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50"
                >
                  <div className="flex h-full items-center justify-center text-5xl">
                    💊
                  </div>
                </Link>

                {/* Product Info */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <Link
                      href={`/products/${item.productId}`}
                      className="mb-2 block text-base font-bold text-gray-900 hover:text-[#E4A11B] line-clamp-2"
                    >
                      {item.name[locale]}
                    </Link>

                    <div className="mb-3 flex items-baseline gap-2">
                      <span className="text-xl font-black text-gray-900">
                        {formatPrice(item.price)}
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        сум
                      </span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          {formatPrice(item.originalPrice)} сум
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quantity Controls and Remove Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center overflow-hidden rounded-xl border-2 border-gray-200 bg-white">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                        className="px-3 py-2 transition-colors hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4 py-2 font-bold min-w-[3rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        disabled={item.quantity >= item.maxQuantity}
                        className="px-3 py-2 transition-colors hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="group/del relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border-2 border-gray-200 transition-all hover:border-red-500"
                    >
                      <span className="absolute inset-0 -translate-y-full bg-gradient-to-t from-red-50 to-red-100 transition-transform duration-500 ease-out group-hover/del:translate-y-0" />
                      <Trash2 className="relative z-10 h-5 w-5 text-gray-600 transition-colors group-hover/del:text-red-500" />
                    </button>
                  </div>
                </div>

                {/* Item Total - Right Side */}
                <div className="flex flex-col items-end justify-between">
                  <div className="text-right">
                    <div className="text-xl font-black text-gray-900">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                    <div className="text-sm font-bold text-gray-900">сум</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 rounded-3xl bg-white p-6 shadow-md">
              <h3 className="mb-6 text-xl font-bold text-gray-900">
                {totalText[locale]}
              </h3>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  {promoCodeText[locale]}
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                    placeholder="SALE10"
                    className="flex-1 rounded-xl border-2 border-gray-200 px-4 py-2 focus:border-[#E4A11B] focus:outline-none"
                  />
                  <button
                    onClick={applyPromoCode}
                    className="group/promo relative overflow-hidden rounded-xl border-2 border-[#E4A11B] bg-white px-4 py-2 font-semibold text-[#E4A11B] transition-all"
                  >
                    <span className="absolute inset-0 -translate-y-full bg-gradient-to-t from-[#E4A11B] to-[#C58916] transition-transform duration-500 ease-out group-hover/promo:translate-y-0" />
                    <span className="relative z-10 transition-colors group-hover/promo:text-black">
                      {applyText[locale]}
                    </span>
                  </button>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-3 border-t-2 border-gray-200 pt-6">
                <div className="flex justify-between text-gray-600">
                  <span>{productsText[locale]}</span>
                  <span className="font-semibold">
                    {formatPrice(subtotal)} сум
                  </span>
                </div>

                {appliedPromo && (
                  <div className="flex justify-between text-green-600">
                    <span>
                      {discountText[locale]} ({appliedPromo.code})
                    </span>
                    <span className="font-semibold">
                      -{formatPrice(promoDiscount)} сум
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-gray-600">
                  <span>{deliveryText[locale]}</span>
                  <span className="font-semibold">
                    {deliveryFee === 0 ? (
                      <span className="text-green-600">{freeText[locale]}</span>
                    ) : (
                      `${formatPrice(deliveryFee)} сум`
                    )}
                  </span>
                </div>

                <div className="flex justify-between border-t-2 border-gray-200 pt-3 text-xl font-black text-gray-900">
                  <span>{totalText[locale]}</span>
                  <span>{formatPrice(total)} сум</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Link
                href="/checkout"
                className="group/checkout relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-[#E4A11B] bg-white py-4 font-bold text-[#E4A11B] shadow-lg transition-all hover:shadow-xl"
              >
                <span className="absolute inset-0 -translate-y-full bg-gradient-to-t from-[#E4A11B] to-[#C58916] transition-transform duration-500 ease-out group-hover/checkout:translate-y-0" />
                <span className="relative z-10 transition-colors group-hover/checkout:text-black">
                  {checkoutText[locale]}
                </span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-colors group-hover/checkout:text-black" />
              </Link>

              {/* Free Delivery Notice */}
              {subtotal < 100000 && (
                <p className="mt-4 text-center text-sm text-gray-600">
                  {locale === "uz"
                    ? `Bepul yetkazish uchun yana ${formatPrice(
                        100000 - subtotal,
                      )} сум qo'shing`
                    : locale === "ru"
                      ? `Добавьте еще ${formatPrice(
                          100000 - subtotal,
                        )} сум для бесплатной доставки`
                      : `Add ${formatPrice(
                          100000 - subtotal,
                        )} sum more for free delivery`}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Recommended Products Section - 2 rows of 4 */}
        {recommendedProducts.length > 0 && (
          <section className="mt-16">
            <div className="mb-8">
              <h2 className="text-start text-xl font-black text-gray-900 md:text-2xl">
                {recommendedText[locale]}
              </h2>
            </div>

            {/* Grid: 2 rows x 4 columns */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {recommendedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={(p) => {
                    alert(
                      locale === "uz"
                        ? "Savatga qo'shildi!"
                        : locale === "ru"
                          ? "Добавлено в корзину!"
                          : "Added to cart!",
                    );
                  }}
                  onAddToWishlist={(p) => {
                    alert(
                      locale === "uz"
                        ? "Sevimlilarga qo'shildi!"
                        : locale === "ru"
                          ? "Добавлено в избранное!"
                          : "Added to wishlist!",
                    );
                  }}
                  bgColor={
                    categoryColors[product.categorySlug] || "bg-purple-500"
                  }
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
