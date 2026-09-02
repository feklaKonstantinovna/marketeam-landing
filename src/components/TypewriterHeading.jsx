import { useEffect, useState } from 'react'

const TEXT =
  'Unlock Top Marketing Talent You Thought Was Out of Reach -- Now Just One Click Away!'
const SPLIT_AT = 67

export default function TypewriterHeading({
  speed = 35,
  delay = 400,
  onDone,
}) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let interval
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCount((c) => {
          if (c + 1 >= TEXT.length) {
            clearInterval(interval)
            setDone(true)
            onDone?.()
            return TEXT.length
          }
          return c + 1
        })
      }, speed)
    }, delay)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [speed, delay, onDone])

  const typed = TEXT.slice(0, count)
  const dark = typed.slice(0, SPLIT_AT)
  const light = typed.slice(SPLIT_AT)

  return (
    <h1 className="hero-heading">
      <span className="heading-dark">{dark}</span>
      <span className="heading-light">{light}</span>
      {!done && <span className="type-cursor" aria-hidden="true" />}
    </h1>
  )
}
