import "./globals.css";

export default function Home() {
  const products = [
    {
      name: "Wireless Earbuds",
      price: "₹1499",
      image:
        "https://images.unsplash.com/photo-1606220838315-056192d5e927?q=80&w=800",
    },
    {
      name: "Urban Sneakers",
      price: "₹2499",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800",
    },
    {
      name: "Premium Hoodie",
      price: "₹1999",
      image:
        "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800",
    },
  ];

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover the Finest Trends</h1>
          <p>India's next generation ecommerce platform</p>
          <button>Shop Now</button>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="products">
        <h2>Featured Products</h2>

        <div className="product-grid">
          {products.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
  }
