import { ReactNode } from 'react'

import style from './imgBox.module.css'

interface Props {
  children?: ReactNode
}

function ImgBox({ children }: Props) {
  return <div className={style.box}>{children}</div>
}

export default ImgBox
