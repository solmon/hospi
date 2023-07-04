import {MainLayoutWrapper} from "@/components/layout/mainlayout"
import { MainLayoutProps } from '@hp-ui/landing'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const props: MainLayoutProps = {
      children: children
    }
    return (
      <>
        {children}
      </>
      // <MainLayoutWrapper {...props}>      
      // </MainLayoutWrapper>
    )  
}
