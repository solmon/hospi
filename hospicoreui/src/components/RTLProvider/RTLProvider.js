import { CacheProvider } from "@emotion/react";
import React, { Component, useEffect }  from 'react';
import createCache from "@emotion/cache";
import rtl from "stylis-plugin-rtl";
// NB: A unique `key` is important for it to work!
const options = {
  rtl: { key: "css-ar", stylisPlugins: [rtl] },
  ltr: { key: "css-en" },
};
export function RtlProvider({ children }) {
  var dir = "ltr"; 

  useEffect(()=>{
    dir = document.documentElement.dir == "ar" ? "rtl" : "ltr";
  },[]);
  // if (process.browser) {
    
  // }
  const cache = createCache(options[dir]);
  return <CacheProvider value={cache} children={children} />;
}
