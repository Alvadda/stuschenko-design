import style from './header.module.css'
import React from 'react'
import logo from '../../assets/logo.png'

function Header() {
  return (
    <div className={style.container}>
      <div className={style.heading}>
        <img src={logo} alt="Logo" />
        <p className={style.title}>Johanna Stuschenko</p>
      </div>
      <nav className={style.navigationContainer}>
        <ul className={style.navigation}>
          <li className={style.navigationItem}>
            <a href="#about">About</a>
          </li>
          <li className={style.navigationItem}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className={style.navigationItem}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
