import { ReactNode } from 'react'

import style from './imgBox.module.css'

interface Props {
  height?: string
  width?: string
  children?: ReactNode
}

function ImgBox({ height = '100%', width = '100%', children }: Props) {
  return (
    <div className={style.box} style={{ height, width }}>
      {children}
    </div>
  )
}

export default ImgBox
