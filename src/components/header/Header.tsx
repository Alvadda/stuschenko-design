import React from 'react'

import { useWindowSize } from '../../hooks/useWindowSize'
import HeaderMobile from './HeaderMobile'
import HeaderWeb from './HeaderWeb'

function Header() {
  const { width } = useWindowSize()

  const isMobile = width < 1000

  if (isMobile) {
    return <HeaderMobile />
  }

  return <HeaderWeb />
}

export default Header
