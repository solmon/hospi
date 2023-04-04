import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import app from '@/lib/app';
// import {useEffect, useState} from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import theme from "@/theme/theme";
import type { AppPropsWithLayout } from "@/types";
import AdminLayout from '@/layouts/AdminLayout';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
// import React from "react";
// import ReactDOM from "react-dom";
// import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

// import dynamic from 'next/dynamic'
// const Chart = dynamic(() =>import { HashRouter, Route, Routes, Navigate } from "react-router-dom", { ssr: false });

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const { session, ...props } = pageProps;
  const getLayout = Component.getLayout || ((page) => <AdminLayout>{page}</AdminLayout>);

  // const [render, setRender] = useState(false);
  // useEffect(() => setRender(true), []);
  // return render ? (
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <SessionProvider session={session}>
        <Toaster />
        {getLayout(<Component {...props} />)}
      </SessionProvider>
      {/* <HashRouter>
        <Routes>
          <Route path={`/auth`} element={<AuthLayout />} />
          <Route path={`/admin/*`} element={<AdminLayout />} />
          <Route path={`/rtl`} element={<RTLLayout />} />
          <Route path={`/`} element={<Navigate to="/admin/dashboard" />} />
        </Routes>
      </HashRouter> */}
    </ChakraProvider>
  );
  // ) : null;  
}
