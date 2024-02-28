import star from '../images/star.png'

function Card (props) {
  return(
    <div className="card">
      <img src={`../images/${props.img}`} alt="katie-zaferes" className="card--img"/>
      <div className="card--stats">
        <img src={star} alt="star" className="card--star"/>
        <span>{props.rating}</span>
        <span className="grey">({props.reviewCount}) • </span>
        <span className="grey">{props.country}</span>
      </div>
      <h2>{props.title}</h2>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )
}

export default Card
