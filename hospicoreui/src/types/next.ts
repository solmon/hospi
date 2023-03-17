import {NextPage} from 'next';
import {Session} from 'next-auth';
import {AppProps} from 'next/app';
import { ReactElement, ReactNode } from 'react';


export type NextPageWithLayout<P = Record<string, unknown>> = NextPage<P> & {
    getLayout?: (page:ReactElement)=> ReactNode;
};

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
    PageProps: {
        session?: Session;
    };
};

