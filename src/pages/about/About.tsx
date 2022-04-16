import Button from '../../components/button/Button'
import style from './about.module.css'

function About() {
  return (
    <div className={style.container}>
      <h2>How did I become a webdesigner?</h2>
      <div className={style.content}>
        <div className={style.img} />
        <div className={style.textContent}>
          <p className="text">
            Not long ago a friend intended that there is no good app for time tracking for freelancer so my friend and I decided to
            develope.
          </p>
          <p className="text">
            I made an apprenticeship as a hotel specialist and had no previous experience in this industry so it was a bit tricky for
            myself. In Summer 2021 I started educationg myself and I am still in porgress of learning.
          </p>
          <p className="text">
            In this project we both did designing so I am very exided that I decided in spring 2022 to design my own website. This project
            is the first designed all by myself.
          </p>
          <p className="text">If you`re asking how I stayed motivated get in contact with me!</p>
          <div className={style.buttons}>
            <Button variant="full">Get in touch</Button>
            <Button variant="outlined">learn more about me</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
