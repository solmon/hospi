"use client"
import { ReactNode } from 'react'
import {
    Box,
    useDisclosure
} from '@chakra-ui/react'
import { AppShell } from '@hp-ui/core'
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav'

import { Header, HeaderProps } from './header'
import { Footer, FooterProps } from './footer'

export interface MainLayoutProps {
    children: ReactNode
    headerProps?: HeaderProps
    footerProps?: FooterProps
}

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
    const { children, headerProps, footerProps } = props
    const { isOpen, onToggle } = useDisclosure({
        defaultIsOpen: true,
    })
    return (
        <Box h='calc(100vh)'>
        <SkipNavLink>Skip to content</SkipNavLink>
        <AppShell
            variant="static"
            minH="100%"
            navbar={<Box
                height="48px"
                borderBottomWidth="1px"
                position="sticky"
                top="0"
                bg="white"
                _dark={{
                    bg: 'gray.800',
                }}
            >
                <Header {...headerProps} />
            </Box>
            }  
            footer={
                <Footer {...footerProps} />
            }
            children={
                <Box as="main" height="4000px" p="8">
                    <SkipNavContent />
                    {children}
                </Box>
            }
        />
    </Box>
    )
}
