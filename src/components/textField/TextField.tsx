import { InputHTMLAttributes } from 'react'
import Label from '../label/Label'
import style from './textField.module.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  id: string
  type?: 'text' | 'email' | 'password'
}

function TextField({ label, id, type = 'text', className, ...rest }: Props) {
  if (label)
    return (
      <Label title={label} htmlFor={id}>
        <input className={`${style.input} ${className}`} type={type} id={id} name={id} {...rest} />
      </Label>
    )

  return <input className={`${style.input} ${className}`} type={type} id={id} name={id} {...rest} />
}

export default TextField
