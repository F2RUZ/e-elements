// src/types/cart.ts

export interface CartItem {
  id: string;
  productId: string;
  name: {
    uz: string;
    ru: string;
    en: string;
  };
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  inStock: boolean;
  maxQuantity: number;
  prescription: boolean;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  discount: number;
  promoCode?: string;
  promoDiscount?: number;
  deliveryFee: number;
  total: number;
  oldPrice?: number; // 👈 MUHIM
}

export interface PromoCode {
  code: string;
  discountType: "percentage" | "fixed";
  discountValue: number;
  minOrderAmount?: number;
  expiryDate?: string;
  usageLimit?: number;
  usedCount?: number;
}
