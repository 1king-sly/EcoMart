"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Premium Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Advanced fitness tracking and notifications",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
];

export function FeaturedProducts() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURED_PRODUCTS.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">${product.price}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}