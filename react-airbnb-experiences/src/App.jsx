import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/Card'
import data from './data'

function App () {
  const cards = data.map(item => {
    return(
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
      />
    )
  })

  return (
    <>
      <Navbar />
      <Hero />
      {cards}
    </>
  )
}

export default App
