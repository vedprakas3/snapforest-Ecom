export default function ProductCard({ title, price }) {
  return (
    <div className="card">
      <div className="image-placeholder"></div>
      <h3>{title}</h3>
      <p>₹{price}</p>
      <button>Add to Cart</button>
    </div>
  )
}
