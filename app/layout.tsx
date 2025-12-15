import type { Metadata } from "next";
import { Nunito, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import logo from "./assets/logo.png"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "amari",
  description: "an ai powered blogging platform",
  icons: [logo.src]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${nunito.variable} antialiased`}
      >
        <div className="w-full flex items-center justify-center">
          <div className="xl:w-7xl px-6 py-6">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
