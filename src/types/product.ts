// src/types/product.ts

export interface Product {
  id: string;
  name: {
    uz: string;
    ru: string;
    en: string;
  };
  description: {
    uz: string;
    ru: string;
    en: string;
  };
  shortDescription: {
    uz: string;
    ru: string;
    en: string;
  };
  price: number;
  originalPrice?: number;
  discount?: number;
  images: string[];
  category: string;
  categorySlug: string;
  brand: string;
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviewCount: number;
  tags: string[];
  featured: boolean;
  bestseller: boolean;
  isNew: boolean;
  prescription: boolean;
  manufacturer: {
    uz: string;
    ru: string;
    en: string;
  };
  country: {
    uz: string;
    ru: string;
    en: string;
  };
  expiryDate?: string;
  dosage?: {
    uz: string;
    ru: string;
    en: string;
  };
  form?: {
    uz: string;
    ru: string;
    en: string;
  };
  activeIngredient?: {
    uz: string;
    ru: string;
    en: string;
  };
  sideEffects?: {
    uz: string[];
    ru: string[];
    en: string[];
  };
  contraindications?: {
    uz: string[];
    ru: string[];
    en: string[];
  };
  usage?: {
    uz: string;
    ru: string;
    en: string;
  };
  storage?: {
    uz: string;
    ru: string;
    en: string;
  };
}

export interface ProductReview {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  createdAt: string;
  helpful: number;
  images?: string[];
}

export interface ProductFilter {
  categories?: string[];
  brands?: string[];
  priceRange?: {
    min: number;
    max: number;
  };
  rating?: number;
  inStock?: boolean;
  prescription?: boolean;
  tags?: string[];
}

export type SortOption =
  | "popular"
  | "price-asc"
  | "price-desc"
  | "rating"
  | "newest";
