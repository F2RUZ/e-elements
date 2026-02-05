"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect } from "react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
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

  const menuTitle = {
    ru: "Меню",
    uz: "Menyu",
    en: "Menu",
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 z-50 h-full w-3/4 max-w-sm bg-white shadow-2xl md:hidden">
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4">
          <h2 className="text-lg font-bold text-gray-900">
            {menuTitle[locale]}
          </h2>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-lg px-4 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  {item.title[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Info */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-gray-50 p-4">
          <div className="space-y-2 text-sm text-gray-600">
            <a
              href="tel:+998901234567"
              className="flex items-center gap-2 transition-colors hover:text-gray-900"
            >
              <span>📞</span>
              <span>+998 90 123 45 67</span>
            </a>
            <a
              href="mailto:info@e-elements.uz"
              className="flex items-center gap-2 transition-colors hover:text-gray-900"
            >
              <span>✉️</span>
              <span>info@e-elements.uz</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
