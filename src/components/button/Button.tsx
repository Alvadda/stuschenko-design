import { ButtonHTMLAttributes } from 'react'
import style from './button.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'full' | 'outlined'
}

function Button({ variant = 'full', children, ...rest }: Props) {
  const className = variant === 'full' ? style.full : style.outlined

  return (
    <button className={`${style.button} ${className}`} {...rest}>
      {children}
    </button>
  )
}

export default Button
