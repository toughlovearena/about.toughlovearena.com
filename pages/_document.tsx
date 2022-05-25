import Document, { Html, Head, Main, NextScript } from 'next/document'
import { isProd } from '../data/constants'
import { GTAG_ID } from '../utils/gtag'

// https://mariestarck.com/add-google-analytics-to-your-next-js-application-in-5-easy-steps/
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {isProd && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GTAG_ID}', {
                    page_path: window.location.pathname,
                  });
              `}}/>
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
