import Page from '../../components/page/Page'
import style from './portfolio.module.css'

function Portfolio() {
  return (
    <Page page="portfolio" threshold={0.6}>
      <div className={style.container}>
        <h2>PORTFOLIO</h2>
      </div>
    </Page>
  )
}

export default Portfolio
