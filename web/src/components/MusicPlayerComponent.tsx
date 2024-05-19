import { Drawer } from "flowbite-react";

const MusicPlayerComponent = () => {
  // TODO: Update open
  // TODO: Update onClose
  return (
    <Drawer open={false} onClose={() => {}} className="px-0 flex flex-col justify-between">
      <Drawer.Header className="px-4" title="Music" titleIcon={() => <></>} />
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
