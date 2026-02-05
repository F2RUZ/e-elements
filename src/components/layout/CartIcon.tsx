"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";

export default function CartIcon() {
  const { items, totalItems } = useCart();

  return (
    <Link
      href="/cart"
      className="relative rounded-lg p-2.5 text-gray-700 transition-colors hover:bg-gray-100"
      aria-label="Корзина"
    >
      <ShoppingCart className="h-5 w-5" />
      {totalItems > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">
          {totalItems > 9 ? "9+" : totalItems}
        </span>
      )}
    </Link>
  );
}
