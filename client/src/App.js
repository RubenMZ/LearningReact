import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import DefaultLayout from './layouts/DefaultLayout'

import Routes from './router/Routes'

function App() {
  return (
    <Router>
      <DefaultLayout></DefaultLayout>
      <Routes/>
    </Router>
  )
}

export default App
