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
        <div className="w-4/5">
          <div className="flex">
            <div className="w-1/5">
              <Sidebar />
            </div>
            <div className="flex-1">
              { children }
            </div>
            <div className="w-1/5">
              Trends
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
