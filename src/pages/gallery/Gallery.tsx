import Page from '../../components/page/Page'
import style from './gallery.module.css'

function Gallery() {
  return (
    <Page page="about" threshold={0.6}>
      <div className={style.container}>
        <div className={style.img0}></div>
        <div className={style.img1}></div>
        <div className={style.img2}></div>
        <div className={style.img3}></div>
        <div className={style.img4}></div>
        <div className={style.img5}></div>
        <div className={style.img6}></div>
        <div className={style.img7}></div>
        <div className={style.img8}></div>
        <div className={style.img9}></div>
      </div>
    </Page>
  )
}

export default Gallery
