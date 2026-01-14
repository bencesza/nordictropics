import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });

export const metadata: Metadata = {
  title: 'Nordic Tropics ApS | Premium African Tropical Fruits to Nordic Markets',
  description: 'Nordic Tropics imports premium tropical fruits (mango, avocado, pineapple, passionfruit) from Kenya to Denmark and Northern Europe. Quality, traceability, and sustainability.',
  keywords: 'Kenyan mango exporter Denmark, Nordic fruit importer, avocado wholesaler Copenhagen, African tropical fruits Europe, sustainable fruit import Denmark',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Nordic Tropics ApS | From African Sun to Nordic Tables',
    description: 'Premium tropical fruits from Kenya to Northern Europe',
    images: ['/og-image.png'],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" async></script>
      </head>
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
