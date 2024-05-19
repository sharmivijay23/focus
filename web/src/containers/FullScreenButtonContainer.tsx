import { useCallback, useState } from "react";
import FullScreenButtonComponent from "../components/FullScreenButtonComponent";

const FullScreenButtonContainer = () => {
  const [fullScreen, setFullScreen ] = useState(false)
  const handleClick = useCallback(async () => {
    if (document.fullscreenEnabled) {
      if (fullScreen) {
        await document.exitFullscreen()
      } else {
        await document.body.requestFullscreen()
      }
      setFullScreen(!fullScreen)
    }
  }, [fullScreen])
  
  return (
    <FullScreenButtonComponent onClick={handleClick} inFullScreen={fullScreen} />
  )
}

export default FullScreenButtonContainer;