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
    content: [
      {type:'paragraph', content: 'Foi muito legal aprender react com ignite'},
      {type:'paragraph', content: 'Foi muito legal aprender react com ignite'},
      {type:'paragraph', content: 'Foi muito legal aprender react com ignite'},
    ],
    publishedAt: new Date('2023-05-03 20:00:00'),
  },
  {
    id: 2, 
    author: {
      avatarUrl: 'https://github.com/ViniciusKimura.png',
      name: 'Vinicius Kimura',
      role: 'Analista de dados',
    },
    content: [
      {type:'paragraph', content: 'Muito bom, muito bom mesmo'},
    ],
    publishedAt: new Date('2023-05-03 20:00:00'),
  },
  {
    id: 3, 
    author: {
      avatarUrl: 'https://github.com/KathCris.png',
      name: 'kathleen Santos',
      role: 'Dev back',
    },
    content: [
      {type:'paragraph', content: 'O foco agora é melhorar no react e aprender back-end de verdade'},
      {type:'paragraph', content: 'O foco agora é melhorar no react e aprender back-end de verdade'},
    ],
    publishedAt: new Date('2023-05-03 20:00:00'),
  }
]

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <div style={{display: 'flex'}}>
      <CardProfileLoged />
      <div style={{display: 'flex', flexDirection: 'column'}}>
      {post.map(p => {
        return (
          <CardFeed author={p.author} content={p.content} publishedAt={p.publishedAt}/>
        )
      })}
      </div>
    </div>
  </React.StrictMode>,
)
