import ImgProfile from './ImgProfile.tsx'
import './Coment.css'
import { Trash } from 'phosphor-react'

interface Author {
  name: string,
  role: string,
  avatarUrl: string,
}
// interface Content {
//   type: string,
//   content: string,
// }

interface PropsPost {
  author: Author,
//   content: Content[],
}

export default function Coment ({author}: PropsPost) {

  return (
    <div className="containerGlobalComent">
        <ImgProfile avatarUrl={author.avatarUrl} />
        <div className="containerComent">
            <div className="containerHeaderTextComent">
                <div style={{marginBottom: 16}} className="textFeed">
                    <h4>{author.name}</h4>
                    <p>{author.role}</p>
                </div>
                <div className="containerTrash">
                    <Trash size={24} />
                </div>
            </div>
            <div className="containerTextComent">
                <p>jkakdasjknasdjnkadsjnklasd</p>
            </div>
        </div>
    </div>
  )
}