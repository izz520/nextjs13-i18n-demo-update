import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { dir } from 'i18next'


const inter = Inter({ subsets: ['latin'] })
import { ILanguages, languages } from '@/i18n/config'
import Header from '@/components/Header'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}: {
  children: React.ReactNode,
  params: {
    lng:ILanguages
  }
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
