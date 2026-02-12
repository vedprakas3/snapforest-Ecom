export default function Home() {

  const demoProducts = [
    {
      id: 1,
      name: "Wireless Earbuds",
      price: 1499,
      image: "https://images.unsplash.com/photo-1585386959984-a41552262b8c"
    },
    {
      id: 2,
      name: "Urban Sneakers",
      price: 2499,
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    {
      id: 3,
      name: "Premium Hoodie",
      price: 1999,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
    }
  ];

  return (
    <main>

      {/* HERO SECTION */}
      <section style={{
        height: "80vh",
        background: "linear-gradient(to right, #000000, #434343)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "42px", marginBottom: "15px" }}>
          Discover the Finest Trends
        </h1>
        <p style={{ marginBottom: "20px" }}>
          India's next generation ecommerce platform
        </p>
        <button style={{
          padding: "10px 25px",
          background: "#ff4d4d",
          border: "none",
          color: "white",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Shop Now
        </button>
      </section>


      {/* PRODUCTS SECTION */}
      <section style={{ padding: "60px 40px", background: "#f5f5f5" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Featured Products
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px"
        }}>
          {demoProducts.map((product) => (
            <div
              key={product.id}
              style={{
                background: "white",
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                overflow: "hidden"
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover"
                }}
              />

              <div style={{ padding: "20px" }}>
                <h3>{product.name}</h3>
                <p style={{ margin: "10px 0" }}>₹{product.price}</p>

                <button style={{
                  padding: "8px 18px",
                  background: "black",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
