"use client";

export default function CategoryGrid() {
  const categories = [
    { name: "Pantry", image: "/pantry.jpeg" },
    { name: "Meat & seafood", image: "/meat.jpeg" },
    { name: "Frozen", image: "/frozen.jpeg" },
    { name: "Produce", image: "/produce.jpeg" },
    { name: "Snacks", image: "/snacks.jpeg" },
    { name: "Beverages", image: "/beverages.jpeg" },
    { name: "Dairy", image: "/dairy.jpeg" },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center md:text-left">
          Shop by Category
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-white flex flex-col items-center justify-center p-5 rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-32 h-32 sm:w-36 sm:h-36 object-cover rounded-lg mb-3"
              />
              <p className="text-base font-semibold text-gray-800 text-center">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
