import { useEffect, useRef } from "react"
import { PlayMode } from "../domain/audio"
import useAppStore from "../stores/app-store"
import { getSoundURL } from '../utils/sound-utils'

export const PlaySoundHelper = () => {

  const { playMode, soundSelected } = useAppStore()
  const audioRef = useRef<HTMLAudioElement>();

  useEffect(() => {
    if (playMode === PlayMode.Playing) {
      const soundURL = getSoundURL(soundSelected)
      const sound = new Audio(soundURL);

      if (audioRef.current) {
        audioRef.current.pause();
        // audioRef.current.currentTime = 0;
      }
      if (soundSelected != undefined || soundSelected != 'None') {
        audioRef.current = sound;
        sound.play();
      }
      else {
        if (audioRef.current) {
          audioRef.current.pause()
        }
      }
      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
        }
      }
    }
  }, [playMode, soundSelected])


  return null
}