import { useState } from 'react'
import ImgProfile from './ImgProfile.tsx'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import './CardFeed.css'
import Coment from './Coment.tsx'

interface Author {
  name: string,
  role: string,
  avatarUrl: string,
}

interface PropsPost {
  author: Author,
  publishedAt: Date,
  contentPostByAuthor: string,
}

export default function CardFeed ({author, publishedAt, contentPostByAuthor}: PropsPost) {
  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedAtRelativeDateToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const [coments, setComents] = useState([
    'post bacana demais!'
   ])
  const [newComents, setNewComents] = useState('')

  function handleCreateNewComent () {
    setComents([...coments, newComents])
    setNewComents('')
  }

  function deleteComent (comentToDelete : string) {
    const comentsWithoutDeleteOne = coments.filter(coment => {
      return coment != comentToDelete
    })

    setComents(comentsWithoutDeleteOne)
  }

  return (
    <div className="containerGlobalCardFeed">
      <div className="containerHearderTextFeed">
        <div className="containerTextFeed">
          <ImgProfile avatarUrl={author.avatarUrl} />
            <div className="textFeed">
              <h4>{author.name}</h4>
              <p>{author.role}</p>
            </div>
        </div>
        <div className="publicadoFeed">
          <p>{publishedDateFormat}</p>
          <time>
            {publishedAtRelativeDateToNow}
          </time>
        </div>
      </div>
      <div className="containerTextBodyFeed">
          <p>{contentPostByAuthor}</p>
      </div>
      <div className="containerFeedback">
        <p><b>Deixe seu feedback</b></p>
        <textarea
          onChange={(e) => setNewComents(e.target.value)} 
          value={newComents}
          placeholder='Deixe um comentario'
         >
         </textarea>
      </div>
      <div className="buttonFeed">
        <button onClick={handleCreateNewComent}>
          Publicar
        </button>
      </div>
      <div className="coment">
        {coments.map(coment => {
          return <Coment author={author} content={coment} deleteComent={deleteComent} />
        })}
      </div>
    </div>
  )
}