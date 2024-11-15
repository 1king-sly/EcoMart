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
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const orders = [
  {
    id: "ORD001",
    customer: "John Doe",
    date: "2024-03-20",
    total: "$245.99",
    status: "processing",
    items: 3,
  },
  {
    id: "ORD002",
    customer: "Jane Smith",
    date: "2024-03-19",
    total: "$129.99",
    status: "delivered",
    items: 2,
  },
  {
    id: "ORD003",
    customer: "Bob Johnson",
    date: "2024-03-19",
    total: "$89.99",
    status: "pending",
    items: 1,
  },
];

const statusColors = {
  pending: "bg-yellow-500",
  processing: "bg-blue-500",
  delivered: "bg-green-500",
  cancelled: "bg-red-500",
};

export function OrdersTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.items}</TableCell>
              <TableCell>{order.total}</TableCell>
              <TableCell>
                <Badge
                  variant="secondary"
                  className={`${statusColors[order.status as keyof typeof statusColors]} text-white`}
                >
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}