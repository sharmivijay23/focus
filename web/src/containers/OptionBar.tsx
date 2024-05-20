
import { Button } from "flowbite-react";
import { HiOutlineCog, HiOutlineMusicNote  } from "react-icons/hi";
import useAppStore from "../stores/app-store";
import { useCallback } from "react";
import FullScreenButtonContainer from "./FullScreenButtonContainer";
import ModeButtonGroupContainer from "./ModeButtonGroupContainer";

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

  const iconClasses = "h-8 w-6 bg-transparent"

  return (
    <div className="flex justify-between p-14 ">
      <div className="flex justify-start">
        <Button onClick={showMusicPlayer} color="outline">
          <HiOutlineMusicNote className={iconClasses} />
        </Button>
      </div>
      <div className="flex justify-end gap-x-4">
        <ModeButtonGroupContainer />
        <Button onClick={showSettingsContent} color="outline">
          <HiOutlineCog className={iconClasses} />
        </Button>
        <FullScreenButtonContainer />
      </div>
    </div>
  )
}

export default OptionBar;
