import "../src/fake-db";
import Head from "next/head";
import Router from "next/router";
import "nprogress/nprogress.css";
import nProgress from "nprogress";
import MuiTheme from "theme/MuiTheme";
import "simplebar/dist/simplebar.min.css";
import OpenGraphTags from "utils/OpenGraphTags";
import React, { Fragment, useEffect } from "react";
import GoogleAnalytics from "utils/GoogleAnalytics";
import { AppProvider } from "contexts/app/AppContext";
import createEmotionCache from "../src/createEmotionCache";
import { CacheProvider } from "@emotion/react"; // Client-side cache, shared for the whole session of the user in the browser.

const clientSideEmotionCache = createEmotionCache();
// export const cache = createCache({ key: 'css', prepend: true })
//Binding events.
Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done()); // small change

nProgress.configure({
  showSpinner: false
});

const App = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps
}) => {
  const Layout = Component.layout || Fragment;
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <GoogleAnalytics />
        <OpenGraphTags />
      </Head>
      <AppProvider>
        <MuiTheme>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MuiTheme>
      </AppProvider>
    </CacheProvider>;
}; // Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps };
// };


export default App;