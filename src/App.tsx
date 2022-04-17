import React from 'react'
import Header from './components/header/Header'
import PageContextProvider from './contexts/PageContext'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Landing from './pages/landing/Landing'
import Portfolio from './pages/portfolio/Portfolio'

function App() {
  return (
    <PageContextProvider>
      <Header />
      <Landing />
      <About />
      <Portfolio />
      <Contact />
    </PageContextProvider>
  )
}

export default App
