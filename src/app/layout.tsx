
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shivam Disposal',
  description: 'Gwalior\'s premier authorized vehicle recycling facility. Get professional, eco-friendly disposal solutions for all types of vehicles.',
  icons: {
    icon: '/IMG-20260220-WA0039-removebg-preview.png',
    apple: '/IMG-20260220-WA0039-removebg-preview.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-24 lg:scroll-pt-32">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background selection:bg-primary/30 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
