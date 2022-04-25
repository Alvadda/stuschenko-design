import React from 'react'
import Header from './components/header/Header'
import PageContextProvider from './contexts/PageContext'
import About from './pages/about/About'
import Apprenticeship from './pages/about/Apprenticeship'
import Australia from './pages/about/Australia'
import AustraliaV2 from './pages/about/AustraliaV2'
import Childhood from './pages/about/Childhood'
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
      <Apprenticeship />
      <Australia />
      <AustraliaV2 />
      <Gallery />
      <Portfolio />
      <Contact />
    </PageContextProvider>
  )
}

export default App
