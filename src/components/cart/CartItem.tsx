"use client";

import { Minus, Plus, Trash2, Loader2 } from "lucide-react";
import { useState } from "react";
import Snackbar from "@/components/ui/Snackbar";

interface CartItemProps {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
  locale: "ru" | "uz" | "en";
}

export default function CartItem({
  id,
  name,
  image,
  price,
  quantity,
  onUpdateQuantity,
  onRemove,
  locale,
}: CartItemProps) {
  const [showSnackbar, setShowSnackbar] = useState<string | null>(null);
  const [isRemoving, setIsRemoving] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
  };

  const handleRemove = async () => {
    setIsRemoving(true);

    // 300ms loading
    await new Promise((resolve) => setTimeout(resolve, 300));

    onRemove(id);

    const messages = {
      ru: "Товар удален из корзины",
      uz: "Mahsulot savatdan o'chirildi",
      en: "Item removed from cart",
    };

    setShowSnackbar(messages[locale]);
    setIsRemoving(false);
  };

  const handleUpdateQuantity = async (newQuantity: number) => {
    setIsUpdating(true);

    // 300ms loading
    await new Promise((resolve) => setTimeout(resolve, 300));

    onUpdateQuantity(id, newQuantity);
    setIsUpdating(false);
  };

  return (
    <>
      <div
        className={`flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-opacity ${isRemoving ? "opacity-50" : ""}`}
      >
        <input
          type="checkbox"
          defaultChecked
          className="mt-1 h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-2 focus:ring-purple-500"
        />

        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h3 className="font-bold text-gray-900 line-clamp-1">{name}</h3>
            <p className="mt-1 text-sm text-gray-500">
              {locale === "ru" && "Продавец: YAXSHI"}
              {locale === "uz" && "Sotuvchi: YAXSHI"}
              {locale === "en" && "Seller: YAXSHI"}
            </p>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleUpdateQuantity(Math.max(1, quantity - 1))}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={quantity <= 1 || isUpdating}
              >
                {isUpdating ? (
                  <Loader2 className="h-4 w-4 animate-spin text-gray-600" />
                ) : (
                  <Minus className="h-4 w-4 text-gray-600" />
                )}
              </button>
              <span className="w-8 text-center font-bold text-gray-900">
                {quantity}
              </span>
              <button
                onClick={() => handleUpdateQuantity(quantity + 1)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={isUpdating}
              >
                {isUpdating ? (
                  <Loader2 className="h-4 w-4 animate-spin text-gray-600" />
                ) : (
                  <Plus className="h-4 w-4 text-gray-600" />
                )}
              </button>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xl font-black text-gray-900">
                {formatPrice(price * quantity)}
              </span>
              <button
                onClick={handleRemove}
                className="text-gray-400 transition-colors hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={isRemoving}
              >
                {isRemoving ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Trash2 className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
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
