import languages from "../../data/languages"

const Buttons = () => {
  return (
    <>
      {languages.map(item => (
        <button className="btn" key={`btn-${item.id}`}>{item.title}</button>
      ))}
    </>
  )
}

export default Buttons
