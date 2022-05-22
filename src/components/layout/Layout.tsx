import { ReactNode } from 'react'

import Text from '../text/Text'
import style from './layout.module.css'

interface Props {
  title: string
  children?: ReactNode
}

function Layout({ title, children }: Props) {
  return (
    <div className={style.container}>
      <Text type="h2">{title}</Text>
      <div className={style.content}>{children}</div>
    </div>
  )
}

export default Layout
