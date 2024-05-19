import useAppStore from "../stores/app-store";

const ClockContainer = () => { 
  const { username, weekDayQuotes } = useAppStore();
  const currentTime = new Date();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" text-white text-3xl ">
          {weekDayQuotes.stat1}, {username}! {weekDayQuotes.stat2}
      </div>
      <div className="flex max-w-md backdrop-brightness-150 backdrop-blur-md p-6 py-6 mt-3 rounded-lg text-7xl">
          {currentTime.getHours().toString().padStart(2, '0') + ":" + currentTime.getMinutes().toString().padStart(2, '0')}
      </div>
    </div>
  )
}

export default ClockContainer;