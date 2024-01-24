import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/index";

export const metadata: Metadata = {
  title: "Twitter Clone",
  description: "Created by Damian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex justify-center">
        <div className="w-5/6">
          <div className="flex">
            <div className="w-1/5">
              <Sidebar />
            </div>
            <div className="flex-1">
              { children }
            </div>
            <div className="w-1/5 bg-gray-700">
              Trends
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
