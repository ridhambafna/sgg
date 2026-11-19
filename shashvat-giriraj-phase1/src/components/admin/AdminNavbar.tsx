"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, LayoutDashboard, Calendar, Compass, Users, Image as ImageIcon, Heart, Mail } from "lucide-react";
import type { AdminSession } from "@/lib/auth";

export default function AdminNavbar({ session }: { session: AdminSession }) {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  const navLinks = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Events", href: "/admin/events", icon: Calendar },
    { name: "Yatras", href: "/admin/yatras", icon: Compass },
    { name: "Registrations", href: "/admin/registrations", icon: Users },
    { name: "Gallery", href: "/admin/gallery", icon: ImageIcon },
    { name: "Seva", href: "/admin/seva", icon: Heart },
    { name: "Enquiries", href: "/admin/enquiries", icon: Mail },
  ];

  return (
    <header className="border-b border-[#E6E4DC] bg-white sticky top-0 z-40">
      <div className="container-main flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/admin" className="font-heading text-xl font-medium tracking-wide">
            SGG ADMIN
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-1.5 text-xs text-[#55544E] transition-colors hover:text-[#25251F]"
              >
                <item.icon size={14} className="text-[#77766F]" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-medium text-[#25251F]">{session.name}</p>
            <p className="text-[10px] text-[#77766F] uppercase tracking-wider">{session.role.replace("_", " ")}</p>
          </div>

          <button
            onClick={handleLogout}
            title="Sign out"
            className="flex items-center gap-1.5 border border-[#E6E4DC] px-3 py-1.5 text-xs text-[#77766F] transition-colors hover:border-[#25251F] hover:text-[#25251F]"
          >
            <LogOut size={13} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}

