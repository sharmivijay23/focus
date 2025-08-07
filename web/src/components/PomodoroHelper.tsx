import { useEffect, useRef } from "react";
import { TimerMode } from "../domain/pomodoro";
import usePomodoroStore from "../stores/pomodoro-store";
import { PomodoroMode } from "../domain/pomodoro";

const PomodoroHelper = () => {
  const { pomodoro, updatePomodoro, focusStat, setFocusTime, resetFocusTime } = usePomodoroStore();
  const intervalRef = useRef<NodeJS.Timer | undefined>();
  console.log(focusStat, "Focus time outside useEffect")
  useEffect(() => {
    if (pomodoro?.timerMode === TimerMode.Running) {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          if (pomodoro.pomodoroMode === PomodoroMode.Task) {
            updatePomodoro()
            setFocusTime()
          }
          else {
            updatePomodoro()
          }
        }, 100)         // This 100 ms drives the focus time calculation. 
      }
    }
    else {
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
  }, [pomodoro?.timerMode, updatePomodoro, pomodoro?.pomodoroMode])
  return null;
}

export default PomodoroHelper;




// if (pomodoro?.timerMode === TimerMode.Running) {
//   if (!intervalRef.current) {
//     intervalRef.current = setInterval(() => {
//       updatePomodoro()
//     }, 100)         // This 100 ms drives the focus time calculation. 
//   }
// }
// else {
//   if (intervalRef.current) {
//     clearInterval(intervalRef.current)
//     intervalRef.current = undefined
//   }
// }