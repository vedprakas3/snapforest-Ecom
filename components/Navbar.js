export default function Navbar() {
  return (
    <nav style={navStyle}>
      <div style={logo}>🔥 Snapforest</div>
      <div style={menu}>
        <span>Shop</span>
        <span>Categories</span>
        <span>Cart</span>
        <span>Login</span>
      </div>
    </nav>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 40px",
  background: "white",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
};

const logo = {
  fontWeight: "bold",
  fontSize: "20px",
};

const menu = {
  display: "flex",
  gap: "20px",
};
