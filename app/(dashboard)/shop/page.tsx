import { ProductGrid } from "@/components/shop/product-grid";
import { ProductFilters } from "@/components/shop/product-filters";
import { ProductSort } from "@/components/shop/product-sort";

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shop</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-64">
          <ProductFilters />
        </div>
        <div className="flex-1">
          <div className="mb-6">
            <ProductSort />
          </div>
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}