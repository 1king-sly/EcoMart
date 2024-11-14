"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          alt="Shopping"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">
            Discover Amazing Products
          </h1>
          <p className="text-xl mb-8">
            Shop the latest trends with our curated collection of premium products.
            Find everything you need, all in one place.
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Start Shopping
          </Button>
        </div>
      </div>
    </div>
  );
}