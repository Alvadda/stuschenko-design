import { ReactNode } from 'react'

import { combineClassNames } from '../../utils/utils'
import style from './text.module.css'

interface Props {
  type?: 'h1' | 'h2' | 'h3' | 'p' | 'a'
  color?: 'dark' | 'light'
  textAlign?: 'start' | 'center' | 'end'
  children?: ReactNode
}

function Text({ type = 'p', color = 'dark', textAlign = 'start', children }: Props) {
  const textColor = color === 'dark' ? style.textDark : style.textLight

  if (type === 'h2')
    return (
      <h2 className={combineClassNames([style.h2, textColor])} style={{ textAlign }}>
        {children}
      </h2>
    )
  if (type === 'h3')
    return (
      <h3 className={combineClassNames([style.h3, textColor])} style={{ textAlign }}>
        {children}
      </h3>
    )

  return (
    <p className={combineClassNames([style.p, textColor])} style={{ textAlign }}>
      {children}
    </p>
  )
}

export default Text
