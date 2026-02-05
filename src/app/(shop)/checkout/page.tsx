// src/app/(shop)/checkout/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, ChevronLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type Step = "contact" | "delivery" | "payment" | "review";

interface CheckoutData {
  // Contact
  name: string;
  phone: string;
  email?: string;
  // Delivery
  address: string;
  city: string;
  region: string;
  deliveryMethod: "courier" | "pickup";
  // Payment
  paymentMethod: "cash" | "card" | "online";
}

export default function CheckoutPage() {
  const router = useRouter();
  const { locale } = useLanguage();
  const [currentStep, setCurrentStep] = useState<Step>("contact");
  const [checkoutData, setCheckoutData] = useState<CheckoutData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "Tashkent",
    region: "Tashkent",
    deliveryMethod: "courier",
    paymentMethod: "cash",
  });

  const steps: { id: Step; name: { uz: string; ru: string; en: string } }[] = [
    {
      id: "contact",
      name: {
        uz: "Aloqa",
        ru: "Контакт",
        en: "Contact",
      },
    },
    {
      id: "delivery",
      name: {
        uz: "Yetkazish",
        ru: "Доставка",
        en: "Delivery",
      },
    },
    {
      id: "payment",
      name: {
        uz: "To'lov",
        ru: "Оплата",
        en: "Payment",
      },
    },
    {
      id: "review",
      name: {
        uz: "Tasdiqlash",
        ru: "Подтверждение",
        en: "Review",
      },
    },
  ];

  const currentStepIndex = steps.findIndex((s) => s.id === currentStep);

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStep(steps[currentStepIndex + 1].id);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStep(steps[currentStepIndex - 1].id);
    }
  };

  const handleSubmit = () => {
    alert(
      locale === "uz"
        ? "Buyurtma muvaffaqiyatli yuborildi!"
        : locale === "ru"
          ? "Заказ успешно оформлен!"
          : "Order placed successfully!",
    );
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-900">
            {locale === "uz"
              ? "Buyurtmani rasmiylashtirish"
              : locale === "ru"
                ? "Оформление заказа"
                : "Checkout"}
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Steps */}
          <div className="lg:col-span-2">
            {/* Step Indicator */}
            <div className="mb-8 flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-1 items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full border-4 font-bold transition-all ${
                        index <= currentStepIndex
                          ? "border-blue-600 bg-blue-600 text-white"
                          : "border-gray-300 bg-white text-gray-400"
                      }`}
                    >
                      {index < currentStepIndex ? (
                        <Check className="h-6 w-6" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    <span
                      className={`mt-2 text-xs font-semibold ${
                        index <= currentStepIndex
                          ? "text-blue-600"
                          : "text-gray-400"
                      }`}
                    >
                      {step.name[locale]}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`mx-2 h-1 flex-1 rounded ${
                        index < currentStepIndex ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step Content */}
            <div className="rounded-2xl border-2 border-gray-200 bg-white p-8">
              {/* Contact Step */}
              {currentStep === "contact" && (
                <div>
                  <h2 className="mb-6 text-2xl font-black text-gray-900">
                    {locale === "uz"
                      ? "Aloqa ma'lumotlari"
                      : locale === "ru"
                        ? "Контактные данные"
                        : "Contact Information"}
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="mb-2 block font-semibold text-gray-700">
                        {locale === "uz"
                          ? "Ismingiz"
                          : locale === "ru"
                            ? "Ваше имя"
                            : "Your name"}{" "}
                        *
                      </label>
                      <input
                        type="text"
                        value={checkoutData.name}
                        onChange={(e) =>
                          setCheckoutData({
                            ...checkoutData,
                            name: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-blue-500 focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-2 block font-semibold text-gray-700">
                        {locale === "uz"
                          ? "Telefon raqami"
                          : locale === "ru"
                            ? "Номер телефона"
                            : "Phone number"}{" "}
                        *
                      </label>
                      <input
                        type="tel"
                        value={checkoutData.phone}
                        onChange={(e) =>
                          setCheckoutData({
                            ...checkoutData,
                            phone: e.target.value,
                          })
                        }
                        placeholder="+998 __ ___ __ __"
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-blue-500 focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-2 block font-semibold text-gray-700">
                        Email{" "}
                        <span className="text-gray-400">
                          (
                          {locale === "uz"
                            ? "ixtiyoriy"
                            : locale === "ru"
                              ? "необязательно"
                              : "optional"}
                          )
                        </span>
                      </label>
                      <input
                        type="email"
                        value={checkoutData.email}
                        onChange={(e) =>
                          setCheckoutData({
                            ...checkoutData,
                            email: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Delivery Step */}
              {currentStep === "delivery" && (
                <div>
                  <h2 className="mb-6 text-2xl font-black text-gray-900">
                    {locale === "uz"
                      ? "Yetkazib berish"
                      : locale === "ru"
                        ? "Доставка"
                        : "Delivery"}
                  </h2>

                  <div className="mb-6 space-y-3">
                    <label className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-gray-200 p-4 transition-all hover:border-blue-500">
                      <input
                        type="radio"
                        name="deliveryMethod"
                        checked={checkoutData.deliveryMethod === "courier"}
                        onChange={() =>
                          setCheckoutData({
                            ...checkoutData,
                            deliveryMethod: "courier",
                          })
                        }
                        className="h-5 w-5 text-blue-600"
                      />
                      <div className="flex-1">
                        <p className="font-bold text-gray-900">
                          {locale === "uz"
                            ? "Kuryer orqali"
                            : locale === "ru"
                              ? "Курьером"
                              : "Courier delivery"}
                        </p>
                        <p className="text-sm text-gray-600">
                          {locale === "uz"
                            ? "1-2 ish kuni ichida"
                            : locale === "ru"
                              ? "В течение 1-2 рабочих дней"
                              : "Within 1-2 business days"}
                        </p>
                      </div>
                    </label>

                    <label className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-gray-200 p-4 transition-all hover:border-blue-500">
                      <input
                        type="radio"
                        name="deliveryMethod"
                        checked={checkoutData.deliveryMethod === "pickup"}
                        onChange={() =>
                          setCheckoutData({
                            ...checkoutData,
                            deliveryMethod: "pickup",
                          })
                        }
                        className="h-5 w-5 text-blue-600"
                      />
                      <div className="flex-1">
                        <p className="font-bold text-gray-900">
                          {locale === "uz"
                            ? "O'zim olib ketaman"
                            : locale === "ru"
                              ? "Самовывоз"
                              : "Pickup"}
                        </p>
                        <p className="text-sm text-gray-600">
                          {locale === "uz"
                            ? "Bugundan boshlab"
                            : locale === "ru"
                              ? "С сегодняшнего дня"
                              : "Starting today"}
                        </p>
                      </div>
                    </label>
                  </div>

                  {checkoutData.deliveryMethod === "courier" && (
                    <div className="space-y-4">
                      <div>
                        <label className="mb-2 block font-semibold text-gray-700">
                          {locale === "uz"
                            ? "Manzil"
                            : locale === "ru"
                              ? "Адрес"
                              : "Address"}{" "}
                          *
                        </label>
                        <input
                          type="text"
                          value={checkoutData.address}
                          onChange={(e) =>
                            setCheckoutData({
                              ...checkoutData,
                              address: e.target.value,
                            })
                          }
                          className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-blue-500 focus:outline-none"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="mb-2 block font-semibold text-gray-700">
                            {locale === "uz"
                              ? "Shahar"
                              : locale === "ru"
                                ? "Город"
                                : "City"}
                          </label>
                          <select
                            value={checkoutData.city}
                            onChange={(e) =>
                              setCheckoutData({
                                ...checkoutData,
                                city: e.target.value,
                              })
                            }
                            className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-blue-500 focus:outline-none"
                          >
                            <option value="Tashkent">
                              {locale === "uz"
                                ? "Toshkent"
                                : locale === "ru"
                                  ? "Ташкент"
                                  : "Tashkent"}
                            </option>
                            <option value="Samarkand">
                              {locale === "uz"
                                ? "Samarqand"
                                : locale === "ru"
                                  ? "Самарканд"
                                  : "Samarkand"}
                            </option>
                            <option value="Bukhara">
                              {locale === "uz"
                                ? "Buxoro"
                                : locale === "ru"
                                  ? "Бухара"
                                  : "Bukhara"}
                            </option>
                          </select>
                        </div>

                        <div>
                          <label className="mb-2 block font-semibold text-gray-700">
                            {locale === "uz"
                              ? "Viloyat"
                              : locale === "ru"
                                ? "Область"
                                : "Region"}
                          </label>
                          <select
                            value={checkoutData.region}
                            onChange={(e) =>
                              setCheckoutData({
                                ...checkoutData,
                                region: e.target.value,
                              })
                            }
                            className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-blue-500 focus:outline-none"
                          >
                            <option value="Tashkent">
                              {locale === "uz"
                                ? "Toshkent"
                                : locale === "ru"
                                  ? "Ташкент"
                                  : "Tashkent"}
                            </option>
                            <option value="Samarkand">
                              {locale === "uz"
                                ? "Samarqand"
                                : locale === "ru"
                                  ? "Самарканд"
                                  : "Samarkand"}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Payment Step */}
              {currentStep === "payment" && (
                <div>
                  <h2 className="mb-6 text-2xl font-black text-gray-900">
                    {locale === "uz"
                      ? "To'lov usuli"
                      : locale === "ru"
                        ? "Способ оплаты"
                        : "Payment Method"}
                  </h2>

                  <div className="space-y-3">
                    <label className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-gray-200 p-4 transition-all hover:border-blue-500">
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={checkoutData.paymentMethod === "cash"}
                        onChange={() =>
                          setCheckoutData({
                            ...checkoutData,
                            paymentMethod: "cash",
                          })
                        }
                        className="h-5 w-5 text-blue-600"
                      />
                      <div className="flex-1">
                        <p className="font-bold text-gray-900">
                          {locale === "uz"
                            ? "Naqd pul"
                            : locale === "ru"
                              ? "Наличными"
                              : "Cash"}
                        </p>
                        <p className="text-sm text-gray-600">
                          {locale === "uz"
                            ? "Yetkazib berilganda to'lash"
                            : locale === "ru"
                              ? "Оплата при доставке"
                              : "Pay on delivery"}
                        </p>
                      </div>
                    </label>

                    <label className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-gray-200 p-4 transition-all hover:border-blue-500">
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={checkoutData.paymentMethod === "card"}
                        onChange={() =>
                          setCheckoutData({
                            ...checkoutData,
                            paymentMethod: "card",
                          })
                        }
                        className="h-5 w-5 text-blue-600"
                      />
                      <div className="flex-1">
                        <p className="font-bold text-gray-900">
                          {locale === "uz"
                            ? "Karta orqali"
                            : locale === "ru"
                              ? "Картой"
                              : "Card"}
                        </p>
                        <p className="text-sm text-gray-600">
                          {locale === "uz"
                            ? "Yetkazib berilganda terminal orqali"
                            : locale === "ru"
                              ? "Терминал при доставке"
                              : "Terminal on delivery"}
                        </p>
                      </div>
                    </label>

                    <label className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-gray-200 p-4 transition-all hover:border-blue-500">
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={checkoutData.paymentMethod === "online"}
                        onChange={() =>
                          setCheckoutData({
                            ...checkoutData,
                            paymentMethod: "online",
                          })
                        }
                        className="h-5 w-5 text-blue-600"
                      />
                      <div className="flex-1">
                        <p className="font-bold text-gray-900">
                          {locale === "uz"
                            ? "Onlayn to'lov"
                            : locale === "ru"
                              ? "Онлайн оплата"
                              : "Online payment"}
                        </p>
                        <p className="text-sm text-gray-600">
                          {locale === "uz"
                            ? "Payme, Click, Uzcard"
                            : locale === "ru"
                              ? "Payme, Click, Uzcard"
                              : "Payme, Click, Uzcard"}
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              )}

              {/* Review Step */}
              {currentStep === "review" && (
                <div>
                  <h2 className="mb-6 text-2xl font-black text-gray-900">
                    {locale === "uz"
                      ? "Buyurtmani tasdiqlash"
                      : locale === "ru"
                        ? "Подтверждение заказа"
                        : "Confirm Order"}
                  </h2>

                  <div className="space-y-6">
                    <div className="rounded-xl bg-gray-50 p-4">
                      <h3 className="mb-3 font-bold text-gray-900">
                        {locale === "uz"
                          ? "Aloqa"
                          : locale === "ru"
                            ? "Контакт"
                            : "Contact"}
                      </h3>
                      <p className="text-gray-700">{checkoutData.name}</p>
                      <p className="text-gray-700">{checkoutData.phone}</p>
                      {checkoutData.email && (
                        <p className="text-gray-700">{checkoutData.email}</p>
                      )}
                    </div>

                    <div className="rounded-xl bg-gray-50 p-4">
                      <h3 className="mb-3 font-bold text-gray-900">
                        {locale === "uz"
                          ? "Yetkazish"
                          : locale === "ru"
                            ? "Доставка"
                            : "Delivery"}
                      </h3>
                      <p className="text-gray-700">
                        {checkoutData.deliveryMethod === "courier"
                          ? locale === "uz"
                            ? "Kuryer orqali"
                            : locale === "ru"
                              ? "Курьером"
                              : "Courier delivery"
                          : locale === "uz"
                            ? "O'zim olib ketaman"
                            : locale === "ru"
                              ? "Самовывоз"
                              : "Pickup"}
                      </p>
                      {checkoutData.deliveryMethod === "courier" && (
                        <>
                          <p className="text-gray-700">
                            {checkoutData.address}
                          </p>
                          <p className="text-gray-700">
                            {checkoutData.city}, {checkoutData.region}
                          </p>
                        </>
                      )}
                    </div>

                    <div className="rounded-xl bg-gray-50 p-4">
                      <h3 className="mb-3 font-bold text-gray-900">
                        {locale === "uz"
                          ? "To'lov"
                          : locale === "ru"
                            ? "Оплата"
                            : "Payment"}
                      </h3>
                      <p className="text-gray-700">
                        {checkoutData.paymentMethod === "cash"
                          ? locale === "uz"
                            ? "Naqd pul"
                            : locale === "ru"
                              ? "Наличными"
                              : "Cash"
                          : checkoutData.paymentMethod === "card"
                            ? locale === "uz"
                              ? "Karta orqali"
                              : locale === "ru"
                                ? "Картой"
                                : "Card"
                            : locale === "uz"
                              ? "Onlayn to'lov"
                              : locale === "ru"
                                ? "Онлайн оплата"
                                : "Online payment"}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-8 flex gap-4">
                {currentStepIndex > 0 && (
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 rounded-xl border-2 border-gray-200 px-6 py-3 font-bold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50"
                  >
                    <ChevronLeft className="h-5 w-5" />
                    {locale === "uz"
                      ? "Orqaga"
                      : locale === "ru"
                        ? "Назад"
                        : "Back"}
                  </button>
                )}

                {currentStepIndex < steps.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className="ml-auto rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3 font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg"
                  >
                    {locale === "uz"
                      ? "Keyingi"
                      : locale === "ru"
                        ? "Далее"
                        : "Next"}
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="ml-auto rounded-xl bg-gradient-to-r from-green-600 to-green-500 px-8 py-3 font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg"
                  >
                    {locale === "uz"
                      ? "Buyurtma berish"
                      : locale === "ru"
                        ? "Оформить заказ"
                        : "Place Order"}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 rounded-2xl border-2 border-gray-200 bg-white p-6">
              <h3 className="mb-6 text-xl font-bold text-gray-900">
                {locale === "uz"
                  ? "Buyurtma"
                  : locale === "ru"
                    ? "Заказ"
                    : "Order Summary"}
              </h3>

              <div className="space-y-3 border-t-2 border-gray-200 pt-6">
                <div className="flex justify-between text-gray-600">
                  <span>
                    {locale === "uz"
                      ? "Mahsulotlar"
                      : locale === "ru"
                        ? "Товары"
                        : "Subtotal"}
                  </span>
                  <span className="font-semibold">75,000 so'm</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>
                    {locale === "uz"
                      ? "Yetkazib berish"
                      : locale === "ru"
                        ? "Доставка"
                        : "Delivery"}
                  </span>
                  <span className="font-semibold text-green-600">
                    {locale === "uz"
                      ? "Bepul"
                      : locale === "ru"
                        ? "Бесплатно"
                        : "Free"}
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
                  <span>75,000 so'm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
