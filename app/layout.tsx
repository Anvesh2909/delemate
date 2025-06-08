import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Delemate - Send your parcels",
  description: "",
    icons: {
      icon:"/logo.png",
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        </head>
        <body className="min-h-screen flex flex-col">
        {/* Gradient Background Blobs */}
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
        <div className="gradient-blob blob-4"></div>
        <div className="gradient-blob blob-5"></div>
        <div className="gradient-blob blob-6"></div>

        <Navbar/>
        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-grow">
            {children}
        </main>


        </body>
        </html>
    );
}
