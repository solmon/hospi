"use client"
// import '@/app/globals.css'
import { Inter } from 'next/font/google'
import { MenuLayout, MenuLayoutProps } from '@hp-ui/landing'
import { SaasProvider } from "@hp-ui/react";
import { AuthProvider } from "@hp-ui/auth";
import theme from "@/theme/index"

const inter = Inter({ subsets: ['latin'] })

export const MenuLayoutWrapper = (props: MenuLayoutProps) => {
  // const { children,announcement, header, footer } = ...children;
  //   const props: MenuLayoutProps = {
  //     children: children
  //   }
  return (
    <html lang="en">
      <body className={inter.className}>
        <SaasProvider theme={theme}>
          <AuthProvider>
            <MenuLayout {...props}>
            </MenuLayout>
          </AuthProvider>
        </SaasProvider>
      </body>
    </html>
  )
}
