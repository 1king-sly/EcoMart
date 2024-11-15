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
    customer: "John Doe",
    status: "processing",
    total: "$245.99",
    date: "2024-03-20",
  },
  {
    id: "ORD002",
    customer: "Jane Smith",
    status: "delivered",
    total: "$129.99",
    date: "2024-03-19",
  },
  {
    id: "ORD003",
    customer: "Bob Johnson",
    status: "pending",
    total: "$89.99",
    date: "2024-03-19",
  },
];

const statusColors = {
  pending: "bg-yellow-500",
  processing: "bg-blue-500",
  delivered: "bg-green-500",
  cancelled: "bg-red-500",
};

export function RecentOrders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
        <CardDescription>Latest customer orders</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={`${statusColors[order.status as keyof typeof statusColors]} text-white`}
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}