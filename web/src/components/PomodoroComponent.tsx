import { Button } from "flowbite-react";
import { Pomodoro, TimerMode } from "../domain/pomodoro";
import { IoRefresh   } from "react-icons/io5";

interface IPomodoroComponentProps {
  title?: string
  remainingMinutes: number
  remainingSeconds: number
  pomodoro: Pomodoro
  start: () => void
  pause: () => void
  reset: () => void
}

const PomodoroComponent = ({title, remainingMinutes, remainingSeconds, pomodoro, start, pause, reset}: IPomodoroComponentProps) => {
  const minutes = remainingMinutes.toString().padStart(2, '0');
  const seconds = remainingSeconds.toString().padStart(2, '0');

  const { timerMode } = pomodoro;

  const startOrPauseText = timerMode === TimerMode.Running ? 'Pause' : 'Start';
  const startOrPause = timerMode === TimerMode.Running ? pause : start;

  return (
    <div className="flex flex-col items-center">
      <div>{title}</div>
      <div className="text-6xl">{minutes}:{seconds}</div>
      <div className="flex gap-x-2">
        <Button onClick={startOrPause}> {startOrPauseText} </Button>
        <Button onClick={reset} >
          <IoRefresh  />
        </Button>
      </div>
    </div>
  )
}

export default PomodoroComponent;