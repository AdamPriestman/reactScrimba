
function Card (props) {
  let badgeText
  if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
      badgeText = "ONLINE"
  }
  console.log(props)
  return(
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../images/${props.coverImg}`} alt="experience image" className="card--img"/>
      <div className="card--stats">
        <img src='../images/star.png' alt="star" className="card--star"/>
        <span>{props.stats.rating}</span>
        <span className="grey">({props.stats.reviewCount}) • </span>
        <span className="grey">{props.location}</span>
      </div>
      <h2>{props.title}</h2>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )
}

export default Card
