import React from "react";

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
    <main style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center" }}>Featured Products</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        marginTop: "30px"
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
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />

            <div style={{ padding: "15px" }}>
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <button
                style={{
                  marginTop: "10px",
                  padding: "8px 16px",
                  background: "black",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
