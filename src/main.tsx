import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.tsx'
import './global.css'
import CardProfileLoged from './components/CardProfileLoged.tsx'
import CardFeed from './components/CardFeed.tsx'

const post = [
  {
    id: 1, 
    author: {
      avatarUrl: 'https://github.com/KathCris.png',
      name: 'kathleen Santos',
      role: 'Dev front',
    },
    content: {contentText: 'Foi muito legal aprender react com ignite'}
  },
  {
    id: 2, 
    author: {
      avatarUrl: 'https://github.com/KathCris.png',
      name: 'kathleen Santos',
      role: 'Dev back',
    },
    content: {contentText: 'O foco agora é melhorar no react e aprender back-end de verdade'}
    
  }
]

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <div style={{display: 'flex'}}>
      <CardProfileLoged />
      <div style={{display: 'flex', flexDirection: 'column'}}>
      {post.map(post => {
        return (
          <CardFeed author={post.author} contentText={post.content} />
        )
      })}
      </div>
    </div>
  </React.StrictMode>,
)
