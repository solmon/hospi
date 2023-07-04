import { ReactNode } from 'react'
import {
    Badge,
    BadgeProps,
    Box,
    Button,
    DarkMode,
    Flex,
    Heading,
    HStack,
    IconButton,
    LightMode,
    Menu,
    MenuButton,
    MenuList,
    Spacer,
    Square,
    Text,
    useDisclosure,
    Center, Image, layout
} from '@chakra-ui/react'

import {
    FiHome,
    FiUsers,
    FiSettings,
    FiHash,
    FiStar,
    FiChevronsLeft,
    FiChevronsRight,
    FiToggleLeft,
    FiSidebar,
    FiSquare,
    FiHelpCircle
} from 'react-icons/fi'

import { FaHome, FaUsers, FaCog, FaHashtag } from 'react-icons/fa'

import { AppShell } from '@hp-ui/core'
import {
    Sidebar,
    SidebarSection,
    SidebarToggleButton,
    SidebarOverlay,
    NavGroup,
    NavItem,
} from '@hp-ui/core'
import {
    PersonaAvatar,
    Link
} from '@hp-ui/react'
import {
    DataTable
} from '@hp-ui/data-table'
import { Logo } from './logo'
// import {
//     Menu,
//     MenuButton, MenuList,
//     MenuItem
// } from '@saas-ui/menu'

import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav'

import { Header, HeaderProps } from './header'
import {
    AnnouncementBanner,
    AnnouncementBannerProps,
} from '../announcement-banner'
import { Footer, FooterProps } from './footer'
// <Box h='calc(100vh)'>

export interface MenuLayoutProps {
    children: ReactNode
    announcementProps?: AnnouncementBannerProps
    headerProps?: HeaderProps
    footerProps?: FooterProps
}

export const MenuLayout: React.FC<MenuLayoutProps> = (props) => {
    const { children, announcementProps, headerProps, footerProps } = props
    const { isOpen, onToggle } = useDisclosure({
        defaultIsOpen: true,
    })
    return (
        <Box h='calc(100vh)'>
            <SkipNavLink>Skip to content</SkipNavLink>
            <AnnouncementBanner {...announcementProps} />
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
                sidebar={
                    <Box
                        // width="300px"
                        height="calc(100vh - 48px)"
                        borderRightWidth="1px"
                        position="sticky"
                        // top="48px"
                        p="8"
                    >
                        <Sidebar
                            breakpoints={{ base: false }}
                            variant={isOpen ? 'default' : 'condensed'}
                            transition="width"
                            transitionDuration="normal"
                            width={isOpen ? '280px' : '14'}
                            minWidth="auto"
                        >
                            <SidebarSection direction={isOpen ? 'row' : 'column'} height="32px">
                                <Logo width="24px" mb="1" display={isOpen ? 'block' : 'none'} />
                                <Spacer />
                                <IconButton
                                    onClick={onToggle}
                                    variant="ghost"
                                    size="sm"
                                    icon={isOpen ? <FiChevronsLeft /> : <FiChevronsRight />}
                                    aria-label="Toggle Sidebar"
                                />
                            </SidebarSection>

                            <SidebarSection flex="1" overflowY="auto" overflowX="hidden">
                                <NavGroup>
                                    <NavItem icon={<FiHome size="1.1em" />} isActive>Registration</NavItem>
                                    <NavItem icon={<FiStar size="1.1em" />}>Search</NavItem>
                                </NavGroup>
                            </SidebarSection>
                            <SidebarOverlay zIndex="1" />
                        </Sidebar>
                    </Box>
                }
                footer={
                    <Footer {...footerProps} />
                }
                children={
                    <Box as="main" p="8">
                        <SkipNavContent />
                        {children}
                    </Box>
                }
            />
        </Box>
    )
}
