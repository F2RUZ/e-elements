"use client";

import { useCart } from "@/hooks/useCart";
import { useLanguage } from "@/context/LanguageContext";
import EmptyCart from "@/components/cart/EmptyCart";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import DeliveryOptions from "@/components/cart/DeliveryOptions";
import RecommendedProducts from "@/components/cart/RecommendedProducts";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems, addItem } =
    useCart();
  const { locale } = useLanguage();

  const content = {
    title: {
      ru: "Корзина",
      uz: "Savatingiz",
      en: "Your Cart",
    },
    items: {
      ru: "товаров",
      uz: "mahsulot",
      en: "items",
    },
    selectAll: {
      ru: "Выбрать все",
      uz: "Hammasini tanlash",
      en: "Select All",
    },
  };

  // Mock recommended products (8 ta)
  const recommendedProducts = [
    {
      id: "rec-1",
      name: {
        ru: "Витамин C 1000mg",
        uz: "Vitamin C 1000mg",
        en: "Vitamin C 1000mg",
      },
      price: 120000,
      image: "https://placehold.co/300x300/10B981/white?text=Vitamin+C",
      rating: 4.8,
      reviews: 203,
      bgColor: "bg-emerald-500",
      features: {
        ru: ["Укрепляет иммунитет", "Антиоксидант", "1000мг дозировка"],
        uz: ["Immunitetni mustahkamlaydi", "Antioksidant", "1000mg dozalash"],
        en: ["Strengthens immunity", "Antioxidant", "1000mg dosage"],
      },
      stock: { ru: "В наличии", uz: "Mavjud", en: "In Stock" },
      articleNumber: "VTC-001",
    },
    {
      id: "rec-2",
      name: {
        ru: "Omega-3 Fish Oil",
        uz: "Omega-3 Baliq yog'i",
        en: "Omega-3 Fish Oil",
      },
      price: 180000,
      image: "https://placehold.co/300x300/3B82F6/white?text=Omega-3",
      rating: 4.9,
      reviews: 167,
      bgColor: "bg-blue-500",
      features: {
        ru: ["Для сердца и мозга", "EPA и DHA", "Очищенное масло"],
        uz: ["Yurak va miya uchun", "EPA va DHA", "Tozalangan yog'"],
        en: ["For heart and brain", "EPA and DHA", "Purified oil"],
      },
      stock: { ru: "В наличии", uz: "Mavjud", en: "In Stock" },
      articleNumber: "OMG-002",
    },
    {
      id: "rec-3",
      name: {
        ru: "Магний B6",
        uz: "Magniy B6",
        en: "Magnesium B6",
      },
      price: 95000,
      image: "https://placehold.co/300x300/8B5CF6/white?text=Magnesium",
      rating: 4.7,
      reviews: 145,
      bgColor: "bg-purple-500",
      features: {
        ru: ["Против стресса", "Улучшает сон", "Для нервной системы"],
        uz: ["Stressga qarshi", "Uyquni yaxshilaydi", "Nerv tizimi uchun"],
        en: ["Anti-stress", "Improves sleep", "For nervous system"],
      },
      stock: { ru: "В наличии", uz: "Mavjud", en: "In Stock" },
      articleNumber: "MAG-003",
    },
    {
      id: "rec-4",
      name: {
        ru: "Мультивитамины",
        uz: "Multivitaminlar",
        en: "Multivitamins",
      },
      price: 150000,
      oldPrice: 180000,
      image: "https://placehold.co/300x300/F59E0B/white?text=Multivitamin",
      rating: 4.6,
      reviews: 189,
      badge: { ru: "Скидка", uz: "Chegirma", en: "Sale" },
      bgColor: "bg-amber-500",
      features: {
        ru: ["Полный комплекс", "30 витаминов", "На месяц"],
        uz: ["To'liq kompleks", "30 vitamin", "Bir oylik"],
        en: ["Complete complex", "30 vitamins", "Monthly supply"],
      },
      stock: { ru: "В наличии", uz: "Mavjud", en: "In Stock" },
      articleNumber: "MLT-004",
    },
    {
      id: "rec-5",
      name: {
        ru: "Коллаген + гиалуроновая кислота",
        uz: "Kollagen + gialuronik kislota",
        en: "Collagen + Hyaluronic Acid",
      },
      price: 210000,
      image: "https://placehold.co/300x300/EC4899/white?text=Collagen",
      rating: 4.9,
      reviews: 234,
      bgColor: "bg-pink-500",
      features: {
        ru: ["Для кожи", "Эластичность", "Против морщин"],
        uz: ["Teri uchun", "Elastiklik", "Ajinlarga qarshi"],
        en: ["For skin", "Elasticity", "Anti-wrinkle"],
      },
      stock: { ru: "В наличии", uz: "Mavjud", en: "In Stock" },
      articleNumber: "COL-005",
    },
    {
      id: "rec-6",
      name: {
        ru: "Витамин D3 5000 МЕ",
        uz: "Vitamin D3 5000 ME",
        en: "Vitamin D3 5000 IU",
      },
      price: 95000,
      image: "https://placehold.co/300x300/F97316/white?text=Vitamin+D3",
      rating: 4.8,
      reviews: 198,
      bgColor: "bg-orange-500",
      features: {
        ru: ["Для костей", "Поддержка иммунитета", "Высокая дозировка"],
        uz: ["Suyaklar uchun", "Immunitet qo'llab-quvvatlash", "Yuqori doza"],
        en: ["For bones", "Immune support", "High dosage"],
      },
      stock: { ru: "В наличии", uz: "Mavjud", en: "In Stock" },
      articleNumber: "VTD-006",
    },
    {
      id: "rec-7",
      name: {
        ru: "Цинк + Селен",
        uz: "Rux + Selen",
        en: "Zinc + Selenium",
      },
      price: 78000,
      image: "https://placehold.co/300x300/06B6D4/white?text=Zinc",
      rating: 4.7,
      reviews: 156,
      bgColor: "bg-cyan-500",
      features: {
        ru: ["Для иммунитета", "Антиоксидант", "Для волос и ногтей"],
        uz: ["Immunitet uchun", "Antioksidant", "Soch va tirnoq uchun"],
        en: ["For immunity", "Antioxidant", "For hair and nails"],
      },
      stock: { ru: "В наличии", uz: "Mavjud", en: "In Stock" },
      articleNumber: "ZNC-007",
    },
    {
      id: "rec-8",
      name: {
        ru: "Железо + Витамин C",
        uz: "Temir + Vitamin C",
        en: "Iron + Vitamin C",
      },
      price: 89000,
      image: "https://placehold.co/300x300/EF4444/white?text=Iron",
      rating: 4.6,
      reviews: 134,
      bgColor: "bg-red-500",
      features: {
        ru: ["От анемии", "Повышает энергию", "Легко усваивается"],
        uz: ["Kamqonlikdan", "Energiyani oshiradi", "Oson o'zlashadi"],
        en: ["Anti-anemia", "Increases energy", "Easy absorption"],
      },
      stock: { ru: "В наличии", uz: "Mavjud", en: "In Stock" },
      articleNumber: "IRN-008",
    },
  ];

  const handleAddRecommended = (product: (typeof recommendedProducts)[0]) => {
    addItem({
      id: product.id,
      name: product.name[locale],
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  };

  // Calculate discount
  const totalDiscount = items.reduce((sum, item) => {
    return sum + ((item.oldPrice || 0) - item.price) * item.quantity;
  }, 0);

  // Empty cart state
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 lg:px-16">
          <EmptyCart locale={locale} />

          <RecommendedProducts
            products={recommendedProducts}
            onAddToCart={handleAddRecommended}
            locale={locale}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-black text-gray-900">
            {content.title[locale]},{" "}
            <span className="text-gray-500">
              {totalItems} {content.items[locale]}
            </span>
          </h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left - Cart Items */}
          <div className="space-y-4 lg:col-span-2">
            {/* Select All Checkbox */}
            <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-6 py-4">
              <input
                type="checkbox"
                id="select-all"
                className="h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-2 focus:ring-purple-500"
              />
              <label
                htmlFor="select-all"
                className="cursor-pointer text-sm font-semibold text-gray-900"
              >
                {content.selectAll[locale]}
              </label>
            </div>

            {/* Delivery Options */}
            <DeliveryOptions locale={locale} />

            {/* Cart Items */}
            <div className="space-y-3">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  quantity={item.quantity}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                  locale={locale}
                />
              ))}
            </div>
          </div>

          {/* Right - Order Summary */}
          <div className="lg:col-span-1">
            <CartSummary
              totalItems={totalItems}
              totalPrice={totalPrice}
              totalDiscount={totalDiscount}
              locale={locale}
            />
          </div>
        </div>

        {/* Recommended Products */}
        <RecommendedProducts
          products={recommendedProducts}
          onAddToCart={handleAddRecommended}
          locale={locale}
        />
      </div>
    </div>
  );
}
