
import { Button } from "flowbite-react";
import { IoSettingsSharp, IoMusicalNotes, IoHome, IoBulb } from "react-icons/io5";
import useAppStore from "../stores/app-store";
import { useCallback } from "react";

const OptionBar = () => {
  const setShowMusicPlayer = useAppStore(state => state.setShowMusicPlayer)
  const { setShowSettingsContent } = useAppStore()
  const showMusicPlayer = useCallback(() => {
    setShowMusicPlayer(true)
  }, [setShowMusicPlayer])
  const showSettingsContent = useCallback(() => {
    setShowSettingsContent(true)
  }, [setShowSettingsContent]
  )

  return (
    <div className="flex justify-between p-14 ">
      <div className="flex justify-start">
        <Button onClick={showMusicPlayer}>
          <IoMusicalNotes className="h-7 w-5" />
        </Button>
      </div>
      <div className="flex justify-end gap-x-4">
        <Button.Group>
          <Button>
            <IoHome className="h-7 w-5" />
          </Button>
          <Button>
            <IoBulb className="h-7 w-5" />
          </Button>
        </Button.Group>
        <Button onClick={showSettingsContent}>
          <IoSettingsSharp className="h-7 w-5" />
        </Button>
      </div>
    </div>
  )
}

export default OptionBar;
