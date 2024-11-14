import { ProductGrid } from '@/components/product-grid';
import { CategoryTabs } from '@/components/category-tabs';
import { HeroSection } from '@/components/hero-section';
import { FeaturedProducts } from '@/components/featured-products';

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <HeroSection />
      <div className="container px-4 py-8 mx-auto">
        <CategoryTabs />
        <FeaturedProducts />
        <ProductGrid />
      </div>
    </div>
  );
}