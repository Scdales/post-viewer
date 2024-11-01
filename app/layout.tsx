import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ReactNode } from 'react'
import StoreProvider from '@/lib/components/StoreProvider/StoreProvider'
import { getPosts } from '@/lib/services'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'Posts Galore',
  description: 'View the latest posts'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  const posts = await getPosts()

  return (
    <StoreProvider posts={posts}>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
      </html>
    </StoreProvider>
  )
}
