import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { MusicMode } from '../domain/audio'

interface IMusicState {
  musicList: string[],
  playlist: string,
  musicMode: string,
}

interface IMusicActions {
  setMusicPlaylist: (music: string) => void
  setMusicMode: (mode: string) => void
}

interface IMusicStore extends IMusicState, IMusicActions { }

const persistConfig = {
  name: 'music-settings'
}


export const useMusicStore = create<IMusicStore>()(persist((set, get) => ({
  //Music
  musicList: ["Lo-Fi Beats", "Mellow Morning Mix", "Peaceful Piano", "Acoustic Coffeehouse", "Indie Study Beats"],
  playlist: 'Lo-Fi Beats',
  musicMode: MusicMode.Stopped,
  setMusicPlaylist: (music) => set({ playlist: music }),
  setMusicMode: (mode) => set({ musicMode: mode }),
}), persistConfig))