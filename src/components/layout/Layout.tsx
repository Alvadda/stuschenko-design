import { ReactNode } from 'react'

import { combineClassNames } from '../../utils/utils'
import Text from '../text/Text'
import style from './layout.module.css'

interface Props {
  title: string
  contentSpacing?: 'm' | 'l'
  children?: ReactNode
}

function Layout({ title, contentSpacing = 'l', children }: Props) {
  const spacingClass = contentSpacing === 'l' ? style.spacingLarge : style.spacingSmall

  return (
    <div className={style.container}>
      <Text type="h2">{title}</Text>
      <div className={combineClassNames([style.content, spacingClass])}>{children}</div>
    </div>
  )
}

export default Layout
