import React from 'react'
import Header from './components/header/Header'
import PageContextProvider from './contexts/PageContext'
import About from './pages/about/About'
import Childhood from './pages/childhood/Childhood'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Landing from './pages/landing/Landing'
import Portfolio from './pages/portfolio/Portfolio'

function App() {
  return (
    <PageContextProvider>
      <Header />
      <Landing />
      <About />
      <Childhood />
      <Gallery />
      <Portfolio />
      <Contact />
    </PageContextProvider>
  )
}

export default App
