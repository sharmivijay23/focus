import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Mode } from '../domain/app'
import { Pomodoro, PomodoroMode, TimerMode } from '../domain/pomodoro'
import { PlayMode } from '../domain/audio'

interface IAppState {
  username: string | undefined,
  activeMode: Mode,
  // Background
  homeBackground: string,
  focusBackground: string,
  activeBackground: string,
  // Music Player
  showMusicPlayer: boolean,
  // Pomodoro
  taskMinutes: number,
  shortBreakMinutes: number,
  longBreakMinutes: number,
  iterationsBeforeLongBreak: number,
  pomodoro?: Pomodoro,
  showSettingsContent: boolean,
  //Quotes
  weekDayQuotes: {
    day: string,
    stat1: string,
    stat2: string,
  },
  quoteStore: {
    quote: string,
    author: string,
  },
  //stat
  reportFrequency: string | undefined,
  //sound
  soundSelected: string,
  sounds: string[],
  soundPlaying: boolean,
  playMode: string,
}

interface IAppActions {
  setUsername: (username: string) => void
  setActiveMode: (activeMode: Mode) => void
  setShowMusicPlayer: (showMusicPlayer: boolean) => void
  setTaskMinutes: (taskMinutes: number) => void
  setShortBreakMinutes: (shortBreakMinutes: number) => void
  setLongBreakMinutes: (longBreakMinutes: number) => void
  setIterationsBeforeLongBreak: (iterationsBeforeLongBreak: number) => void
  startPomodoro: () => void
  pausePomodoro: () => void
  resetPomodoro: () => void
  updatePomodoro: () => void
  setShowSettingsContent: (showSettingsContent: boolean) => void
  setSoundSelected: (soundSelected: string) => void
  setPlayMode: (val: string) => void
  setReportFrequency: (freq: string) => void
}

interface IAppStore extends IAppState, IAppActions { }

const persistConfig = {
  name: 'app-store',
}

const useAppStore = create<IAppStore>()(persist((set, get) => ({
  username: undefined,
  activeMode: Mode.Home,
  // Background
  homeBackground: 'temple',
  focusBackground: 'himalayas_with_houses',
  activeBackground: 'temple',
  // Music Player
  showMusicPlayer: false,
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
  // Stats
  reportFrequency: undefined,
  //Sound
  soundSelected: 'None',
  sounds: ['None', 'Rain', 'Cafe Vibes', 'Lightning Wings', 'Night Symphony with Traffic', 'Vintage Train Chime', 'Forest Bonfire'],
  playMode: PlayMode.Stopped,
  soundPlaying: false,
  showSettingsContent: false,
  quoteStore: {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  setUsername: (username: string) => set({ username }),
  setActiveMode: (activeMode: Mode) => {
    const { homeBackground, focusBackground } = get()
    const activeBackground = activeMode === Mode.Home ? homeBackground : focusBackground
    set({ activeMode, activeBackground })
  },
  setShowMusicPlayer: (showMusicPlayer: boolean) => set({ showMusicPlayer }),
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
  },
  setShowSettingsContent: (showSettingsContent: boolean) => set({ showSettingsContent }),
  weekDayQuotes: {
    day: "Friday",
    stat1: "Fantastic Friday",
    stat2: "Celebrate your hard work this week. ",
  },
  setReportFrequency: (freq) => set({ reportFrequency: freq }),
  setSoundSelected: (soundName: string) => set({ soundSelected: soundName }),
  setPlayMode: (Val) => set({ playMode: Val }),


}), persistConfig))

export default useAppStore