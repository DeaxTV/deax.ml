import Document, { Html, Head, Main, NextScript } from 'next/document'
import config from '../../config';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
            <meta name="googlebot" content="index" />
            <meta name="googlebot-news" content="snippet" />
            <meta name="robots" content="follow" />
            <meta name="description" content={config.meta.description} />
            <meta name="theme-color" content={config.meta.themeColor} />
            <link rel="canonical" href={config.meta.url} />
            <meta name="publisher" content="2022, Deax" />
            <meta name="author" content="deaxlive@gmail.com" />
            <link rel="icon" href={config.meta.image} type="image/x-icon" /> 
            <link href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument