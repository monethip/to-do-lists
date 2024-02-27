"use client";

import '@/app/globals.css';
import { Inter } from "next/font/google";
import { Providers } from '../../redux/provider';

const inter = Inter({ subsets: ["latin"] })

export default function CustomLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Providers>
            <html lang="en">
            <body className={inter.className}>
                    {children}
                </body>
            </html>
        </Providers>

    )
}
