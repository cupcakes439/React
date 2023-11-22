import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './component/App'
import './index.css'
import Header from "./component/Header"
import Main from './component/Body'
import Footer from './component/Footer'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
)
