import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SideQuest Beta",
  description: "Experience the ultimate stealth quest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex justify-center bg-black min-h-screen">
        <div className="w-full max-w-md bg-stealth-gradient min-h-screen shadow-2xl relative overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
