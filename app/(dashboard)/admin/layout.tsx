import { AdminSidebar } from "@/components/admin/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-[80vh] overflow-hidden">
      <AdminSidebar />
      <main className="flex-1 p-8 h-full overflow-y-auto">{children}</main>
    </div>
  );
}