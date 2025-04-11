import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({subsets:["latin"]})

export const metadata = {
  title: "Ledge",
  description: "AI-powered finance tracker built with Next.js, Supabase, Tailwind, Prisma, Inngest, ArcJet, and Shadcn UI. Built for scalability, real-time sync, and intelligent financial insights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
