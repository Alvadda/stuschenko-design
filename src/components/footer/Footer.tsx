import { ReactComponent as Instagram } from '../../assets/instagram.svg'
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg'
import Text from '../text/Text'
import style from './footer.module.css'

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.linkArea}>
        <ul className={style.linkList}>
          <li>
            <a href="#about" className={style.link}>
              <Text>About</Text>
            </a>
          </li>
          <li>
            <a href="#portfolio" className={style.link}>
              <Text>Portfolio</Text>
            </a>
          </li>
          <li>
            <a href="#contact" className={style.link}>
              <Text>Contact</Text>
            </a>
          </li>
        </ul>
        <div className={style.socialLinks}>
          <a href="http://www.instagram.com/stuschi_world" target="_blank" rel="noopener noreferrer" className="center">
            <Instagram />
          </a>
          <a href="https://www.linkedin.com/in/johannastuschenko/" target="_blank" rel="noopener noreferrer" className="center">
            <LinkedIn />
          </a>
        </div>
      </div>
      <div className={style.copyRight}>
        <Text textAlign="center">&copy; 2022 Johanna Stuschenko</Text>
      </div>
    </footer>
  )
}

export default Footer
