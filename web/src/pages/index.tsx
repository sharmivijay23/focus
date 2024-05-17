'use client'

import NameForm from "../containers/NameForm";
import useAppStore from "../stores/app-store";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export function Index() {
  const bgUrl = "/assets/backgrounds/in/temple.png";
  const { username } = useAppStore();

  let view = null;
  if (username) {
    view = <div>Welcome, {username}!</div>
  } else {
    view = <div className='flex w-full h-full justify-center items-center'><NameForm /></div>
  }

  return (
    <main className="h-screen w-screen bg-cover" style={{backgroundImage: `url(${bgUrl})`}}>
      {view}
    </main>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common'
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default Index;
