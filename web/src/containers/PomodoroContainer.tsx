import PomodoroComponent from "../components/PomodoroComponent";
import { Pomodoro, PomodoroMode, TimerMode } from "../domain/pomodoro";
import usePomodoroStore from "../stores/pomodoro-store";

const PomodoroContainer = () => {
  const { startPomodoro, pausePomodoro, resetPomodoro, pomodoro, taskMinutes } = usePomodoroStore();

  // console.log(pomodoro, "Pomodoro")

  if (!pomodoro) {
    return 'Pomodoro Crashed';
  }

  const title = getTitle(pomodoro)
  let remainingMinutes = 0;
  let remainingSeconds = 0;

  if (pomodoro.timerMode === TimerMode.Running || pomodoro.timerMode === TimerMode.Paused) {
    if (!pomodoro.lastTick || !pomodoro.remainingMs) {
      return;
    }
    remainingMinutes = Math.floor(pomodoro.remainingMs / 60000);
    remainingSeconds = Math.floor((pomodoro.remainingMs % 60000) / 1000);
  } else {
    remainingMinutes = taskMinutes / 1;
    remainingSeconds = (taskMinutes % 1) * 60;
  }

  return (
    <div>
      <PomodoroComponent title={title} remainingMinutes={remainingMinutes} remainingSeconds={remainingSeconds} pomodoro={pomodoro} start={startPomodoro} pause={pausePomodoro} reset={resetPomodoro} />
    </div>
  )
}

const getTitle = (pomodoro: Pomodoro): string => {
  let title = ''
  const { timerMode, pomodoroMode } = pomodoro
  if (timerMode === TimerMode.Running) {
    if (pomodoroMode === PomodoroMode.Task) {
      title = 'Focussing...'
    } else if (pomodoroMode === PomodoroMode.ShortBreak) {
      title = 'Short Break. Recharge!'
    } else {
      title = 'Long Break. Relax!'
    }
  } else if (timerMode === TimerMode.Paused) {
    if (pomodoroMode === PomodoroMode.Task) {
      title = 'Focus paused!'
    } else if (pomodoroMode === PomodoroMode.ShortBreak) {
      title = 'Short Break paused!'
    } else {
      title = 'Long Break paused!'
    }
  } else {
    title = 'Get Ready!'
  }
  return title;
}

export default PomodoroContainer;