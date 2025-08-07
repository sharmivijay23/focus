export enum PomodoroMode {
  Task = 'Task',
  ShortBreak = 'ShortBreak',
  LongBreak = 'LongBreak',
}

export enum TimerMode {
  Running = 'Running',
  Paused = 'Paused',
  Stopped = 'Stopped',
}

export interface Pomodoro {
  iteration: number,
  remainingMs?: number,
  lastTick?: number,
  pomodoroMode: PomodoroMode,
  timerMode: TimerMode,
}

export interface FocusStat {
  focusTime: number,
  focusDate: string,
}