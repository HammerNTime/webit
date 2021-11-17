import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './pages/App/App'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App ariaHideApp={false} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
