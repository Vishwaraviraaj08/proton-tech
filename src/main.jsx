import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import ScrollToTop from './components/Scroll/scroll.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
    <App/></BrowserRouter>
  </React.StrictMode>,
)
