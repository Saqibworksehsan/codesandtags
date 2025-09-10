import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Codes & Tags - Trademark & Copyright Registration Services',
  description:
    'Protect your brand with India\'s trusted trademark & copyright registration experts. Quick, affordable, online.',
  keywords:
    'trademark registration, copyright registration, brand protection, MSME, startup',

  /* ----------  favicon / icons  ---------- */
  icons: {
    icon: '/favicon2.png', // 32×32
    shortcut: '/favicon.ico',
    apple: '/favicon2.png', // 180×180
    other: {
      rel: 'apple-touch-icon',
      url: '/favicon2.png',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}