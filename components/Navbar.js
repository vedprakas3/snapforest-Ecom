export default function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px 40px",
      background: "white",
      boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
    }}>
      <h2>🔥 Snapforest</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <span>Home</span>
        <span>Shop</span>
        <span>Cart</span>
      </div>
    </div>
  );
}
