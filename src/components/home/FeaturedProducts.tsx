"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/hooks/useCart";
import ProductCard from "@/components/product/ProductCard";

export default function FeaturedProducts() {
  const { locale } = useLanguage();
  const { addItem } = useCart();

  const title = {
    ru: "Рекомендуемые товары",
    uz: "Tavsiya etiladigan mahsulotlar",
    en: "Featured Products",
  };

  const viewAllText = {
    ru: "Смотреть все →",
    uz: "Hammasini ko'rish →",
    en: "View All →",
  };

  const products = [
    {
      id: "1",
      name: {
        ru: "Зубная паста для чувствительных зубов",
        uz: "Sezgir tishlar uchun tish pastasi",
        en: "Toothpaste for Sensitive Teeth",
      },
      description: {
        ru: "С комплексом пребиотиков",
        uz: "Prebiotiklar kompleksi bilan",
        en: "With prebiotic complex",
      },
      price: 45000,
      image: "https://placehold.co/300x300/8B5CF6/white?text=Toothpaste",
      rating: 5,
      reviews: 128,
      badge: {
        ru: "Новинка",
        uz: "Yangilik",
        en: "New",
      },
      bgColor: "bg-purple-500",
      features: {
        ru: [
          "Бережно осветляет, возвращая природный блеск",
          "Укрепляет эмаль и снижает чувствительность",
          "Заботится о здоровье десен и баланс микрофлоры",
          "Обеспечивает свежесть дыхания",
        ],
        uz: [
          "Tabiiy yorqinlikni qaytaradi",
          "Emalini mustahkamlaydi",
          "Og'iz bo'shlig'i salomatligini saqlaydi",
          "Nafas tetikligini ta'minlaydi",
        ],
        en: [
          "Gently whitens, restoring natural shine",
          "Strengthens enamel and reduces sensitivity",
          "Cares for gum health and microflora balance",
          "Ensures fresh breath",
        ],
      },
      stock: {
        ru: "Много",
        uz: "Ko'p",
        en: "In Stock",
      },
      articleNumber: "81261",
    },
    {
      id: "2",
      name: {
        ru: "Мувалекс",
        uz: "Muvaleks",
        en: "Muvalex",
      },
      description: {
        ru: "Для улучшения пищеварения",
        uz: "Ovqat hazm qilishni yaxshilash uchun",
        en: "For improved digestion",
      },
      price: 85000,
      image: "https://placehold.co/300x300/06B6D4/white?text=Muvalex",
      rating: 4.8,
      reviews: 94,
      badge: {
        ru: "Хит продаж",
        uz: "Ommabop",
        en: "Bestseller",
      },
      bgColor: "bg-cyan-500",
      features: {
        ru: [
          "Нормализует работу ЖКТ",
          "Снимает дискомфорт",
          "Натуральный состав",
          "Улучшает метаболизм",
        ],
        uz: [
          "Oshqozon-ichak faoliyatini me'yorlashtiradi",
          "Noqulaylikni bartaraf etadi",
          "Tabiiy tarkib",
          "Metabolizmni yaxshilaydi",
        ],
        en: [
          "Normalizes digestive function",
          "Relieves discomfort",
          "Natural composition",
          "Improves metabolism",
        ],
      },
      stock: {
        ru: "Много",
        uz: "Ko'p",
        en: "In Stock",
      },
      articleNumber: "82456",
    },
    {
      id: "3",
      name: {
        ru: "NMN Sirtumid",
        uz: "NMN Sirtumid",
        en: "NMN Sirtumid",
      },
      description: {
        ru: "Антивозрастной комплекс",
        uz: "Qarshilik kompleksi",
        en: "Anti-aging complex",
      },
      price: 180000,
      oldPrice: 220000,
      image: "https://placehold.co/300x300/10B981/white?text=NMN",
      rating: 4.9,
      reviews: 156,
      bgColor: "bg-emerald-500",
      features: {
        ru: [
          "Замедляет процессы старения",
          "Повышает уровень энергии",
          "Улучшает клеточный метаболизм",
          "Поддерживает здоровье мозга",
        ],
        uz: [
          "Qarish jarayonlarini sekinlashtiradi",
          "Energiya darajasini oshiradi",
          "Hujayra metabolizmini yaxshilaydi",
          "Miya salomatligini qo'llab-quvvatlaydi",
        ],
        en: [
          "Slows down aging processes",
          "Increases energy levels",
          "Improves cellular metabolism",
          "Supports brain health",
        ],
      },
      stock: {
        ru: "Ограничено",
        uz: "Cheklangan",
        en: "Limited",
      },
      articleNumber: "83901",
    },
    {
      id: "4",
      name: {
        ru: "Таурин Пептоплекс",
        uz: "Taurin Peptopleks",
        en: "Taurine Peptoplex",
      },
      description: {
        ru: "Для энергии и выносливости",
        uz: "Energiya va chidamlilik uchun",
        en: "For energy and endurance",
      },
      price: 75000,
      image: "https://placehold.co/300x300/F59E0B/white?text=Taurine",
      rating: 4.7,
      reviews: 82,
      badge: {
        ru: "Скидка -20%",
        uz: "Chegirma -20%",
        en: "Sale -20%",
      },
      bgColor: "bg-amber-500",
      features: {
        ru: [
          "Повышает физическую энергию",
          "Улучшает работу сердца",
          "Снижает усталость",
          "Поддерживает нервную систему",
        ],
        uz: [
          "Jismoniy energiyani oshiradi",
          "Yurak faoliyatini yaxshilaydi",
          "Charchoqni kamaytiradi",
          "Nerv tizimini qo'llab-quvvatlaydi",
        ],
        en: [
          "Increases physical energy",
          "Improves heart function",
          "Reduces fatigue",
          "Supports nervous system",
        ],
      },
      stock: {
        ru: "Много",
        uz: "Ko'p",
        en: "In Stock",
      },
      articleNumber: "84123",
    },
    {
      id: "5",
      name: {
        ru: "Омега-3 Премиум",
        uz: "Omega-3 Premium",
        en: "Omega-3 Premium",
      },
      description: {
        ru: "Для сердца и мозга",
        uz: "Yurak va miya uchun",
        en: "For heart and brain",
      },
      price: 95000,
      image: "https://placehold.co/300x300/3B82F6/white?text=Omega-3",
      rating: 4.9,
      reviews: 210,
      bgColor: "bg-blue-500",
      features: {
        ru: [
          "Укрепляет сердечно-сосудистую систему",
          "Улучшает работу мозга",
          "Снижает воспаление",
          "Высокая концентрация EPA/DHA",
        ],
        uz: [
          "Yurak-qon tomir tizimini mustahkamlaydi",
          "Miya faoliyatini yaxshilaydi",
          "Yallig'lanishni kamaytiradi",
          "Yuqori EPA/DHA kontsentratsiyasi",
        ],
        en: [
          "Strengthens cardiovascular system",
          "Improves brain function",
          "Reduces inflammation",
          "High EPA/DHA concentration",
        ],
      },
      stock: {
        ru: "Много",
        uz: "Ko'p",
        en: "In Stock",
      },
      articleNumber: "85234",
    },
    {
      id: "6",
      name: {
        ru: "Витамин D3 + K2",
        uz: "Vitamin D3 + K2",
        en: "Vitamin D3 + K2",
      },
      description: {
        ru: "Для костей и иммунитета",
        uz: "Suyak va immunitet uchun",
        en: "For bones and immunity",
      },
      price: 65000,
      oldPrice: 80000,
      image: "https://placehold.co/300x300/EF4444/white?text=Vitamin+D3",
      rating: 4.8,
      reviews: 145,
      badge: {
        ru: "Акция",
        uz: "Aksiya",
        en: "Promotion",
      },
      bgColor: "bg-red-500",
      features: {
        ru: [
          "Укрепляет костную ткань",
          "Поддерживает иммунитет",
          "Улучшает усвоение кальция",
          "Синергия D3 и K2",
        ],
        uz: [
          "Suyak to'qimasini mustahkamlaydi",
          "Immunitetni qo'llab-quvvatlaydi",
          "Kaltsiy so'rilishini yaxshilaydi",
          "D3 va K2 sinergiyasi",
        ],
        en: [
          "Strengthens bone tissue",
          "Supports immunity",
          "Improves calcium absorption",
          "Synergy of D3 and K2",
        ],
      },
      stock: {
        ru: "Много",
        uz: "Ko'p",
        en: "In Stock",
      },
      articleNumber: "86789",
    },
    {
      id: "7",
      name: {
        ru: "Коллаген Плюс",
        uz: "Kollagen Plus",
        en: "Collagen Plus",
      },
      description: {
        ru: "Для кожи, волос и ногтей",
        uz: "Teri, soch va tirnoqlar uchun",
        en: "For skin, hair and nails",
      },
      price: 120000,
      image: "https://placehold.co/300x300/EC4899/white?text=Collagen",
      rating: 4.9,
      reviews: 189,
      bgColor: "bg-pink-500",
      features: {
        ru: [
          "Улучшает эластичность кожи",
          "Укрепляет волосы и ногти",
          "Поддерживает суставы",
          "Гидролизованный коллаген",
        ],
        uz: [
          "Teri elastikligini yaxshilaydi",
          "Soch va tirnoqlarni mustahkamlaydi",
          "Bo'g'imlarni qo'llab-quvvatlaydi",
          "Gidrolizlangan kollagen",
        ],
        en: [
          "Improves skin elasticity",
          "Strengthens hair and nails",
          "Supports joints",
          "Hydrolyzed collagen",
        ],
      },
      stock: {
        ru: "Много",
        uz: "Ko'p",
        en: "In Stock",
      },
      articleNumber: "87456",
    },
    {
      id: "8",
      name: {
        ru: "Магний В6 Форте",
        uz: "Magniy B6 Forte",
        en: "Magnesium B6 Forte",
      },
      description: {
        ru: "Для нервной системы и мышц",
        uz: "Nerv tizimi va mushaklar uchun",
        en: "For nervous system and muscles",
      },
      price: 55000,
      image: "https://placehold.co/300x300/8B5CF6/white?text=Magnesium",
      rating: 4.7,
      reviews: 167,
      bgColor: "bg-violet-500",
      features: {
        ru: [
          "Снижает стресс и усталость",
          "Улучшает сон",
          "Поддерживает работу мышц",
          "Повышенная биодоступность",
        ],
        uz: [
          "Stress va charchoqni kamaytiradi",
          "Uyquni yaxshilaydi",
          "Mushak faoliyatini qo'llab-quvvatlaydi",
          "Yuqori bioavailability",
        ],
        en: [
          "Reduces stress and fatigue",
          "Improves sleep",
          "Supports muscle function",
          "High bioavailability",
        ],
      },
      stock: {
        ru: "Много",
        uz: "Ko'p",
        en: "In Stock",
      },
      articleNumber: "88901",
    },
  ];

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name[locale],
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  };

  return (
    <section className="bg-gray-50 py-16">
      {/* Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-xl font-black text-gray-900 md:text-2xl text-start">
            {title[locale]}
          </h2>
          <Link
            href="/products"
            className="text-lg font-semibold text-[#E4A11B] transition-colors hover:text-[#C58916]"
          >
            {viewAllText[locale]}
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              locale={locale}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
