"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function AnalyticsPeriodSelect() {
  return (
    <Select defaultValue="6months">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select period" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="7days">Last 7 days</SelectItem>
        <SelectItem value="30days">Last 30 days</SelectItem>
        <SelectItem value="6months">Last 6 months</SelectItem>
        <SelectItem value="1year">Last year</SelectItem>
      </SelectContent>
    </Select>
  );
}