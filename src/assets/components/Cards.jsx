import languages from "../../data/languages"
import CardItem from "./CardItem"
import { useState } from "react"

const Cards = () => {
  return (
    <div className="cards-list">
      {languages.map(language => (
        <CardItem language={language} key={`card-${language.id}`} />
      ))}
    </div>
  )
}

export default Cards
