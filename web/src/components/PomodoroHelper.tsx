import { useEffect, useRef } from "react";
import { TimerMode } from "../domain/pomodoro";
import usePomodoroStore from "../stores/pomodoro-store";

const PomodoroHelper = () => {
  const { pomodoro, updatePomodoro } = usePomodoroStore();
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