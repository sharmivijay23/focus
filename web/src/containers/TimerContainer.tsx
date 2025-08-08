import { Dropdown, DropdownItem, TextInput, Label } from "flowbite-react"
import { useState } from "react"

import { CountdownTimer } from "../components/CountdownTimer"

const TimerContainer = () => {
  const [timer, setTimer] = useState(" ")

  const classes = "text-white bg-gray-800 hover:text-gray-900 hover:bg-white rounded-md px-4 py-2"
  const active_classes = " text-white bg-accent hover:text-gray-900 hover:bg-white rounded-md px-4 py-2"

  const timerClass = (Val: string) => {
    const resultedclass = timer === Val ? active_classes : classes;
    return resultedclass
  }

  // const hourglass = () => {
  //   return timer === "Sand Timer" ? <SmallSandTimer /> : ""
  // }

  // const SmallSandTimer = () => {
  //   return (
  //     <Hourglass
  //       visible={true}
  //       height="20"
  //       width="20"
  //       ariaLabel="hourglass-loading"
  //       wrapperStyle={{}}
  //       wrapperClass=""
  //       colors={['green', '#72a1ed']}
  //     />
  //   )
  // }

  // const SandTimer = () => {
  //   return (
  //     <Hourglass
  //       visible={true}
  //       height="80"
  //       width="80"
  //       ariaLabel="hourglass-loading"
  //       wrapperStyle={{}}
  //       wrapperClass=""
  //       colors={['#306cce', '#72a1ed']}
  //     />
  //   )
  // }

  const viewTimer = (timer: string) => {
    switch (timer) {
      case "Countdown Timer":
        return <CountdownTimer />
      default:
        return <div> Nothing found</div>
    }

  }

  return (
    <div className="flex flex-col ml-6">
      <div className="text-4xl mb-4 font-semibold"> Timer </div>
      <div className="text-gray-400 mb-4">
        Task Timer lets you set countdowns for tasks and visually track progress,
        ensuring you stay organized and focused on your deadlines
      </div>
      <div className="flex flex-row items-center ">
        <Dropdown size='lg' label={timer === " " ? "Select Timer" : timer} className="ml-16 bg-background text-xl font-semibold">
          {/* <DropdownItem className={timerClass("Sand Timer")} onClick={() => setTimer("Sand Timer")}>Sand Timer</DropdownItem> */}
          <DropdownItem className={timerClass("Countdown Timer")} onClick={() => setTimer("Countdown Timer")}>Countdown Timer</DropdownItem>
          <DropdownItem className={timerClass("Productivity Timer")} onClick={() => setTimer("Productivity Timer")}>Productivity Timer / Pomodoro</DropdownItem>
          {/* <DropdownItem className={timerClass("Candle Clocks")} onClick={() => setTimer("Candle Clocks")}>Candle Clocks / Incense Clocks</DropdownItem> */}
        </Dropdown>
      </div>
      <div>
        {timer === " " ? "" : viewTimer(timer)}
      </div>
    </div >
  )
}

export default TimerContainer