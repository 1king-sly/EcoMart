"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CategoryTabs() {
  return (
    <div className="mb-8">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="all">All Products</TabsTrigger>
          <TabsTrigger value="electronics">Electronics</TabsTrigger>
          <TabsTrigger value="clothing">Clothing</TabsTrigger>
          <TabsTrigger value="books">Books</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}