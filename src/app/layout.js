import { Inter } from 'next/font/google'
import './globals.scss'

import './globals.scss';
import { Providers } from './providers';

export const metadata = {
  title: 'Carbon + Next14',
  description: 'IBM Carbon Tutorial with Next.js 14',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
