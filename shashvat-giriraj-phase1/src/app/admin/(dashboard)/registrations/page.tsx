import { connectDB } from "@/lib/mongodb";
import Registration from "@/models/Registration";
import { Users, Download } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminRegistrationsPage() {
  await connectDB();
  const registrations = await Registration.find()
    .populate("eventId", "title")
    .populate("yatraId", "title")
    .sort({ createdAt: -1 })
    .lean();

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#E6E4DC] pb-6">
        <div>
          <h1 className="font-heading text-3xl">Registrations</h1>
          <p className="mt-1 text-xs text-[#77766F] tracking-wide">
            Attendee submissions, contact info and payment verification
          </p>
        </div>

        <a
          href="/api/admin/registrations?export=true"
          download
          className="inline-flex items-center gap-2 border border-[#25251F] bg-white px-5 py-3 text-xs tracking-wider text-[#25251F] transition-colors hover:bg-[#25251F] hover:text-white"
        >
          <Download size={14} /> EXPORT CSV
        </a>
      </div>

      <div className="mt-8">
        {registrations.length === 0 ? (
          <div className="border border-[#E6E4DC] bg-white p-12 text-center">
            <Users size={36} className="mx-auto text-[#77766F]" strokeWidth={1.2} />
            <h3 className="mt-4 font-heading text-2xl">No Registrations Yet</h3>
            <p className="mt-2 text-xs text-[#77766F]">
              When visitors register for events or yatras, their entries will show up here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto border border-[#E6E4DC] bg-white">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[#E6E4DC] bg-[#F8F7F2] text-[#77766F] uppercase tracking-wider">
                <tr>
                  <th className="p-4">Full Name</th>
                  <th className="p-4">Contact</th>
                  <th className="p-4">City</th>
                  <th className="p-4">Target Journey / Event</th>
                  <th className="p-4">Registration</th>
                  <th className="p-4">Payment</th>
                  <th className="p-4">Registered At</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6E4DC]">
                {(registrations as unknown as Array<{
                  _id: unknown;
                  fullName: string;
                  phone: string;
                  email?: string;
                  city: string;
                  eventId?: { title: string };
                  yatraId?: { title: string };
                  registrationStatus: string;
                  paymentStatus: string;
                  createdAt: string | Date;
                }>).map((reg) => (
                  <tr key={String(reg._id)} className="hover:bg-[#FDFDFB]">
                    <td className="p-4 font-medium text-[#25251F]">{reg.fullName}</td>
                    <td className="p-4 text-[#77766F]">
                      <p>{reg.phone}</p>
                      {reg.email && <p className="text-[11px] text-[#A09F98]">{reg.email}</p>}
                    </td>
                    <td className="p-4 text-[#77766F]">{reg.city}</td>
                    <td className="p-4 text-[#25251F]">
                      {reg.eventId?.title || reg.yatraId?.title || "Direct"}
                    </td>
                    <td className="p-4">
                      <span className="inline-block rounded-xs bg-amber-50 border border-amber-200 px-2 py-0.5 text-[10px] text-amber-700 uppercase">
                        {reg.registrationStatus}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="inline-block rounded-xs bg-stone-100 border border-stone-200 px-2 py-0.5 text-[10px] text-stone-700 uppercase">
                        {reg.paymentStatus}
                      </span>
                    </td>
                    <td className="p-4 text-[#77766F]">
                      {new Date(reg.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
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

