"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { MainLayout, MainLayoutProps } from '@hp-ui/landing'
import { SaasProvider } from "@hp-ui/react";
import theme from "@/theme/index"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const { children,announcement, header, footer } = ...children;
  const props: MainLayoutProps = {
    children: children
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <SaasProvider theme={theme}>
          <MainLayout {...props}>
          </MainLayout>
        </SaasProvider>
      </body>
    </html>
  )
}
