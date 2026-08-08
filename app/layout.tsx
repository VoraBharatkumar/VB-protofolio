import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Vora Bharat — Executive Technology Leader & Principal Architect',
  description:
    'Vora Bharat is a senior executive technology advisor and principal interface architect engineering high-stakes web platforms, enterprise design systems, and digital product infrastructure.',
  keywords: [
    'Vora Bharat',
    'Executive Technology Leader',
    'Fractional CTO',
    'Principal Architect',
    'Enterprise Software',
    'Design Systems Architect',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F8FAFC',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable} bg-[#F8FAFC] text-[#1E3A8A]`}>
      <body className="font-sans antialiased bg-[#F8FAFC] text-[#1E3A8A] selection:bg-[#2563EB]/20 selection:text-[#1E3A8A] overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
