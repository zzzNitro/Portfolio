import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          {/* <!-- Primary Meta Tags --> */}
          <title>Pablo's Dexforge</title>
          <meta name="title" content="Pablo's Dexforge" />
          <meta name="description" content="Who is Pablo? Find out here!" />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://pbreactprtfl.herokuapp.com/" />
          <meta property="og:title" content="Pablo's Dexforge" />
          <meta property="og:description" content="Who is Pablo? Find out here!" />
          <meta property="og:image" content="https://www.canva.com/design/DAFDj9zaj8E/n43MxTAKOovUzpoSxtoJRA/view?utm_content=DAFDj9zaj8E&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://pbreactprtfl.herokuapp.com/" />
          <meta property="twitter:title" content="Pablo's Dexforge" />
          <meta property="twitter:description" content="Who is Pablo? Find out here!" />
          <meta property="twitter:image" content="https://www.canva.com/design/DAFDj9zaj8E/n43MxTAKOovUzpoSxtoJRA/view?utm_content=DAFDj9zaj8E&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}