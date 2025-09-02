/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import config from '@payload-config';
import '@payloadcms/next/css';
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts';
import type { ServerFunctionClient } from 'payload';
import type React from 'react';
import { importMap } from './import-map';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import './style.css';

type Args = {
  children: React.ReactNode;
};

const serverFunction: ServerFunctionClient = async (args) => {
  'use server';
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  });
};

const Layout = ({ children }: Args) => (
  <RootLayout
    config={config}
    importMap={importMap}
    serverFunction={serverFunction}
    htmlProps={{ className: `${GeistSans.variable} ${GeistMono.variable}` }}
  >
    {children}
  </RootLayout>
);

export default Layout;
