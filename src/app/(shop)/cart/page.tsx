// src/app/(shop)/cart/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CartItem } from "@/types/cart";

// Mock cart data
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
];

export default function CartPage() {
  const { locale } = useLanguage();
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<{
    code: string;
    discount: number;
  } | null>(null);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("uz-UZ").format(price);
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

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="flex min-h-[600px] flex-col items-center justify-center rounded-3xl bg-white p-12 text-center">
            <div className="mb-6 text-9xl">🛒</div>
            <h2 className="mb-4 text-3xl font-black text-gray-900">
              {locale === "uz"
                ? "Savatchada hech narsa yo'q"
                : locale === "ru"
                  ? "Корзина пуста"
                  : "Cart is empty"}
            </h2>
            <p className="mb-8 text-gray-600">
              {locale === "uz"
                ? "Mahsulot qo'shishni boshlang"
                : locale === "ru"
                  ? "Начните добавлять товары"
                  : "Start adding products"}
            </p>
            <Link
              href="/products"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:shadow-lg"
            >
              <ShoppingBag className="h-5 w-5" />
              {locale === "uz"
                ? "Xarid qilish"
                : locale === "ru"
                  ? "За покупками"
                  : "Start Shopping"}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-900">
            {locale === "uz"
              ? "Savatcha"
              : locale === "ru"
                ? "Корзина"
                : "Shopping Cart"}
          </h1>
          <p className="mt-2 text-gray-600">
            {cartItems.length}{" "}
            {locale === "uz"
              ? "ta mahsulot"
              : locale === "ru"
                ? "товара(ов)"
                : "item(s)"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-2xl border-2 border-gray-200 bg-white p-6 transition-all hover:border-blue-100 hover:shadow-lg"
                >
                  {/* Product Image */}
                  <Link
                    href={`/products/${item.productId}`}
                    className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-gray-50"
                  >
                    <div className="flex h-full items-center justify-center text-4xl">
                      💊
                    </div>
                  </Link>

                  {/* Product Info */}
                  <div className="flex flex-1 flex-col">
                    <Link
                      href={`/products/${item.productId}`}
                      className="mb-2 font-bold text-gray-900 hover:text-blue-600"
                    >
                      {item.name[locale]}
                    </Link>

                    <div className="mb-4 flex items-end gap-2">
                      <span className="text-xl font-black text-gray-900">
                        {formatPrice(item.price)}
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        so'm
                      </span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          {formatPrice(item.originalPrice)} so'm
                        </span>
                      )}
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center overflow-hidden rounded-lg border-2 border-gray-200">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                          className="px-3 py-2 transition-colors hover:bg-gray-100 disabled:opacity-50"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4 py-2 font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          disabled={item.quantity >= item.maxQuantity}
                          className="px-3 py-2 transition-colors hover:bg-gray-100 disabled:opacity-50"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-red-600 transition-colors hover:text-red-700"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  {/* Item Total */}
                  <div className="flex flex-col items-end justify-between">
                    <div className="text-right">
                      <div className="text-xl font-black text-gray-900">
                        {formatPrice(item.price * item.quantity)}
                      </div>
                      <div className="text-sm font-bold text-gray-900">
                        so'm
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 rounded-2xl border-2 border-gray-200 bg-white p-6">
              <h3 className="mb-6 text-xl font-bold text-gray-900">
                {locale === "uz"
                  ? "Buyurtma"
                  : locale === "ru"
                    ? "Заказ"
                    : "Order Summary"}
              </h3>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  {locale === "uz"
                    ? "Promo kod"
                    : locale === "ru"
                      ? "Промокод"
                      : "Promo code"}
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                    placeholder="SALE10"
                    className="flex-1 rounded-lg border-2 border-gray-200 px-4 py-2 focus:border-blue-500 focus:outline-none"
                  />
                  <button
                    onClick={applyPromoCode}
                    className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
                  >
                    {locale === "uz"
                      ? "Qo'llash"
                      : locale === "ru"
                        ? "Применить"
                        : "Apply"}
                  </button>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-3 border-t-2 border-gray-200 pt-6">
                <div className="flex justify-between text-gray-600">
                  <span>
                    {locale === "uz"
                      ? "Mahsulotlar"
                      : locale === "ru"
                        ? "Товары"
                        : "Subtotal"}
                  </span>
                  <span className="font-semibold">
                    {formatPrice(subtotal)} so'm
                  </span>
                </div>

                {appliedPromo && (
                  <div className="flex justify-between text-green-600">
                    <span>
                      {locale === "uz"
                        ? "Chegirma"
                        : locale === "ru"
                          ? "Скидка"
                          : "Discount"}{" "}
                      ({appliedPromo.code})
                    </span>
                    <span className="font-semibold">
                      -{formatPrice(promoDiscount)} so'm
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-gray-600">
                  <span>
                    {locale === "uz"
                      ? "Yetkazib berish"
                      : locale === "ru"
                        ? "Доставка"
                        : "Delivery"}
                  </span>
                  <span className="font-semibold">
                    {deliveryFee === 0 ? (
                      <span className="text-green-600">
                        {locale === "uz"
                          ? "Bepul"
                          : locale === "ru"
                            ? "Бесплатно"
                            : "Free"}
                      </span>
                    ) : (
                      `${formatPrice(deliveryFee)} so'm`
                    )}
                  </span>
                </div>

                <div className="flex justify-between border-t-2 border-gray-200 pt-3 text-xl font-black text-gray-900">
                  <span>
                    {locale === "uz"
                      ? "Jami"
                      : locale === "ru"
                        ? "Итого"
                        : "Total"}
                  </span>
                  <span>{formatPrice(total)} so'm</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Link
                href="/checkout"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 py-4 font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                {locale === "uz"
                  ? "Rasmiylashtirish"
                  : locale === "ru"
                    ? "Оформить заказ"
                    : "Proceed to Checkout"}
                <ArrowRight className="h-5 w-5" />
              </Link>

              {/* Free Delivery Notice */}
              {subtotal < 100000 && (
                <p className="mt-4 text-center text-sm text-gray-600">
                  {locale === "uz"
                    ? `Bepul yetkazish uchun yana ${formatPrice(
                        100000 - subtotal,
                      )} so'm qo'shing`
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
      </div>
    </div>
  );
}
