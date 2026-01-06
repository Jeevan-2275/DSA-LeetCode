import { useCallback, useEffect, useRef, useState } from 'react'

export function useStopwatch() {
  const [elapsedMs, setElapsedMs] = useState(0)
  const [running, setRunning] = useState(false)
  const rafRef = useRef(0)
  const startRef = useRef(0)

  const tick = useCallback((now) => {
    setElapsedMs(now - startRef.current)
    if (running) rafRef.current = requestAnimationFrame(tick)
  }, [running])

  const start = useCallback(() => {
    if (running) return
    setRunning(true)
    startRef.current = performance.now() - elapsedMs
    rafRef.current = requestAnimationFrame(tick)
  }, [elapsedMs, running, tick])

  const pause = useCallback(() => {
    if (!running) return
    setRunning(false)
    cancelAnimationFrame(rafRef.current)
    rafRef.current = 0
  }, [running])

  const reset = useCallback(() => {
    cancelAnimationFrame(rafRef.current)
    rafRef.current = 0
    setRunning(false)
    setElapsedMs(0)
  }, [])

  useEffect(() => () => cancelAnimationFrame(rafRef.current), [])

  return { elapsedMs, running, start, pause, reset }
}