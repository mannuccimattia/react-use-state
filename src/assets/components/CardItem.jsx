
const CardItem = (props) => {
  const { language } = props
  return (
    <div className="card">
      <h2>{language.title}</h2>
      <p>{language.description}</p>
    </div>
  )
}

export default CardItem
