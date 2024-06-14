import Image from "next/image"
import { getBackgroundById } from "../utils/background-utils"
import useAppStore from "../stores/app-store"

interface IFocusThemeComponentProps {
  handleImageClick: (image: string) => void,
  focusBackground: string,
  images: string[],
}

const FocusThemeComponent = ({ handleImageClick, focusBackground, images }: IFocusThemeComponentProps) => {

  const displayImages = images.map((image) => {
    return (
      <div key={image} >
        <Image
          src={getBackgroundById(image)}
          width={175}
          height={125}
          alt="Focus Theme pic"
          className={`mt-6 rounded-xl ${focusBackground === image ? 'outline outline-white outline-4' : ''}`}
          onClick={() => handleImageClick(image)}
        />
        <div className="text-center capitalize mt-2" onClick={() => handleImageClick(image)} >{image}</div>
      </div>
    );
  });

  return (
    <div className="flex flex-col ml-6">
      <div className="text-4xl mb-4 font-semibold"> Focus Theme </div>
      <div className="text-gray-400 mb-4"> Customize the look and feel of your application. Choose from various styles and colors to personalize your experience.</div>
      <div className="text-2xl font-semibold"> Dreamscapes </div>
      <div className="flex flex-row gap-6 flex-wrap">
        {displayImages}
      </div>
    </div>
  )
}

export default FocusThemeComponent