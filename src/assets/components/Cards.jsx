import languages from "../../data/languages"
import CardItem from "./CardItem"


const Cards = (props) => {
  const { activeButton } = props

  return (
    <div className="cards-list">
      {languages.map(language => {
        return activeButton === `btn-${language.id}` ? (
          <CardItem
            language={language}
            key={`card-${language.id}`}
            isActive={activeButton}
          />
        ) : null
      })}
    </div>
  )
}

export default Cards
