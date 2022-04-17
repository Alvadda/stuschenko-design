import Button from '../../components/button/Button'
import Page from '../../components/page/Page'
import style from './landing.module.css'

function Landing() {
  return (
    <Page page="home" threshold={0.5}>
      <div className={style.container}>
        <div className={style.img} />
        <div>
          <h2 className={style.heading}>Welcome!</h2>
          <p className="text">I`m Johanna, a Webdesigner from Hamburg, Germany</p>
          <p className="text">
            I am right at the beginning of my career as a webdesigner and are pleasent to welcoming you at my website I am currently
            designing.
          </p>
          <p className="text">Get in touch with my projects</p>
          <Button variant="full">see more</Button>
        </div>
      </div>
    </Page>
  )
}

export default Landing
