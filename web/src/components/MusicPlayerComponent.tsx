import { Drawer } from "flowbite-react";

export interface IMusicPlayerComponentProps {
  show: boolean;
  handleHide: () => void;
}

const MusicPlayerComponent = ({ show, handleHide }: IMusicPlayerComponentProps) => {
  return (
    <Drawer open={show} onClose={handleHide} className="px-0 flex flex-col justify-between bg-background text-red-500">
      <Drawer.Header className="px-4 text-green-500" title="Music" titleIcon={() => <></>} />
      <Drawer.Items className="flex flex-col items-center justify-end h-1/2">
        <iframe
          src="https://open.spotify.com/embed/playlist/3w7efy7fMjIhbgmTGl3HJ3?utm_source=generator&theme=0"
          width="90%"
          height="80%"
          allowFullScreen={false}
          loading="lazy">
        </iframe>
      </Drawer.Items>
    </Drawer>
  );
}

export default MusicPlayerComponent;
