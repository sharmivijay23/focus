import { create } from 'zustand'
import { persist } from 'zustand/middleware'

enum Mode {
  Home = "Home",
  Focus = "Focus",
}

interface IAppState {
  username: string | undefined,
  activeMode: Mode,
  showMusicPlayer: boolean,
  showSettingsContent: boolean,
}

interface IAppActions {
  setUsername: (username: string) => void
  setActiveMode: (activeMode: Mode) => void
  setShowMusicPlayer: (showMusicPlayer: boolean) => void
  setShowSettingsContent: (showSettingsContent: boolean) => void
}

interface IAppStore extends IAppState, IAppActions { }

const persistConfig = {
  name: 'app-store',
}

const useAppStore = create<IAppStore>()(persist((set) => ({
  username: undefined,
  activeMode: Mode.Home,
  showMusicPlayer: false,
  showSettingsContent: false,
  quoteStore: {
    quote: "Believe you can and you're halfway there. ",
    author: "Theodore Roosevelt",
  },
  setUsername: (username: string) => set({ username }),
  setActiveMode: (activeMode: Mode) => set({ activeMode }),
  setShowMusicPlayer: (showMusicPlayer: boolean) => {
    console.log("setShowMusicPlayer", showMusicPlayer)
    set({ showMusicPlayer })
  },
  setShowSettingsContent: (showSettingsContent: boolean) => {
    console.log("showSettings", showSettingsContent)
    set({ showSettingsContent })
  },
  weekDayQuotes: {
    day: "Friday",
    stat1: "Fantastic Friday",
    stat2: "Celebrate your hard work this week. ",
  }
}), persistConfig))

export default useAppStore