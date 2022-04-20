import { Children, cloneElement, isValidElement, useEffect, useState } from 'react'
import { combineClassNames } from '../../utils/utils'
import style from './carousel.module.css'

interface Props {
  children?: React.ReactNode
}
function Carousel({ children }: Props) {
  const [activIndex, setActivIndex] = useState<number>(0)

  const styledChildren =
    Children.map(children, (child, index) => {
      if (isValidElement(child)) {
        const isActive = index === activIndex ? style.activ : ''
        const className = combineClassNames([child.props.className, style.item, isActive])

        return cloneElement(child, { className })
      }
    }) ?? []

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
    }, 5000)

    return () => clearInterval(inverval)
  }, [styledChildren.length, activIndex])

  return (
    <div className={style.container}>
      <div className={style.carousel}>{styledChildren.map((child) => child)}</div>
      <div className={style.progessContainer}>
        {styledChildren.map((_, index) => {
          const isActive = index === activIndex ? style.progessItemActiv : ''
          return <div key={index} className={combineClassNames([style.progessItem, isActive])} />
        })}
      </div>
    </div>
  )
}

export default Carousel
