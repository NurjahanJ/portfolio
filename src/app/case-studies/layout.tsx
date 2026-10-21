import type { Metadata } from "next";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Case Studies | Project Journal",
  description: "Detailed explorations of selected projects, from concept to completion",
};

export default function CaseStudiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${fraunces.variable} case-study-scope min-h-screen w-full bg-[#1b2440]`}>
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
}
