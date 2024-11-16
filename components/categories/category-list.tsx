"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CATEGORIES = [
  {
    id: 1,
    name: "Electronics",
    description: "Latest gadgets and electronic devices",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661",
    productCount: 150,
  },
  {
    id: 2,
    name: "Clothing",
    description: "Fashion and apparel for all styles",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    productCount: 300,
  },
  {
    id: 3,
    name: "Books",
    description: "Wide selection of books and publications",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
    productCount: 200,
  },
  {
    id: 4,
    name: "Home & Living",
    description: "Everything for your home",
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a",
    productCount: 250,
  },
];

export function CategoryList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {CATEGORIES.map((category) => (
        <Card key={category.id} className="group overflow-hidden">
          <Link href={`/shop?category=${category.id}`}>
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{category.name}</h3>
                  <p className="text-sm">{category.productCount} Products</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-muted-foreground mb-4">{category.description}</p>
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                Browse Category
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
}