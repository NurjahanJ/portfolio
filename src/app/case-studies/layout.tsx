import type { Metadata } from "next";

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
    <div className="min-h-screen w-full bg-[rgba(4,10,30,0.55)] backdrop-blur-[10px]">
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
}
