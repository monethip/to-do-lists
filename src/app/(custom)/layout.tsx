"use client";

import '@/app/globals.css';
import { Providers } from '../../redux/provider';


export default function CustomLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Providers>
            <html lang="en">
                <body className="">
                    {children}
                </body>
            </html>
        </Providers>

    )
}
