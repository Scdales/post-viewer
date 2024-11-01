import Image from 'next/image'
import loading from '@/public/loading.svg'
import useIntersectionObserver from '@/lib/hooks/intersectionObserver'
import { useEffect } from 'react'
import { useAppDispatch } from '@/lib/hooks'
import { fetchNextPostPage } from '@/lib/store/slices'

const LoadingIndicator = () => {
  const dispatch = useAppDispatch()
  const [elementRef, isVisible] = useIntersectionObserver({
    root: null,
    threshold: 0.5
  })

  useEffect(() => {
    if (isVisible) {
      dispatch(fetchNextPostPage())
    }
  }, [isVisible])

  const indicatorClassName = `block m-auto origin-50% ${isVisible ? 'animate-spin-step-fade' : 'opacity-0'}`

  return (
    <div ref={elementRef}>
      <Image className={indicatorClassName} src={loading} alt="Loading" />
    </div>
  )
}

export default LoadingIndicator
