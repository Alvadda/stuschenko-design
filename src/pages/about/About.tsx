import about1Img from '../../assets/about1.jpeg'
import about2Img from '../../assets/about2.jpeg'
import about3Img from '../../assets/about3.jpg'
import about4Img from '../../assets/about4.jpg'
import about5Img from '../../assets/about5.jpg'
import Button from '../../components/button/Button'
import ButtonGrp from '../../components/button/ButtonGrp'
import Carousel from '../../components/carousel/Carousel'
import Layout from '../../components/layout/Layout'
import LazyImg from '../../components/lazyImg/LazyImg'
import Page from '../../components/page/Page'
import Stack from '../../components/stack/Stack'
import Text from '../../components/text/Text'

function About() {
  return (
    <Page page="about" threshold={0.6}>
      <Layout title="about">
        <Carousel speed={8000} progressBar height="51.2rem">
          <LazyImg alt="Johanna Stuschenko as child" src={about1Img} />
          <LazyImg alt="Confirmation of Johanna Stuschenko" src={about2Img} />
          <LazyImg alt="Johanna Stuschenko with a big backpack Australia" src={about3Img} />
          <LazyImg alt="Johanna Stuschenko smiling in front of a bush" src={about4Img} />
          <LazyImg alt="Johanna Stuschenko smiling in front of a sea" src={about5Img} />
        </Carousel>
        <div>
          <Stack spacing="--spacing-4" alignItems="flex-start">
            <Text>
              I grew up in a small town and moved for my apprenticeship to Hamburg. After finishing, I deiced to go to Australia for a work
              and travel year
            </Text>
            <Text>
              One year in Australia was great, but I wanted to move back to Hamburg, Germany. I meet my boyfriend Christian, he is the
              person who established software engineering and web design into my world. Since summer 2021 I am education myself and still
              finding out what part I will be specializing in. At present, I am doing an online course from Google Foundations of User
              Experience (UX) Design
            </Text>
            <Text>I will continually update this website and am very excited to welcoming you here! Come and get in contact with me!</Text>
          </Stack>

          <ButtonGrp>
            <Button variant="full">Contact me</Button>
          </ButtonGrp>
        </div>
      </Layout>
    </Page>
  )
}

export default About
