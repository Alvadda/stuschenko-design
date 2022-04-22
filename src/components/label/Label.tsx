import { LabelHTMLAttributes, ReactNode } from 'react'
import style from './label.module.css'

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  title: string
  htmlFor: string
  children?: ReactNode
}

function Label({ title, children, htmlFor, className, ...rest }: Props) {
  return (
    <label className={`${style.label} ${className}`} htmlFor={htmlFor} {...rest}>
      <span className={style.title}>{title}</span>
      {children}
    </label>
  )
}

export default Label
