import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import 'flowbite';

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

export default CustomApp;
