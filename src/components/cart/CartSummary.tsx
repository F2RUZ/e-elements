"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, ShieldCheck, Truck } from "lucide-react";

interface CartSummaryProps {
  totalItems: number;
  totalPrice: number;
  totalDiscount: number;
  locale: "ru" | "uz" | "en";
}

export default function CartSummary({
  totalItems,
  totalPrice,
  totalDiscount,
  locale,
}: CartSummaryProps) {
  const content = {
    yourOrder: {
      ru: "Ваш заказ",
      uz: "Buyurtmangiz",
      en: "Your Order",
    },
    products: {
      ru: "Товары",
      uz: "Mahsulotlar",
      en: "Products",
    },
    discount: {
      ru: "Скидка",
      uz: "Chegirma",
      en: "Discount",
    },
    deliveryPrice: {
      ru: "Доставка",
      uz: "Yetkazib berish",
      en: "Delivery",
    },
    free: {
      ru: "Бесплатно",
      uz: "Bepul",
      en: "Free",
    },
    total: {
      ru: "Итого",
      uz: "Jami",
      en: "Total",
    },
    youSave: {
      ru: "Вы экономите",
      uz: "Tejovingiz",
      en: "You save",
    },
    checkout: {
      ru: "Перейти к оформлению",
      uz: "Rasmiylashtirish",
      en: "Proceed to Checkout",
    },
    continueShopping: {
      ru: "Продолжить покупки",
      uz: "Xaridni davom ettirish",
      en: "Continue Shopping",
    },
    qualityGuarantee: {
      ru: "Гарантия качества",
      uz: "Sifat kafolati",
      en: "Quality Guarantee",
    },
    originalProducts: {
      ru: "100% оригинальная продукция",
      uz: "100% asl mahsulot",
      en: "100% original products",
    },
    fastDelivery: {
      ru: "Быстрая доставка",
      uz: "Tez yetkazib berish",
      en: "Fast Delivery",
    },
    nextDay: {
      ru: "Доставка на следующий день",
      uz: "Ertasi kun yetkazamiz",
      en: "Next day delivery",
    },
  };

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
  };

  return (
    <div className="sticky top-24 space-y-4">
      {/* Summary Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <h2 className="mb-6 text-xl font-black text-gray-900">
          {content.yourOrder[locale]}
        </h2>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>
              {content.products[locale]} ({totalItems}):
            </span>
            <span className="font-bold text-gray-900">
              {formatPrice(totalPrice + totalDiscount)}
            </span>
          </div>

          {totalDiscount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>{content.discount[locale]}:</span>
              <span className="font-bold">-{formatPrice(totalDiscount)}</span>
            </div>
          )}

          <div className="flex justify-between text-gray-600">
            <span>{content.deliveryPrice[locale]}:</span>
            <span className="font-bold text-green-600">
              {content.free[locale]}
            </span>
          </div>

          <div className="border-t border-gray-200 pt-3">
            <div className="flex justify-between">
              <span className="text-lg font-bold text-gray-900">
                {content.total[locale]}:
              </span>
              <span className="text-2xl font-black text-purple-600">
                {formatPrice(totalPrice)}
              </span>
            </div>
          </div>

          {totalDiscount > 0 && (
            <div className="rounded-lg bg-green-50 p-3">
              <div className="flex items-center gap-2 text-green-700">
                <CheckCircle className="h-4 w-4" />
                <span className="text-xs font-semibold">
                  {content.youSave[locale]}: {formatPrice(totalDiscount)}
                </span>
              </div>
            </div>
          )}
        </div>

        <Link
          href="/checkout"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-purple-600 px-6 py-4 font-bold text-white transition-all hover:bg-purple-700"
        >
          {content.checkout[locale]}
          <ArrowRight className="h-5 w-5" />
        </Link>

        <Link
          href="/products"
          className="mt-3 block text-center text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900"
        >
          {content.continueShopping[locale]}
        </Link>
      </div>

      {/* Benefits */}
      <div className="rounded-2xl border border-gray-200 bg-white p-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
              <ShieldCheck className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">
                {content.qualityGuarantee[locale]}
              </p>
              <p className="text-xs text-gray-500">
                {content.originalProducts[locale]}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
              <Truck className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">
                {content.fastDelivery[locale]}
              </p>
              <p className="text-xs text-gray-500">{content.nextDay[locale]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
