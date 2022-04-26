import { FormEvent, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import Button from '../../components/button/Button'
import Page from '../../components/page/Page'
import TextArea from '../../components/textArea/TextArea'
import TextField from '../../components/textField/TextField'
import { getEventTargetAs } from '../../utils/utils'
import style from './contact.module.css'

interface FormTarget {
  firstName: InputHTMLAttributes<HTMLInputElement>
  sureName: InputHTMLAttributes<HTMLInputElement>
  email: InputHTMLAttributes<HTMLInputElement>
  message: TextareaHTMLAttributes<HTMLTextAreaElement>
}

function Contect() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formTarget = getEventTargetAs<FormTarget>(event.target)
    console.log('firstName', formTarget.firstName.value)
    console.log('sureName', formTarget.sureName.value)
    console.log('email', formTarget.email.value)
    console.log('message', formTarget.message.value)
  }

  return (
    <Page page="contact" threshold={0.6}>
      <div className={style.container}>
        <h2>CONTECT</h2>
        <form className={style.form} onSubmit={onSubmit}>
          <TextField label="Firstname" id="firstName" />
          <TextField label="Surename" id="sureName" />
          <TextField label="E-Mail" id="email" type="email" />
          <TextArea label="Message" id="message" rows={5} className={style.message} />
          <Button variant="full" type="submit" style={{ height: '5.2rem', justifySelf: 'flex-start' }}>
            send
          </Button>
        </form>
      </div>
    </Page>
  )
}

export default Contect
