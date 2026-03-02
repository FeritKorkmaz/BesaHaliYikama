import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Toaster } from '@/components/ui/sonner'
import { withBasePath } from '@/lib/asset'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase,
  title: 'Besa Halı Yıkama | Konya Profesyonel Halı, Koltuk ve Perde Yıkama',
  description:
    'Konya Meram bölgesinde profesyonel halı yıkama, koltuk yıkama ve perde yıkama hizmeti. Ücretsiz alım-teslimat, modern ekipman ve kalite kontrol.',
  keywords: ['halı yıkama', 'koltuk yıkama', 'perde yıkama', 'Konya', 'Meram', 'Besa'],
  icons: {
    icon: withBasePath('/img/newlogo.png'),
    shortcut: withBasePath('/img/newlogo.png'),
    apple: withBasePath('/img/newlogo.png'),
  },
  openGraph: {
    title: 'Besa Halı Yıkama | Konya Profesyonel Halı, Koltuk ve Perde Yıkama',
    description:
      'Konya Meram bölgesinde profesyonel halı yıkama, koltuk yıkama ve perde yıkama hizmeti.',
    type: 'website',
    locale: 'tr_TR',
    images: [
      {
        url: withBasePath('/img/newlogo.png'),
        width: 1400,
        height: 420,
        alt: 'Besa Halı Yıkama',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Besa Halı Yıkama',
    description:
      'Konya Meram bölgesinde profesyonel halı yıkama, koltuk yıkama ve perde yıkama hizmeti.',
    images: [withBasePath('/img/newlogo.png')],
  },
}

export const viewport: Viewport = {
  themeColor: '#2a9d8f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="font-sans antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17985426772"
          strategy="beforeInteractive"
        />
        <Script id="google-ads-gtag" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17985426772');
          `}
        </Script>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
