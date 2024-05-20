import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import 'flowbite';
import { appWithTranslation } from 'next-i18next'
import { Flowbite } from 'flowbite-react';
import type { CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: "bg-accent hover:brightness-90 text-white",
      transparent: "bg-transparent text-white hover:text-white/90",
      outline: "bg-black/30 hover:bg-accent text-white",
    },
  },
};

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Flowbite theme={{ theme: customTheme }}>
        <Head>
          <title>Welcome to web!</title>
        </Head>
        <Component {...pageProps} />
      </Flowbite>
    </>
  );
}

export default appWithTranslation(CustomApp);
