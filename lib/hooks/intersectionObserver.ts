import { useState, useEffect, useRef, RefObject } from 'react'
import { TUseIntersectionObserver } from '@/lib/types/hooks'

const useIntersectionObserver = (observerOptions: TUseIntersectionObserver): [RefObject<HTMLDivElement>, boolean] => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkIfInView = () => {
      if (!elementRef.current) return false

      const { top, left, bottom, right } = elementRef.current.getBoundingClientRect()
      const windowHeight = elementRef.current.parentElement?.clientHeight || window.innerHeight
      const windowWidth = elementRef.current.parentElement?.clientWidth || window.innerWidth
      return top >= 0 && left >= 0 && bottom <= windowHeight && right <= windowWidth
    }

    if (checkIfInView() && !isVisible) {
      setIsVisible(true)
    } else {
      const observer = new IntersectionObserver(([entry]) => {
        if (isVisible !== entry.isIntersecting) {
          setIsVisible(entry.isIntersecting)
        }
      }, observerOptions)

      if (elementRef.current) {
        observer.observe(elementRef.current)
      }

      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current)
        }
      }
    }
  }, [observerOptions])

  return [elementRef, isVisible]
}

export default useIntersectionObserver
