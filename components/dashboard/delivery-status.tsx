"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const deliveries = [
  {
    id: "DEL001",
    product: "Wireless Earbuds",
    status: "in transit",
    eta: "March 22, 2024",
  },
  {
    id: "DEL002",
    product: "Smart Watch",
    status: "processing",
    eta: "March 25, 2024",
  },
  {
    id: "DEL003",
    product: "Laptop Stand",
    status: "delivered",
    eta: "March 19, 2024",
  },
];

const statusColors = {
  "in transit": "bg-blue-500",
  processing: "bg-yellow-500",
  delivered: "bg-green-500",
};

export function DeliveryStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Delivery Status</CardTitle>
        <CardDescription>Track your orders</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {deliveries.map((delivery) => (
            <div
              key={delivery.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div>
                <p className="font-medium">{delivery.product}</p>
                <p className="text-sm text-muted-foreground">
                  ETA: {delivery.eta}
                </p>
              </div>
              <Badge
                variant="secondary"
                className={`${
                  statusColors[delivery.status as keyof typeof statusColors]
                } text-white`}
              >
                {delivery.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}