import React from "react";
import Providers from './provider';
import './globals.css';
import AuthHeader from "@/app/components/common/AuthHeader";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <html lang="en">
            <body>
                <Providers>
                    <AuthHeader/>
                    <div style={{ margin: '30px 40px' }}>
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    );
}