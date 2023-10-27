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
    contentPostByAuthor: 'Foi muito legal aprender react com ignite',
    content: [
      {type:'paragraph', content: 'Legal demais hein'},
      {type:'paragraph', content: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},
      {type:'paragraph', content: ' when an unknown printer took a galley'},
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
    contentPostByAuthor: 'Foi muito legal aprender react com ignite',
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
    contentPostByAuthor: 'O foco agora é melhorar no react e aprender back-end de verdade',
    content: [
      {type:'paragraph', content: 'Boa demais'},
      {type:'paragraph', content: 'type and scrambled it to make a type specimen book'},
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
          <CardFeed author={p.author} contentPostByAuthor={p.contentPostByAuthor} content={p.content} publishedAt={p.publishedAt}/>
        )
      })}
      </div>
    </div>
  </React.StrictMode>,
)
