import { Children, cloneElement, isValidElement, useEffect, useState } from 'react'

import { combineClassNames } from '../../utils/utils'
import style from './carousel.module.css'

interface Props {
  speed?: number
  progressBar?: boolean
  progressDots?: boolean
  height?: string
  width?: string
  children?: React.ReactNode
}
function Carousel({ speed = 10000, progressBar = false, progressDots = false, children }: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const styledChildren =
    Children.map(children, (child, index) => {
      if (isValidElement(child)) {
        const isActive = index === activeIndex ? style.activ : ''
        const className = combineClassNames([child.props.className, style.item, isActive])

        return cloneElement(child, { className })
      }
    }) ?? []

  //TODO only run if is in viewport
  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = activeIndex + 1
      if (newIndex >= (styledChildren.length || 0)) {
        return setActiveIndex(0)
      }
      if (newIndex < 0) {
        return setActiveIndex(styledChildren.length || 0)
      }
      setActiveIndex(activeIndex + 1)
    }, speed)

    return () => clearInterval(interval)
  }, [styledChildren.length, activeIndex, speed])

  return (
    <div className={style.container}>
      <div className={style.carousel}>
        <div className={style.carouselContent}>{styledChildren.map((child) => child)}</div>
        {progressBar && (
          <div className={style.progessBar}>
            {styledChildren.map((_, index) => {
              const isActive = index === activeIndex ? style.progessActiv : ''
              return <div key={index} className={combineClassNames([style.progessBarItem, isActive])} />
            })}
          </div>
        )}
      </div>
      {progressDots && (
        <div className={style.progessContainer}>
          {styledChildren.map((_, index) => {
            const isActive = index === activeIndex ? style.progessActiv : ''
            return <div key={index} className={combineClassNames([style.progessItem, isActive])} />
          })}
        </div>
      )}
    </div>
  )
}

export default Carousel
