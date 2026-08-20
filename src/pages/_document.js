import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import StructuredData from '../components/StructuredData/StructuredData'
import { person } from '../constants/profile'
import { pageMeta } from '../constants/pageMeta'

const ogImage = `${person.siteUrl}/og-image.png`

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
        pathname: ctx.pathname,
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
    const meta = pageMeta[this.props.pathname] || pageMeta['/']
    const { title, description } = meta
    const canonicalUrl = person.siteUrl + this.props.pathname

    return (
      <Html lang='en-GB'>
        <Head>
          {/* <!-- Primary Meta Tags --> */}
          <meta name="title" content={title} />
          <meta name="description" content={description} />
          <link rel="canonical" href={canonicalUrl} />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="profile" />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={ogImage} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={canonicalUrl} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
          <meta property="twitter:image" content={ogImage} />

          {/* <!-- Machine-readable / agentic discoverability --> */}
          <link rel="alternate" type="application/json" href="/resume.json" title="Résumé (JSON Resume)" />
          {this.props.pathname === '/' && (
            <link rel="related" href={person.siteUrl + '/fit'} title={pageMeta['/fit'].title} />
          )}
          <StructuredData />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}