import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Built By Crook - GFX Portfolio',
  description:
    'Creative graphics and design portfolio showcasing visual storytelling',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
