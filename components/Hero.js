export default function Hero() {
  return (
    <div style={{
      padding: "80px 20px",
      textAlign: "center",
      background: "linear-gradient(to right, #111, #333)",
      color: "white"
    }}>
      <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
        Discover Premium Trends
      </h1>

      <p style={{ opacity: 0.8 }}>
        India’s next generation ecommerce platform
      </p>

      <button style={{
        marginTop: "30px",
        padding: "12px 25px",
        background: "#ff4d4d",
        border: "none",
        color: "white",
        borderRadius: "6px",
        cursor: "pointer"
      }}>
        Shop Now
      </button>
    </div>
  );
}
