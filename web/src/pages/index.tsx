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
import { Mode } from "../domain/app";

export function Index() {
  const { username, activeMode, activeBackground } = useAppStore();
  const bgUrl = getBackgroundById(activeBackground);

  let view = null;
  if (!username) {
    view = <div className='flex w-full h-full justify-center items-center'><NameForm /></div>;
  } else {
    if (activeMode === Mode.Home) {
      view = (
        <div className="h-full flex flex-col justify-between filter brightness-100 z-10">
          <PomodoroHelper />
          <QuoteContainer />
          <ClockContainer />
          <OptionBar />
          <MusicPlayerContainer />
          <SettingsContainer />
        </div>
      );
    } else { // (activeMode === Mode.Focus)
      view = (
        <div className="h-full flex flex-col justify-between filter brightness-100 z-10">
          <PomodoroHelper />
          <div></div>
          <PomodoroContainer />
          <OptionBar />
          <MusicPlayerContainer />
          <SettingsContainer />
        </div>
      );
    }
  }

  return (
    <main className="h-screen w-screen overflow-hidden">
      <div className="absolute h-screen w-screen bg-cover filter brightness-75 -z-100" style={{ backgroundImage: `url(${bgUrl})` }} />
      {view}
    </main>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
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
