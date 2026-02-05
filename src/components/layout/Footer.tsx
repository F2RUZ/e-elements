"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { locale } = useLanguage();
  const currentYear = new Date().getFullYear();

  const content = {
    about: {
      ru: "Качественные биологически активные добавки для вашего здоровья и благополучия",
      uz: "Salomatlik va farovonligingiz uchun sifatli biologik faol qo'shimchalar",
      en: "Quality dietary supplements for your health and well-being",
    },
    company: {
      title: {
        ru: "Компания",
        uz: "Kompaniya",
        en: "Company",
      },
      links: [
        { ru: "О нас", uz: "Biz haqimizda", en: "About Us", href: "/about" },
        { ru: "Контакты", uz: "Aloqa", en: "Contact", href: "/contact" },
        {
          ru: "Доставка и оплата",
          uz: "Yetkazib berish",
          en: "Delivery",
          href: "/delivery",
        },
        { ru: "Гарантии", uz: "Kafolatlar", en: "Warranty", href: "/warranty" },
      ],
    },
    help: {
      title: {
        ru: "Помощь",
        uz: "Yordam",
        en: "Help",
      },
      links: [
        {
          ru: "Как заказать",
          uz: "Qanday buyurtma berish",
          en: "How to Order",
          href: "/how-to-order",
        },
        {
          ru: "Реферальная программа",
          uz: "Referal dastur",
          en: "Referral",
          href: "/referral-info",
        },
        { ru: "FAQ", uz: "Savollar", en: "FAQ", href: "/faq" },
        {
          ru: "Возврат товара",
          uz: "Tovarni qaytarish",
          en: "Returns",
          href: "/returns",
        },
      ],
    },
    catalog: {
      title: {
        ru: "Каталог",
        uz: "Katalog",
        en: "Catalog",
      },
      links: [
        {
          ru: "Витамины",
          uz: "Vitaminlar",
          en: "Vitamins",
          href: "/categories/vitamins",
        },
        {
          ru: "Для иммунитета",
          uz: "Immunitet uchun",
          en: "Immunity",
          href: "/categories/immunity",
        },
        {
          ru: "Для суставов",
          uz: "Bo'g'imlar uchun",
          en: "Joints",
          href: "/categories/joints",
        },
        {
          ru: "Все товары",
          uz: "Barcha mahsulotlar",
          en: "All Products",
          href: "/products",
        },
      ],
    },
    contacts: {
      title: {
        ru: "Контакты",
        uz: "Aloqa",
        en: "Contact",
      },
    },
    rights: {
      ru: "Все права защищены",
      uz: "Barcha huquqlar himoyalangan",
      en: "All rights reserved",
    },
  };

  return (
    <footer className="border-t border-gray-200 bg-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Company */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900">
                <span className="text-xl font-black text-white">E</span>
              </div>
              <span className="text-xl font-black text-gray-900">
                E-Elements
              </span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-gray-600">
              {content.about[locale]}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://t.me/eelements"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-all hover:bg-gray-900 hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/eelements"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-all hover:bg-gray-900 hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/eelements"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-all hover:bg-gray-900 hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
              {content.company.title[locale]}
            </h3>
            <ul className="space-y-3">
              {content.company.links.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    {item[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
              {content.help.title[locale]}
            </h3>
            <ul className="space-y-3">
              {content.help.links.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    {item[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
              {content.contacts.title[locale]}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+998901234567"
                  className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  <Phone className="h-4 w-4" />
                  <span>+998 90 123 45 67</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@e-elements.uz"
                  className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@e-elements.uz</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>Toshkent, O'zbekiston</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-8 lg:px-16">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-600">
              © {currentYear} E-Elements. {content.rights[locale]}.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-600 transition-colors hover:text-gray-900"
              >
                {locale === "ru" && "Политика конфиденциальности"}
                {locale === "uz" && "Maxfiylik siyosati"}
                {locale === "en" && "Privacy Policy"}
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-600 transition-colors hover:text-gray-900"
              >
                {locale === "ru" && "Условия использования"}
                {locale === "uz" && "Foydalanish shartlari"}
                {locale === "en" && "Terms of Service"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
