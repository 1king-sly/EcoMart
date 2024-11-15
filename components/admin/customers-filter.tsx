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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SlidersHorizontal } from "lucide-react";

export function CustomersFilter() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Input
        placeholder="Search customers..."
        className="sm:max-w-[300px]"
      />
      <Select defaultValue="all">
        <SelectTrigger className="sm:max-w-[200px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="inactive">Inactive</SelectItem>
        </SelectContent>
      </Select>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="sm:w-[150px]">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            More Filters
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Order History</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem>
            Has Orders
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            No Orders
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Membership</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem>
            Premium Members
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            Regular Members
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="secondary">Filter</Button>
      <Button variant="outline">Reset</Button>
    </div>
  );
}