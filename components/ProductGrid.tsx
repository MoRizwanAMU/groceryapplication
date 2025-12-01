"use client";

import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";

// ✅ Type definition for Firestore product
interface Product {
  id: string;
  name?: string;
  price?: number;
  image?: string;
  category?: string;
}

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch data from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snap = await getDocs(collection(db, "products"));
        const items: Product[] = snap.docs.map((doc) => ({
          ...(doc.data() as Product),
          id: doc.id,
        }));
        setProducts(items);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // ✅ UI Render
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">Popular Products</h2>

      {/* 🔄 Show skeleton loader while fetching */}
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-pulse">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="border rounded-lg shadow-md p-4 bg-gray-100 h-64"
              >
                <div className="w-full h-40 bg-gray-300 rounded-md mb-3"></div>
                <div className="h-4 bg-gray-300 w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 w-1/2 mb-4"></div>
                <div className="h-8 bg-gray-300 w-full rounded"></div>
              </div>
            ))}
        </div>
      ) : (
        // ✅ Product grid display
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg shadow-md p-4 hover:shadow-xl transition bg-white"
            >
              {/* ✅ Safe image rendering with fallback */}
              <Image
                src={
                  item.image && item.image.startsWith("http")
                    ? item.image
                    : "https://images.pexels.com/photos/4198021/pexels-photo-4198021.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                alt={item.name || "product"}
                width={400}
                height={300}
                className="w-full h-40 object-cover rounded-md"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.src =
                    "https://images.pexels.com/photos/4198021/pexels-photo-4198021.jpeg?auto=compress&cs=tinysrgb&w=600";
                }}
              />

              {/* ✅ Product Info */}
              <h3 className="mt-3 text-lg font-semibold capitalize">
                {item.name}
              </h3>
              <p className="text-green-700 font-bold mt-1">
                ₹{item.price?.toLocaleString()}
              </p>
              <button className="mt-2 bg-blue-700 text-white px-4 py-1 rounded hover:bg-blue-800 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
