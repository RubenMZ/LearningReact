import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"

import DefaultLayout from './layouts/DefaultLayout.js'

import Routes from './router/Routes.js'

function App() {
  return (
    <Router>
      <DefaultLayout></DefaultLayout>
      <Routes/>
    </Router>
  );
}

export default App;
