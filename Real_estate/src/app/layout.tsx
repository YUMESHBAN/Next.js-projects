import type {Metadata} from 'next'
import {Space_Grotesk} from 'next/font/google'
import './globals.css'
import {ThemeProvider} from '@/components/ThemeProvider'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Flatter Real Estate',
  description:
    'Pixel-perfect real estate landing page powered by Next.js, Tailwind, and Sanity CMS.',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} bg-cream text-charcoal dark:bg-dark-bg dark:text-dark-text`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
