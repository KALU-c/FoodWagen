import QueryProvider from "@/components/QueryProvider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sourceSansPro = localFont({
  src: [
    {
      path: '../public/fonts/SourceSansPro-Regular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/SourceSansPro-Semibold.woff',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../public/fonts/SourceSansPro-Bold.woff',
      weight: '700',
      style: 'normal'
    }
  ]
})

export const metadata: Metadata = {
  title: "FoodWagen",
  description: "A simple web app to search, add, edit, and organize food items easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSansPro.className} antialiased`}
      >
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
