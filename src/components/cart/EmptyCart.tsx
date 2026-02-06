"use client";

import Link from "next/link";
import { ShoppingBag, ArrowRight } from "lucide-react";

interface EmptyCartProps {
  locale: "ru" | "uz" | "en";
}

export default function EmptyCart({ locale }: EmptyCartProps) {
  const content = {
    empty: {
      ru: "Корзина пуста",
      uz: "Savat bo'sh",
      en: "Cart is empty",
    },
    emptyDesc: {
      ru: "Добавьте товары в корзину, чтобы оформить заказ",
      uz: "Buyurtma berish uchun mahsulotlarni savatga qo'shing",
      en: "Add products to cart to place an order",
    },
    continueShopping: {
      ru: "Продолжить покупки",
      uz: "Xaridni davom ettirish",
      en: "Continue Shopping",
    },
  };

  return (
    <div className="mx-auto max-w-md text-center">
      <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
        <ShoppingBag className="h-12 w-12 text-gray-400" />
      </div>
      <h1 className="mb-2 text-3xl font-black text-gray-900">
        {content.empty[locale]}
      </h1>
      <p className="mb-8 text-gray-600">{content.emptyDesc[locale]}</p>
      <Link
        href="/products"
        className="inline-flex items-center gap-2 rounded-2xl bg-gray-900 px-8 py-4 font-bold text-white transition-all hover:bg-gray-800"
      >
        {content.continueShopping[locale]}
        <ArrowRight className="h-5 w-5" />
      </Link>
    </div>
  );
}
