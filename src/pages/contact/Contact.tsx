import { FormEvent, InputHTMLAttributes } from 'react'
import Button from '../../components/button/Button'
import Page from '../../components/page/Page'
import TextField from '../../components/textField/TextField'
import { getEventTargetAsFormTarget } from '../../utils/utils'
import style from './contact.module.css'

interface FormTarget {
  firstName: InputHTMLAttributes<HTMLInputElement>
  sureName: InputHTMLAttributes<HTMLInputElement>
  email: InputHTMLAttributes<HTMLInputElement>
}

function Contect() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formTarget = getEventTargetAsFormTarget<FormTarget>(event.target)
    console.log('firstName', formTarget.firstName.value)
    console.log('sureName', formTarget.sureName.value)
    console.log('email', formTarget.email.value)
  }

  return (
    <Page page="contact" threshold={0.6}>
      <div className={style.container}>
        <h2>CONTECT</h2>
        <form className={style.form} onSubmit={onSubmit}>
          <TextField label="Firstname" id="firstName" />
          <TextField label="Surename" id="sureName" />
          <TextField label="E-Mail" id="email" type="email" />
          <Button variant="full" type="submit" style={{ height: '5.2rem' }}>
            send
          </Button>
        </form>
      </div>
    </Page>
  )
}

export default Contect
