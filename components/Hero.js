export default function Hero() {
  return (
    <section style={hero}>
      <h1>Discover Premium Fashion</h1>
      <p>Upgrade your style with Snapforest</p>
      <button style={btn}>Shop Now</button>
    </section>
  );
}

const hero = {
  textAlign: "center",
  padding: "80px 20px",
  background: "linear-gradient(to right, #111, #333)",
  color: "white",
};

const btn = {
  marginTop: "20px",
  padding: "12px 25px",
  background: "white",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
};
