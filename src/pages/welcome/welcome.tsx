import welcomeImg from '../../assets/welcome.jpg'
import Button from '../../components/button/Button'
import ButtonGrp from '../../components/button/ButtonGrp'
import ImgBox from '../../components/imgBox/ImgBox'
import Layout from '../../components/layout/Layout'
import LazyImg from '../../components/lazyImg/LazyImg'
import Page from '../../components/page/Page'
import Text from '../../components/text/Text'

function Welcome() {
  return (
    <Page page="home" threshold={0.5}>
      <Layout title="welcome">
        <ImgBox height="51.2rem">
          <LazyImg alt="Johanna Stuschenko smiling" src={welcomeImg} />
        </ImgBox>
        <div>
          <Text>
            I'm Johanna, a Web designer from Hamburg, Germany.
            <br />
            <br /> As soon as I found out that web designing is something I truly enjoy, I knew I have to become a web designer.
            <br />
            <br /> I am right at the beginning of my career. In summer 2021 I started to educate myself, and I am still in progress of
            learning. At present, I participate in the Google course “Foundations of User Experience (UX) Design”.
            <br />
            <br /> Designing this website is my first real project. I started with an app for time tracking with my boyfriend together in
            spring 2022.
            <br />
            <br /> Want to see my project or learn more about me? Press one of the buttons to find out!
          </Text>
          <ButtonGrp>
            <Button variant="full">My projects</Button>
            <Button variant="outlined">about me</Button>
          </ButtonGrp>
        </div>
      </Layout>
    </Page>
  )
}

export default Welcome
