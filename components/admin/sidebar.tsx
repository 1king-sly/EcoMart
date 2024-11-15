"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
  BarChart,
  Tags
} from "lucide-react";

const routes = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    href: "/admin",
    color: "text-sky-500",
  },
  {
    label: "Products",
    icon: Package,
    href: "/admin/products",
    color: "text-violet-500",
  },
  {
    label: "Categories",
    icon: Tags,
    href: "/admin/categories",
    color: "text-pink-700",
  },
  {
    label: "Orders",
    icon: ShoppingCart,
    href: "/admin/orders",
    color: "text-orange-700",
  },
  {
    label: "Customers",
    icon: Users,
    href: "/admin/customers",
    color: "text-green-700",
  },
  {
    label: "Analytics",
    icon: BarChart,
    href: "/admin/analytics",
    color: "text-yellow-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/admin/settings",
    color: "text-gray-700",
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-screen  bg-slate-900 text-white top-0 bottom-0 sticky">
      <div className="px-3 py-2 flex-1">
        <Link href="/admin" className="flex items-center pl-3 mb-14">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}