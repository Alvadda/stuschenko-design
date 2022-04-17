import { createContext, useContext, useState } from 'react'

export type PageType = 'home' | 'about' | 'portfolio' | 'contact'
interface PageContextState {
  page: PageType
  setPage: (page: PageType) => void
}
interface PageContextProps {
  children?: React.ReactNode
}

const PageContext = createContext<PageContextState>({ page: 'home', setPage: () => {} })
export const usePageContext = () => useContext<PageContextState>(PageContext)

function PageContextProvider({ children }: PageContextProps) {
  const [page, setPage] = useState<PageType>('home')
  return <PageContext.Provider value={{ page, setPage }}>{children}</PageContext.Provider>
}

export default PageContextProvider
