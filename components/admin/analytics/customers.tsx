"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const customerData = [
  { month: 'Jan', new: 400, returning: 240 },
  { month: 'Feb', new: 300, returning: 198 },
  { month: 'Mar', new: 600, returning: 300 },
  { month: 'Apr', new: 800, returning: 420 },
  { month: 'May', new: 700, returning: 380 },
  { month: 'Jun', new: 900, returning: 460 },
];

export function CustomerAnalytics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Growth</CardTitle>
        <CardDescription>New vs Returning Customers</CardDescription>
      </CardHeader>
      <CardContent className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={customerData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area 
              type="monotone" 
              dataKey="new" 
              stackId="1"
              stroke="hsl(var(--chart-1))" 
              fill="hsl(var(--chart-1))" 
            />
            <Area 
              type="monotone" 
              dataKey="returning" 
              stackId="1"
              stroke="hsl(var(--chart-2))" 
              fill="hsl(var(--chart-2))" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}