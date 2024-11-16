"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function StoreSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Store Information</CardTitle>
        <CardDescription>
          Manage your store&apos;s basic information
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="store-name">Store Name</Label>
            <Input id="store-name" defaultValue="EcoMart" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="store-description">Store Description</Label>
            <Textarea
              id="store-description"
              defaultValue="Your premium shopping destination for quality products."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-email">Contact Email</Label>
            <Input
              id="contact-email"
              type="email"
              defaultValue="contact@ecomart.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="support-phone">Support Phone</Label>
            <Input
              id="support-phone"
              type="tel"
              defaultValue="+1 (555) 123-4567"
            />
          </div>
          <Button>Save Changes</Button>
        </form>
      </CardContent>
    </Card>
  );
}