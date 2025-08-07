import { useCallback } from "react";
import MusicPlayerComponent from "../components/MusicPlayerComponent";
import useAppStore from "../stores/app-store";
import { useMusicStore } from "../stores/music-store";

const MusicPlayerContainer = () => {
  const { playlist } = useMusicStore()
  const showMusicPlayer = useAppStore(state => state.showMusicPlayer)
  const setShowMusicPlayer = useAppStore(state => state.setShowMusicPlayer)
  const closeMusicPlayer = useCallback(() => {
    setShowMusicPlayer(false)
  }, [setShowMusicPlayer])

  return (
    <MusicPlayerComponent show={showMusicPlayer} handleHide={closeMusicPlayer} playlist={playlist} />
  )
}

export default MusicPlayerContainer;