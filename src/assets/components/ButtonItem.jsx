const ButtonItem = (props) => {
  const { language, isActive, onToggle } = props
  return (
    <button
      className={`btn${isActive ? " active" : ""}`}
      onClick={onToggle}
    >
      {language.title}
    </button>
  )
}

export default ButtonItem
