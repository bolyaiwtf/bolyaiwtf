import Document, { Html, Head, Main, NextScript } from 'next/document';
import convert from 'color-convert';

import config from '../config.json';

class BolyaiWTF extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const hsl = convert.hex.hsl(config.app.baseColor);
    const styles = `html{--base-h:${hsl[0]};--base-s:${hsl[1]}%;--base-l:${hsl[2]}%}`;

    return (
      <Html lang="en">
        <Head>
          <style>{styles}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default BolyaiWTF;
