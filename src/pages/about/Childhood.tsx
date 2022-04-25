import Button from '../../components/button/Button'
import Carousel from '../../components/carousel/Carousel'
import Page from '../../components/page/Page'

function Childhood() {
  return (
    <Page page="about" threshold={0.6}>
      <div className="container">
        <h2>My childhood</h2>
        <div className="content">
          <Carousel speed={2000} progressBar>
            <div style={{ backgroundColor: 'green' }}></div>
            <div style={{ backgroundColor: 'pink' }}></div>
            <div style={{ backgroundColor: 'blue' }}></div>
          </Carousel>
          <div>
            <h3>Moving into a small town &mdash; will that be fun for a five year old girl?</h3>
            <p className="text">
              In autumn 1995 I was born in Hamburg. After four years of living in a big city we moved into a small village (where more cows
              than human being live). A big change - to let you friends behind and finding new ones.
            </p>
            <p className="text">
              I soon found my best childhood friend Sissi, one of our neighbors. I went into kindergarden and after into primary and
              secondary scool. After graduating in summer 2012 I went to a gymnasium with focus of economics until summer 2014. During
              secondary school and gymnasium I had my confirmation, my first boyfriend, did my drivers licence and found friends for life.
            </p>
            <p className="text">
              I knew if I wanted an excellent apprenticeship I needed to move. By the age of 18 years - direct after graduatuin from
              gymnasium - I moved to my birthplace Hamburg.
            </p>
            <p className="text">Whant to find out more about my apprenticeship? Click the button to find out!</p>
            <div className="buttonsGrp">
              <Button variant="full">find out more</Button>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Childhood
