import '../styles/globals.css';
import type { AppProps } from 'next/app'
import app from '../lib/app';
import { ChakraProvider } from '@chakra-ui/react'
import theme from "../theme/theme";
import type { AppPropsWithLayout } from "../types";
import { appWithTranslation } from 'next-i18next';
import AdminLayout from '../layouts/AdminLayout';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';

// import dynamic from 'next/dynamic'
// const Chart = dynamic(() =>import { HashRouter, Route, Routes, Navigate } from "react-router-dom", { ssr: false });

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const { session, ...props } = pageProps;
  const getLayout = Component.getLayout || ((page) => <AdminLayout>{page}</AdminLayout>);

  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <SessionProvider session={session}>
        <Toaster />
        {getLayout(<Component {...props} />)}
      </SessionProvider>      
    </ChakraProvider>
  );
}

export default appWithTranslation<never>(MyApp);
