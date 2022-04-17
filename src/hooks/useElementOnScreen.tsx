import { useCallback, useEffect, useRef, useState } from 'react'

export function useElementOnScreen(callback: (isIntersecting: boolean) => void, options?: IntersectionObserverInit) {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const callbackFunction = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries
      callback(entry.isIntersecting)
      setIsVisible(entry.isIntersecting)
    },
    [callback]
  )

  useEffect(() => {
    const obverver = new IntersectionObserver(callbackFunction, options)

    const container = containerRef.current
    if (container) obverver.observe(container)

    return () => {
      if (container) obverver.unobserve(container)
    }
  }, [options, containerRef, callbackFunction])

  return { containerRef, isVisible }
}
