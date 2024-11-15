import { CustomersOverview } from "@/components/admin/customers-overview";
import { CustomersTable } from "@/components/admin/customers-table";
import { CustomersFilter } from "@/components/admin/customers-filter";

export default function CustomersPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Customer Management</h1>
      <CustomersOverview />
      <div className="space-y-4">
        <CustomersFilter />
        <CustomersTable />
      </div>
    </div>
  );
}