"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PaymentSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Settings</CardTitle>
        <CardDescription>
          Configure your payment methods and integrations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-medium">M-Pesa Integration</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="mpesa-enabled">Enable M-Pesa Payments</Label>
                <Switch id="mpesa-enabled" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="consumer-key">Consumer Key</Label>
                <Input id="consumer-key" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="consumer-secret">Consumer Secret</Label>
                <Input id="consumer-secret" type="password" />
              </div>
            </div>
          </div>
          <Button>Save Payment Settings</Button>
        </form>
      </CardContent>
    </Card>
  );
}