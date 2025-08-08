import { Drawer , DrawerHeader, DrawerItems} from "flowbite-react";
import { getPlaylistURLbyName } from "../utils/music-utils";
import { useEffect, useRef } from "react";

export interface IMusicPlayerComponentProps {
  show: boolean;
  handleHide: () => void;
  playlist: string;
}

const MusicPlayerComponent = ({ show, handleHide, playlist }: IMusicPlayerComponentProps) => {

  return (
    <Drawer open={show} onClose={handleHide} className="px-0 flex flex-col justify-between bg-background text-red-500">
      <DrawerHeader className="px-4 text-green-500" title="Music" titleIcon={() => <></>} />
      <DrawerItems className="flex flex-col items-center justify-end h-1/2">
        <iframe
          src={getPlaylistURLbyName(playlist)}
          key={playlist}
          width="90%"
          height="80%"
          allowFullScreen={false}
          allow="encrypted-media"  // Required for embedding Spotify playlists
          loading="lazy"
          onError={(event) => {
            console.error("Error loading iframe:", (event as any)?.target?.src);
          }}
        >
        </iframe>
      </DrawerItems>
    </Drawer>
  );
}

export default MusicPlayerComponent;
