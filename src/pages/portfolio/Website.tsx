import ColorGrid from '../../components/colorGrid/ColorGrid'
import Page from '../../components/page/Page'
import Stack from '../../components/stack/Stack'
import Text from '../../components/text/Text'

function Website() {
  return (
    <Page page="portfolio" threshold={0.6}>
      {/* <Layout title="Stuschenko-Design.com - The Project"> */}
      <div className="testContent">
        <Text type="h2" textAlign="center">
          Stuschenko-Design.com - The Project
        </Text>
        <div className="grid-1-2">
          <ColorGrid
            color1={{ code: '#FAF3F4', description: 'Background color', textColor: 'dark' }}
            color2={{ code: '#F4CDCE', description: 'Main color', textColor: 'dark' }}
            color3={{ code: '#4A2918', description: 'Text', textColor: 'light' }}
            color4={{ code: '#000000', description: 'Logo', textColor: 'light' }}
          />
          <div className="p-l-100">
            <Stack spacing="--spacing-4">
              <Text>
                As part of my learning, I decided to design my website. It would be my first project designed all by myself, so I was
                everything but secure what structure would be best, what Typography will fit and what colors I should use. What I did knew
                is that visitors should get a broad view onto my work and, of course, my person.
              </Text>
              <Text>
                I sketched a lot, build tones of low-fidelity and high-fidelity wireframes until I finally choose my current design. If you
                are interested in my learning progress or how my previous designs looked like, have a look at my profile:
              </Text>
              <Text>
                My website should be warm and welcoming, so I wanted a color plate reflecting this feeling. I decided for light shades of
                pink (because it's my website, I though why not using tones of my skin? - I pick shades from my lips and eyes). I wanted to
                mix a serif and a sans-serif font, so I decided on Lora and Montserrat.
              </Text>
            </Stack>
          </div>
        </div>
      </div>
      {/* </Layout> */}
    </Page>
  )
}

export default Website
