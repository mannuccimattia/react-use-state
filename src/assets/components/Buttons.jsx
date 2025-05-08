import languages from "../../data/languages"
import { useState } from "react"
import ButtonItem from "./ButtonItem"

const Buttons = () => {

  return (
    <>
      <div className="btn-wrapper">

        {languages.map(language => (
          <ButtonItem language={language} key={`btn-${language.id}`} />
        ))}
      </div>
    </>
  )
}

export default Buttons
