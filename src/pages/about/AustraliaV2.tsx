import Carousel from '../../components/carousel/Carousel'
import Page from '../../components/page/Page'

function AustraliaV2() {
  return (
    <Page page="about" threshold={0.6}>
      <div className="container">
        <h2>Australia 2.0</h2>
        <div className="content">
          <Carousel speed={2000} progressBar>
            <div style={{ backgroundColor: 'green' }}></div>
            <div style={{ backgroundColor: 'pink' }}></div>
            <div style={{ backgroundColor: 'blue' }}></div>
          </Carousel>
          <div>
            <h3>September 2018 - Can I go back?</h3>
            <p className="text">
              I was sad about leaving but my sister get married and and the beinning I only planned to stay in Australia for a half year.
              Before I came back to Germany I travelled August 2018 through Bali and visited Singapoor.
            </p>
            <p className="text">
              At the very beginning, I coudn´t knew that I am falling in love with Australia and absolutely wanted to go back. So after my
              sisters wedding I went back and soon found a job in Sydney where I lived in a Hostel around the corner and also worked for
              accommodation.
            </p>
            <p className="text">
              I celebrated new Year in Sydney and as my visa expired I did not want to go straight back to Germany. I opt to first visiting
              Abu Dhabi where I stayed in a Hotel with an awesome room and entered the plane just a week after to go to Rome.
            </p>
            <p className="text">
              After arriving and checking in into a cozy Hotel someone knocked at my door. My parents suprised me by passing over my german
              simcard. I was so perplex that I wanted to close the door. Very late I realized that they are here and that we are visiting
              Rome all together. I will never vorget this very special moment (wheter I want it or not I can´t - it´s on video).
            </p>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default AustraliaV2
