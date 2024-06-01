import { Button } from "flowbite-react";

const ContactComponent = () => {

  return (
    <div className="flex flex-col ml-6">
      <div className="text-4xl mb-4 font-semibold"> Contact Us </div>
      <div className="text-gray-400 pb-6"> Got thoughts on Focus?
        Share feedback or suggestions, or request new features below. Love Focus? Leave a quick review!</div>
      <Button className="bg-accent w-2/5 mb-6 font-semibold" size="large" > Give Feedback </Button>
      <Button className="bg-accent w-2/5 mb-6 font-semibold" size="large"> Contact Support </Button>
      <Button className="bg-accent w-2/5 mb-6 font-semibold" size="large"> Leave Review </Button>
    </div >
  )
}

export default ContactComponent;