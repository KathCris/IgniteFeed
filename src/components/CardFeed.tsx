import './CardFeed.css'
  
export default function CardFeed () {
  return (
    <div className="containerGlobalCardFeed">
      <div className="containerHearderTextFeed">
        <div className="containerTextFeed">
          <img src="" alt="" />
            <div className="textFeed">
              <h4>Janine Cooper</h4>
              <p>Dev Front-end</p>
            </div>
        </div>
        <div className="publicadoFeed">
          <p>Públicado há 1h</p>
        </div>
      </div>
      <div className="containerTextBodyFeed">
        <p>Fala galeraa 👋 <br /> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
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