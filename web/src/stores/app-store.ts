import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Mode } from '../domain/app'
import { TimeFormat } from '../domain/clock'

interface IAppState {
  username: string | undefined,
  activeMode: Mode,
  images: string[],
  // Background
  homeBackground: string,
  focusBackground: string,
  activeBackground: string,
  // Music Player
  showMusicPlayer: boolean,
  showSettingsContent: boolean,
  //Quotes
  weekDayQuotes: {
    day: string,
    stat1: string,
    stat2: string,
  },
  quoteStore: {
    quote: string,
    author: string,
  },
  //stat
  reportFrequency: string | undefined,
  timeFormat: string,
}

interface IAppActions {
  setUsername: (username: string) => void
  setActiveMode: (activeMode: Mode) => void
  setShowMusicPlayer: (showMusicPlayer: boolean) => void
  setShowSettingsContent: (showSettingsContent: boolean) => void
  setReportFrequency: (freq: string) => void
  setFocusBackground: (image: string) => void
  setHomeBackground: (image: string) => void
  setTimeFormat: (TimeFormat: string) => void
}

interface IAppStore extends IAppState, IAppActions { }

const persistConfig = {
  name: 'app-store',
}

const useAppStore = create<IAppStore>()(persist((set, get) => ({
  username: undefined,
  activeMode: Mode.Home,
  images: ["temple", "tajmahal", "himalayas_with_houses", "tajmahal_dark"],
  // Background
  homeBackground: 'temple',
  focusBackground: 'himalayas_with_houses',
  activeBackground: 'temple',
  // Music Player
  showMusicPlayer: false,
  // Stats
  reportFrequency: undefined,
  //Clock
  timeFormat: TimeFormat.MilitaryTimeFormat,
  showSettingsContent: false,
  quoteStore: {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  setUsername: (username: string) => set({ username }),
  setActiveMode: (activeMode: Mode) => {
    const { homeBackground, focusBackground } = get()
    const activeBackground = activeMode === Mode.Home ? homeBackground : focusBackground
    set({ activeMode, activeBackground })
  },
  setShowMusicPlayer: (showMusicPlayer: boolean) => set({ showMusicPlayer }),
  setShowSettingsContent: (showSettingsContent: boolean) => set({ showSettingsContent }),
  weekDayQuotes: {
    day: "Friday",
    stat1: "Fantastic Friday",
    stat2: "Celebrate your hard work this week. ",
  },
  setReportFrequency: (freq) => set({ reportFrequency: freq }),
  setFocusBackground: (image) => set({ focusBackground: image }),
  setHomeBackground: (image) => set({ homeBackground: image }),
  setTimeFormat: (timeFormat) => set({ timeFormat: timeFormat })

}), persistConfig))

export default useAppStore