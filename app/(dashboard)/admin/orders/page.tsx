import { OrdersOverview } from "@/components/admin/orders-overview";
import { OrdersTable } from "@/components/admin/orders-table";
import { OrdersFilter } from "@/components/admin/orders-filter";

export default function OrdersPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Orders Management</h1>
      <OrdersOverview />
      <div className="space-y-4">
        <OrdersFilter />
        <OrdersTable />
      </div>
    </div>
  );
}