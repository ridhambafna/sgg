import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import AdminNavbar from "@/components/admin/AdminNavbar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAdminSession();

  // If unauthenticated, redirect to admin login
  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-[#F8F7F2] text-[#25251F]">
      <AdminNavbar session={session} />
      <main className="container-main py-10">{children}</main>
    </div>
  );
}

