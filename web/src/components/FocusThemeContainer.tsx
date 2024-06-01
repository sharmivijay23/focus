import Image from "next/image"
import { getBackgroundById } from "../utils/background-utils"

const FocusThemeComponent = () => {

  const ImageContainer = () => {
    const images = ["temple", "tajmahal", "himalayas_with_houses", "tajmahal_dark"]

    const displayImages = images.map((image, index) => {
      return (
        <div key={index} >
          <Image
            src={getBackgroundById(image)}
            width={175}
            height={125}
            alt="Temple"
            className=" mt-6 rounded-xl"
          />
          <div className="text-center capitalize">{image}</div>
        </div>
      );
    });
    return <div className="flex flex-row gap-6 flex-wrap"> {displayImages}</div>
  };

  return (
    <div className="flex flex-col ml-6">
      <div className="text-4xl mb-4 font-semibold"> Focus Theme </div>
      <div className="text-gray-400 mb-4"> Customize the look and feel of your application. Choose from various styles and colors to personalize your experience.</div>
      {/* <Dropdown label="Select Country">
        <Dropdown.Item> India</Dropdown.Item>
        <Dropdown.Item>Canada</Dropdown.Item>
        <Dropdown.Item>Australia</Dropdown.Item>
      </Dropdown> */}
      <div className="text-2xl font-semibold"> Dreamscapes </div>
      <ImageContainer />
    </div>
  )
}

export default FocusThemeComponent