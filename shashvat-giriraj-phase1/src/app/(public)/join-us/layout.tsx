import type { Metadata } from "next";

export const metadata: Metadata = { title: "Join Our Journey" };

export default function JoinUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

