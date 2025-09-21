import { Comic_Neue } from "next/font/google";
import "./globals.css";

const comicNeue = Comic_Neue({
  variable: "--font-comic",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Michael Trbovic - Electrical & AI Engineering Student",
  description: "Personal website of Michael Trbovic, studying electrical and AI engineering at Western University",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${comicNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
