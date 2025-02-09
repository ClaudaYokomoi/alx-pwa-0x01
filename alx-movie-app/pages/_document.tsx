import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Link to the manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* PWA Theme Color */}
        <meta name="theme-color" content="#0070f3" />

        {/* Favicon for additional browser support */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
