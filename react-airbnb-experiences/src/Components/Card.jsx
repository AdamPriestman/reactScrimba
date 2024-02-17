import star from '../images/star.png'
import cardimg from '../images/katie-zaferes.png'


function Card () {
  return(
    <div className="card">
      <img src={cardimg} alt="katie-zaferes" className="card--img"/>
      <div className="card--stats">
        <img src={star} alt="star" className="card--star"/>
        <span>5.0</span>
        <span className="grey">(6) • </span>
        <span className="grey">USA</span>
      </div>
      <h2>Life Lessons with Katie Zaferes</h2>
      <p><span className="bold">From $136</span> / person</p>
    </div>
  )
}

export default Card
