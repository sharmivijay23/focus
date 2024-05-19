import { useEffect, useRef } from "react";
import useAppStore from "../stores/app-store";
import { TimerMode } from "../domain/pomodoro";

const PomodoroHelper = () => {
  const { pomodoro, updatePomodoro } = useAppStore();
  const intervalRef = useRef<NodeJS.Timer | undefined>();
  useEffect(() => {
    if (pomodoro?.timerMode === TimerMode.Running) {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          updatePomodoro()
        }, 100)
      }
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = undefined
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = undefined
      }
    }
  }, [pomodoro?.timerMode, updatePomodoro])
  return null;
}

export default PomodoroHelper;