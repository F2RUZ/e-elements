"use client";

import { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  ChevronRight,
  Star,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/hooks/useCart";
import ProductCard from "@/components/product/ProductCard";

export default function ProductsPage() {
  const { locale } = useLanguage();
  const { addItem } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    "all",
  ]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const content = {
    title: {
      ru: "Каталог товаров",
      uz: "Mahsulotlar katalogi",
      en: "Product Catalog",
    },
    search: {
      ru: "Поиск товаров...",
      uz: "Mahsulotlarni qidirish...",
      en: "Search products...",
    },
    filters: {
      ru: "Фильтры",
      uz: "Filtrlar",
      en: "Filters",
    },
    category: {
      ru: "Категории",
      uz: "Kategoriyalar",
      en: "Categories",
    },
    brand: {
      ru: "Бренд",
      uz: "Brend",
      en: "Brand",
    },
    price: {
      ru: "Цена",
      uz: "Narx",
      en: "Price",
    },
    rating: {
      ru: "Рейтинг",
      uz: "Reyting",
      en: "Rating",
    },
    availability: {
      ru: "Наличие",
      uz: "Mavjudligi",
      en: "Availability",
    },
    inStock: {
      ru: "В наличии",
      uz: "Mavjud",
      en: "In Stock",
    },
    reset: {
      ru: "Сбросить все",
      uz: "Hammasini tozalash",
      en: "Reset All",
    },
    productsFound: {
      ru: "товаров",
      uz: "mahsulot",
      en: "products",
    },
  };

  // Nested Categories
  const categories = [
    {
      id: "all",
      name: { ru: "Все товары", uz: "Barcha mahsulotlar", en: "All Products" },
      children: [],
    },
    {
      id: "vitamins",
      name: {
        ru: "Витамины и минералы",
        uz: "Vitamin va minerallar",
        en: "Vitamins & Minerals",
      },
      children: [
        {
          id: "vitamin-c",
          name: { ru: "Витамин C", uz: "Vitamin C", en: "Vitamin C" },
        },
        {
          id: "vitamin-d",
          name: { ru: "Витамин D", uz: "Vitamin D", en: "Vitamin D" },
        },
        {
          id: "vitamin-b",
          name: { ru: "Витамин B", uz: "Vitamin B", en: "Vitamin B" },
        },
        {
          id: "multivitamins",
          name: {
            ru: "Мультивитамины",
            uz: "Multivitaminlar",
            en: "Multivitamins",
          },
        },
        {
          id: "minerals",
          name: { ru: "Минералы", uz: "Minerallar", en: "Minerals" },
        },
      ],
    },
    {
      id: "immunity",
      name: { ru: "Для иммунитета", uz: "Immunitet uchun", en: "For Immunity" },
      children: [
        {
          id: "immune-support",
          name: {
            ru: "Поддержка иммунитета",
            uz: "Immunitet qo'llab-quvvatlash",
            en: "Immune Support",
          },
        },
        {
          id: "antioxidants",
          name: {
            ru: "Антиоксиданты",
            uz: "Antioksidantlar",
            en: "Antioxidants",
          },
        },
        {
          id: "echinacea",
          name: { ru: "Эхинацея", uz: "Exinatseya", en: "Echinacea" },
        },
      ],
    },
    {
      id: "joints",
      name: {
        ru: "Суставы и кости",
        uz: "Bo'g'imlar va suyaklar",
        en: "Joints & Bones",
      },
      children: [
        {
          id: "glucosamine",
          name: { ru: "Глюкозамин", uz: "Glyukozamin", en: "Glucosamine" },
        },
        {
          id: "collagen",
          name: { ru: "Коллаген", uz: "Kollagen", en: "Collagen" },
        },
        {
          id: "calcium",
          name: { ru: "Кальций", uz: "Kaltsiy", en: "Calcium" },
        },
      ],
    },
    {
      id: "heart",
      name: {
        ru: "Сердце и сосуды",
        uz: "Yurak va qon tomirlari",
        en: "Heart & Vessels",
      },
      children: [
        {
          id: "omega-3",
          name: { ru: "Omega-3", uz: "Omega-3", en: "Omega-3" },
        },
        { id: "coq10", name: { ru: "CoQ10", uz: "CoQ10", en: "CoQ10" } },
        {
          id: "magnesium",
          name: { ru: "Магний", uz: "Magniy", en: "Magnesium" },
        },
      ],
    },
    {
      id: "digestion",
      name: { ru: "Пищеварение", uz: "Hazm qilish", en: "Digestion" },
      children: [
        {
          id: "probiotics",
          name: { ru: "Пробиотики", uz: "Probiotiklar", en: "Probiotics" },
        },
        {
          id: "enzymes",
          name: { ru: "Ферменты", uz: "Fermentlar", en: "Enzymes" },
        },
        { id: "fiber", name: { ru: "Клетчатка", uz: "Tolalar", en: "Fiber" } },
      ],
    },
    {
      id: "weight",
      name: { ru: "Снижение веса", uz: "Vazn yo'qotish", en: "Weight Loss" },
      children: [
        {
          id: "fat-burners",
          name: { ru: "Жиросжигатели", uz: "Yog' yoqish", en: "Fat Burners" },
        },
        {
          id: "appetite",
          name: {
            ru: "Контроль аппетита",
            uz: "Ishtaha nazorati",
            en: "Appetite Control",
          },
        },
      ],
    },
    {
      id: "beauty",
      name: { ru: "Красота", uz: "Go'zallik", en: "Beauty" },
      children: [
        {
          id: "skin",
          name: { ru: "Для кожи", uz: "Teri uchun", en: "For Skin" },
        },
        {
          id: "hair",
          name: { ru: "Для волос", uz: "Soch uchun", en: "For Hair" },
        },
        {
          id: "nails",
          name: { ru: "Для ногтей", uz: "Tirnoq uchun", en: "For Nails" },
        },
      ],
    },
    {
      id: "sports",
      name: {
        ru: "Спортивное питание",
        uz: "Sport ovqatlanishi",
        en: "Sports Nutrition",
      },
      children: [
        {
          id: "protein",
          name: { ru: "Протеин", uz: "Protein", en: "Protein" },
        },
        { id: "bcaa", name: { ru: "BCAA", uz: "BCAA", en: "BCAA" } },
        {
          id: "creatine",
          name: { ru: "Креатин", uz: "Kreatin", en: "Creatine" },
        },
      ],
    },
  ];

  // Brands
  const brands = [
    { id: "yaxshi", name: "YAXSHI" },
    { id: "nmn", name: "NMN Sirtumid" },
    { id: "taurin", name: "Таурин Пептоплекс" },
    { id: "muvalex", name: "Мувалекс" },
    { id: "dermozil", name: "Dermozil" },
    { id: "sustaflex", name: "Sustaflex" },
  ];

  // Extended Mock Products (20+ ta)
  const allProducts = [
    {
      id: "1",
      name: {
        ru: "Зубная паста YAXSHI",
        uz: "YAXSHI tish pastasi",
        en: "YAXSHI Toothpaste",
      },
      price: 45000,
      oldPrice: 55000,
      image: "https://placehold.co/300x300/8B5CF6/white?text=Зубная+паста",
      rating: 5,
      reviews: 128,
      badge: { ru: "Новинка", uz: "Yangi", en: "New" },
      description: {
        ru: "С комплексом пребиотиков",
        uz: "Prebiotiklar bilan",
        en: "With prebiotics",
      },
      features: {
        ru: ["Бережно осветляет", "Укрепляет эмаль", "Устраняет запах"],
        uz: ["Oqlaydi", "Emalini mustahkamlaydi", "Hid ketadi"],
        en: ["Whitens gently", "Strengthens enamel", "Eliminates odor"],
      },
      bgColor: "bg-purple-500",
      stock: { ru: "В наличии", uz: "Mavjud", en: "In Stock" },
      inStock: true,
      articleNumber: "YXH-001",
      category: "vitamins",
      brand: "yaxshi",
    },
    {
      id: "2",
      name: {
        ru: "Мувалекс для пищеварения",
        uz: "Muvaleks hazm uchun",
        en: "Muvalex for digestion",
      },
      price: 85000,
      image: "https://placehold.co/300x300/06B6D4/white?text=Мувалекс",
      rating: 4.8,
      reviews: 94,
      badge: { ru: "Хит", uz: "Top", en: "Hit" },
      description: {
        ru: "Улучшает ЖКТ",
        uz: "Oshqozonni yaxshilaydi",
        en: "Improves digestion",
      },
      features: {
        ru: ["Нормализует работу", "Снимает дискомфорт", "Натуральный состав"],
        uz: ["Ishlashni yaxshilaydi", "Noqulaylikni bartaraf etadi", "Tabiiy"],
        en: ["Normalizes function", "Relieves discomfort", "Natural"],
      },
      bgColor: "bg-cyan-500",
      stock: { ru: "В наличии", uz: "Mavjud", en: "In Stock" },
      inStock: true,
      articleNumber: "MVX-002",
      category: "digestion",
      brand: "muvalex",
    },
    {
      id: "3",
      name: { ru: "NMN Sirtumid", uz: "NMN Sirtumid", en: "NMN Sirtumid" },
      price: 180000,
      oldPrice: 220000,
      image: "https://placehold.co/300x300/10B981/white?text=NMN",
      rating: 4.9,
      reviews: 156,
      description: { ru: "Антивозрастной", uz: "Qarshilik", en: "Anti-aging" },
      features: {
        ru: ["Замедляет старение", "Повышает энергию", "Улучшает метаболизм"],
        uz: [
          "Qarishni sekinlashtiradi",
          "Energiyani oshiradi",
          "Metabolizmni yaxshilaydi",
        ],
        en: ["Slows aging", "Increases energy", "Improves metabolism"],
      },
      bgColor: "bg-emerald-500",
      stock: { ru: "В наличии", uz: "Mavjud", en: "In Stock" },
      inStock: true,
      articleNumber: "NMN-003",
      category: "immunity",
      brand: "nmn",
    },
    // Add 17 more products...
    ...Array.from({ length: 17 }, (_, i) => ({
      id: `${i + 4}`,
      name: {
        ru: `Продукт ${i + 4}`,
        uz: `Mahsulot ${i + 4}`,
        en: `Product ${i + 4}`,
      },
      price: Math.floor(Math.random() * 200000) + 50000,
      oldPrice:
        Math.random() > 0.5
          ? Math.floor(Math.random() * 250000) + 100000
          : undefined,
      image: `https://placehold.co/300x300/${["8B5CF6", "06B6D4", "10B981", "F59E0B", "F472B6", "3B82F6"][i % 6]}/white?text=Продукт+${i + 4}`,
      rating: Math.floor(Math.random() * 2) + 4,
      reviews: Math.floor(Math.random() * 200) + 50,
      badge:
        Math.random() > 0.7
          ? { ru: "Скидка", uz: "Chegirma", en: "Sale" }
          : undefined,
      description: {
        ru: "Описание товара",
        uz: "Mahsulot tavsifi",
        en: "Product description",
      },
      features: {
        ru: ["Преимущество 1", "Преимущество 2", "Преимущество 3"],
        uz: ["Afzallik 1", "Afzallik 2", "Afzallik 3"],
        en: ["Benefit 1", "Benefit 2", "Benefit 3"],
      },
      bgColor: [
        "bg-purple-500",
        "bg-cyan-500",
        "bg-emerald-500",
        "bg-amber-500",
        "bg-pink-500",
        "bg-blue-500",
      ][i % 6],
      stock: { ru: "В наличии", uz: "Mavjud", en: "In Stock" },
      inStock: Math.random() > 0.2,
      articleNumber: `PRD-${String(i + 4).padStart(3, "0")}`,
      category: [
        "vitamins",
        "immunity",
        "joints",
        "heart",
        "digestion",
        "weight",
        "beauty",
        "sports",
      ][i % 8],
      brand: ["yaxshi", "nmn", "taurin", "muvalex", "dermozil", "sustaflex"][
        i % 6
      ],
    })),
  ];

  // Toggle category expansion
  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId],
    );
  };

  // Toggle brand selection
  const toggleBrand = (brandId: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brandId)
        ? prev.filter((id) => id !== brandId)
        : [...prev, brandId],
    );
  };

  // Filter products
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name[locale]
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesRating = product.rating >= minRating;
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesStock = !inStockOnly || product.inStock;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesBrand &&
      matchesRating &&
      matchesPrice &&
      matchesStock
    );
  });

  const handleAddToCart = (product: (typeof allProducts)[0]) => {
    addItem({
      id: product.id,
      name: product.name[locale],
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  };

  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedBrands([]);
    setMinRating(0);
    setPriceRange([0, 500000]);
    setInStockOnly(false);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-black text-gray-900">
            {content.title[locale]}
          </h1>
        </div>

        {/* Search */}
        <div className="mb-6 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={content.search[locale]}
              className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-10 pr-4 text-gray-900 focus:border-gray-900 focus:outline-none"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 font-semibold md:hidden"
          >
            <SlidersHorizontal className="h-5 w-5" />
          </button>
        </div>

        <div className="flex gap-6">
          {/* Sidebar */}
          <div
            className={`${showFilters ? "block" : "hidden"} md:block w-full md:w-80 flex-shrink-0`}
          >
            <div className="sticky top-24 space-y-6">
              {/* Filter Header */}
              <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4">
                <h2 className="text-lg font-black">
                  {content.filters[locale]}
                </h2>
                <button
                  onClick={resetFilters}
                  className="text-sm font-semibold text-purple-600 hover:text-purple-700"
                >
                  {content.reset[locale]}
                </button>
              </div>

              {/* Categories */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
                  {content.category[locale]}
                </h3>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <div key={cat.id}>
                      <button
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          if (cat.children.length > 0) toggleCategory(cat.id);
                        }}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                          selectedCategory === cat.id
                            ? "bg-purple-600 text-white"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <span>{cat.name[locale]}</span>
                        {cat.children.length > 0 &&
                          (expandedCategories.includes(cat.id) ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          ))}
                      </button>
                      {cat.children.length > 0 &&
                        expandedCategories.includes(cat.id) && (
                          <div className="ml-4 mt-1 space-y-1">
                            {cat.children.map((child) => (
                              <button
                                key={child.id}
                                onClick={() => setSelectedCategory(child.id)}
                                className={`block w-full rounded-lg px-3 py-1.5 text-left text-xs transition-colors ${
                                  selectedCategory === child.id
                                    ? "bg-purple-100 font-semibold text-purple-700"
                                    : "text-gray-600 hover:bg-gray-50"
                                }`}
                              >
                                {child.name[locale]}
                              </button>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
                  {content.brand[locale]}
                </h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label
                      key={brand.id}
                      className="flex cursor-pointer items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand.id)}
                        onChange={() => toggleBrand(brand.id)}
                        className="h-4 w-4 rounded border-gray-300 text-purple-600"
                      />
                      <span className="text-sm text-gray-700">
                        {brand.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
                  {content.price[locale]}
                </h3>
                <input
                  type="range"
                  min="0"
                  max="500000"
                  step="10000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="mt-2 flex justify-between text-sm text-gray-600">
                  <span>0</span>
                  <span>{priceRange[1].toLocaleString()} so'm</span>
                </div>
              </div>

              {/* Rating */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
                  {content.rating[locale]}
                </h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1, 0].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setMinRating(rating)}
                      className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 transition-colors ${
                        minRating === rating
                          ? "bg-purple-100 text-purple-700"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm">
                        {rating === 0 ? content.rating[locale] : `${rating}+`}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
                  {content.availability[locale]}
                </h3>
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-purple-600"
                  />
                  <span className="text-sm text-gray-700">
                    {content.inStock[locale]}
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onAddToCart={() => handleAddToCart(product)}
                  locale={locale}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-xl font-semibold text-gray-400">
                  {locale === "ru" && "Товары не найдены"}
                  {locale === "uz" && "Mahsulotlar topilmadi"}
                  {locale === "en" && "No products found"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
