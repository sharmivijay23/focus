import { Button } from "flowbite-react";
import { RiFullscreenExitLine , RiFullscreenLine  } from "react-icons/ri";
export interface IFullScreenButtonComponentProps {
  inFullScreen: boolean;
  onClick: () => void;
}

const FullScreenButtonComponent = ({ inFullScreen, onClick }: IFullScreenButtonComponentProps) => {
  const Icon = inFullScreen ? RiFullscreenExitLine : RiFullscreenLine;
  return (
    <Button onClick={onClick} color="outline">
      <Icon className="h-8 w-6" />
    </Button>
  )
}

export default FullScreenButtonComponent;