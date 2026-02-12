<div className="grid md:grid-cols-3 gap-6 mt-10">
  {demoProducts.map((product) => (
    <div
      key={product.id}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 mt-2">₹{product.price}</p>

        <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  ))}
</div>
