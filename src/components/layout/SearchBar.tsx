"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface SearchBarProps {
  onSearch?: () => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { locale } = useLanguage();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/products?search=${encodeURIComponent(query.trim())}`);
      onSearch?.();
    }
  };

  const placeholder = {
    ru: "Поиск товаров...",
    uz: "Mahsulotlarni qidirish...",
    en: "Search products...",
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-lg">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder[locale]}
          className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-10 text-sm text-gray-900 placeholder-gray-500 transition-colors focus:border-gray-900 focus:bg-white focus:outline-none"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-900"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </form>
  );
}
