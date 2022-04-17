import { PageType, usePageContext } from '../../contexts/PageContext'
import { useElementOnScreen } from '../../hooks/useElementOnScreen'
import { setBrowserHistorie } from '../../utils/utils'
import style from './page.module.css'

interface PageProps {
  page: PageType
  threshold?: number | number[]
  children?: React.ReactNode
}

function Page({ page, threshold, children }: PageProps) {
  const { setPage } = usePageContext()
  const { containerRef } = useElementOnScreen(
    (isIntersecting) => {
      if (isIntersecting) {
        setBrowserHistorie(`#${page}`)
        setPage(page)
      }
    },
    {
      threshold,
    }
  )
  return (
    <div id={page} className={style.page} ref={containerRef}>
      {children}
    </div>
  )
}

export default Page
