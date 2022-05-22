import { ReactNode } from 'react'

import style from './text.module.css'

interface Props {
  type?: 'h1' | 'h2' | 'h3' | 'p' | 'a'
  color?: 'dark' | 'light'
  children?: ReactNode
}

function Text({ type = 'p', color = 'dark', children }: Props) {
  if (type === 'h2') return <h2 className={style.h2}>{children}</h2>

  return <p className={style.p}>{children}</p>
}

export default Text
