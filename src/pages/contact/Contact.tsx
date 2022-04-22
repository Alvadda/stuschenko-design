import Label from '../../components/label/Label'
import Page from '../../components/page/Page'
import style from './contact.module.css'

function Contect() {
  return (
    <Page page="contact" threshold={0.6}>
      <div className={style.container}>
        <h2>CONTECT</h2>
        <Label htmlFor="test" title="Test">
          <input type="text" id="test" />
        </Label>
      </div>
    </Page>
  )
}

export default Contect
