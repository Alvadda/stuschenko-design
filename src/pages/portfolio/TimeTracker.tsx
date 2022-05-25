import ttDateImg from '../../assets/ttDate.png'
import Layout from '../../components/layout/Layout'
import LazyImg from '../../components/lazyImg/LazyImg'
import Page from '../../components/page/Page'
import Stack from '../../components/stack/Stack'
import Text from '../../components/text/Text'

function TimeTracker() {
  return (
    <Page page="portfolio" threshold={0.6}>
      <Layout title="time tracker app - the project">
        <LazyImg alt="Johanna Stuschenko smiling" src={ttDateImg} />
        <Stack spacing="--spacing-4">
          <Text>
            Not long ago, a friend of ours intended that there is no good app for time tracking. That's the time when my boyfriend and I
            decided to develop one with all its necessary features.
          </Text>
          <Text>
            We did a lot of research, had a couple of ideas and finally get a first prototype. Friends and family should be our first test
            users, and soon we will launch the app officially
          </Text>
          <Text>
            We wanted a color that represents trust and trustworthy color, so we decided on a dark blue. There shouldn't be much color
            change, so the main color should be a dark blue. For contrast, I chose a lighter and warmer blue to convey safety, trust as well
            as confidence.
          </Text>
          <Text>
            As we wanted a modern sans-serif Font, we decide on Lato, designed in 2010 by Łukasz Dziedzic. The semi-rounded details of the
            letters give Lato a feeling of warmth, while the strong structure provides stability and seriousness.
          </Text>
        </Stack>
      </Layout>
    </Page>
  )
}

export default TimeTracker
