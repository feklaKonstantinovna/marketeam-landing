import { useEffect, useState } from 'react'

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

export function useCountUp(target = 20, duration = 2000, delay = 1200) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let raf = 0
    let start = null
    const timeout = setTimeout(() => {
      const tick = (now) => {
        if (start === null) start = now
        const progress = Math.min((now - start) / duration, 1)
        setValue(Math.round(easeOutCubic(progress) * target))
        if (progress < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, delay)

    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(raf)
    }
  }, [target, duration, delay])

  return value
}
