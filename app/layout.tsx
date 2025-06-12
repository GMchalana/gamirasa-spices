import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Footer from './components/Footer';
import Header from './components/Header';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gamirasa Spices | Premium Quality Spices',
  description: 'Discover premium quality spices from Gamirasa. Enhance your cooking with our authentic flavors and health benefits.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}