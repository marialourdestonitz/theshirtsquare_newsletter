import "./globals.css";
import type { Metadata } from "next";
import { metaData } from "../../constants";

export const metadata: Metadata = metaData;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-roboto">{children}</body>
    </html>
  );
}
