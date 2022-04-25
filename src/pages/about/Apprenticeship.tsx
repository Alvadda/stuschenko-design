import Button from '../../components/button/Button'
import Carousel from '../../components/carousel/Carousel'
import Page from '../../components/page/Page'

function Apprenticeship() {
  return (
    <Page page="about" threshold={0.6}>
      <div className="container">
        <h2>My apprenticeship</h2>
        <div className="content">
          <Carousel speed={2000} progressBar>
            <div style={{ backgroundColor: 'green' }}></div>
            <div style={{ backgroundColor: 'pink' }}></div>
            <div style={{ backgroundColor: 'blue' }}></div>
          </Carousel>
          <div>
            <h3>a new city - a new me?</h3>
            <p className="text">
              I had the chance to do my apprenticeship in the private 5-star Hotel Grand Elysée in Hamburg. Therefore I needed an afforable
              apartment and luckily got a small one-room apartment in Lurup.
            </p>
            <p className="text">
              Apprenticeship in Germany takes around 3 years and is dual. While practical you pass through all departments, during
              theoretical you´re in school - there I sould meet my best friend. We finished our apprenticeship in summer 2017.
            </p>
            <p className="text">
              Due to no suitable job in reservations department I unfortunately could not stay and started in a small hotel chain. Shortly
              after begin, I had a once in a lifetime oppotunaty.
            </p>
            <p className="text">Curious what opportunaty it is? You´ll find out by pressing the button!</p>
            <div className="buttonsGrp">
              <Button variant="full">find out more</Button>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Apprenticeship
