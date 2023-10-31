import {Pencil} from "@phosphor-icons/react"
import ImgProfile from './ImgProfile.tsx'
import './CardProfileLoged.css'
import imgBackgorund from '../assets/BackgoundProfile.png'
  

export default function CardProfileLoged () {
  const userLoged = 
  {
    avatarUrl: 'https://img.freepik.com/fotos-gratis/mulher-bonita-dando-uma-folga-do-trabalho-em-casa_329181-4309.jpg',
    name: 'Leslie Alexander',
    role: 'UI Designer',
  }
  
  return (
    <div className='globalCardProfile'>
      <div className="imgBackgroundCardProfile">
        <img src={imgBackgorund} alt="Imagem de fundo do card de perfil" />
      </div>
        <div className="invoImgUserLoged">
          <ImgProfile avatarUrl={userLoged.avatarUrl} />
        </div>
      <div className="textCardProfile">
        <h4>{userLoged.name}</h4>
        <p>{userLoged.role}</p>
      </div>
      <div className="buttonCardProfile">
      <button>
        <Pencil size={32} />
        Editar seu perfil
      </button>
      </div>
    </div>
  )
}