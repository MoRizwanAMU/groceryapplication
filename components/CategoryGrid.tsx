const categories = [
  { name: "Pantry", image: "pantry.jpeg" },
  { name: "Snacks", image: "snacks.jpeg" },
  { name: "Produce", image: "produce.jpeg" },
  { name: "Beverages", image: "beverages.jpeg" },
  { name: "Frozen", image: "frozen.jpeg" },
];

export default function CategoryGrid() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow hover:shadow-lg cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="h-20 w-20 object-cover rounded-full"
            />
            <p className="mt-2 font-semibold">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
