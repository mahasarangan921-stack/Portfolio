import { useEffect, useState } from 'react'

export default function useTypewriter(words, { typeSpeed = 75, deleteSpeed = 40, pause = 1500, startDelay = 1200 } = {}) {
  const [text, setText] = useState('')

  useEffect(() => {
    let wordIndex = 0
    let charIndex = 0
    let deleting = false
    let timeoutId

    const tick = () => {
      const word = words[wordIndex]
      if (!deleting) {
        charIndex++
        setText(word.slice(0, charIndex))
        if (charIndex === word.length) {
          deleting = true
          timeoutId = setTimeout(tick, pause)
          return
        }
      } else {
        charIndex--
        setText(word.slice(0, charIndex))
        if (charIndex === 0) {
          deleting = false
          wordIndex = (wordIndex + 1) % words.length
        }
      }
      timeoutId = setTimeout(tick, deleting ? deleteSpeed : typeSpeed)
    }

    const startId = setTimeout(tick, startDelay)
    return () => {
      clearTimeout(startId)
      clearTimeout(timeoutId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return text
}
