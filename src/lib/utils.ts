import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, locale: "ru" | "uz" | "en" = "ru") {
  // Simple format to avoid hydration issues
  const formatted = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  const currency = {
    ru: "сум",
    uz: "so'm",
    en: "UZS",
  };

  return `${formatted} ${currency[locale]}`;
}

export function formatDate(
  date: Date | string,
  locale: "ru" | "uz" | "en" = "ru",
) {
  const d = typeof date === "string" ? new Date(date) : date;

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const localeMap = {
    ru: "ru-RU",
    uz: "uz-UZ",
    en: "en-US",
  };

  return d.toLocaleDateString(localeMap[locale], options);
}

export function truncate(str: string, length: number) {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
}

export function generateReferralCode(userId: string) {
  return userId.toUpperCase().slice(0, 8);
}

export function calculateDiscount(price: number, discount: number) {
  return price - (price * discount) / 100;
}
