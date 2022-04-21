import Page from '../../components/page/Page'
import style from './portfolio.module.css'

function Portfolio() {
  return (
    <Page page="portfolio" threshold={0.6}>
      <div className={style.container}>
        <div>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac blandit eget vitae sapien. Urna placerat sagittis, enim non sodales
            proin. Curabitur nunc arcu risus porttitor. Arcu quis gravida nisl, hac vivamus vulputate purus parturient.
          </p>
        </div>
        <div className={style.portfolios}>
          <div className={style.portfolio}>
            <div className={style.img} />
            <div className={style.textContainer}>
              <h3>TT App</h3>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet morbi enim tincidunt viverra vitae quis nisl.
              </p>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet morbi enim tincidunt viverra vitae quis nisl
              </p>
            </div>
          </div>
          <div className={style.portfolio}>
            <div className={style.img} />
            <div className={style.textContainer}>
              <h3>STUSCHENKO_DESIGN.COM</h3>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet morbi enim tincidunt viverra vitae quis nisl.
              </p>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet morbi enim tincidunt viverra vitae quis nisl
              </p>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Portfolio
