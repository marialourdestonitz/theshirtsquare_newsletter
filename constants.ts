import { Metadata } from "next";

export const socials = [
  {
    id: 1,
    name: "Facebook",
    url: "https://www.facebook.com/",
    handle: "theshirtsqaure",
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://www.instagram.com/",
  },
  {
    id: 3,
    name: "Pinterest",
    url: "https://www.pinterest.com/",
  },
];

const title = "Theshirtsquare";
const description =
  "Design Your Unique Look at TheShirtSquare! Customize high-quality t-shirts, Hoodie, Swearshirt with your logo or choose from our diverse range of prints. Perfect for every style & occasion. Create, wear, and stand out!";
const image =
  "/public/logo_dark.png";

export const metaData: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title,
    description,
    url: "theshirtsqaure.com",
    siteName: "Theshirtsquare",
    images: [{ url: image }],
    locale: "de-AT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};