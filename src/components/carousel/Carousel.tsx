import { Children, cloneElement, isValidElement, useEffect, useState } from 'react'
import { combineClassNames } from '../../utils/utils'
import style from './carousel.module.css'

interface Props {
  speed?: number
  children?: React.ReactNode
}
function Carousel({ speed = 10000, children }: Props) {
  const [activIndex, setActivIndex] = useState<number>(0)

  const styledChildren =
    Children.map(children, (child, index) => {
      if (isValidElement(child)) {
        const isActive = index === activIndex ? style.activ : ''
        const className = combineClassNames([child.props.className, style.item, isActive])

        return cloneElement(child, { className })
      }
    }) ?? []

  //TODO only run if is in viewport
  useEffect(() => {
    const inverval = setInterval(() => {
      const newIndex = activIndex + 1
      if (newIndex >= (styledChildren.length || 0)) {
        return setActivIndex(0)
      }
      if (newIndex < 0) {
        return setActivIndex(styledChildren.length || 0)
      }
      setActivIndex(activIndex + 1)
    }, speed) //TODO take interval timer as prop

    return () => clearInterval(inverval)
  }, [styledChildren.length, activIndex, speed])

  return (
    <div className={style.container}>
      <div className={style.carousel}>
        <div className={style.carouselContent}>{styledChildren.map((child) => child)}</div>
        <div className={style.progessBar}>
          {styledChildren.map((_, index) => {
            const isActive = index === activIndex ? style.progessActiv : ''
            return <div key={index} className={combineClassNames([style.progessBarItem, isActive])} />
          })}
        </div>
      </div>
      <div className={style.progessContainer}>
        {styledChildren.map((_, index) => {
          const isActive = index === activIndex ? style.progessActiv : ''
          return <div key={index} className={combineClassNames([style.progessItem, isActive])} />
        })}
      </div>
    </div>
  )
}

export default Carousel
