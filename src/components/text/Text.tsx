import { ReactNode } from 'react'

import style from './text.module.css'

interface Props {
  type?: 'h1' | 'h2' | 'h3' | 'p' | 'a'
  color?: 'dark' | 'light'
  textAlign?: 'start' | 'center' | 'end'
  children?: ReactNode
}

function Text({ type = 'p', color = 'dark', textAlign = 'start', children }: Props) {
  if (type === 'h2') return <h2 className={style.h2}>{children}</h2>
  if (type === 'h3') return <h3 className={style.h3}>{children}</h3>

  return (
    <p className={style.p} style={{ textAlign }}>
      {children}
    </p>
  )
}

export default Text
