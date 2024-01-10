import Head from "next/head";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";
import { pageview } from "../utils/gtag";

// https://mariestarck.com/add-google-analytics-to-your-next-js-application-in-5-easy-steps/
// This default export is required in a new `pages/_app.js` file.
export default function AboutApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url)
    };

    //When the component is mounted, subscribe to router changes
    //and log those page views
    Router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        {/* universal meta */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
