import { MenuLayoutProps } from '@hp-ui/landing'
import {MenuLayoutWrapper} from '@/components/menulayout'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const { children,announcement, header, footer } = ...children;
  const props: MenuLayoutProps = {
    children: children
  }
  return (
    <MenuLayoutWrapper {...props}>      
    </MenuLayoutWrapper>
  )
}
