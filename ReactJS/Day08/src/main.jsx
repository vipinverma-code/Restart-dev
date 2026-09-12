import React  from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Login from './Login'
import Video from './Video'

createRoot(document.getElementById('root')).render(
  <>
  <App/>
  <br />
  <br />
  <Login/>
  <br />
  <br /><br />
  <Video/>
  </>
)
