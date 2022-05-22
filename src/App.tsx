import React from 'react'

import Header from './components/header/Header'
import PageContextProvider from './contexts/PageContext'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Portfolio from './pages/portfolio/Portfolio'
import Welcome from './pages/welcome/welcome'

function App() {
  return (
    <PageContextProvider>
      <Header />
      <Welcome />
      <About />
      <Portfolio />
      <Contact />
    </PageContextProvider>
  )
}

export default App
