import Button from '../../components/button/Button'
import Page from '../../components/page/Page'
import style from './about.module.css'

function About() {
  return (
    <Page page="about" threshold={0.6}>
      <div className="container">
        <h2>How did I become a webdesigner?</h2>
        <div className="content">
          <div className={style.img} />
          <div>
            <p className="text">
              Not long ago a friend intended that there is no good app for time tracking for freelancer so my friend and I decided to
              develope.
            </p>
            <p className="text">
              I made an apprenticeship as a hotel specialist and had no previous experience in this industry so it was a bit tricky for
              myself. In Summer 2021 I started educationg myself and I am still in porgress of learning. At preasent I am doing an the
              goople online course “Foundations of User Experience (UX) Design”.
            </p>
            <p className="text">
              While desiging this app my boyfriend and I did designing together so I am very exided that I am designing my very own website
              in spring 2022.
            </p>
            <p className="text">Want to see my projects or leran more about me? Press one of the buttons to find out!</p>
            <div className="buttonsGrp">
              <Button variant="full">My projects</Button>
              <Button variant="outlined">About me</Button>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default About
