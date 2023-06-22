import {MainLayoutWrapper} from "@/components/mainlayout"
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
      <MainLayoutWrapper {...props}>      
      </MainLayoutWrapper>
    )  
}
