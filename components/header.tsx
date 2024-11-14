"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { NavigationMenu } from "./ui/navigation-menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <ShoppingCart className="h-6 w-6" />
            <span className="font-bold text-xl">EcoMart</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/shop") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Shop
            </Link>
            <Link
              href="/categories"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/categories") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Categories
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/shop"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium"
                >
                  Shop
                </Link>
                <Link
                  href="/categories"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium"
                >
                  Categories
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}