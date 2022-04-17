import LazyImg from '../../components/lazyImg/LazyImg'
import Page from '../../components/page/Page'
import style from './gallery.module.css'

function Gallery() {
  return (
    <Page page="about" threshold={0.6}>
      <div className={style.container}>
        <div className={style.img0}>
          <LazyImg alt="todo" src="" />
        </div>
        <div className={style.img1}>
          <LazyImg alt="todo" src="" />
        </div>
        <div className={style.img2}>
          <LazyImg alt="todo" src="" />
        </div>
        <div className={style.img3}>
          <LazyImg alt="todo" src="" />
        </div>
        <div className={style.img4}>
          <LazyImg alt="todo" src="" />
        </div>
        <div className={style.img5}>
          <LazyImg alt="todo" src="" />
        </div>
        <div className={style.img6}>
          <LazyImg alt="todo" src="" />
        </div>
        <div className={style.img7}>
          <LazyImg alt="todo" src="" />
        </div>
        <div className={style.img8}>
          <LazyImg alt="todo" src="" />
        </div>
        <div className={style.img9}>
          <LazyImg alt="todo" src="" />
        </div>
      </div>
    </Page>
  )
}

export default Gallery
