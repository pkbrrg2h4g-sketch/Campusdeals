import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CampusDeals',
  description: 'Student deals and local discounts for campus life',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
