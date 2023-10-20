import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.tsx'
import './global.css'
import CardProfileLoged from './components/CardProfileLoged.tsx'
import CardFeed from './components/CardFeed.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <div style={{display: 'flex'}}>
      <CardProfileLoged />
      <CardFeed />
    </div>
  </React.StrictMode>,
)
