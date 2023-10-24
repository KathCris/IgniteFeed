import './ImgProfile.css'

export default function ImgProfile (imgProfile: {avatarUrl: string}) {
  return (
    <div className="containerImgProfile">
      <img src={imgProfile.avatarUrl} />
    </div>
  )
}