import {Pencil} from "@phosphor-icons/react"
import './CardProfileLoged.css'
import imgBackgorund from '../assets/BackgoundProfile.png'
  
export default function CardProfileLoged () {
  return (
    <div className='globalCardProfile'>
      <div className="imgBackgroundCardProfile">
        <img src={imgBackgorund} alt="Imagem de fundo do card de perfil" />
      </div>
      <div className="textCardProfile">
        <h4>Leslie Alexander</h4>
        <p>UI Designer</p>
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