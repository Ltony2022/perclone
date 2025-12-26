import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Education AI - Revolutionize Your Learning Journey",
  description: "Experience the future of education with AI-powered tutoring, personalized learning paths, and instant feedback. Join 500K+ students achieving their goals faster than ever before.",
  keywords: "AI education, personalized learning, artificial intelligence tutoring, online learning, education technology",
  authors: [{ name: "Education AI" }],
  openGraph: {
    title: "Education AI - Revolutionize Your Learning Journey",
    description: "Experience the future of education with AI-powered tutoring and personalized learning paths.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
