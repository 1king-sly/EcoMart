"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const orders = [
  {
    id: "ORD001",
    product: "Wireless Earbuds",
    date: "2024-03-20",
    status: "delivered",
    total: "$149.99",
  },
  {
    id: "ORD002",
    product: "Smart Watch",
    date: "2024-03-15",
    status: "in transit",
    total: "$199.99",
  },
  {
    id: "ORD003",
    product: "Laptop Stand",
    date: "2024-03-10",
    status: "delivered",
    total: "$49.99",
  },
];

const statusColors = {
  "in transit": "bg-blue-500",
  processing: "bg-yellow-500",
  delivered: "bg-green-500",
  cancelled: "bg-red-500",
};

export function OrderHistory() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Order History</CardTitle>
        <CardDescription>View your past orders</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={`${
                      statusColors[order.status as keyof typeof statusColors]
                    } text-white`}
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>{order.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}