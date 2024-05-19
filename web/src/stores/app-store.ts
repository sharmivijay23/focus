import { create } from 'zustand'

interface IAppState {
  username: string | undefined
}

interface IAppActions {
  setUsername: (username: string) => void
}

interface IAppStore extends IAppState, IAppActions { }

const useAppStore = create<IAppStore>((set) => ({
  username: undefined,
  setUsername: (username) => set({ username }),
  quoteStore: {
    quote: "Believe you can and you're halfway there. ",
    author: "Theodore Roosevelt",
  },
  weekDayQuotes: {
    day: "Friday",
    stat1: "Fantastic Friday",
    stat2: "Celebrate your hard work this week. ",
  }
}))

export default useAppStore