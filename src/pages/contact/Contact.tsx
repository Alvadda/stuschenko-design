import LazyImg from '../../components/lazyImg/LazyImg'
import Page from '../../components/page/Page'
import style from './contact.module.css'

function Contect() {
  return (
    <Page page="contact" threshold={0.6}>
      <div className={style.container}>
        <h2>CONTECT</h2>
        <LazyImg
          alt="cute cat"
          src="https://images.unsplash.com/photo-1624375540566-877eecad23d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        />
      </div>
    </Page>
  )
}

export default Contect
