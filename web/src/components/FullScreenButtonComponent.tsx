import { Button } from "flowbite-react";
import { RiFullscreenExitLine , RiFullscreenLine  } from "react-icons/ri";
export interface IFullScreenButtonComponentProps {
  inFullScreen: boolean;
  onClick: () => void;
}

const FullScreenButtonComponent = ({ inFullScreen, onClick }: IFullScreenButtonComponentProps) => {
  const Icon = inFullScreen ? RiFullscreenExitLine : RiFullscreenLine;
  return (
    <Button onClick={onClick}>
      <Icon className="h-7 w-5" />
    </Button>
  )
}

export default FullScreenButtonComponent;