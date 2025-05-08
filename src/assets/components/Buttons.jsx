import languages from "../../data/languages"
import ButtonItem from "./ButtonItem"


const Buttons = (props) => {
  const { activeButton, setActiveButton } = props
  return (
    <>
      <div className="btn-wrapper">
        {languages.map(language => (
          <ButtonItem
            language={language}
            key={`btn-${language.id}`}
            isActive={activeButton === `btn-${language.id}`}
            onToggle={() => setActiveButton(activeButton === `btn-${language.id}` ? null : `btn-${language.id}`)}
          />
        ))}
      </div>
    </>
  )
}

export default Buttons
