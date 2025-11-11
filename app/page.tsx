// "use client";

// import { useEffect, useState } from "react";
// import { db } from "../firebaseConfig";
// import {
//   collection,
//   getDocs,
//   QueryDocumentSnapshot,
//   DocumentData,
// } from "firebase/firestore";

// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
//   category: string;
// }

// export default function Home() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "products"));
//         const productList: Product[] = querySnapshot.docs.map(
//           (doc: QueryDocumentSnapshot<DocumentData>) => ({
//             ...(doc.data() as Product),
//             id: doc.id,
//           })
//         );
//         setProducts(productList);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <main className="p-8">
//       <h1 className="text-3xl font-bold text-green-600 mb-6">
//         🛒 MyGrocery Store
//       </h1>

//       {loading ? (
//         <p className="text-gray-500">Loading products...</p>
//       ) : products.length === 0 ? (
//         <p className="text-gray-500">No products found.</p>
//       ) : (
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {products.map((item) => (
//             <div
//               key={item.id}
//               className="border rounded-lg shadow-md p-4 hover:shadow-xl transition"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-40 object-cover rounded-md"
//               />
//               <h3 className="mt-3 text-lg font-semibold">{item.name}</h3>
//               <p className="text-green-700 font-bold mt-1">₹{item.price}</p>
//               <p className="text-gray-500 text-sm mt-1">{item.category}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </main>
//   );
// }


























import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import CategoryGrid from "../components/CategoryGrid";
import ProductGrid from "../components/ProductGrid";

export default function Home() {
  return (    <main className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">
        <Banner />
        <CategoryGrid />
        <ProductGrid />
      </div>
    </main>
  );
}

