import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Accredian Enterprise | Empower Your Workforce with AI-Ready Skills",
  description:
    "Accredian Enterprise provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
  keywords: [
    "Accredian",
    "Enterprise",
    "Corporate Training",
    "Workforce Development",
    "AI Training",
    "Data Science",
    "Product Management",
    "Leadership",
  ],
  openGraph: {
    title: "Accredian Enterprise | Designed to Fuel Innovation",
    description:
      "Empowering organizations with industry-specific training programs. Accelerate workforce transformation with expert-led learning pathways.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
