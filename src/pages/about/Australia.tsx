import Carousel from '../../components/carousel/Carousel'
import Page from '../../components/page/Page'

function Australia() {
  return (
    <Page page="about" threshold={0.6}>
      <div className="container">
        <h2>Australia</h2>
        <div className="content">
          <Carousel speed={2000} progressBar>
            <div style={{ backgroundColor: 'green' }}></div>
            <div style={{ backgroundColor: 'pink' }}></div>
            <div style={{ backgroundColor: 'blue' }}></div>
          </Carousel>
          <div>
            <h3>March, 6th 2018 - once in a lifetime?</h3>
            <p className="text">
              After long consideration (why not? - It`s a once in a lifetime opportunaty!) the decicion to go to Australia and do work and
              travel was made. I buyed a backpack, a work and travel ticket and got the visa.
            </p>
            <p className="text">
              Earlier than expected the day came: March, 6th 2018. After 24 hours of travelling I finally arrived. I buyed an australia
              simcard and opened a bank account. We travelled all the way north to Cairns and soon started to work. We seperate as friends
              in this place - I wanted to stay, they wanted to travel again.
            </p>
            <p className="text">
              After a couple of months working, I rent a car and drove back all the way down to Adelaide (around 5.000 km). If you are
              asking me now what the best part of this journey was - I will definately say travelling all by myself. What I experienced and
              saw is unforgettable!
            </p>
            <p className="text">
              I visited the great ocean road, saw the 12 Apostel, visited Johanna beach (as my first name is Johanna I coudn`t not stop
              there), the german city Hahndorf, Melbourne and Adelaide, to name but a few.
            </p>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Australia
