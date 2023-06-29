"use client"
// import '../src/globals.css'
import { Inter } from 'next/font/google'
import { MainLayout, MainLayoutProps } from '@hp-ui/landing'
import { AuthProvider } from "@hp-ui/auth";
import { SaasProvider } from "@hp-ui/react";
import theme from "@/theme/index"

const inter = Inter({ subsets: ['latin'] })
export const MainLayoutWrapper = (pageargs: MainLayoutProps
) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SaasProvider theme={theme}>
          <AuthProvider>
            <MainLayout {...pageargs}>
            </MainLayout>
          </AuthProvider>
        </SaasProvider>
      </body>
    </html>
  )
}
