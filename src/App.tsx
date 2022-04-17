import React from 'react'
import Header from './components/header/Header'
import PageContextProvider from './contexts/PageContext'
import About from './pages/about/About'
import Landing from './pages/landing/Landing'

function App() {
  return (
    <PageContextProvider>
      <Header />
      <Landing />
      <About />
    </PageContextProvider>
  )
}

export default App
