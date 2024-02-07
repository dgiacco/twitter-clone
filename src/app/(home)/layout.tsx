import type { Metadata } from "next";
import { HomeHeader } from "@/home";

export const metadata: Metadata = {
  title: "Twitter Clone",
  description: "Created by Damian",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <HomeHeader />
      <div className="min-h-screen flex justify-center border border-slate-700">
        {children}
      </div>
    </div>
  );
}
