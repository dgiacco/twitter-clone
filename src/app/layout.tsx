import type { Metadata } from "next";
import "./globals.css";

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
        <div className="w-5/6">{ children }</div>
      </body>
    </html>
  );
}
