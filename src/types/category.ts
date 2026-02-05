// src/types/category.ts

export interface Category {
  id: string;
  name: {
    uz: string;
    ru: string;
    en: string;
  };
  slug: string;
  description: {
    uz: string;
    ru: string;
    en: string;
  };
  icon: string;
  image: string;
  color: string;
  productCount: number;
  featured: boolean;
  parent?: string;
  subcategories?: Category[];
}

export interface CategoryGroup {
  id: string;
  name: {
    uz: string;
    ru: string;
    en: string;
  };
  categories: Category[];
}
