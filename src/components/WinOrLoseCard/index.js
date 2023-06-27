import './index.css'

const WinOrLoseCard = props => {
  const {score, updateStatus} = props

  const num = 12

  const getResult = score === num ? 'You Won' : 'you Lose'

  const getImage =
    score === num
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const playAgain = () => {
    updateStatus()
  }
  console.log(score)
  console.log(num)

  const getScoreResult = score === num ? 'Best Score' : 'Score'

  return (
    <div className="result-bg">
      <div className="left-result">
        <h1 className="result-head">{getResult}</h1>
        <div className="result-middle">
          <p className="result-para">{getScoreResult}</p>
          <p className="result-score">{score}/12</p>
          <button className="button" type="button" onClick={playAgain}>
            Play Again
          </button>
        </div>
      </div>
      <div className="right-result">
        <img className="result-image" src={getImage} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
