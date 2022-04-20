import Carousel from '../../components/carousel/Carousel'
import Page from '../../components/page/Page'
import style from './portfolio.module.css'

function Portfolio() {
  return (
    <Page page="portfolio" threshold={0.6}>
      <div className={style.container}>
        <h2>PORTFOLIO</h2>
        <Carousel speed={2000} progressBar progressDots>
          <div style={{ backgroundColor: 'green' }}></div>
          <div style={{ backgroundColor: 'pink' }}></div>
          <div style={{ backgroundColor: 'blue' }}></div>
          <div style={{ backgroundColor: 'red' }}></div>
          <div style={{ backgroundColor: 'chartreuse' }}></div>
        </Carousel>
      </div>
    </Page>
  )
}

export default Portfolio
