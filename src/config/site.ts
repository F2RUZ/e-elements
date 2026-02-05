export const siteConfig = {
  name: "E-Elements",
  description: "Biologik faol qo'shimchalar (BFQ) onlayn do'koni",
  url: "https://e-elements.uz",
  ogImage: "https://e-elements.uz/og.jpg",
  links: {
    telegram: "https://t.me/eelements",
    instagram: "https://instagram.com/eelements",
    facebook: "https://facebook.com/eelements",
  },
  contact: {
    phone: "+998 90 123 45 67",
    email: "info@e-elements.uz",
    address: "Toshkent, O'zbekiston",
  },
  features: {
    referralBonus: 15, // 15% chegirma
    referralTarget: 10, // 10 ta faol referal
  },
};

export type SiteConfig = typeof siteConfig;
