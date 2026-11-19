import { connectDB } from "@/lib/mongodb";
import ContactEnquiry from "@/models/ContactEnquiry";
import { Mail } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminEnquiriesPage() {
  await connectDB();
  const enquiries = await ContactEnquiry.find().sort({ createdAt: -1 }).lean();

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#E6E4DC] pb-6">
        <div>
          <h1 className="font-heading text-3xl">Contact Enquiries</h1>
          <p className="mt-1 text-xs text-[#77766F] tracking-wide">
            Messages and questions received from the public Contact page
          </p>
        </div>
      </div>

      <div className="mt-8">
        {enquiries.length === 0 ? (
          <div className="border border-[#E6E4DC] bg-white p-12 text-center">
            <Mail size={36} className="mx-auto text-[#77766F]" strokeWidth={1.2} />
            <h3 className="mt-4 font-heading text-2xl">No Enquiries Yet</h3>
            <p className="mt-2 text-xs text-[#77766F]">
              Messages submitted on the Contact page will be listed here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto border border-[#E6E4DC] bg-white">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[#E6E4DC] bg-[#F8F7F2] text-[#77766F] uppercase tracking-wider">
                <tr>
                  <th className="p-4">Sender</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Subject</th>
                  <th className="p-4">Message</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Received Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6E4DC]">
                {(enquiries as unknown as Array<{
                  _id: unknown;
                  name: string;
                  email: string;
                  subject: string;
                  message: string;
                  status: string;
                  createdAt: string | Date;
                }>).map((enq) => (
                  <tr key={String(enq._id)} className="hover:bg-[#FDFDFB]">
                    <td className="p-4 font-medium text-[#25251F]">{enq.name}</td>
                    <td className="p-4 text-[#77766F]">{enq.email}</td>
                    <td className="p-4 font-medium text-[#25251F]">{enq.subject}</td>
                    <td className="p-4 text-[#77766F] max-w-sm truncate">{enq.message}</td>
                    <td className="p-4">
                      <span className="inline-block rounded-xs bg-stone-100 border border-stone-200 px-2 py-0.5 text-[10px] text-stone-700 uppercase">
                        {enq.status}
                      </span>
                    </td>
                    <td className="p-4 text-[#77766F]">
                      {new Date(enq.createdAt).toLocaleDateString("en-IN", {
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

