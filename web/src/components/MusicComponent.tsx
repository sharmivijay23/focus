import Image from "next/image"
import { getImagebyName } from "../utils/music-utils"
interface IMusicComponentProps {
  musicList: string[],
  handleMusicPlaylist: (music: string) => void,
  playlist: string,
}

const MusicComponent = ({ musicList, handleMusicPlaylist, playlist }: IMusicComponentProps) => {

  const displayMusic = musicList.map((music) => {
    return (
      <div key={music}>
        <Image
          src={getImagebyName(music)}
          width={125}
          height={125}
          alt={music}
          className={` rounded-lg cursor-pointer  ${playlist === music ? 'outline outline-white outline-4' : ''}`}
          onError={(e) => console.error("Error loading image", e.target.src)}
          onClick={() => handleMusicPlaylist(music)}
        />
        <div className=" text-center capitalize mt-2 w-32">{music}</div>
      </div >
    )
  }
  )

  return (
    <div>
      <div className="flex flex-col ml-6">
        <div className="text-4xl mb-4 font-semibold"> Music </div>
        <div className="text-gray-400 mb-8"> Access and organize your music collection.Create playlists and enjoy your favorite tracks.</div>
        <div className="flex flex-row gap-8 flex-wrap" > {displayMusic} </div>
      </div>
    </div>
  )
}

export default MusicComponent