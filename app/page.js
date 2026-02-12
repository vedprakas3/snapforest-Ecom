* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

.hero {
  height: 80vh;
  background: linear-gradient(to right, #000000, #2c2c2c);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}

.hero h1 {
  font-size: 32px;
  margin-bottom: 10px;
}

.hero p {
  margin-bottom: 20px;
  color: #ccc;
}

.hero button {
  background: #ff4d4d;
  border: none;
  padding: 10px 20px;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.products {
  padding: 50px 20px;
  background: #f5f5f5;
}

.products h2 {
  text-align: center;
  margin-bottom: 30px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  background: white;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
}

.card h3 {
  margin: 15px 0 5px;
}

.card button {
  margin-top: 10px;
  padding: 8px 15px;
  background: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
    }
