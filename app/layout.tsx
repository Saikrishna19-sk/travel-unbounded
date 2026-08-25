import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

export const metadata: Metadata = {
    title: "Travel Unbounded | Experiential Travel Experts",
    description:
        "Travel Unbounded creates personalised experiential journeys across India and the world.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Navbar />

                {children}

                <Footer />
            </body>
        </html>
    );
}