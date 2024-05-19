import { Button } from "flowbite-react";
import { IoHome, IoBulb } from "react-icons/io5";
import useAppStore from "../stores/app-store";
import { Mode } from "../domain/app";

const ModeButtonGroupContainer = () => {
  const iconClasses = "h-7 w-5";
  const setActiveMode = useAppStore(state => state.setActiveMode);

  const setHomeMode = () => {
    setActiveMode(Mode.Home)
  }

  const setFocusMode = () => {
    setActiveMode(Mode.Focus)
  }

  return (
    <Button.Group>
      <Button onClick={setHomeMode}>
        <IoHome className={iconClasses} />
      </Button>
      <Button onClick={setFocusMode}>
        <IoBulb className={iconClasses} />
      </Button>
    </Button.Group>
  )
}

export default ModeButtonGroupContainer;