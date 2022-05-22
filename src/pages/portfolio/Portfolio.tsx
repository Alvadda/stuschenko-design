import Layout from '../../components/layout/Layout'
import Page from '../../components/page/Page'
import Stack from '../../components/stack/Stack'
import Text from '../../components/text/Text'

function Portfolio() {
  return (
    <Page page="portfolio" threshold={0.6}>
      <Layout title="portfolio" contentSpacing="m">
        <Stack spacing="--spacing-11">
          <Text type="h3">time tracking</Text>
          <Stack spacing="--spacing-4">
            <Text>You can track your time, add projects, tasks as well as some notes.</Text>
            <Text>
              We thought about what do the user needs to track its time best and completed the app with its best features and easy to hand
              design.
            </Text>
          </Stack>
        </Stack>
        <Stack spacing="--spacing-11">
          <Text type="h3">stuschenko_design.com</Text>
          <Stack spacing="--spacing-4">
            <Text>I wanted to create a website where you get insight into my work as well as into my person.</Text>
            <Text>To create a site that convince, a website you are willingly to visit again; this is my goal.</Text>
          </Stack>
        </Stack>
      </Layout>
    </Page>
  )
}

export default Portfolio
