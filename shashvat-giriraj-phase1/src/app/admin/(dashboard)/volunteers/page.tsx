import { connectDB } from "@/lib/mongodb";
import VolunteerApplication from "@/models/VolunteerApplication";
import { HeartHandshake } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminVolunteersPage() {
  await connectDB();
  const applications = await VolunteerApplication.find().sort({ createdAt: -1 }).lean();

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#E6E4DC] pb-6">
        <div>
          <h1 className="font-heading text-3xl">Volunteer Applications</h1>
          <p className="mt-1 text-xs text-[#77766F] tracking-wide">
            Community members offering seva, event assistance and skills
          </p>
        </div>
      </div>

      <div className="mt-8">
        {applications.length === 0 ? (
          <div className="border border-[#E6E4DC] bg-white p-12 text-center">
            <HeartHandshake size={36} className="mx-auto text-[#77766F]" strokeWidth={1.2} />
            <h3 className="mt-4 font-heading text-2xl">No Applications Yet</h3>
            <p className="mt-2 text-xs text-[#77766F]">
              Submissions from the &quot;Join Our Journey&quot; page will appear here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto border border-[#E6E4DC] bg-white">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[#E6E4DC] bg-[#F8F7F2] text-[#77766F] uppercase tracking-wider">
                <tr>
                  <th className="p-4">Name</th>
                  <th className="p-4">City</th>
                  <th className="p-4">Contact</th>
                  <th className="p-4">Area of Interest</th>
                  <th className="p-4">Message</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Applied Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6E4DC]">
                {(applications as unknown as Array<{
                  _id: unknown;
                  fullName: string;
                  city: string;
                  phone: string;
                  email?: string;
                  areaOfInterest: string;
                  message?: string;
                  status: string;
                  createdAt: string | Date;
                }>).map((app) => (
                  <tr key={String(app._id)} className="hover:bg-[#FDFDFB]">
                    <td className="p-4 font-medium text-[#25251F]">{app.fullName}</td>
                    <td className="p-4 text-[#77766F]">{app.city}</td>
                    <td className="p-4 text-[#77766F]">
                      <p>{app.phone}</p>
                      {app.email && <p className="text-[11px] text-[#A09F98]">{app.email}</p>}
                    </td>
                    <td className="p-4 capitalize text-[#25251F]">
                      {app.areaOfInterest.replace("_", " ")}
                    </td>
                    <td className="p-4 text-[#77766F] max-w-xs truncate">
                      {app.message || "—"}
                    </td>
                    <td className="p-4">
                      <span className="inline-block rounded-xs bg-stone-100 border border-stone-200 px-2 py-0.5 text-[10px] text-stone-700 uppercase">
                        {app.status}
                      </span>
                    </td>
                    <td className="p-4 text-[#77766F]">
                      {new Date(app.createdAt).toLocaleDateString("en-IN", {
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

