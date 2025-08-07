import MusicComponent from "../components/MusicComponent"
import { MusicMode } from "../domain/audio"
import useAppStore from "../stores/app-store"
import { useMusicStore } from "../stores/music-store"

const MusicContainer = () => {

  const { setShowMusicPlayer } = useAppStore()
  const { musicList, setMusicMode, setMusicPlaylist, playlist } = useMusicStore()

  const handleMusicPlaylist = (music: string) => {
    setMusicPlaylist(music)
    setMusicMode(MusicMode.Playing)
    setShowMusicPlayer(true)
  }

  return (
    <MusicComponent musicList={musicList} handleMusicPlaylist={handleMusicPlaylist} playlist={playlist} />
  )
}

export default MusicContainer