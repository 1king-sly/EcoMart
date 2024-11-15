"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    orders: 15,
    spent: "$1,200",
    status: "active",
    lastOrder: "2024-03-20",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    orders: 8,
    spent: "$750",
    status: "active",
    lastOrder: "2024-03-15",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    orders: 3,
    spent: "$250",
    status: "inactive",
    lastOrder: "2024-02-28",
  },
];

export function CustomersTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Orders</TableHead>
            <TableHead>Spent</TableHead>
            <TableHead>Last Order</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{customer.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {customer.email}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{customer.orders}</TableCell>
              <TableCell>{customer.spent}</TableCell>
              <TableCell>{customer.lastOrder}</TableCell>
              <TableCell>
                <Badge
                  variant="secondary"
                  className={`${
                    customer.status === "active"
                      ? "bg-green-500"
                      : "bg-gray-500"
                  } text-white`}
                >
                  {customer.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}