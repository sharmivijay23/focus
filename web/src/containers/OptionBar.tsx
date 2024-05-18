import { IoSettingsSharp } from "react-icons/io5";
import { Button } from "flowbite-react";

const OptionBar = () => {

    return (
        <div className="flex justify-end p-14 m-16 mt-32 mb-10">
            <Button>
                <IoSettingsSharp className="h-7 w-5" />
            </Button>
        </div>

    )
}

export default OptionBar;