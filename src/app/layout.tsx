import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import { Sidebar } from '@/components';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});
const segoeUi = localFont({
  src: './fonts/segoe-ui/Segoe-UI.woff',
  variable: '--font-segoeUi',
  weight: '100 900',
});
const segoeUiBold = localFont({
  src: './fonts/segoe-ui/Segoe-UI-Bold.woff',
  variable: '--font-segoeUi-bold0',
  weight: '500 900',
});

export const metadata: Metadata = {
  title: 'Van Arsdel | Amir Mahdi Montazeri',
  description: 'Van Arsdel Desc',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${segoeUi.variable} ${geistSans.variable} ${geistMono.variable} ${segoeUiBold.variable} antialiased`}
      >
        <Sidebar />
        <main className="sm:ml-18">{children}</main>
      </body>
    </html>
  );
}
