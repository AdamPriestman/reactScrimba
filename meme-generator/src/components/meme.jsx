import memesData from "../memesData.js"

function Meme () {

  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    console.log(url)
  }

  return (
    <div>
      <div className="form">
        <div className="form--inputsDiv">
          <input
            type="text"
            placeholder="Top text"
            className="form--inputs" />
          <input
            type="text"
            placeholder="Bottom text"
            className="form--inputs" />
        </div>
        <button
          className="form--button"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </div>
    </div>
  )
}

export default Meme
