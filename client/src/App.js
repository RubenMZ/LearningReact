import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import DefaultLayout from './layouts/DefaultLayout.js'
import Calendar from './pages/Calendar.js'

function App() {
  return (
    <Router>
      <DefaultLayout></DefaultLayout>
      <Calendar></Calendar>
    </Router>
  );
}

export default App;
