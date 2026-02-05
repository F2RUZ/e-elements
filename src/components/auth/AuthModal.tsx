// src/components/auth/AuthModal.tsx
"use client";

import { useState } from "react";
import { X, Phone, KeyRound, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

type AuthStep = "phone" | "verify" | "complete";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "login" | "register";
}

export default function AuthModal({
  isOpen,
  onClose,
  initialMode = "login",
}: AuthModalProps) {
  const { locale } = useLanguage();
  const [mode, setMode] = useState<"login" | "register">(initialMode);
  const [step, setStep] = useState<AuthStep>("phone");
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [optionalData, setOptionalData] = useState({
    name: "",
    email: "",
  });

  const content = {
    login: {
      title: {
        ru: "Вход в аккаунт",
        uz: "Akkauntga kirish",
        en: "Login",
      },
      switchText: {
        ru: "Нет аккаунта?",
        uz: "Akkauntingiz yo'qmi?",
        en: "No account?",
      },
      switchButton: {
        ru: "Зарегистрироваться",
        uz: "Ro'yxatdan o'tish",
        en: "Register",
      },
    },
    register: {
      title: {
        ru: "Регистрация",
        uz: "Ro'yxatdan o'tish",
        en: "Register",
      },
      switchText: {
        ru: "Уже есть аккаунт?",
        uz: "Akkauntingiz bormi?",
        en: "Have an account?",
      },
      switchButton: {
        ru: "Войти",
        uz: "Kirish",
        en: "Login",
      },
    },
    phoneLabel: {
      ru: "Номер телефона",
      uz: "Telefon raqami",
      en: "Phone number",
    },
    phonePlaceholder: {
      ru: "+998 __ ___ __ __",
      uz: "+998 __ ___ __ __",
      en: "+998 __ ___ __ __",
    },
    sendCode: {
      ru: "Получить код",
      uz: "Kod olish",
      en: "Get code",
    },
    verifyTitle: {
      ru: "Введите код из SMS",
      uz: "SMS dan kodni kiriting",
      en: "Enter SMS code",
    },
    verifySubtitle: {
      ru: "Код отправлен на номер",
      uz: "Kod yuborildi raqamga",
      en: "Code sent to",
    },
    codeLabel: {
      ru: "Код подтверждения",
      uz: "Tasdiqlash kodi",
      en: "Verification code",
    },
    verify: {
      ru: "Подтвердить",
      uz: "Tasdiqlash",
      en: "Verify",
    },
    resendCode: {
      ru: "Отправить код повторно",
      uz: "Kodni qayta yuborish",
      en: "Resend code",
    },
    completeTitle: {
      ru: "Дополнительная информация",
      uz: "Qo'shimcha ma'lumot",
      en: "Additional information",
    },
    completeSubtitle: {
      ru: "Необязательно, но поможет улучшить сервис",
      uz: "Ixtiyoriy, lekin xizmatni yaxshilashga yordam beradi",
      en: "Optional, but helps improve service",
    },
    nameLabel: {
      ru: "Ваше имя",
      uz: "Ismingiz",
      en: "Your name",
    },
    emailLabel: {
      ru: "Email (необязательно)",
      uz: "Email (ixtiyoriy)",
      en: "Email (optional)",
    },
    complete: {
      ru: "Завершить",
      uz: "Tugatish",
      en: "Complete",
    },
    skip: {
      ru: "Пропустить",
      uz: "O'tkazib yuborish",
      en: "Skip",
    },
  };

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sending code to:", phone);
    setStep("verify");
  };

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Verifying code:", verificationCode);
    if (mode === "register") {
      setStep("complete");
    } else {
      onClose();
    }
  };

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Completing registration:", optionalData);
    onClose();
  };

  const handleSkip = () => {
    onClose();
  };

  const resetModal = () => {
    setStep("phone");
    setPhone("");
    setVerificationCode("");
    setOptionalData({ name: "", email: "" });
  };

  const switchMode = () => {
    setMode(mode === "login" ? "register" : "login");
    resetModal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 p-4"
          >
            <div className="relative rounded-3xl bg-white p-8 shadow-2xl">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>

              {(step === "verify" || step === "complete") && (
                <button
                  onClick={() => {
                    if (step === "complete") setStep("verify");
                    else setStep("phone");
                  }}
                  className="absolute left-4 top-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
              )}

              {step === "phone" && (
                <div>
                  <div className="mb-8 text-center">
                    <h2 className="mb-2 text-3xl font-black text-gray-900">
                      {content[mode].title[locale]}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {content.phoneLabel[locale]}
                    </p>
                  </div>

                  <form onSubmit={handleSendCode} className="space-y-6">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        {content.phoneLabel[locale]}
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 transition-colors focus:border-primary focus:bg-white focus:outline-none"
                          placeholder={content.phonePlaceholder[locale]}
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-gradient-to-r from-primary to-amber-500 py-3 font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg"
                    >
                      {content.sendCode[locale]}
                    </button>
                  </form>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      {content[mode].switchText[locale]}{" "}
                      <button
                        onClick={switchMode}
                        className="font-semibold text-primary hover:text-primary/80"
                      >
                        {content[mode].switchButton[locale]}
                      </button>
                    </p>
                  </div>
                </div>
              )}

              {step === "verify" && (
                <div>
                  <div className="mb-8 text-center">
                    <h2 className="mb-2 text-3xl font-black text-gray-900">
                      {content.verifyTitle[locale]}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {content.verifySubtitle[locale]}
                      <br />
                      <span className="font-semibold text-gray-900">
                        {phone}
                      </span>
                    </p>
                  </div>

                  <form onSubmit={handleVerifyCode} className="space-y-6">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        {content.codeLabel[locale]}
                      </label>
                      <div className="relative">
                        <KeyRound className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          value={verificationCode}
                          onChange={(e) => setVerificationCode(e.target.value)}
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-center text-2xl font-bold tracking-widest transition-colors focus:border-primary focus:bg-white focus:outline-none"
                          placeholder="••••••"
                          maxLength={6}
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-gradient-to-r from-primary to-amber-500 py-3 font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg"
                    >
                      {content.verify[locale]}
                    </button>

                    <button
                      type="button"
                      onClick={() => console.log("Resending code...")}
                      className="w-full text-sm font-semibold text-gray-600 hover:text-gray-900"
                    >
                      {content.resendCode[locale]}
                    </button>
                  </form>
                </div>
              )}

              {step === "complete" && (
                <div>
                  <div className="mb-8 text-center">
                    <h2 className="mb-2 text-3xl font-black text-gray-900">
                      {content.completeTitle[locale]}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {content.completeSubtitle[locale]}
                    </p>
                  </div>

                  <form onSubmit={handleComplete} className="space-y-5">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        {content.nameLabel[locale]}
                      </label>
                      <input
                        type="text"
                        value={optionalData.name}
                        onChange={(e) =>
                          setOptionalData({
                            ...optionalData,
                            name: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 px-4 transition-colors focus:border-primary focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        {content.emailLabel[locale]}
                      </label>
                      <input
                        type="email"
                        value={optionalData.email}
                        onChange={(e) =>
                          setOptionalData({
                            ...optionalData,
                            email: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 px-4 transition-colors focus:border-primary focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={handleSkip}
                        className="flex-1 rounded-xl border-2 border-gray-200 py-3 font-bold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50"
                      >
                        {content.skip[locale]}
                      </button>
                      <button
                        type="submit"
                        className="flex-1 rounded-xl bg-gradient-to-r from-primary to-amber-500 py-3 font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg"
                      >
                        {content.complete[locale]}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
