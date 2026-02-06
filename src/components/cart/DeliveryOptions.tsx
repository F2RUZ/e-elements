"use client";

import { Truck, Package } from "lucide-react";

interface DeliveryOptionsProps {
  locale: "ru" | "uz" | "en";
}

export default function DeliveryOptions({ locale }: DeliveryOptionsProps) {
  const content = {
    title: {
      ru: "Способ доставки",
      uz: "Yetkazib berish usuli",
      en: "Delivery Method",
    },
    courier: {
      ru: "Доставка курьером",
      uz: "Kuryer orqali yetkazib berish",
      en: "Courier Delivery",
    },
    pickup: {
      ru: "Самовывоз из пункта выдачи",
      uz: "Topshirish punktidan olib ketish",
      en: "Pickup Point",
    },
    tomorrow: {
      ru: "Завтра",
      uz: "Ertaga",
      en: "Tomorrow",
    },
    free: {
      ru: "Бесплатно",
      uz: "Bepul",
      en: "Free",
    },
    deliveryInfo: {
      ru: "Бесплатная доставка от 50 000 сум",
      uz: "50 000 so'mdan bepul yetkazib berish",
      en: "Free delivery from 50,000 sum",
    },
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <h3 className="mb-4 text-lg font-bold text-gray-900">
        {content.title[locale]}
      </h3>
      <div className="space-y-3">
        <div className="flex items-start gap-4 rounded-xl border-2 border-purple-500 bg-purple-50 p-4">
          <input
            type="radio"
            name="delivery"
            id="courier"
            defaultChecked
            className="mt-1 h-5 w-5 text-purple-600"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-purple-600" />
              <label
                htmlFor="courier"
                className="cursor-pointer font-bold text-gray-900"
              >
                {content.courier[locale]}
              </label>
            </div>
            <p className="mt-1 text-sm text-gray-600">
              {content.tomorrow[locale]}, 5 000 so'm
            </p>
            <p className="mt-1 text-xs font-medium text-green-600">
              {content.deliveryInfo[locale]}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-xl border-2 border-gray-200 bg-white p-4">
          <input
            type="radio"
            name="delivery"
            id="pickup"
            className="mt-1 h-5 w-5 text-purple-600"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-gray-600" />
              <label
                htmlFor="pickup"
                className="cursor-pointer font-bold text-gray-900"
              >
                {content.pickup[locale]}
              </label>
            </div>
            <p className="mt-1 text-sm text-gray-600">
              {content.tomorrow[locale]}, {content.free[locale]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
