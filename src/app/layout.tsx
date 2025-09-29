import type { Metadata } from 'next';
import { inter } from '@/utils/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: `Ta'sema`,
  description: 'Team building App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
