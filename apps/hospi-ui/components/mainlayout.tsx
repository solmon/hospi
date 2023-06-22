"use client"
// import '../src/globals.css'
import { Inter } from 'next/font/google'
import { MainLayout, MainLayoutProps } from '@hp-ui/landing'
import { SaasProvider } from "@hp-ui/react";
import theme from "@/theme/index"

const inter = Inter({ subsets: ['latin'] })
export const MainLayoutWrapper = (pageargs:MainLayoutProps 
)=> {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SaasProvider theme={theme}>
          <MainLayout {...pageargs}>
          </MainLayout>
        </SaasProvider>
      </body>
    </html>
  )
}
