import { FormEvent, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

import Button from '../../components/button/Button'
import Page from '../../components/page/Page'
import Text from '../../components/text/Text'
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

// interface FormElements extends HTMLFormControlsCollection {
//   firstName: HTMLInputElement
// }
// interface UsernameFormElement extends HTMLFormElement {
//   readonly elements: FormElements
// }

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
        <Text type="h2">Here´s my contact from</Text>
        <Text textAlign="start">
          Fill out the form below, and your message will go straight to my inbox. You can also email me here: hello@stuschenko-design.com
        </Text>
        <form className={style.form} onSubmit={onSubmit}>
          <TextField label="Firstname" id="firstName" />
          <TextField label="Surename" id="sureName" />
          <TextField label="E-Mail" id="email" type="email" className={style.email} />
          <TextArea label="Message" id="message" rows={5} className={style.message} />
          <Button variant="full" type="submit" style={{ justifySelf: 'flex-start' }}>
            send
          </Button>
        </form>
      </div>
    </Page>
  )
}

export default Contect
