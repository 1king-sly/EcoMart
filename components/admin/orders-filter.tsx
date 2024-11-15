"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function OrdersFilter() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Input
        placeholder="Search orders..."
        className="sm:max-w-[300px]"
      />
      <Select defaultValue="all">
        <SelectTrigger className="sm:max-w-[200px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="processing">Processing</SelectItem>
          <SelectItem value="delivered">Delivered</SelectItem>
          <SelectItem value="cancelled">Cancelled</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="secondary">Filter</Button>
      <Button variant="outline">Reset</Button>
    </div>
  );
}