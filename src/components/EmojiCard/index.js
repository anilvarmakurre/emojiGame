import './index.css'

const EmojiCard = props => {
  const {shuffledEmojisList, updateScore} = props

  const {id, emojiName, emojiUrl} = shuffledEmojisList

  const getScore = () => {
    updateScore(id)
  }

  return (
    <li className="emoji-card">
      <button className="emoji-card-button" type="button" onClick={getScore}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
