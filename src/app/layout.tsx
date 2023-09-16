import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theshirtsquare.com",
  description:
    "Design Your Unique Look at TheShirtSquare! Customize high-quality t-shirts, Hoodie, Swearshirt with your logo or choose from our diverse range of prints. Perfect for every style & occasion. Create, wear, and stand out!",
};

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
