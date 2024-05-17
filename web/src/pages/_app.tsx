import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import 'flowbite';
import { appWithTranslation } from 'next-i18next'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to web!</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(CustomApp);
