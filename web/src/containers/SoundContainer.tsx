"use client";
import useAppStore from "../stores/app-store";
import { PlayMode } from "../domain/audio";
import { SoundComponent } from "../components/SoundComponent";

const SoundContainer = () => {

  const { setSoundSelected, sounds, playMode, setPlayMode } = useAppStore();

  const handlePlayMode = () => {
    // if (soundSelected != 'None') {
    if (playMode === PlayMode.Stopped) {
      setPlayMode(PlayMode.Playing)
    }
    else
      setPlayMode(PlayMode.Stopped)
    // }
  }

  const handleSoundSelection = (sound: string) => {
    setSoundSelected(sound)
    handlePlayMode()
  }

  const playOrPauseText = playMode === PlayMode.Stopped ? 'Play' : 'Pause'

  return (
    <SoundComponent sounds={sounds} text={playOrPauseText} handlePlayMode={handlePlayMode} handleSoundSelection={handleSoundSelection} />
  )
}

export default SoundContainer