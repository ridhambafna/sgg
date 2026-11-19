import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import Yatra from "@/models/Yatra";
import { Compass, Plus, MapPin } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminYatrasPage() {
  await connectDB();
  const yatras = await Yatra.find().sort({ startDate: -1 }).lean();

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#E6E4DC] pb-6">
        <div>
          <h1 className="font-heading text-3xl">Manage Yatras</h1>
          <p className="mt-1 text-xs text-[#77766F] tracking-wide">
            Plan sacred pilgrimages, itineraries and participant slots
          </p>
        </div>

        <Link
          href="/admin/yatras/new"
          className="inline-flex items-center gap-2 bg-[#25251F] px-5 py-3 text-xs tracking-wider text-white transition-colors hover:bg-[#44443C]"
        >
          <Plus size={14} /> NEW YATRA
        </Link>
      </div>

      <div className="mt-8">
        {yatras.length === 0 ? (
          <div className="border border-[#E6E4DC] bg-white p-12 text-center">
            <Compass size={36} className="mx-auto text-[#77766F]" strokeWidth={1.2} />
            <h3 className="mt-4 font-heading text-2xl">No Yatras Found</h3>
            <p className="mt-2 text-xs text-[#77766F]">
              Click &quot;New Yatra&quot; above to create your first pilgrimage plan.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto border border-[#E6E4DC] bg-white">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[#E6E4DC] bg-[#F8F7F2] text-[#77766F] uppercase tracking-wider">
                <tr>
                  <th className="p-4">Title</th>
                  <th className="p-4">Destination</th>
                  <th className="p-4">Dates</th>
                  <th className="p-4">Days</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Capacity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6E4DC]">
                {(yatras as unknown as Array<{
                  _id: unknown;
                  title: string;
                  destination: string;
                  startDate: string | Date;
                  endDate: string | Date;
                  status: string;
                  registrationCapacity?: number;
                  itinerary?: unknown[];
                }>).map((yt) => (
                  <tr key={String(yt._id)} className="hover:bg-[#FDFDFB]">
                    <td className="p-4 font-medium text-[#25251F]">{yt.title}</td>
                    <td className="p-4 text-[#77766F] flex items-center gap-1">
                      <MapPin size={12} /> {yt.destination}
                    </td>
                    <td className="p-4 text-[#77766F]">
                      {new Date(yt.startDate).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                      })}{" "}
                      -{" "}
                      {new Date(yt.endDate).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="p-4 text-[#77766F]">{yt.itinerary?.length || 0} Days</td>
                    <td className="p-4">
                      <span
                        className={`inline-block rounded-xs px-2 py-0.5 text-[10px] uppercase tracking-wider ${
                          yt.status === "published"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-stone-100 text-stone-600 border border-stone-200"
                        }`}
                      >
                        {yt.status}
                      </span>
                    </td>
                    <td className="p-4 text-[#77766F]">
                      {yt.registrationCapacity ? `${yt.registrationCapacity} Seats` : "Unlimited"}
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

