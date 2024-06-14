import useAppStore from "../stores/app-store";
import { Mode } from "../domain/app";
import HomeThemeComponent from "../components/HomeThemeComponent";

const FocusThemeContainer = () => {

  const { setHomeBackground, setActiveMode, homeBackground, images } = useAppStore()

  const handleImageClick = (image: string) => {
    setHomeBackground(image)
    setActiveMode(Mode.Home)
  }

  return (
    <HomeThemeComponent handleImageClick={handleImageClick} homeBackground={homeBackground} images={images} />
  )
}

export default FocusThemeContainer