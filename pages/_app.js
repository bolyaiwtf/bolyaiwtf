import '../styles/base.scss';

import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
