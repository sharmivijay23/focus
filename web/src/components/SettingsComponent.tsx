import { Drawer, Sidebar, DrawerHeader,DrawerItems,SidebarItem,  SidebarItems, SidebarItemGroup } from "flowbite-react";
import { HiPhotograph } from "react-icons/hi";
import { HiMusicalNote } from "react-icons/hi2";
import { BsSoundwave } from "react-icons/bs";
import { MdTimer } from "react-icons/md"
import { HiClock } from "react-icons/hi"
import { HiChartSquareBar } from "react-icons/hi";
import { HiUserCircle } from "react-icons/hi";
import { HiChatAlt2 } from "react-icons/hi";
import { IconType } from "react-icons";
import { useState } from "react";
import { HiOutlineHome, HiOutlineLightBulb } from "react-icons/hi";
import HomeThemeContainer from "../containers/HomeThemeContainer"
import SoundContainer from "../containers/SoundContainer";
import MusicContainer from "../containers/MusicContainer";
import TimerContainer from "../containers/TimerContainer";
import ClockTimeComponent from "./ClockTimeComponent";
import StatsContainer from "../containers/StatsContainer";
import ProfileContainer from "../containers/ProfileContainer";
import ContactComponent from "./ContactsComponent";
import FocusThemeContainer from "../containers/FocusThemeContainer";
import { enableComponents } from "../utils/config-utils"

export interface ISettingsComponentProps {
  show: boolean;
  handleHide: () => void;
}

const SettingsComponent = ({ show, handleHide }: ISettingsComponentProps) => {

  const [itemSelected, setItemSelected] = useState("HomeThemeContainer");

  const classes = " hover:bg-accent text-white mb-1"
  const active_classes = " bg-accent text-white hover:bg-accent mb-1"

  const decorateIcon = (Icon: IconType) => {
    const ThemeIcon = (props: any) => {
      if ('className' in props) {
        props = {
          ...props,
          className: props.className + " text-white"
        }
      }
      return <Icon {...props} />
    }
    return ThemeIcon
  }

  const currentSettingsMenu = (itemSelected: string) => {
    switch (itemSelected) {
      case "Home Theme":
        return <HomeThemeContainer />
      case "Focus Theme":
        return <FocusThemeContainer />
      case "Sounds":
        return <SoundContainer />
      case "Music":
        return <MusicContainer />
      case "Timer":
        return <TimerContainer />
      case "Clock":
        return <ClockTimeComponent />
      case "Stats":
        return <StatsContainer />
      case "Profile":
        return <ProfileContainer />
      case "ContactUs":
        return <ContactComponent />
      default:
        return <HomeThemeContainer />
    }
  }
  return (
    <Drawer open={show} onClose={handleHide} position="right" className="w-3/5 bg-background">
      < DrawerHeader title="Settings" titleIcon={() => <></>} className="bg-background" />
      <div className="flex flex-row ">
        <div>
          <DrawerItems >
            <Sidebar >
              <SidebarItemGroup>
                <SidebarItems>
                  {enableComponents("Theme") && <SidebarItem
                    icon={decorateIcon(HiPhotograph)}
                    className={itemSelected === "Theme" ? active_classes : classes}
                    onClick={() => setItemSelected("Home Theme")}>
                    Theme
                  </SidebarItem>}
                  <ul>
                    {enableComponents("Home Theme") && <li className={`text-white hover:bg-accent rounded-lg p-2 ml-6 mb-1 flex flex-row text-center ${itemSelected === "Home Theme" ? "bg-accent" : " "}`}
                      onClick={() => setItemSelected("Home Theme")}>
                      <HiOutlineHome className="text-white mt-1 mr-2" />
                      Home Theme
                    </li>}
                    {enableComponents("Focus Theme") && <li className={`text-white hover:bg-accent rounded-lg p-2 ml-6 mb-1 flex flex-row text-center ${itemSelected === "Focus Theme" ? "bg-accent" : " "}`}
                      onClick={() => setItemSelected("Focus Theme")}>
                      <HiOutlineLightBulb className="text-white mt-1 mr-2" />
                      Focus Theme
                    </li>}
                  </ul>
                  {enableComponents("Sounds") && <SidebarItem
                    icon={decorateIcon(BsSoundwave)}
                    className={`text-white hover:bg-accent mb-1 ${itemSelected === "Sounds" ? "bg-accent" : ""}`}
                    onClick={() => setItemSelected("Sounds")}>
                    Sounds
                  </SidebarItem>}
                  {enableComponents("Timer") && <SidebarItem
                    icon={decorateIcon(MdTimer)}
                    className={itemSelected === "Timer" ? active_classes : classes}
                    onClick={() => setItemSelected("Timer")}>
                    Timer
                  </SidebarItem>}
                  {enableComponents("Clock") && <SidebarItem
                    icon={decorateIcon(HiClock)}
                    className={itemSelected === "Clock" ? active_classes : classes}
                    onClick={() => setItemSelected("Clock")}>
                    Clock
                  </SidebarItem>}
                  {enableComponents("Stats") && <SidebarItem
                    icon={decorateIcon(HiChartSquareBar)}
                    className={itemSelected === "Stats" ? active_classes : classes}
                    onClick={() => setItemSelected("Stats")}>
                    Stats
                  </SidebarItem>}
                  {enableComponents("Music") && <SidebarItem
                    icon={decorateIcon(HiMusicalNote)}
                    className={itemSelected === "Music" ? active_classes : classes}
                    onClick={() => setItemSelected("Music")}>
                    Music
                  </SidebarItem>}
                  {enableComponents("Profile") && <SidebarItem
                    icon={decorateIcon(HiUserCircle)}
                    className={itemSelected === "Profile" ? active_classes : classes}
                    onClick={() => setItemSelected("Profile")}>
                    Account Settings
                  </SidebarItem>}
                  {enableComponents("Contact Us") && <SidebarItem
                    icon={decorateIcon(HiChatAlt2)}
                    className={itemSelected === "ContactUs" ? active_classes : classes}
                    onClick={() => setItemSelected("ContactUs")}>
                    Contact Us
                  </SidebarItem>}
                </SidebarItems>
              </SidebarItemGroup>
            </Sidebar>
          </DrawerItems>
        </div>
        <div className="text-white">
          {currentSettingsMenu(itemSelected)}
        </div>
      </div>
    </Drawer >
  )
}

export default SettingsComponent