export default function Home() {
  const products = [
    {
      id: 1,
      name: "Wireless Earbuds",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Urban Sneakers",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Premium Hoodie",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{
          height: "80vh",
          background:
            "linear-gradient(to right, black, #2e2e2e)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          Discover the Finest Trends
        </h1>
        <p style={{ opacity: 0.8 }}>
          India’s next generation ecommerce platform
        </p>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "#ff4d4d",
            border: "none",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Shop Now
        </button>
      </section>

      {/* FEATURED PRODUCTS */}
      <section style={{ padding: "60px 40px", background: "#f5f5f5" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Featured Products
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                background: "white",
                borderRadius: "10px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                overflow: "hidden",
                textAlign: "center",
                paddingBottom: "20px",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />

              <h3 style={{ marginTop: "15px" }}>{product.name}</h3>
              <p>₹{product.price}</p>

              <button
                style={{
                  padding: "8px 16px",
                  background: "black",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
                }
