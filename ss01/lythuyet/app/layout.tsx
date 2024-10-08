
import { Roboto } from "@next/font/google";
import "./lib/fontawesome"; 
import type { Metadata } from "next";

const roboto = Roboto({
  subsets: ["latin"], 
  weight: ["400", "900"], 
});

export const metadata: Metadata = {
  title: "Rikkei Academy",
  description: "Generated by create next app",
  icons: {
    icon: "https://learn.rikkeiacademy.com/favicon.ico.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  );
}
