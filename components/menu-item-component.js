export default function MenuItem({ item }) {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Price: ${item.price.toFixed(2)}</p>
    </div>
  )
}
