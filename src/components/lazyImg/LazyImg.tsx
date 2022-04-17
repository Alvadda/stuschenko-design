import { ImgHTMLAttributes, useState } from 'react'
import { useElementOnScreen } from '../../hooks/useElementOnScreen'

function LazyImg(props: ImgHTMLAttributes<HTMLImageElement>) {
  const { src } = props
  const [srcUrl, setSrcUrl] = useState<string>('')
  const { containerRef } = useElementOnScreen(
    (isIntersecting) => {
      if (isIntersecting && !srcUrl) {
        setSrcUrl(src || '')
      }
    },
    {
      rootMargin: '50%',
    }
  )
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img {...props} src={srcUrl} ref={containerRef} />
}

export default LazyImg
