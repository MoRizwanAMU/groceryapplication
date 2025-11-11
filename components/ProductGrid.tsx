"use client";
import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

// ✅ Define the Product type
interface Product {
  id: string;
  name?: string;
  price?: number;
  image?: string;
  category?: string;
}

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]); // ✅ fixed type

  useEffect(() => {
    const fetchProducts = async () => {
      const snap = await getDocs(collection(db, "products"));
      const items: Product[] = snap.docs.map((doc) => ({
        ...(doc.data() as Product),
        id: doc.id,
      }));
      setProducts(items);
    };
    fetchProducts();
  }, []);

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">Popular Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow-md p-4 hover:shadow-xl transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-3 text-lg font-semibold">{item.name}</h3>
            <p className="text-green-700 font-bold mt-1">₹{item.price}</p>
            <button className="mt-2 bg-blue-700 text-white px-4 py-1 rounded hover:bg-blue-800">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
