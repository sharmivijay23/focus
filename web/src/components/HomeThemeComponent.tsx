import Image from "next/image"
import { getBackgroundById } from "../utils/background-utils"

interface IHomeThemeComponentProps {
  handleImageClick: (image: string) => void,
  homeBackground: string,
}

const HomeThemeComponent = ({ handleImageClick, homeBackground }: IHomeThemeComponentProps) => {


  const images = ["temple", "tajmahal", "himalayas_with_houses", "tajmahal_dark"]

  const displayImages = images.map((image, index) => {
    return (
      <div key={index} >
        <Image
          src={getBackgroundById(image)}
          width={175}
          height={125}
          alt="Home Theme pic"
          className={`mt-6 rounded-xl cursor-pointer ${homeBackground === image ? 'outline outline-white outline-4' : ""}`}
          onClick={() => handleImageClick(image)}
        />
        <div className="text-center capitalize mt-2 " onClick={() => handleImageClick(image)}>{image}</div>
      </div>
    );
  });


  return (
    <div className="flex flex-col ml-6">
      <div className="text-4xl mb-4 font-semibold"> Home Theme </div>
      <div className="text-gray-400 mb-4"> Customize the look and feel of your application. Choose from various styles and colors to personalize your experience.</div>
      <div className="text-2xl font-semibold"> Dreamscapes </div>
      <div className="flex flex-row gap-6 flex-wrap">
        {displayImages}
      </div>
    </div>
  )
}

export default HomeThemeComponent