import React from 'react'

import { ReactComponent as Logo } from '../../assets/logoSmall.svg'
import { PageType, usePageContext } from '../../contexts/PageContext'
import { combineClassNames } from '../../utils/utils'
import style from './headerWeb.module.css'

function HeaderWeb() {
  const { page } = usePageContext()

  const getPageActiveClass = (pageHeading: PageType) => {
    return page === pageHeading ? style.activNavLink : ''
  }

  return (
    <>
      <div className={style.spacer}></div>
      <header className={style.container}>
        <div className={style.heading}>
          <Logo />
          <p className={style.title}>Johanna Stuschenko</p>
        </div>
        <nav className={style.navigationContainer}>
          <ul className={style.navigation}>
            <li className={combineClassNames([style.navigationItem, getPageActiveClass('about')])}>
              <a href="#about">About</a>
            </li>
            <li className={combineClassNames([style.navigationItem, getPageActiveClass('portfolio')])}>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className={combineClassNames([style.navigationItem, getPageActiveClass('contact')])}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default HeaderWeb
