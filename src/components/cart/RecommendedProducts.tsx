"use client";

import ProductCard from "@/components/product/ProductCard";
import { useState } from "react";
import Snackbar from "@/components/ui/Snackbar";

interface RecommendedProductsProps {
  products: any[];
  onAddToCart: (product: any) => void;
  locale: "ru" | "uz" | "en";
}

export default function RecommendedProducts({
  products,
  onAddToCart,
  locale,
}: RecommendedProductsProps) {
  const [showSnackbar, setShowSnackbar] = useState<string | null>(null);

  const title = {
    ru: "С этим товаром покупают",
    uz: "Shu mahsulot bilan sotib oladilar",
    en: "Frequently bought together",
  };

  const snackbarMessage = {
    ru: "Товар добавлен в корзину",
    uz: "Mahsulot savatga qo'shildi",
    en: "Added to cart",
  };

  const handleAddToCart = async (product: any) => {
    // 300ms delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    onAddToCart(product);
    setShowSnackbar(snackbarMessage[locale]);
  };

  return (
    <>
      <div className="mt-16">
        <h2 className="mb-8 text-3xl font-black text-gray-900">
          {title[locale]}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={() => handleAddToCart(product)}
              locale={locale}
            />
          ))}
        </div>
      </div>

      {showSnackbar && (
        <Snackbar
          type="cart"
          message={showSnackbar}
          onClose={() => setShowSnackbar(null)}
        />
      )}
    </>
  );
}
