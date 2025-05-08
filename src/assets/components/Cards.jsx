import languages from "../../data/languages"
import CardItem from "./CardItem"


const Cards = (props) => {
  const { activeButton } = props

  return (
    <div className="cards-list">
      {languages.map(language => {
        const btnId = `btn-${language.id}`
        const cardId = `card-${language.id}`

        return activeButton === btnId ? (
          <CardItem
            language={language}
            key={cardId}
            isActive={activeButton}
          />
        ) : null
      })}
    </div>
  )
}

export default Cards
