import { MenuLayoutProps } from '@hp-ui/landing'
import {MenuLayoutWrapper} from '@/components/layout/menulayout'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const { children,announcement, header, footer } = ...children;
  const props: MenuLayoutProps = {
    children: children,
    announcementProps : {
      title: 'Time',
      description: 'Time Description',
      href: "www.google.com"
    }
  }
  return (
    <MenuLayoutWrapper {...props}>      
    </MenuLayoutWrapper>
  )
}
