import languages from "../../data/languages"

const Buttons = () => {

  return (
    <>
      {languages.map(item => (
        <button className="btn">{item.title}</button>
      ))}
    </>
  )
}

export default Buttons
