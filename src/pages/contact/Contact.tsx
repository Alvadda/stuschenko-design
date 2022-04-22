import Label from '../../components/label/Label'
import Page from '../../components/page/Page'
import TextField from '../../components/textField/TextField'
import style from './contact.module.css'

function Contect() {
  return (
    <Page page="contact" threshold={0.6}>
      <div className={style.container}>
        <h2>CONTECT</h2>
        <form className={style.form}>
          <TextField label="Firstname" id="firstName" />
          <TextField label="Surename" id="sureName" />
          <TextField label="E-Mail" id="email" type="email" />
        </form>
      </div>
    </Page>
  )
}

export default Contect
