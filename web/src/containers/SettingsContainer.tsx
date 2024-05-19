import { useCallback } from "react"
import useAppStore from "../stores/app-store"
import SettingsComponent from "../components/SettingsComponent"

const SettingsContainer = () => {
  const { showSettingsContent, setShowSettingsContent } = useAppStore()
  const closeSettingsContent = useCallback(() => {
    setShowSettingsContent(false)
  }, [setShowSettingsContent])

  return (
    <SettingsComponent show={showSettingsContent} handleHide={closeSettingsContent} />
  )
}


export default SettingsContainer;