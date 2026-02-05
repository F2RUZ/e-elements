import HeroSection from "@/components/home/HeroSection";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroSwiper from "@/components/home/HeroSwiper";
import BenefitsBanner from "@/components/home/BenefitsBanner";
import CategoriesSection from "@/components/home/CategoriesSection";
import BlogSection from "@/components/home/BlogSection";
import ReferralBanner from "@/components/home/ReferralBanner";
import BenefitsSection from "@/components/home/BenefitsSection";
import ImmuneProductsSection from "@/components/home/ImmuneProductsSection";
import CardiovascularProductsSection from "@/components/home/ardiovascularProductsSection";
import MensHealthSection from "@/components/home/MensHealthSection";
import WomensHealthSection from "@/components/home/WomensHealthSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSwiper />
      <BenefitsBanner />
      <CategoriesSection />

      {/* <HeroSection /> */}
      <CategoryGrid />
      <FeaturedProducts />
      <ImmuneProductsSection />
      <CardiovascularProductsSection />
      <MensHealthSection />
      <WomensHealthSection />
      {/* <ReferralBanner /> */}
      {/* <BenefitsSection /> */}
      <BlogSection />
    </div>
  );
}
