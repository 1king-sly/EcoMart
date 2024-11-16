import { CategoryList } from "@/components/categories/category-list";
import { CategoryHeader } from "@/components/categories/category-header";

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CategoryHeader />
      <CategoryList />
    </div>
  );
}