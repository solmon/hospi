// Chakra imports
import {
  Portal,
  useDisclosure,
  Stack,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import Configurator from "@/components/Configurator/Configurator";
import Footer from "@/components/Footer/Footer.js";
import {
  ArgonLogoDark,
  ArgonLogoLight,
  ChakraLogoDark,
  ChakraLogoLight,
} from "../components/Icons/Icons";
// Layout components
import AdminNavbar from "@/components/Navbars/AdminNavbar.js";
import Sidebar from "@/components/Sidebar/Sidebar.js";
import React, { useState, createElement, useEffect } from "react";
// import { Navigate, Route, Routes } from "react-router-dom";
import routes from "@/routes";
// Custom Chakra theme
import FixedPlugin from "@/components/FixedPlugin/FixedPlugin";
// Custom components
import MainPanel from "@/components/Layout/MainPanel";
import PanelContainer from "@/components/Layout/PanelContainer";
import PanelContent from "@/components/Layout/PanelContent";
import bgAdmin from "@/assets/img/admin-background.png";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}, props: any) {

  const { ...rest } = props;
  // states and functions
  const [fixed, setFixed] = useState(false);
  const { colorMode } = useColorMode();
  // functions for changing the states from components
  const getRoute = () => {
    return window.location.pathname !== "/admin/full-screen-maps";
  };
  const getActiveRoute = (routes: any): any => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].views);
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else {
        if (typeof window !== "undefined" &&
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  // This changes navbar state(fixed or not)
  const getActiveNavbar = (routes: any): any => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbar(routes[i].views);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (typeof window !== "undefined") {
          if (
            window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
          ) {
            if (routes[i].secondaryNavbar) {
              return routes[i].secondaryNavbar;
            }
          }
        }
      }
    }
    return activeNavbar;
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    document.documentElement.dir = "ltr";
  });
  // Chakra Color Mode
  return (
    <Box>
      <Box
        minH='40vh'
        w='100%'
        position='absolute'
        bgImage={colorMode === "light" ? bgAdmin : "none"}
        bg={colorMode === "light" ? bgAdmin : "navy.900"}
        bgSize='cover'
        top='0'
      />
      <Sidebar
        routes={routes}
        logo={
          <Stack direction='row' spacing='12px' align='center' justify='center'>
            {colorMode === "dark" ? (
              <ArgonLogoLight w='74px' h='27px' />
            ) : (
              <ArgonLogoDark w='74px' h='27px' />
            )}
            <Box
              w='1px'
              h='20px'
              bg={colorMode === "dark" ? "white" : "gray.700"}
            />
            {colorMode === "dark" ? (
              <ChakraLogoLight w='82px' h='21px' />
            ) : (
              <ChakraLogoDark w='82px' h='21px' />
            )}
          </Stack>
        }
        display='none'
        {...rest}
      />
      <MainPanel
        w={{
          base: "100%",
          xl: "calc(100% - 275px)",
        }}>
        <Portal>
          <AdminNavbar
            onOpen={onOpen}
            brandText={getActiveRoute(routes)}
            secondary={getActiveNavbar(routes)}
            fixed={fixed}
            {...rest}
          />
        </Portal>
        <PanelContent>
          <PanelContainer>
            {children}
          </PanelContainer>
        </PanelContent>
        <Footer />
        <Portal>
          <FixedPlugin
            secondary={getActiveNavbar(routes)}
            fixed={fixed}
            onOpen={onOpen}
          />
        </Portal>
        <Configurator
          secondary={getActiveNavbar(routes)}
          isOpen={isOpen}
          onClose={onClose}
          isChecked={fixed}
          onSwitch={(value) => {
            setFixed(value);
          }}
        />
      </MainPanel>
    </Box>
  );
}
