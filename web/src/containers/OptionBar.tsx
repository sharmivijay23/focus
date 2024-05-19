
import { Button } from "flowbite-react";
import { IoSettingsSharp, IoMusicalNotes } from "react-icons/io5";
const OptionBar = () => {
  return (
    <div className="flex justify-between p-14 mb-10">
      <div className="flex justify-start">
        <Button>
          <IoMusicalNotes className="h-7 w-5" />
        </Button>
      </div>
      <div className="flex justify-end">
        <Button>
          <IoSettingsSharp className="h-7 w-5" />
        </Button>
      </div>
    </div>
  )
}

export default OptionBar;