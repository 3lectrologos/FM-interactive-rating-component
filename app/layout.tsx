import type { Metadata } from 'next'
import { Overpass } from 'next/font/google'
import './globals.css'

const overpass = Overpass({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Interactive rating component',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={overpass.className}>
      <main>
        {children}
      </main>
      </body>
    </html>
  )
}
