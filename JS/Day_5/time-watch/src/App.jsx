import { useEffect, useMemo, useRef, useState } from 'react'
import { useCountdown, formatTime, beep } from './hooks/useCountdown'
import { useStopwatch } from './hooks/useStopwatch'
import './index.css'

const LS = {
  theme: 'timer.theme',
  lastType: 'timer.lastType', // 'preset' | 'custom'
  lastPreset: 'timer.lastPresetMin',
  lastDuration: 'timer.lastDurationMs',
}

function classNames(...xs) { return xs.filter(Boolean).join(' ') }

function ModeToggle({ mode, setMode }) {
  return (
    <div className="inline-flex rounded-xl border border-slate-200 dark:border-slate-800 p-1 bg-white/70 dark:bg-slate-900/60 backdrop-blur">
      {['Countdown', 'Stopwatch'].map((m) => (
        <button
          key={m}
          className={classNames(
            'px-3 py-1.5 text-sm rounded-lg focus-ring',
            mode === m ? 'bg-brand text-white' : 'text-slate-700 dark:text-slate-200'
          )}
          onClick={() => setMode(m)}
          aria-pressed={mode === m}
        >
          {m}
        </button>
      ))}
    </div>
  )
}

function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem(LS.theme) || 'light')
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark'); else root.classList.remove('dark')
    localStorage.setItem(LS.theme, theme)
  }, [theme])
  return (
    <button
      className="focus-ring rounded-lg border border-slate-200 dark:border-slate-800 px-3 py-2 text-sm bg-white/70 dark:bg-slate-900/60"
      aria-label="Toggle theme"
      title="Toggle theme (T)"
      onClick={() => setTheme((t) => t === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
    </button>
  )
}

function TimerDisplay({ label, time, progress }) {
  return (
    <section aria-live="polite" aria-atomic="true" className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 p-6 shadow-sm">
      <div className="text-center text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight select-none tabular-nums">
        {time}
      </div>
      <div className="mt-4 h-2 bg-slate-200/60 dark:bg-slate-800/80 rounded-full overflow-hidden" aria-hidden>
        <div className="h-full bg-gradient-to-r from-brand to-blue-400 transition-[width] duration-100" style={{ width: `${Math.round(progress * 100)}%` }} />
      </div>
      {label && <p className="sr-only">{label}</p>}
    </section>
  )
}

function Presets({ active, disabled, onSelect }) {
  const items = [1, 5, 30]
  return (
    <div className="flex flex-wrap gap-2 items-center">
      {items.map((m) => (
        <button
          key={m}
          disabled={disabled}
          onClick={() => onSelect(m)}
          className={classNames(
            'px-3 py-2 rounded-full border focus-ring',
            'border-slate-200 dark:border-slate-800',
            active === m ? 'bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-800' : 'bg-white/70 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200'
          )}
          aria-pressed={active === m}
        >
          {m}:00
        </button>
      ))}
    </div>
  )
}

function CustomTime({ disabled, onSet, isActive }) {
  const minRef = useRef(null)
  const secRef = useRef(null)
  const [mm, setMm] = useState('')
  const [ss, setSs] = useState('')

  useEffect(() => {
    // Load last custom if available
    const saved = parseInt(localStorage.getItem(LS.lastDuration) || '0', 10)
    if (saved > 0) {
      const m = Math.floor(saved / 60000)
      const s = Math.floor((saved % 60000) / 1000)
      setMm(String(m))
      setSs(String(s))
    }
  }, [])

  const handleSet = () => {
    const m = Math.max(0, Math.min(599, parseInt(mm || '0', 10)))
    const s = Math.max(0, Math.min(59, parseInt(ss || '0', 10)))
    onSet(m * 60000 + s * 1000)
    localStorage.setItem(LS.lastType, 'custom')
    localStorage.setItem(LS.lastDuration, String(m * 60000 + s * 1000))
  }

  return (
    <div className={classNames('flex items-center gap-2 p-1 rounded-full border', isActive ? 'ring-2 ring-brand' : '', 'border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60')}
      role="group" aria-label="Custom time">
      <label htmlFor="minInput" className="sr-only">Minutes</label>
      <input id="minInput" ref={minRef} type="number" inputMode="numeric" min={0} max={599}
        placeholder="MM" value={mm}
        onChange={(e) => setMm(e.target.value)}
        disabled={disabled}
        className="w-20 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-center font-semibold text-slate-800 dark:text-slate-100 focus-ring" />
      <span className="font-bold text-slate-500">:</span>
      <label htmlFor="secInput" className="sr-only">Seconds</label>
      <input id="secInput" ref={secRef} type="number" inputMode="numeric" min={0} max={59}
        placeholder="SS" value={ss}
        onChange={(e) => setSs(e.target.value)}
        disabled={disabled}
        className="w-20 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-center font-semibold text-slate-800 dark:text-slate-100 focus-ring" />
      <button onClick={handleSet} disabled={disabled} className="px-3 py-2 rounded-lg text-sm border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 focus-ring">Set</button>
    </div>
  )
}

function Controls({ running, paused, canStart, onStart, onPause, onResume, onReset }) {
  return (
    <div className="flex flex-wrap gap-2">
      <button onClick={onStart} disabled={!canStart || running || paused} className="px-4 py-2 rounded-lg font-bold text-white bg-brand hover:bg-brand-600 disabled:opacity-50 focus-ring">Start</button>
      <button onClick={onPause} disabled={!running} className="px-4 py-2 rounded-lg font-semibold border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 disabled:opacity-50 focus-ring">Pause</button>
      <button onClick={onResume} disabled={!paused} className="px-4 py-2 rounded-lg font-semibold border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 disabled:opacity-50 focus-ring">Resume</button>
      <button onClick={onReset} disabled={!(running || paused || !canStart)} className="px-4 py-2 rounded-lg font-bold text-white bg-rose-500 hover:bg-rose-600 disabled:opacity-50 focus-ring">Reset</button>
    </div>
  )
}

function App() {
  const [mode, setMode] = useState('Countdown')
  const [activePreset, setActivePreset] = useState(null) // 1|5|30|'custom'|null

  // Countdown hook
  const c = useCountdown(0)

  // Stopwatch hook
  const sw = useStopwatch()

  // Load last saved mode/time/theme
  useEffect(() => {
    const lastType = localStorage.getItem(LS.lastType)
    const d = parseInt(localStorage.getItem(LS.lastDuration) || '0', 10)
    if (d > 0) c.setDuration(d)
    if (lastType === 'preset') {
      const m = parseInt(localStorage.getItem(LS.lastPreset) || '0', 10)
      if ([1,5,30].includes(m)) setActivePreset(m)
    } else if (lastType === 'custom') {
      setActivePreset('custom')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Completion: fire once when remaining hits 0 from >0
  const prevRem = useRef(c.remainingMs)
  useEffect(() => {
    if (prevRem.current > 0 && c.remainingMs === 0) {
      document.getElementById('flash')?.classList.add('opacity-70')
      setTimeout(() => document.getElementById('flash')?.classList.remove('opacity-70'), 450)
      beep()
    }
    prevRem.current = c.remainingMs
  }, [c.remainingMs])

  // Keyboard shortcuts
  useEffect(() => {
    const onKey = (e) => {
      const tag = (e.target && e.target.tagName) || ''
      if (['INPUT', 'TEXTAREA'].includes(tag)) return
      if (e.repeat) return
      if (e.code === 'Space') {
        e.preventDefault()
        if (mode === 'Countdown') {
          if (c.running) c.pause(); else if (c.paused && c.remainingMs > 0) c.resume(); else if (!c.running && !c.paused && c.remainingMs > 0) c.start()
        } else {
          if (sw.running) sw.pause(); else sw.start()
        }
      } else if (e.key?.toLowerCase() === 'r') {
        mode === 'Countdown' ? c.reset() : sw.reset()
      } else if (e.key?.toLowerCase() === 't') {
        const root = document.documentElement
        root.classList.toggle('dark')
        localStorage.setItem(LS.theme, root.classList.contains('dark') ? 'dark' : 'light')
      } else if (mode === 'Countdown') {
        if (e.key === '1') handlePreset(1)
        if (e.key === '5') handlePreset(5)
        if (e.key === '3') handlePreset(30)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [c, sw, mode])

  const handlePreset = (min) => {
    if (c.running) return
    setActivePreset(min)
    const ms = min * 60000
    c.setDuration(ms)
    localStorage.setItem(LS.lastType, 'preset')
    localStorage.setItem(LS.lastPreset, String(min))
    localStorage.setItem(LS.lastDuration, String(ms))
  }

  const handleCustomSet = (ms) => {
    if (c.running) return
    setActivePreset('custom')
    c.setDuration(ms)
  }

  const timeLabel = useMemo(() => mode === 'Countdown' ? 'Countdown remaining' : 'Stopwatch elapsed', [mode])
  const timeText = mode === 'Countdown' ? formatTime(c.remainingMs) : formatTime(sw.elapsedMs)
  const progress = mode === 'Countdown' ? c.progress : 0

  const canStartCountdown = c.remainingMs > 0

  return (
    <div className="min-h-full">
      <div id="flash" aria-hidden className="pointer-events-none fixed inset-0 bg-white dark:bg-white opacity-0 transition-opacity"></div>
      <header className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Timer</h1>
        <div className="flex items-center gap-2">
          <ModeToggle mode={mode} setMode={setMode} />
          <ThemeToggle />
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 pb-10">
        <TimerDisplay label={timeLabel} time={timeText} progress={progress} />

        {mode === 'Countdown' && (
          <section className="mt-5 flex flex-wrap items-center gap-3">
            <Presets active={activePreset} disabled={c.running} onSelect={handlePreset} />
            <div className="ml-auto max-sm:ml-0">
              <CustomTime disabled={c.running} onSet={handleCustomSet} isActive={activePreset === 'custom'} />
            </div>
          </section>
        )}

        <section className="mt-4">
          {mode === 'Countdown' ? (
            <Controls
              running={c.running}
              paused={c.paused}
              canStart={canStartCountdown}
              onStart={c.start}
              onPause={c.pause}
              onResume={c.resume}
              onReset={c.reset}
            />
          ) : (
            <div className="flex flex-wrap gap-2">
              <button onClick={sw.start} className="px-4 py-2 rounded-lg font-bold text-white bg-brand hover:bg-brand-600 focus-ring">{sw.running ? 'Running' : 'Start'}</button>
              <button onClick={sw.pause} disabled={!sw.running} className="px-4 py-2 rounded-lg font-semibold border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 disabled:opacity-50 focus-ring">Pause</button>
              <button onClick={sw.reset} className="px-4 py-2 rounded-lg font-bold text-white bg-rose-500 hover:bg-rose-600 focus-ring">Reset</button>
            </div>
          )}
        </section>

        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Shortcuts: Space = Start/Pause/Resume, R = Reset, T = Theme, 1/5/3 = Presets (Countdown)</p>
      </main>
    </div>
  )
}

export default App
