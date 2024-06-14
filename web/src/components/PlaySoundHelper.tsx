import { useEffect, useRef } from "react"
import { PlayMode } from "../domain/audio"
import { getSoundURL } from '../utils/sound-utils'
import { useAudioStore } from "../stores/audio-store"

export const PlaySoundHelper = () => {

  const { playMode, soundSelected } = useAudioStore()
  const audioRef = useRef<HTMLAudioElement>();

  useEffect(() => {
    if (playMode === PlayMode.Playing) {
      const soundURL = getSoundURL(soundSelected)
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = soundURL
        audioRef.current.load()
        audioRef.current.play()
        // audioRef.current.currentTime = 0;
      }
      else {
        if (soundSelected != undefined || soundSelected != 'None') {
          const sound = new Audio(soundURL);
          audioRef.current = sound;
          sound.play();
        }
      }
      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
        }
      }
    }
    else {
      if (audioRef.current) {
        audioRef.current.pause();
      }

      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
        }
      }
    }
  }, [playMode])


  return null
}