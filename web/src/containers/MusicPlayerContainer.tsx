import { useCallback } from "react";
import MusicPlayerComponent from "../components/MusicPlayerComponent";
import useAppStore from "../stores/app-store";

const MusicPlayerContainer = () => {
  const showMusicPlayer = useAppStore(state => state.showMusicPlayer)
  const setShowMusicPlayer = useAppStore(state => state.setShowMusicPlayer)
  const closeMusicPlayer = useCallback(() => {
    setShowMusicPlayer(false)
  }, [setShowMusicPlayer])

  return (
    <MusicPlayerComponent show={showMusicPlayer} handleHide={closeMusicPlayer} />
  )
}

export default MusicPlayerContainer;