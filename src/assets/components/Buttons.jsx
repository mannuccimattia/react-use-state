import languages from "../../data/languages"
import ButtonItem from "./ButtonItem"


const Buttons = (props) => {
  const { activeButton, setActiveButton } = props

  return (
    <>
      <div className="btn-wrapper">
        {languages.map(language => {
          const btnId = `btn-${language.id}`

          return (
            <ButtonItem
              language={language}
              key={btnId}
              isActive={activeButton === btnId}
              onToggle={() => setActiveButton(activeButton === btnId ? null : btnId)}
            />
          )
        })}
      </div>
    </>
  )
}

export default Buttons
