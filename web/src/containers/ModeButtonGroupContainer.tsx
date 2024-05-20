import { Button } from "flowbite-react";
import { HiOutlineHome, HiOutlineLightBulb  } from "react-icons/hi";
import useAppStore from "../stores/app-store";
import { Mode } from "../domain/app";

const ModeButtonGroupContainer = () => {
  const iconClasses = "h-8 w-6";
  const setActiveMode = useAppStore(state => state.setActiveMode);

  const setHomeMode = () => {
    setActiveMode(Mode.Home)
  }

  const setFocusMode = () => {
    setActiveMode(Mode.Focus)
  }

  return (
    <Button.Group>
      <Button onClick={setHomeMode} color="outline">
        <HiOutlineHome className={iconClasses} />
      </Button>
      <Button onClick={setFocusMode} color="outline">
        <HiOutlineLightBulb  className={iconClasses} />
      </Button>
    </Button.Group>
  )
}

export default ModeButtonGroupContainer;