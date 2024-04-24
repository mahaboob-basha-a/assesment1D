import './index.css'

const Card = prop => {
  const {id, name, image_url} = prop
  return (
    <div className="card">
      <img src={image_url} alt={name} />
      <p>{name}</p>
    </div>
  )
}
export default Card
