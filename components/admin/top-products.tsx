"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const topProducts = [
  {
    name: "Wireless Earbuds",
    sales: 245,
    revenue: "$24,500",
    trend: "up",
  },
  {
    name: "Smart Watch",
    sales: 190,
    revenue: "$19,000",
    trend: "up",
  },
  {
    name: "Laptop Stand",
    sales: 150,
    revenue: "$7,500",
    trend: "down",
  },
];

export function TopProducts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
        <CardDescription>Best performing products this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topProducts.map((product) => (
            <div
              key={product.name}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-muted-foreground">
                  {product.sales} sales
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">{product.revenue}</p>
                <Badge
                  variant={product.trend === "up" ? "default" : "destructive"}
                  className="mt-1"
                >
                  {product.trend === "up" ? "↑" : "↓"}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}