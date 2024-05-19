'use client'

import NameForm from "../containers/NameForm";
import QuoteContainer from "../containers/QuoteContainer";
import useAppStore from "../stores/app-store";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import OptionBar from "../containers/OptionBar";
import ClockContainer from "../containers/ClockContainer";
import MusicPlayerContainer from "../containers/MusicPlayerContainer";
import { getBackgroundById } from "../utils/background-utils";
import PomodoroContainer from "../containers/PomodoroContainer";
import PomodoroHelper from "../components/PomodoroHelper";
import SettingsContainer from "../containers/SettingsContainer";

export function Index() {
  const { username, activeBackground } = useAppStore();
  const bgUrl = getBackgroundById(activeBackground);

  let view = null;
  if (username) {
    view = <div className="h-full flex flex-col justify-between">
      <PomodoroHelper />
      <QuoteContainer />
      <ClockContainer />
      <PomodoroContainer />
      <OptionBar />
      <MusicPlayerContainer />
      <SettingsContainer />
    </div>
  } else {
    view = <div className='flex w-full h-full justify-center items-center'><NameForm /></div>
  }

  return (
    <main className="h-screen w-screen bg-cover" style={{ backgroundImage: `url(${bgUrl})` }}>
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
