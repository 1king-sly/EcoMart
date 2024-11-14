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

const PRODUCTS = [
  {
    id: 1,
    name: "Wireless Earbuds",
    description: "True wireless earbuds with premium sound quality",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb",
  },
  {
    id: 2,
    name: "Smart Speaker",
    description: "Voice-controlled smart speaker with premium sound",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc",
  },
  {
    id: 3,
    name: "Laptop Stand",
    description: "Ergonomic aluminum laptop stand",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
  },
];

export function ProductGrid() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">All Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((product) => (
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