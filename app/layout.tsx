import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Pokemon Search App",
  description: "Search and view Pokemon info using API",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 font-sans">{children}</body>
    </html>
  );
}
