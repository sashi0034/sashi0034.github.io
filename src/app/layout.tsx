import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const isProd = process.env.NODE_ENV === 'production'
const basePath = ''

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// メタデータの設定を環境に応じて変更
const metadata: Metadata = {
  title: 'sashi portfolio',
  description: 'Welcome to my portfolio website',
  metadataBase: new URL(isProd ? 'https://sashi0034.github.io' : 'http://localhost:3000'),
}

// 本番環境の場合のみmanifestとアイコンを追加
if (isProd) {
  metadata.manifest = `${basePath}/manifest.json`
  metadata.icons = {
    icon: `${basePath}/favicon.ico`,
  }
}

export { metadata }

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
        {/* 本番環境の場合のみファビコンを追加 */}
        {isProd && (
          <link
            rel="icon"
            href={`${basePath}/favicon.ico`}
            type="image/x-icon"
          />
        )}
      </head>
      <body className={`${inter.variable} font-sans bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  )
}