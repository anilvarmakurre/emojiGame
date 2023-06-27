import './index.css'

const NavBar = props => {
  const {topScore, score, status} = props
  console.log(status)

  const result = status ? '' : 'block'

  console.log(result)

  return (
    <div className="bg-navbar">
      <div className="left-navbar">
        <img
          className="navbar-emoji-image"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h className="navbar-head">Emoji Game</h>
      </div>
      <div className="right-navbar">
        <p className={result}>Score: {score}</p>
        <p className={result}>Top Score: {topScore}</p>
      </div>
    </div>
  )
}

export default NavBar
