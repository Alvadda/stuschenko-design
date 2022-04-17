import LazyImg from '../../components/lazyImg/LazyImg'
import Page from '../../components/page/Page'
import style from './gallery.module.css'

function Gallery() {
  return (
    <Page page="about" threshold={0.6}>
      <div className={style.container}>
        <div className={style.img0}>
          <LazyImg
            alt="cute cat"
            src="https://images.unsplash.com/photo-1624375540566-877eecad23d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          />
        </div>
        <div className={style.img1}>
          <LazyImg
            alt="cute cat"
            src="https://images.unsplash.com/photo-1624375540566-877eecad23d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          />
        </div>
        <div className={style.img2}>
          <LazyImg
            alt="cute cat"
            src="https://images.unsplash.com/photo-1624375540566-877eecad23d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          />
        </div>
        <div className={style.img3}>
          <LazyImg
            alt="cute cat"
            src="https://images.unsplash.com/photo-1624375540566-877eecad23d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          />
        </div>
        <div className={style.img4}>
          <LazyImg
            alt="cute cat"
            src="https://images.unsplash.com/photo-1624375540566-877eecad23d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          />
        </div>
        <div className={style.img5}>
          <LazyImg
            alt="cute cat"
            src="https://images.unsplash.com/photo-1624375540566-877eecad23d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          />
        </div>
        <div className={style.img6}>
          <LazyImg
            alt="cute cat"
            src="https://images.unsplash.com/photo-1624375540566-877eecad23d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          />
        </div>
        <div className={style.img7}>
          <LazyImg
            alt="cute cat"
            src="https://images.unsplash.com/photo-1624375540566-877eecad23d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          />
        </div>
        <div className={style.img8}>
          <LazyImg
            alt="cute cat"
            src="https://images.unsplash.com/photo-1624375540566-877eecad23d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          />
        </div>
        <div className={style.img9}>
          <LazyImg
            alt="cute cat"
            src="https://images.unsplash.com/photo-1624375540566-877eecad23d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          />
        </div>
      </div>
    </Page>
  )
}

export default Gallery
