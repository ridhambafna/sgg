import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import Event from "@/models/Event";
import { Calendar, Plus, MapPin } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminEventsPage() {
  await connectDB();
  const events = await Event.find().sort({ eventDate: -1 }).lean();

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#E6E4DC] pb-6">
        <div>
          <h1 className="font-heading text-3xl">Manage Events</h1>
          <p className="mt-1 text-xs text-[#77766F] tracking-wide">
            Create, edit and manage public events &amp; gatherings
          </p>
        </div>

        <Link
          href="/admin/events/new"
          className="inline-flex items-center gap-2 bg-[#25251F] px-5 py-3 text-xs tracking-wider text-white transition-colors hover:bg-[#44443C]"
        >
          <Plus size={14} /> NEW EVENT
        </Link>
      </div>

      <div className="mt-8">
        {events.length === 0 ? (
          <div className="border border-[#E6E4DC] bg-white p-12 text-center">
            <Calendar size={36} className="mx-auto text-[#77766F]" strokeWidth={1.2} />
            <h3 className="mt-4 font-heading text-2xl">No Events Found</h3>
            <p className="mt-2 text-xs text-[#77766F]">
              Click &quot;New Event&quot; above to publish your first community event.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto border border-[#E6E4DC] bg-white">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[#E6E4DC] bg-[#F8F7F2] text-[#77766F] uppercase tracking-wider">
                <tr>
                  <th className="p-4">Title</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Registrations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6E4DC]">
                {(events as unknown as Array<{
                  _id: unknown;
                  title: string;
                  category: string;
                  eventDate: string | Date;
                  location: string;
                  status: string;
                  registrationOpen: boolean;
                }>).map((ev) => (
                  <tr key={String(ev._id)} className="hover:bg-[#FDFDFB]">
                    <td className="p-4 font-medium text-[#25251F]">{ev.title}</td>
                    <td className="p-4 text-[#77766F]">{ev.category}</td>
                    <td className="p-4 text-[#77766F]">
                      {new Date(ev.eventDate).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="p-4 text-[#77766F] flex items-center gap-1">
                      <MapPin size={12} /> {ev.location}
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-block rounded-xs px-2 py-0.5 text-[10px] uppercase tracking-wider ${
                          ev.status === "published"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-stone-100 text-stone-600 border border-stone-200"
                        }`}
                      >
                        {ev.status}
                      </span>
                    </td>
                    <td className="p-4 text-[#77766F]">
                      {ev.registrationOpen ? "Open" : "Closed"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
