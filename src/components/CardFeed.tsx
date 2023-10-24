import ImgProfile from './ImgProfile.tsx'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import './CardFeed.css'

interface Author {
  name: string,
  role: string,
  avatarUrl: string,
}
interface Content {
  contentText: string,
}

interface PropsPost {
  author: Author,
  contentText: Content,
  publishedAt: Date,
}

export default function CardFeed ({author, contentText, publishedAt}: PropsPost) {
  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })
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
        </div>
      </div>
      <div className="containerTextBodyFeed">
        <p>{contentText.contentText}</p>
      </div>
      <div className="containerFeedback">
        <p><b>Deixe seu feedback</b></p>
        <textarea name="" id="" cols={30} rows={10}></textarea>
      </div>
      <div className="buttonFeed">
        <button>
          Publicar
        </button>
      </div>
    </div>
  )
}