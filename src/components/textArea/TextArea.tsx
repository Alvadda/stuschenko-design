import { TextareaHTMLAttributes } from 'react'
import Label from '../label/Label'
import style from './textArea.module.css'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  id: string
}

function TextArea({ label, id, className, ...rest }: Props) {
  if (label)
    return (
      <Label title={label} htmlFor={id} className={className}>
        <textarea className={style.area} id={id} name={id} {...rest} />
      </Label>
    )

  return <textarea className={style.area} id={id} name={id} {...rest} />
}

export default TextArea
