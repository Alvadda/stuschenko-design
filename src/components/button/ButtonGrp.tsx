import { ReactNode } from 'react'

import style from './buttonGrp.module.css'

interface Props {
  children?: ReactNode
}

function ButtonGrp({ children }: Props) {
  return <div className={style.buttonGrp}>{children}</div>
}

export default ButtonGrp
