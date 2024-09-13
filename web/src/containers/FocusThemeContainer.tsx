import useAppStore from "../stores/app-store";
import { Mode } from "../domain/app";
import FocusThemeComponent from "../components/FocusThemeComponent";

const FocusThemeContainer = () => {

  const { setFocusBackground, setActiveMode, focusBackground, images } = useAppStore()

  const handleImageClick = (image: string) => {
    setFocusBackground(image)
    setActiveMode(Mode.Focus)
  }

  return (
    <FocusThemeComponent handleImageClick={handleImageClick} focusBackground={focusBackground} images={images} />
  )
}

export default FocusThemeContainer