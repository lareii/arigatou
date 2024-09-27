import { Inter as FontSans } from 'next/font/google';
import '@/app/main.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='tr' translate='no'>
      <body className={`${fontSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
