"use client";

import Link from "next/link";
import {
  ShoppingCart,
  User,
  Menu,
  Search,
  Phone,
  Mail,
  Heart,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import WishlistIcon from "./WishlistIcon";
import UserMenu from "./UserMenu";
import MobileNav from "./MobileNav";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { locale } = useLanguage();

  const mainNav = [
    {
      title: { ru: "Главная", uz: "Bosh sahifa", en: "Home" },
      href: "/",
    },
    {
      title: { ru: "Каталог", uz: "Katalog", en: "Catalog" },
      href: "/products",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Bar - Clean Gray */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <div className="flex h-10 items-center justify-between text-xs">
            <div className="flex items-center gap-4 text-gray-600">
              <a
                href="tel:+998901234567"
                className="flex items-center gap-1.5 transition-colors hover:text-gray-900"
              >
                <Phone className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">+998 90 123 45 67</span>
              </a>
              <span className="hidden text-gray-300 md:inline">|</span>
              <a
                href="mailto:info@e-elements.uz"
                className="hidden items-center gap-1.5 transition-colors hover:text-gray-900 md:flex"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>info@e-elements.uz</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 transition-transform group-hover:scale-105">
                <span className="text-2xl font-black text-white">E</span>
              </div>
              <div className="hidden flex-col sm:flex">
                <span className="text-xl font-black text-gray-900">
                  E-Elements
                </span>
                <span className="text-xs text-gray-500">
                  {locale === "ru" && "Здоровье и качество"}
                  {locale === "uz" && "Salomatlik va sifat"}
                  {locale === "en" && "Health & Quality"}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 md:flex">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gray-900 after:transition-all hover:after:w-full"
                >
                  {item.title[locale]}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Search Toggle */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="rounded-lg p-2.5 text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
                aria-label="Поиск"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Desktop Search */}
              <div className="hidden md:block">
                <SearchBar />
              </div>

              {/* Wishlist/Favourite */}
              <WishlistIcon />

              {/* Cart */}
              <CartIcon />

              {/* User Menu */}
              <UserMenu />

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-lg p-2.5 text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
                aria-label="Меню"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      {isSearchOpen && (
        <div className="border-t border-gray-100 bg-white p-4 md:hidden">
          <SearchBar onSearch={() => setIsSearchOpen(false)} />
        </div>
      )}

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}
