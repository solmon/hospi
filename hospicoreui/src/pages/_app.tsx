import '@/styles/globals.css'


import AuthLayout from "../layouts/Auth";
import AdminLayout from "../layouts/Admin";
import RTLLayout from "../layouts/RTL"; // Chakra imports

import type { AppProps } from 'next/app'
import {useEffect, useState} from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import theme from "../theme/theme";
// import React from "react";
// import ReactDOM from "react-dom";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from '../layouts/RTL';
// import dynamic from 'next/dynamic'
// const Chart = dynamic(() =>import { HashRouter, Route, Routes, Navigate } from "react-router-dom", { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);
  return render ? (
    <ChakraProvider theme={theme} resetCSS={false}>
      {/* <Component {...pageProps} /> */}
      <HashRouter>
        <Routes>
          <Route path={`/auth`} element={<AuthLayout />} />
          <Route path={`/admin`} element={<AdminLayout />} />
          <Route path={`/rtl`} element={<RTLLayout />} />
          <Route path={`/`} element={<Navigate to="/admin/dashboard" />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  ) : null;  
}
