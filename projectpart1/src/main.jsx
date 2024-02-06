import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reactLogo from './assets/react.svg'

const page = (
  <div>
    <img src={reactLogo} alt="react logo" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, inclusing mobile apps</li>
    </ul>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  page
)
