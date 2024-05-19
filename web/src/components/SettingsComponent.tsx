import { Drawer, Sidebar } from "flowbite-react";
import { MdOutlineWallpaper } from "react-icons/md";
import { IoMusicalNotes } from "react-icons/io5";
import { BsSoundwave } from "react-icons/bs";
import { MdOutlineTimer } from "react-icons/md"
import { IoIosClock } from "react-icons/io"
import { ImStatsDots } from "react-icons/im";
import { FaUserGear } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";

export interface ISettingsComponentProps {
  show: boolean;
  handleHide: () => void;
}

const SettingsComponent = ({ show, handleHide }: ISettingsComponentProps) => {
  return (
    <Drawer open={show} onClose={handleHide} position="right">
      <Drawer.Header title="Drawer" titleIcon={() => <></>} />
      <Drawer.Items>
        <Sidebar>
          <Sidebar.ItemGroup>
            <Sidebar.Items>
              <Sidebar.Item icon={MdOutlineWallpaper}> Theme</Sidebar.Item>
              <Sidebar.Item icon={BsSoundwave}> Sounds</Sidebar.Item>
              <Sidebar.Item icon={MdOutlineTimer}> Timer</Sidebar.Item>
              <Sidebar.Item icon={IoIosClock}>Clock</Sidebar.Item>
              <Sidebar.Item icon={ImStatsDots}>Stats</Sidebar.Item>
              <Sidebar.Item icon={IoMusicalNotes}>Music</Sidebar.Item>
              <Sidebar.Item icon={FaUserGear}>Profile</Sidebar.Item>
              <Sidebar.Item icon={GrContact}>Contact Us</Sidebar.Item>
            </Sidebar.Items>
          </Sidebar.ItemGroup>
        </Sidebar>
      </Drawer.Items>
    </Drawer>
  )
}

export default SettingsComponent