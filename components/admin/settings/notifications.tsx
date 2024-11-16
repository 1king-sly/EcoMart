"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>
          Manage your notification preferences
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="order-notifications">
                Order Notifications
              </Label>
              <Switch id="order-notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="inventory-alerts">
                Low Inventory Alerts
              </Label>
              <Switch id="inventory-alerts" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="customer-reviews">
                Customer Review Notifications
              </Label>
              <Switch id="customer-reviews" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="payment-notifications">
                Payment Notifications
              </Label>
              <Switch id="payment-notifications" defaultChecked />
            </div>
          </div>
          <Button>Save Notification Settings</Button>
        </form>
      </CardContent>
    </Card>
  );
}