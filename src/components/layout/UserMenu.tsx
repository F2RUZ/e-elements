"use client";

import { useState } from "react";
import Link from "next/link";
import { User, LogOut, Package, Heart, Users, Ticket } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage } from "@/context/LanguageContext";
import AuthModal from "@/components/auth/AuthModal";

export default function UserMenu() {
  const { user, logout } = useAuth();
  const { locale } = useLanguage();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const loginText = {
    ru: "Войти",
    uz: "Kirish",
    en: "Login",
  };

  const logoutText = {
    ru: "Выйти",
    uz: "Chiqish",
    en: "Logout",
  };

  const accountNav = [
    {
      title: { ru: "Профиль", uz: "Profil", en: "Profile" },
      href: "/account/profile",
      icon: User,
    },
    {
      title: { ru: "Мои заказы", uz: "Buyurtmalarim", en: "My Orders" },
      href: "/account/orders",
      icon: Package,
    },
    {
      title: { ru: "Избранное", uz: "Tanlanganlar", en: "Wishlist" },
      href: "/account/wishlist",
      icon: Heart,
    },
    {
      title: {
        ru: "Реферальная программа",
        uz: "Referal dastur",
        en: "Referral",
      },
      href: "/account/referral",
      icon: Users,
    },
    {
      title: { ru: "Мои промокоды", uz: "Promokodlarim", en: "Promocodes" },
      href: "/account/promocodes",
      icon: Ticket,
    },
  ];

  const openLogin = () => {
    setAuthMode("login");
    setIsAuthModalOpen(true);
  };

  if (!user) {
    return (
      <>
        <button
          onClick={openLogin}
          className="flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-gray-800"
        >
          <User className="h-4 w-4" />
          <span className="hidden sm:inline">{loginText[locale]}</span>
        </button>

        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          initialMode={authMode}
        />
      </>
    );
  }

  return (
    <div className="group relative">
      <button className="flex items-center gap-2 rounded-lg p-2.5 transition-colors hover:bg-gray-100">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
          {user.name?.charAt(0).toUpperCase() || "U"}
        </div>
        <span className="hidden text-sm font-semibold text-gray-900 md:inline">
          {user.name}
        </span>
      </button>

      <div className="absolute right-0 top-full mt-2 hidden w-64 rounded-lg border border-gray-200 bg-white shadow-xl group-hover:block">
        <div className="border-b border-gray-100 p-4">
          <p className="font-semibold text-gray-900">{user.name}</p>
          <p className="text-sm text-gray-600">{user.phone}</p>
        </div>

        <div className="p-2">
          {accountNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-50"
            >
              <item.icon className="h-4 w-4" />
              <span>{item.title[locale]}</span>
            </Link>
          ))}
        </div>

        <div className="border-t border-gray-100 p-2">
          <button
            onClick={logout}
            className="flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-red-600 transition-colors hover:bg-red-50"
          >
            <LogOut className="h-4 w-4" />
            <span>{logoutText[locale]}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
