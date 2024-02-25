"use client";

import Header from "@/components/Header";
import '@/app/globals.css';
import { Inter } from "next/font/google";
import { Providers } from '../../redux/provider';


const inter = Inter({ subsets: ["latin"] })

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Providers>
            <html lang="en">
                <body className={inter.className}>
                    <Header />
                    {children}
                </body>
            </html>
        </Providers>

    )
}
