
import { Button } from "flowbite-react";
import { IoSettingsSharp, IoMusicalNotes } from "react-icons/io5";
import useAppStore from "../stores/app-store";
import { useCallback } from "react";
import FullScreenButtonContainer from "./FullScreenButtonContainer";
import ModeButtonGroupContainer from "./ModeButtonGroupContainer";

const OptionBar = () => {
  const setShowMusicPlayer = useAppStore(state => state.setShowMusicPlayer)
  const showMusicPlayer = useCallback(() => {
    setShowMusicPlayer(true)
  }, [setShowMusicPlayer])

  const iconClasses = "h-7 w-5"

  return (
    <div className="flex justify-between p-14 mb-10">
      <div className="flex justify-start">
        <Button onClick={showMusicPlayer}>
          <IoMusicalNotes className={iconClasses} />
        </Button>
      </div>
      <div className="flex justify-end gap-x-4">
        <ModeButtonGroupContainer />
        <Button>
          <IoSettingsSharp className={iconClasses} />
        </Button>
        <FullScreenButtonContainer />
      </div>
    </div>
  )
}

export default OptionBar;
