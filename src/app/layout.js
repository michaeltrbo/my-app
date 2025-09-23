import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-comic", // keep the same CSS variable to avoid refactors
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

export const metadata = {
  title: "Michael Trbovic - Electrical & AI Engineering Student",
  description: "Personal website of Michael Trbovic, studying electrical and AI engineering at Western University",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
