import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import Event from "@/models/Event";
import Yatra from "@/models/Yatra";
import Registration from "@/models/Registration";
import ContactEnquiry from "@/models/ContactEnquiry";
import VolunteerApplication from "@/models/VolunteerApplication";
import { Calendar, Compass, Users, Mail, ArrowUpRight, HeartHandshake } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  let stats = {
    events: 0,
    yatras: 0,
    registrations: 0,
    enquiries: 0,
    volunteers: 0,
  };

  try {
    await connectDB();
    const [eventsCount, yatrasCount, regCount, enqCount, volCount] = await Promise.all([
      Event.countDocuments(),
      Yatra.countDocuments(),
      Registration.countDocuments(),
      ContactEnquiry.countDocuments(),
      VolunteerApplication.countDocuments(),
    ]);
    stats = {
      events: eventsCount,
      yatras: yatrasCount,
      registrations: regCount,
      enquiries: enqCount,
      volunteers: volCount,
    };
  } catch (err) {
    console.error("Dashboard count error:", err);
  }

  const statCards = [
    { label: "Total Events", value: stats.events, href: "/admin/events", icon: Calendar },
    { label: "Total Yatras", value: stats.yatras, href: "/admin/yatras", icon: Compass },
    { label: "Registrations", value: stats.registrations, href: "/admin/registrations", icon: Users },
    { label: "Volunteer Apps", value: stats.volunteers, href: "/admin/volunteers", icon: HeartHandshake },
    { label: "Contact Enquiries", value: stats.enquiries, href: "/admin/enquiries", icon: Mail },
  ];

  return (
    <div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-heading text-3xl md:text-4xl">Dashboard Overview</h1>
          <p className="mt-1 text-xs text-[#77766F] tracking-wide">
            Shashvat Giriraj Operations &amp; Records Management
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {statCards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="group border border-[#E6E4DC] bg-white p-6 transition-all hover:border-[#25251F]"
          >
            <div className="flex items-center justify-between text-[#77766F]">
              <card.icon size={20} />
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
            <p className="mt-4 font-heading text-3xl font-medium">{card.value}</p>
            <p className="mt-1 text-xs text-[#77766F] uppercase tracking-wider">{card.label}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 border border-[#E6E4DC] bg-white p-8">
        <h2 className="font-heading text-2xl">Quick Actions</h2>
        <div className="mt-4 flex flex-wrap gap-4">
          <Link
            href="/admin/events"
            className="border border-[#25251F] bg-[#25251F] px-5 py-2.5 text-xs tracking-wider text-white transition-colors hover:bg-[#44443C]"
          >
            MANAGE EVENTS
          </Link>
          <Link
            href="/admin/yatras"
            className="border border-[#25251F] bg-[#25251F] px-5 py-2.5 text-xs tracking-wider text-white transition-colors hover:bg-[#44443C]"
          >
            MANAGE YATRAS
          </Link>
          <Link
            href="/admin/registrations"
            className="border border-[#E6E4DC] px-5 py-2.5 text-xs tracking-wider text-[#25251F] transition-colors hover:border-[#25251F]"
          >
            VIEW REGISTRATIONS
          </Link>
          <Link
            href="/"
            target="_blank"
            className="border border-[#E6E4DC] px-5 py-2.5 text-xs tracking-wider text-[#77766F] transition-colors hover:border-[#25251F] hover:text-[#25251F]"
          >
            VIEW LIVE SITE ↗
          </Link>
        </div>
      </div>
    </div>
  );
}

