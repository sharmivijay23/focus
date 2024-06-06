import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Pomodoro, PomodoroMode, TimerMode } from '../domain/pomodoro'


interface IPomodoroState {
  // Pomodoro
  taskMinutes: number,
  shortBreakMinutes: number,
  longBreakMinutes: number,
  iterationsBeforeLongBreak: number,
  pomodoro?: Pomodoro,
}

interface IPomodoroActions {
  setTaskMinutes: (taskMinutes: number) => void
  setShortBreakMinutes: (shortBreakMinutes: number) => void
  setLongBreakMinutes: (longBreakMinutes: number) => void
  setIterationsBeforeLongBreak: (iterationsBeforeLongBreak: number) => void
  startPomodoro: () => void
  pausePomodoro: () => void
  resetPomodoro: () => void
  updatePomodoro: () => void
}

interface IPomodoroStore extends IPomodoroState, IPomodoroActions { }

const persistConfig = {
  name: 'pomodoro-store',
}

export const usePomodoroStore = create<IPomodoroStore>()(persist((set, get) => ({
  // Pomodoro
  taskMinutes: 25,
  shortBreakMinutes: 5,
  longBreakMinutes: 15,
  iterationsBeforeLongBreak: 4,
  pomodoro: {
    iteration: 1,
    remainingMs: undefined,
    lastTick: undefined,
    pomodoroMode: PomodoroMode.Task,
    timerMode: TimerMode.Stopped,
  },
  setTaskMinutes: (taskMinutes: number) => set({ taskMinutes }),
  setShortBreakMinutes: (shortBreakMinutes: number) => set({ shortBreakMinutes }),
  setLongBreakMinutes: (longBreakMinutes: number) => set({ longBreakMinutes }),
  setIterationsBeforeLongBreak: (iterationsBeforeLongBreak: number) => set({ iterationsBeforeLongBreak }),
  startPomodoro: () => {
    const { pomodoro, taskMinutes } = get()
    if (!pomodoro) {
      return
    }

    const now = Date.now()
    if (pomodoro.timerMode === TimerMode.Running) {
      return
    } else if (pomodoro.timerMode === TimerMode.Paused) {
      set({ pomodoro: { ...pomodoro, lastTick: now, timerMode: TimerMode.Running } })
    } else {
      set({ pomodoro: { ...pomodoro, lastTick: now, remainingMs: taskMinutes * 60 * 1000, timerMode: TimerMode.Running } })
    }
  },
  pausePomodoro: () => {
    const pomodoro = get().pomodoro
    if (!pomodoro || !pomodoro.lastTick || !pomodoro.remainingMs) {
      return
    }

    if (pomodoro.timerMode === TimerMode.Running) {
      const now = Date.now();
      const elapsed = now - pomodoro.lastTick;
      const remainingMs = pomodoro.remainingMs - elapsed;
      set({ pomodoro: { ...pomodoro, remainingMs, lastTick: now, timerMode: TimerMode.Paused } })
    }
  },
  resetPomodoro: () => {
    const { pomodoro, taskMinutes } = get()
    if (!pomodoro) {
      return
    }
    set({ pomodoro: { iteration: 1, remainingMs: taskMinutes * 60 * 1000, pomodoroMode: PomodoroMode.Task, timerMode: TimerMode.Stopped } })
  },
  updatePomodoro: () => {
    const { pomodoro, taskMinutes, shortBreakMinutes, longBreakMinutes, iterationsBeforeLongBreak } = get()
    if (!pomodoro || !pomodoro.remainingMs || !pomodoro.lastTick) {
      return
    }
    const now = Date.now()
    const elapsed = now - pomodoro.lastTick
    const remainingMs = pomodoro.remainingMs - elapsed

    if (remainingMs <= 0) {
      let remainingMs = 0
      let iteration = pomodoro.iteration;
      let pomodoroMode = pomodoro.pomodoroMode;

      if (pomodoro.pomodoroMode === PomodoroMode.Task) {
        pomodoroMode = PomodoroMode.ShortBreak
        remainingMs = shortBreakMinutes * 60 * 1000
      } else if (pomodoro.pomodoroMode === PomodoroMode.ShortBreak) {
        if (iteration === iterationsBeforeLongBreak) {
          pomodoroMode = PomodoroMode.LongBreak
          remainingMs = longBreakMinutes * 60 * 1000
        } else {
          iteration += 1
          pomodoroMode = PomodoroMode.Task
          remainingMs = taskMinutes * 60 * 1000
        }
      } else {
        iteration = 1
        pomodoroMode = PomodoroMode.Task
        remainingMs = taskMinutes * 60 * 1000
      }
      set({ pomodoro: { ...pomodoro, iteration, remainingMs, lastTick: now, pomodoroMode } })
    } else {
      set({ pomodoro: { ...pomodoro, remainingMs, lastTick: now } })
    }
  }

}), persistConfig))

export default usePomodoroStore