import languages from "../../data/languages"

const Cards = () => {
  return (
    <div className="card">
      {languages.map(item => (
        <>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </>
      ))}
    </div>
  )
}

export default Cards
