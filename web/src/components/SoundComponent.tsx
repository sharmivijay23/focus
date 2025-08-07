import { Label, Radio } from "flowbite-react"
interface ISoundComponentProps {
  sounds: string[],
  text: string,
  handlePlayMode: () => void,
  handleSoundSelection: (sound: string) => void
}


export const SoundComponent = ({ sounds, text, handlePlayMode, handleSoundSelection }: ISoundComponentProps) => {

  const sound_list = sounds.map((sound: string) => {
    return (
      <div key={sound}>
        <Radio id={sound} name="sound" defaultChecked={sound === "None"} onClick={() => handleSoundSelection(sound)} />
        <Label htmlFor={sound} className="text-white"> {sound} </Label>
      </div>
    )
  })
  
  return (
    <div className="flex flex-col ml-6">
      <div className="text-4xl mb-4 font-semibold"> Sounds </div>
      <div className="text-gray-400">Customize your experience by selecting ambient sounds </div>
      <div className="flex flex-col gap-2 mt-8 ml-6 text-md font-normal">
        <button className="w-1/4 bg-accent rounded-xl px-4 py-2 mb-6" onClick={handlePlayMode}> {text}</button>
        {sound_list}
      </div>
    </div >
  )
}