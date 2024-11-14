"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ProductsTable } from "@/components/admin/products-table";
import { AddProductDialog } from "@/components/admin/add-product-dialog";

export default function ProductsPage() {
  const [showAddDialog, setShowAddDialog] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Products</h1>
        <Button onClick={() => setShowAddDialog(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Product
        </Button>
      </div>
      <ProductsTable />
      <AddProductDialog open={showAddDialog} onOpenChange={setShowAddDialog} />
    </div>
  );
}