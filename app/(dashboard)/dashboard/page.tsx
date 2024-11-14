import { UserOverview } from "@/components/dashboard/overview";
import { UserStats } from "@/components/dashboard/stats";
import { OrderHistory } from "@/components/dashboard/order-history";
import { DeliveryStatus } from "@/components/dashboard/delivery-status";

export default function UserDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Dashboard</h1>
      <UserStats />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <UserOverview />
        <DeliveryStatus />
      </div>
      <OrderHistory />
    </div>
  );
}