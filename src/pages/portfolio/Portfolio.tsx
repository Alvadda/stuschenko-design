import Page from '../../components/page/Page'
import style from './portfolio.module.css'

function Portfolio() {
  return (
    <Page page="portfolio" threshold={0.6}>
      <div className={style.container}>
        <h2>My previous projects</h2>
        <div className={style.portfolios}>
          <div className={style.portfolio}>
            <div className={style.img} />
            <div className={style.textContainer}>
              <h3 className={style.portfolioTitle}>TT App</h3>
              <p className="text">You can track your time, add projects, tasks and some notes.</p>
              <p className="text">Later on you are also able to get an invoice and will be able to see your time sheet.</p>
              <p className="text">You can change white- and darkmode as well as language. </p>
            </div>
          </div>
          <div className={style.portfolio}>
            <div className={style.img} />
            <div>
              <h3 className={style.portfolioTitle}>STUSCHENKO_DESIGN.COM</h3>
              <p className="text">
                I wanted to create a website where you can get to know my work as well as me and my personality and will continuous update
                my website.{' '}
              </p>
              <p className="text">A website that convince, a website that after you had a look you want to meet that person. </p>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Portfolio
