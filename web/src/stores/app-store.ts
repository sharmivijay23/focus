import { create } from 'zustand'

interface IAppState {
  username: string | undefined
}

interface IAppActions {
  setUsername: (username: string) => void
}

interface IAppStore extends IAppState, IAppActions {}

const useAppStore = create<IAppStore>((set) => ({
  username: undefined,
  setUsername: (username) => set({ username }),
}))

export default useAppStore