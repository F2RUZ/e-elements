"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

export default function WishlistIcon() {
  // Bu hook bilan wishlist itemlarini olish mumkin
  const wishlistCount = 0; // TODO: useWishlist hook dan olish

  return (
    <Link
      href="/account/wishlist"
      className="relative rounded-lg p-2.5 text-gray-700 transition-colors hover:bg-gray-100"
      aria-label="Избранное"
    >
      <Heart className="h-5 w-5" />
      {wishlistCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
          {wishlistCount > 9 ? "9+" : wishlistCount}
        </span>
      )}
    </Link>
  );
}
