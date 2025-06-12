import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/sashi0034.github.io' : ''

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'sashi portfolio',
  description: 'Welcome to my portfolio website',
  metadataBase: new URL(isProd ? 'https://sashi0034.github.io' : 'http://localhost:3000'),
  manifest: `${basePath}/manifest.json`,
  icons: {
    icon: `${basePath}/favicon.ico`,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href={`${basePath}/globals.css`}
        />
        <link
          rel="icon"
          href={`${basePath}/favicon.ico`}
          type="image/x-icon"
        />
      </head>
      <body className={`${inter.variable} font-sans bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  )
}