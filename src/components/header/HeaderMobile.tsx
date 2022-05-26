import { useState } from 'react'

import { ReactComponent as Cross } from '../../assets/cross.svg'
import { ReactComponent as Menu } from '../../assets/menu.svg'
import Text from '../text/Text'
import style from './headerMobile.module.css'

function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={style.container}>
      <div className={style.heading}>
        <Text type="h1" textAlign="center">
          Johanna Stuschenko
        </Text>
        <div className={style.menu} onClick={() => setIsMenuOpen((value) => !value)}>
          {isMenuOpen ? <Cross /> : <Menu />}
        </div>
      </div>
    </header>
  )
}

export default HeaderMobile
