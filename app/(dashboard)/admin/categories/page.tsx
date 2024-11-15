"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { CategoriesTable } from "@/components/admin/categories-table";
import { AddCategoryDialog } from "@/components/admin/add-category-dialog";

export default function CategoriesPage() {
  const [showAddDialog, setShowAddDialog] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Categories</h1>
        <Button onClick={() => setShowAddDialog(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Category
        </Button>
      </div>
      <CategoriesTable />
      <AddCategoryDialog open={showAddDialog} onOpenChange={setShowAddDialog} />
    </div>
  );
}