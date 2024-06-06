import useAppStore from "../stores/app-store";
import moment from 'moment'
const ClockContainer = () => {

  const { username, weekDayQuotes, timeFormat } = useAppStore();

  const standardTime = moment().format('hh:mm')
  const militaryTime = moment().format('HH:mm')
  const timeView = timeFormat === 'militaryTimeFormat' ? militaryTime : standardTime


  return (
    <div className="flex flex-col justify-center items-center font-semibold">
      <div className=" text-white text-4xl">
        {weekDayQuotes.stat1}, {username}! {weekDayQuotes.stat2}
      </div>
      <div className="flex items-baseline max-w-md backdrop-brightness-150 backdrop-blur-md p-6 py-6 mt-4 rounded-lg text-9xl font-bold text-white">
        {timeView}
        <span className="text-7xl ml-4"> {timeFormat === 'standardTimeFormat' ? moment().format('A') : " "}</span>
      </div>
    </div>
  )
}

export default ClockContainer;