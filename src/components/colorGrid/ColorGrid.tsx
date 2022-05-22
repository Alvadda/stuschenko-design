import Stack from '../stack/Stack'
import Text from '../text/Text'
import style from './colorGrid.module.css'

interface Color {
  code: string
  description: string
  textColor: 'light' | 'dark'
}

interface Props {
  color1: Color
  color2: Color
  color3: Color
  color4: Color
}

function ColorGrid({ color1, color2, color3, color4 }: Props) {
  return (
    <div className={style.container}>
      <div style={{ backgroundColor: color1.code }}>
        <Stack>
          <Text color={color1.textColor}>{color1.description}</Text>
          <Text color={color1.textColor}>{color1.code}</Text>
        </Stack>
      </div>
      <div style={{ backgroundColor: color2.code }}>
        <Stack>
          <Text color={color2.textColor}>{color2.description}</Text>
          <Text color={color2.textColor}>{color2.code}</Text>
        </Stack>
      </div>
      <div style={{ backgroundColor: color3.code }}>
        <Stack>
          <Text color={color3.textColor}>{color3.description}</Text>
          <Text color={color3.textColor}>{color3.code}</Text>
        </Stack>
      </div>
      <div style={{ backgroundColor: color4.code }}>
        <Stack>
          <Text color={color4.textColor}>{color4.description}</Text>
          <Text color={color4.textColor}>{color4.code}</Text>
        </Stack>
      </div>
    </div>
  )
}

export default ColorGrid
