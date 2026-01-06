import { useCallback, useEffect, useRef, useState } from 'react'

export function useCountdown(initialMs = 0) {
  const [durationMs, setDurationMs] = useState(() => Math.max(0, Math.floor(initialMs)))
  const [remainingMs, setRemainingMs] = useState(() => Math.max(0, Math.floor(initialMs)))
  const [running, setRunning] = useState(false)
  const [paused, setPaused] = useState(false)

  const rafRef = useRef(0)
  const endRef = useRef(0)

  const updateFromNow = useCallback((now) => {
    const remain = Math.max(0, Math.floor(endRef.current - now))
    setRemainingMs(remain)
    if (remain <= 0) {
      setRunning(false)
      setPaused(false)
      cancelAnimationFrame(rafRef.current)
      rafRef.current = 0
    }
  }, [])

  const tick = useCallback((now) => {
    updateFromNow(now)
    if (endRef.current > now && running) {
      rafRef.current = requestAnimationFrame(tick)
    }
  }, [running, updateFromNow])

  const start = useCallback(() => {
    if (running || paused) return
    if (remainingMs <= 0) return
    setRunning(true)
    endRef.current = performance.now() + remainingMs
    rafRef.current = requestAnimationFrame(tick)
  }, [paused, remainingMs, running, tick])

  const pause = useCallback(() => {
    if (!running) return
    const now = performance.now()
    setRunning(false)
    setPaused(true)
    cancelAnimationFrame(rafRef.current)
    rafRef.current = 0
    const remain = Math.max(0, Math.floor(endRef.current - now))
    setRemainingMs(remain)
  }, [running])

  const resume = useCallback(() => {
    if (!paused || remainingMs <= 0) return
    setPaused(false)
    setRunning(true)
    endRef.current = performance.now() + remainingMs
    rafRef.current = requestAnimationFrame(tick)
  }, [paused, remainingMs, tick])

  const reset = useCallback(() => {
    cancelAnimationFrame(rafRef.current)
    rafRef.current = 0
    setRunning(false)
    setPaused(false)
    setDurationMs(0)
    setRemainingMs(0)
  }, [])

  const setDuration = useCallback((ms) => {
    cancelAnimationFrame(rafRef.current)
    rafRef.current = 0
    setRunning(false)
    setPaused(false)
    const val = Math.max(0, Math.floor(ms))
    setDurationMs(val)
    setRemainingMs(val)
  }, [])

  useEffect(() => () => cancelAnimationFrame(rafRef.current), [])

  const progress = durationMs > 0 ? Math.min(1, 1 - remainingMs / durationMs) : 0

  return {
    durationMs,
    remainingMs,
    running,
    paused,
    progress,
    setDuration,
    start,
    pause,
    resume,
    reset,
  }
}

export function formatTime(ms) {
  const total = Math.max(0, Math.floor(ms / 1000))
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export function beep() {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext
    const ctx = new Ctx()
    const o = ctx.createOscillator()
    const g = ctx.createGain()
    o.type = 'sine'
    o.frequency.value = 880
    o.connect(g)
    g.connect(ctx.destination)
    g.gain.setValueAtTime(0.001, ctx.currentTime)
    g.gain.exponentialRampToValueAtTime(0.4, ctx.currentTime + 0.01)
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25)
    o.start()
    o.stop(ctx.currentTime + 0.3)
  } catch {}
}