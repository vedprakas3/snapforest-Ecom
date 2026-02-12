import Hero from "../components/Hero"
import ProductCard from "../components/ProductCard"

export default function Home() {
  return (
    <>
      <Hero />
      <section className="products">
        <h2>Featured Products</h2>
        <div className="grid">
          <ProductCard title="Wireless Earbuds" price="1499" />
          <ProductCard title="Urban Sneakers" price="2499" />
          <ProductCard title="Premium Hoodie" price="1999" />
        </div>
      </section>
    </>
  )
}
