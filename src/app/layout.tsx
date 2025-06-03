import type { Metadata } from 'next'

import './globals.css'
import { MonitorSmartphone, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Digital Shop',
  description: 'a fullstack project',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main className="flex min-h-screen flex-col justify-between">
          <header className="fixed flex h-20 w-full items-center justify-between border-b bg-white px-20">
            <Link className="flex items-center gap-x-2" href="/">
              <MonitorSmartphone />
              <h1 className="text-2xl font-bold">Digital Shop</h1>
            </Link>
            <ShoppingCart />
          </header>

          <div className="mt-28 px-20">{children}</div>

          <footer className="flex h-10 w-full items-center justify-center bg-black text-white">
            <p>&copy; 2025 Amir Hossein Nasrollahi. All rights reserved.</p>
          </footer>
        </main>
      </body>
    </html>
  )
}
