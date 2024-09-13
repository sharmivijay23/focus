import { create } from 'zustand'
import { PlayMode } from '../domain/audio'
import { persist } from 'zustand/middleware'
interface IAudioState {
  //sound
  soundSelected: string,
  sounds: string[],
  playMode: string,
}

interface IAudioActions {
  setSoundSelected: (soundSelected: string) => void
  setPlayMode: (val: string) => void
}

interface IAudioStore extends IAudioState, IAudioActions { }

const persistConfig = {
  name: 'audio-settings'
}

export const useAudioStore = create<IAudioStore>()(persist((set, get) => ({
  //Sound
  soundSelected: 'None',
  sounds: ['None', 'Rain', 'Cafe Vibes', 'Lightning Wings', 'Night Symphony with Traffic', 'Vintage Train Chime', 'Forest Bonfire'],
  playMode: PlayMode.Stopped,
  setSoundSelected: (soundName: string) => set({ soundSelected: soundName }),
  setPlayMode: (Val) => set({ playMode: Val }),
}), persistConfig))