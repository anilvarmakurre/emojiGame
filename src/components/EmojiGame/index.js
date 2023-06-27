/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import NavBar from '../NavBar'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    status: 'true',
    topScore: 0,
    scoreListIds: [],
  }

  updateScore = id => {
    const {scoreListIds, topScore, score} = this.state
    const validate = scoreListIds.includes(id)
    if (validate) {
      if (topScore < score) {
        this.setState({status: false, topScore: score})
      } else {
        this.setState({status: false})
      }
    } else {
      this.setState(prevState => ({
        scoreListIds: [...prevState.scoreListIds, id],
        score: prevState.score + 1,
      }))
    }
  }

  updateStatus = () => {
    this.setState({status: true, score: 0, scoreListIds: []})
  }

  render() {
    const {status, score, topScore, scoreListIds} = this.state

    console.log(scoreListIds)

    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    const emojiList = shuffledEmojisList()

    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} status={status} />
        <ul className="emoji-game">
          {status ? (
            emojiList.map(each => (
              <EmojiCard
                shuffledEmojisList={each}
                key={each.id}
                updateScore={this.updateScore}
              />
            ))
          ) : (
            <WinOrLoseCard score={score} updateStatus={this.updateStatus} />
          )}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
