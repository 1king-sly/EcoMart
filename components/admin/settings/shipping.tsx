"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ShippingSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shipping Settings</CardTitle>
        <CardDescription>
          Configure shipping rates and delivery options
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="base-rate">Base Shipping Rate</Label>
              <Input
                id="base-rate"
                type="number"
                min="0"
                step="0.01"
                defaultValue="10.00"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="free-shipping-threshold">
                Free Shipping Threshold
              </Label>
              <Input
                id="free-shipping-threshold"
                type="number"
                min="0"
                step="0.01"
                defaultValue="100.00"
              />
            </div>
          </div>
          <Button>Save Shipping Settings</Button>
        </form>
      </CardContent>
    </Card>
  );
}