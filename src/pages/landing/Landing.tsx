import Button from '../../components/button/Button'
import Page from '../../components/page/Page'
import style from './landing.module.css'

function Landing() {
  return (
    <Page page="home" threshold={0.5}>
      <div className={style.container}>
        <h2 className={style.heading}>Welcome!</h2>
        <div className={style.content}>
          <div className={style.img} />
          <div>
            <p className="text">I`m Johanna, a Webdesigner from Hamburg, Germany</p>
            <p className="text">
              I am right at the beginning of my career as a webdesigner and are pleasent to welcoming you at my website I am currently
              designing.
            </p>
            <p className="text">Want to leran more about me or my Projects? Press the button to find out!</p>
            <div className={style.buttons}>
              <Button variant="full">About me</Button>
              <Button variant="outlined">My projects</Button>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Landing
