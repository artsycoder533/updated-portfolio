import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClassicHeader from './components/ClassicHeader';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <main>
      <body className={inter.className}>
        <ClassicHeader />
        {children}
        </body>
      </main>
      
    </html>
  )
}