import { AdminOverview } from "@/components/admin/overview";
import { AdminStats } from "@/components/admin/stats";
import { RecentOrders } from "@/components/admin/recent-orders";
import { TopProducts } from "@/components/admin/top-products";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      <AdminStats />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AdminOverview />
        <TopProducts />
      </div>
      <RecentOrders />
    </div>
  );
}